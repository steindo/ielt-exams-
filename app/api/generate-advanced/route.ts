import { NextRequest, NextResponse } from "next/server";
import { ADVANCED_EXERCISE_PROMPTS } from "@/lib/advanced-prompts";

export async function POST(request: NextRequest) {
    try {
        const {
            exerciseType = "grammar",
            level,
            topic,
            count = 10,
            taskType,
            part
        } = await request.json();

        if (!level) {
            return NextResponse.json(
                { error: "Level is required" },
                { status: 400 }
            );
        }

        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "OpenAI API key not configured" },
                { status: 500 }
            );
        }

        // Select appropriate prompt based on exercise type
        let userPrompt: string;

        switch (exerciseType) {
            case "grammar":
                if (!topic) {
                    return NextResponse.json(
                        { error: "Topic is required for grammar exercises" },
                        { status: 400 }
                    );
                }
                userPrompt = ADVANCED_EXERCISE_PROMPTS.grammarExercise(level, topic, count);
                break;

            case "reading":
                userPrompt = ADVANCED_EXERCISE_PROMPTS.readingExercise(level, count);
                break;

            case "listening":
                userPrompt = ADVANCED_EXERCISE_PROMPTS.listeningExercise(level, count);
                break;

            case "writing":
                if (!taskType) {
                    return NextResponse.json(
                        { error: "Task type (task1 or task2) is required for writing" },
                        { status: 400 }
                    );
                }
                userPrompt = ADVANCED_EXERCISE_PROMPTS.writingPrompt(level, taskType);
                break;

            case "speaking":
                if (!part) {
                    return NextResponse.json(
                        { error: "Part (1, 2, or 3) is required for speaking" },
                        { status: 400 }
                    );
                }
                userPrompt = ADVANCED_EXERCISE_PROMPTS.speakingPrompt(level, part);
                break;

            default:
                return NextResponse.json(
                    { error: "Invalid exercise type" },
                    { status: 400 }
                );
        }

        // Call OpenAI API with advanced prompts
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o", // Use GPT-4o for better quality
                messages: [
                    {
                        role: "system",
                        content: ADVANCED_EXERCISE_PROMPTS.systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                temperature: 0.7, // Balanced creativity
                max_tokens: 6000,
                response_format: { type: "json_object" } // Ensure JSON response
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
        let result;
        try {
            result = JSON.parse(content);
        } catch (parseError) {
            console.error("Failed to parse OpenAI response:", content);
            return NextResponse.json(
                { error: "Failed to parse exercises from AI response" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            exerciseType,
            level,
            data: result,
            generatedAt: new Date().toISOString()
        });

    } catch (error) {
        console.error("Error generating advanced exercises:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
