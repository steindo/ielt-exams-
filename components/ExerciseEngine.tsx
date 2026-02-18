"use client";

import { useState } from "react";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

export type QuestionType = "MCQ" | "GapFill";

export interface Question {
    id: string;
    type: QuestionType;
    question: string;
    options?: string[]; // for MCQ
    correctAnswer: string | number;
    explanation?: string;
}

interface ExerciseEngineProps {
    questions: Question[];
    onComplete: (score: number) => void;
}

export default function ExerciseEngine({ questions, onComplete }: ExerciseEngineProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string | number>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    if (!questions || questions.length === 0) {
        return (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 text-center">
                <p className="text-slate-400 font-medium italic">Exercise content coming soon...</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    const handleSelect = (index: number) => {
        if (isSubmitted) return;
        setAnswers({ ...answers, [currentQuestion.id]: index });
    };

    const handleTextChange = (text: string) => {
        if (isSubmitted) return;
        setAnswers({ ...answers, [currentQuestion.id]: text });
    };

    const checkAnswer = () => {
        let currentScore = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) {
                currentScore++;
            }
        });
        setScore(currentScore);
        setIsSubmitted(true);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setIsSubmitted(false);
        } else {
            onComplete(score);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-muted-foreground">
                    Question {currentIndex + 1} of {questions.length}
                </h3>
                {isSubmitted && (
                    <div className={cn(
                        "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
                        answers[currentQuestion.id] === currentQuestion.correctAnswer
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    )}>
                        {answers[currentQuestion.id] === currentQuestion.correctAnswer ? "Correct" : "Incorrect"}
                    </div>
                )}
            </div>

            <Card className="p-8">
                <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>

                {currentQuestion.type === "MCQ" && (
                    <div className="mt-8 space-y-4">
                        {currentQuestion.options?.map((option, idx) => (
                            <button
                                key={idx}
                                disabled={isSubmitted}
                                onClick={() => handleSelect(idx)}
                                className={cn(
                                    "w-full rounded-xl border p-4 text-left transition-all",
                                    answers[currentQuestion.id] === idx ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border",
                                    isSubmitted && idx === currentQuestion.correctAnswer && "border-green-500 bg-green-50",
                                    isSubmitted && answers[currentQuestion.id] === idx && idx !== currentQuestion.correctAnswer && "border-red-500 bg-red-50"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{option}</span>
                                    {isSubmitted && idx === currentQuestion.correctAnswer && <Check className="h-5 w-5 text-green-500" />}
                                    {isSubmitted && answers[currentQuestion.id] === idx && idx !== currentQuestion.correctAnswer && <X className="h-5 w-5 text-red-500" />}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {currentQuestion.type === "GapFill" && (
                    <div className="mt-8">
                        <input
                            type="text"
                            disabled={isSubmitted}
                            className={cn(
                                "w-full rounded-xl border p-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary",
                                isSubmitted && answers[currentQuestion.id] === currentQuestion.correctAnswer ? "border-green-500 bg-green-50" : "border-border"
                            )}
                            placeholder="Type your answer here..."
                            value={answers[currentQuestion.id] || ""}
                            onChange={(e) => handleTextChange(e.target.value)}
                        />
                    </div>
                )}

                {isSubmitted && currentQuestion.explanation && (
                    <div className="mt-6 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                        <div className="mb-1 flex items-center gap-2 font-bold text-foreground">
                            <HelpCircle className="h-4 w-4" /> Explanation
                        </div>
                        {currentQuestion.explanation}
                    </div>
                )}

                <div className="mt-10 flex justify-end">
                    {!isSubmitted ? (
                        <button
                            disabled={answers[currentQuestion.id] === undefined}
                            onClick={checkAnswer}
                            className="rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-md transition-all hover:bg-primary/90 disabled:opacity-50"
                        >
                            Check Answer
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion}
                            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-md transition-all hover:bg-primary/90"
                        >
                            {currentIndex === questions.length - 1 ? "Finish Exercise" : "Next Question"} <ArrowRight className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </Card>
        </div>
    );
}
