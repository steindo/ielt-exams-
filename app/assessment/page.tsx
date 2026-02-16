"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap } from "lucide-react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

const questions = [
    {
        id: 1,
        question: "Which of the following sentences is grammatically correct?",
        options: [
            "He have went to the store.",
            "She has been living here for five years.",
            "They was watching a movie when I called.",
            "I am not knowing where he is."
        ],
        answer: 1
    },
    {
        id: 2,
        question: "Select the most appropriate word: The results of the study were ______, surprising even the researchers.",
        options: ["negligible", "unprecedented", "commonplace", "redundant"],
        answer: 1
    }
];

export default function Assessment() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [isFinished, setIsFinished] = useState(false);

    const handleSelect = (questionId: number, optionIndex: number) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
    };

    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="container mx-auto max-w-2xl px-4 py-32 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                <h1 className="mt-6 text-4xl font-bold">Assessment Complete!</h1>
                <p className="mt-4 text-xl text-muted-foreground">
                    Based on your answers, your current estimated level is:
                </p>
                <div className="mt-8 rounded-2xl bg-primary/10 p-12">
                    <GraduationCap className="mx-auto h-12 w-12 text-primary" />
                    <span className="mt-4 block text-5xl font-black text-primary">Upper Intermediate</span>
                    <span className="mt-2 block text-sm font-medium uppercase tracking-widest text-muted-foreground">Equivalent to IELTS 6.5 / TOEFL 90</span>
                </div>
                <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="mt-12 rounded-lg bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    Go to My Dashboard
                </button>
            </div>
        );
    }

    const q = questions[currentStep];

    return (
        <div className="container mx-auto max-w-3xl px-4 py-16">
            <div className="mb-12">
                <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                    <span>Diagnostic Assessment</span>
                    <span>Question {currentStep + 1} of {questions.length}</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted">
                    <div
                        className="h-full rounded-full bg-primary transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <Card className="p-8 shadow-xl">
                <h2 className="text-2xl font-bold leading-tight">{q.question}</h2>
                <div className="mt-8 space-y-4">
                    {q.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSelect(q.id, idx)}
                            className={cn(
                                "w-full rounded-xl border p-4 text-left transition-all hover:bg-muted/50",
                                selectedAnswers[q.id] === idx
                                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                                    : "border-border bg-background"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold",
                                    selectedAnswers[q.id] === idx ? "border-primary bg-primary text-white" : "border-muted-foreground/30 text-muted-foreground"
                                )}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="font-medium">{option}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="mt-12 flex justify-between">
                    <button
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex items-center gap-2 px-4 py-2 font-semibold text-muted-foreground disabled:opacity-0"
                    >
                        <ArrowLeft className="h-4 w-4" /> Previous
                    </button>
                    <button
                        disabled={selectedAnswers[q.id] === undefined}
                        onClick={handleNext}
                        className="rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-md transition-all hover:bg-primary/90 disabled:bg-muted"
                    >
                        {currentStep === questions.length - 1 ? "Finish Assessment" : "Next Question"} <ArrowRight className="ml-2 inline h-4 w-4" />
                    </button>
                </div>
            </Card>
        </div>
    );
}
