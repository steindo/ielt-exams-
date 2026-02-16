/**
 * Advanced AI Prompt System for IELTS/TOEFL Exercise Generation
 * Based on best practices for educational content creation
 */

export const ADVANCED_EXERCISE_PROMPTS = {
    // System prompt for all exercise generation
    systemPrompt: `You are an expert IELTS and TOEFL test preparation instructor with 15+ years of experience. 
You create high-quality, pedagogically sound exercises that:
- Follow official IELTS/TOEFL format and standards
- Target specific CEFR levels accurately
- Include clear, detailed explanations
- Use authentic, real-world language
- Progress logically in difficulty
- Avoid cultural bias and ambiguity`,

    // Detailed prompts by exercise type
    grammarExercise: (level: string, topic: string, count: number) => `
Create ${count} grammar exercises for CEFR level ${level} on the topic: "${topic}".

REQUIREMENTS:
1. **Format**: Mix of Multiple Choice (60%) and Gap-fill (40%)
2. **Difficulty**: Progressive - start easier, end harder
3. **Context**: Use realistic scenarios (work, travel, daily life, academic)
4. **Distractors**: For MCQ, make wrong answers plausible but clearly incorrect
5. **Explanations**: Include WHY the answer is correct AND why others are wrong

QUALITY STANDARDS:
- Natural, authentic English
- No ambiguous questions
- Clear, concise explanations
- Varied sentence structures
- Relevant vocabulary for the level

Return JSON array with this exact structure:
[
  {
    "id": "${level.toLowerCase()}-${topic.toLowerCase().replace(/\s+/g, '-')}-1",
    "type": "MCQ" | "GapFill",
    "question": "Complete sentence or question",
    "options": ["option1", "option2", "option3", "option4"], // MCQ only
    "correctAnswer": 0 | "text",
    "explanation": "Detailed explanation with grammar rule",
    "difficulty": "easy" | "medium" | "hard",
    "tags": ["grammar-point", "topic"]
  }
]`,

    readingExercise: (level: string, count: number) => `
Create ${count} reading comprehension exercises for CEFR level ${level}.

STRUCTURE:
1. One authentic passage (150-300 words for A1-A2, 300-500 for B1-B2)
2. ${count} questions based on the passage

PASSAGE REQUIREMENTS:
- Topic: Current events, science, culture, or everyday situations
- Appropriate vocabulary for ${level}
- Natural, engaging writing style
- Include context clues for vocabulary

QUESTION TYPES (mix these):
- Main idea / purpose
- Detail / specific information
- Inference / implication
- Vocabulary in context
- Author's tone / attitude (B1+)

Return JSON:
{
  "passage": {
    "title": "Engaging title",
    "text": "Full passage text",
    "wordCount": number,
    "level": "${level}",
    "topic": "topic category"
  },
  "questions": [
    {
      "id": "reading-${level.toLowerCase()}-1",
      "type": "MCQ",
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Why this answer, with reference to passage",
      "skill": "main-idea" | "detail" | "inference" | "vocabulary"
    }
  ]
}`,

    listeningExercise: (level: string, count: number) => `
Create ${count} listening comprehension exercises for CEFR level ${level}.

AUDIO SCRIPT REQUIREMENTS:
- Dialogue or monologue (100-200 words)
- Natural conversational English
- Appropriate speed markers for ${level}
- Clear context and speakers

SCENARIOS (choose appropriate):
- Phone conversations
- Announcements (airport, train, public)
- Academic lectures (B1+)
- Casual conversations
- News reports (B2)

QUESTION TYPES:
- Specific information (numbers, names, places)
- Main purpose / topic
- Speaker's opinion / feeling
- Detail comprehension
- Inference from tone

Return JSON:
{
  "audioScript": {
    "title": "Scenario title",
    "speakers": ["Speaker 1", "Speaker 2"],
    "transcript": "Full dialogue with speaker labels",
    "duration": "estimated seconds",
    "level": "${level}"
  },
  "questions": [
    {
      "id": "listening-${level.toLowerCase()}-1",
      "type": "MCQ" | "GapFill",
      "question": "What does the speaker say about...?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0 | "text",
      "explanation": "Reference to specific part of audio",
      "timestamp": "0:45" // when answer appears
    }
  ]
}`,

    writingPrompt: (level: string, taskType: "task1" | "task2") => `
Create a writing task for IELTS/TOEFL ${taskType} at CEFR level ${level}.

${taskType === "task1" ? `
TASK 1 (Academic Writing):
- Graph/Chart description OR Letter writing
- 150 words minimum
- 20 minutes suggested time
` : `
TASK 2 (Essay):
- Opinion/Discussion/Problem-Solution essay
- 250 words minimum
- 40 minutes suggested time
`}

PROMPT REQUIREMENTS:
- Clear, unambiguous question
- Relevant to ${level} vocabulary
- Authentic IELTS/TOEFL style
- Include specific instructions

ASSESSMENT CRITERIA:
- Task Achievement
- Coherence and Cohesion
- Lexical Resource
- Grammatical Range and Accuracy

Return JSON:
{
  "task": {
    "type": "${taskType}",
    "level": "${level}",
    "prompt": "Full writing prompt",
    "instructions": ["instruction 1", "instruction 2"],
    "wordCount": 150 | 250,
    "timeLimit": 20 | 40,
    "visualData": null | "chart/graph description" // for Task 1
  },
  "assessmentCriteria": {
    "taskAchievement": "What to evaluate",
    "coherence": "What to look for",
    "vocabulary": "Expected level",
    "grammar": "Expected structures"
  },
  "sampleAnswer": {
    "text": "Band 7-8 sample response",
    "bandScore": 7.5,
    "feedback": "Why this scores well"
  }
}`,

    speakingPrompt: (level: string, part: 1 | 2 | 3) => `
Create IELTS Speaking Part ${part} questions for CEFR level ${level}.

${part === 1 ? `
PART 1 (Introduction & Interview):
- 4-5 minutes
- Familiar topics (home, family, work, hobbies)
- 3-4 questions per topic
- 2-3 topics total
` : part === 2 ? `
PART 2 (Individual Long Turn):
- 3-4 minutes (1 min prep, 2 min talk)
- Cue card with topic and prompts
- Personal experience or description
` : `
PART 3 (Two-way Discussion):
- 4-5 minutes
- Abstract discussion related to Part 2
- Opinion, speculation, analysis
- 5-6 questions
`}

QUESTION REQUIREMENTS:
- Natural, conversational style
- Appropriate complexity for ${level}
- Encourage extended responses
- Build on previous answers (Part 3)

Return JSON:
{
  "part": ${part},
  "level": "${level}",
  "duration": "4-5 minutes",
  ${part === 2 ? `
  "cueCard": {
    "topic": "Describe a...",
    "prompts": [
      "What it was",
      "When it happened",
      "Why it was important"
    ],
    "prepTime": "1 minute",
    "talkTime": "2 minutes"
  },
  ` : `
  "questions": [
    {
      "id": "speaking-p${part}-${level.toLowerCase()}-1",
      "question": "Question text",
      "followUp": "Optional follow-up",
      "expectedLength": "2-3 sentences" | "extended response",
      "assessmentFocus": "fluency" | "vocabulary" | "grammar" | "pronunciation"
    }
  ],
  `}
  "assessmentCriteria": {
    "fluency": "What to evaluate",
    "vocabulary": "Expected range",
    "grammar": "Expected accuracy",
    "pronunciation": "Expected clarity"
  }
}`
};

// Validation rules for generated exercises
export const EXERCISE_VALIDATION = {
    minQuestionLength: 10,
    maxQuestionLength: 200,
    requiredFields: ["id", "type", "question", "correctAnswer", "explanation"],
    mcqRequiredFields: ["options"],
    minOptions: 4,
    maxOptions: 4,
    explanationMinLength: 20
};
