import { NextRequest, NextResponse } from "next/server";
import { Question } from "@/components/ExerciseEngine";

export async function POST(request: NextRequest) {
    try {
        const { level, topic, count = 10 } = await request.json();

        // Validate inputs
        if (!level || !topic) {
            return NextResponse.json(
                { error: "Level and topic are required" },
                { status: 400 }
            );
        }

        // Get OpenAI API key from environment
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your .env.local file" },
                { status: 500 }
            );
        }

        // Call OpenAI API
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Cost-effective model
                messages: [
                    {
                        role: "system",
                        content: "You are an expert English language teacher creating high-quality grammar exercises for students. Always respond with valid JSON only."
                    },
                    {
                        role: "user",
                        content: `Generate ${count} English grammar exercises for CEFR level ${level} focusing on "${topic}".

Requirements:
1. Each exercise must be either Multiple Choice (MCQ) or Gap-fill type
2. MCQ exercises must have exactly 4 options with one correct answer
3. Each exercise must include a clear explanation
4. Exercises should be varied and progressively challenging
5. Use realistic, practical examples

Return ONLY a JSON array in this exact format (no markdown, no code blocks):
[
  {
    "id": "${level.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}-1",
    "type": "MCQ",
    "question": "The question text",
    "options": ["option1", "option2", "option3", "option4"],
    "correctAnswer": 0,
    "explanation": "Detailed explanation"
  }
]

Generate exactly ${count} exercises.`
                    }
                ],
                temperature: 0.8,
                max_tokens: 4000
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json(
                { error: `OpenAI API error: ${error.error?.message || 'Unknown error'}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content;

        if (!content) {
            return NextResponse.json(
                { error: "No content received from OpenAI" },
                { status: 500 }
            );
        }

        // Parse the JSON response
        let exercises: Question[];
        try {
            // Remove markdown code blocks if present
            const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
            exercises = JSON.parse(cleanContent);
        } catch (parseError) {
            console.error("Failed to parse OpenAI response:", content);
            return NextResponse.json(
                { error: "Failed to parse exercises from AI response" },
                { status: 500 }
            );
        }

        // Validate the exercises
        if (!Array.isArray(exercises) || exercises.length === 0) {
            return NextResponse.json(
                { error: "Invalid exercises format received" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            exercises,
            count: exercises.length,
            level,
            topic
        });

    } catch (error) {
        console.error("Error generating exercises:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
