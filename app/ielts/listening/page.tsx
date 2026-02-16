"use client";

import { useState } from "react";
import { Headphones, Play, Pause, RotateCcw, Volume2, CheckCircle } from "lucide-react";
import Card from "@/components/Card";
import ExerciseEngine, { Question } from "@/components/ExerciseEngine";
import { cn } from "@/lib/utils";

const listeningQuestions: Question[] = [
    {
        id: "l1",
        type: "GapFill",
        question: "The speaker mentions that the new library will open in ______.",
        correctAnswer: "September",
        explanation: "Listen carefully at 0:45 when the project timeline is discussed."
    },
    {
        id: "l2",
        type: "MCQ",
        question: "What is the main concern of the students regarding the relocation?",
        options: [
            "Access to online resources",
            "The distance from the main gate",
            "Noise from the construction",
            "Reduced seating capacity"
        ],
        correctAnswer: 3,
        explanation: "The student representative explicitly highlights the capacity issue in the final part of the conversation."
    }
];

export default function ListeningModule() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleComplete = (score: number) => {
        alert(`Listening Exercise Complete! Your score: ${score}/${listeningQuestions.length}`);
        window.location.href = "/dashboard";
    };

    return (
        <div className="container mx-auto px-4 py-12 text-foreground">
            <div className="mb-12">
                <h1 className="flex items-center gap-3 text-4xl font-extrabold tracking-tight">
                    <Headphones className="h-8 w-8 text-primary" /> Listening: Campus Developments
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Listen to the conversation between a student and a university official and answer the questions. You can only listen to the audio once during a real exam.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-1 space-y-6">
                    <Card title="Audio Controls" className="bg-primary/5 border-primary/20">
                        <div className="flex flex-col items-center">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                                <Headphones className="h-10 w-10" />
                            </div>

                            <div className="mb-6 h-1 w-full rounded-full bg-muted">
                                <div
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            <div className="flex items-center gap-6">
                                <button className="rounded-full p-2 text-muted-foreground hover:bg-muted"><RotateCcw className="h-6 w-6" /></button>
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-transform active:scale-95"
                                >
                                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                                </button>
                                <button className="rounded-full p-2 text-muted-foreground hover:bg-muted"><Volume2 className="h-6 w-6" /></button>
                            </div>

                            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                                Audio Progress: 02:45 / 05:00
                            </p>
                        </div>
                    </Card>

                    <Card title="Listening Tips" icon={CheckCircle}>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Scan questions before the audio starts.</li>
                            <li>• Listen for synonyms of the words in the prompt.</li>
                            <li>• Pay attention to speakers correcting themselves.</li>
                        </ul>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    <ExerciseEngine
                        questions={listeningQuestions}
                        onComplete={handleComplete}
                    />
                </div>
            </div>
        </div>
    );
}
