"use client";

import { useState } from "react";
import { Mic, Square, Play, RotateCcw, BarChart3, MessageSquare, Waves, CheckCircle } from "lucide-react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

interface SpeakingAnalysis {
    fluencyScore: number;
    pronunciationScore: number;
    vocabularyScore: number;
    feedback: string[];
}

export default function SpeakingModule() {
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecording, setHasRecording] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysis, setAnalysis] = useState<SpeakingAnalysis | null>(null);

    const startRecording = () => {
        setIsRecording(true);
        setHasRecording(false);
        setAnalysis(null);
    };

    const stopRecording = () => {
        setIsRecording(false);
        setHasRecording(true);
    };

    const analyzeSpeech = () => {
        setIsAnalyzing(true);
        // Simulate Speech-to-Text and AI Analysis
        setTimeout(() => {
            setAnalysis({
                fluencyScore: 7.5,
                pronunciationScore: 8.0,
                vocabularyScore: 7.0,
                feedback: [
                    "Good use of connecting words to link ideas smoothly.",
                    "Natural intonation patterns observed in the long response.",
                    "Try to avoid long pauses before complex sentences.",
                    "Excellent clarity of speech with very occasional mispronunciation of 'th' sounds."
                ]
            });
            setIsAnalyzing(false);
        }, 4000);
    };

    return (
        <div className="container mx-auto px-4 py-12 text-foreground">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Speaking <span className="text-primary">Mastery</span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                    Record your response to real exam prompts and get comprehensive AI feedback.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <Card title="Current Prompt: Cue Card" className="bg-accent/5 border-accent/20">
                        <div className="space-y-4">
                            <p className="text-xl font-bold italic leading-relaxed">
                                &quot;Describe a place you visited that had a significant impact on you.&quot;
                            </p>
                            <div className="pl-6 border-l-2 border-accent text-muted-foreground space-y-2">
                                <p>You should say:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Where the place was</li>
                                    <li>When you went there</li>
                                    <li>What you did there</li>
                                    <li>And explain why it had such an impact on you.</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    <div className="flex flex-col items-center justify-center rounded-3xl border-4 border-dashed border-border p-12 bg-card/50">
                        {isRecording ? (
                            <div className="flex flex-col items-center animate-pulse">
                                <div className="relative mb-8">
                                    <div className="absolute -inset-4 rounded-full bg-red-500/20 blur-xl animate-ping" />
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-white">
                                        <Waves className="h-10 w-10" />
                                    </div>
                                </div>
                                <p className="text-lg font-bold text-red-500">Recording... 01:24</p>
                                <button
                                    onClick={stopRecording}
                                    className="mt-8 flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-bold text-background hover:scale-105 transition-transform"
                                >
                                    <Square className="h-5 w-5 fill-current" /> Stop Recording
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                    <Mic className="h-10 w-10" />
                                </div>
                                <p className="text-lg font-medium text-muted-foreground mb-8">Click start when you are ready to speak.</p>

                                {!hasRecording ? (
                                    <button
                                        onClick={startRecording}
                                        className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
                                    >
                                        <Mic className="h-5 w-5" /> Start Recording
                                    </button>
                                ) : (
                                    <button
                                        onClick={analyzeSpeech}
                                        disabled={isAnalyzing}
                                        className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-background shadow-lg hover:bg-accent/90 transition-all hover:scale-105 disabled:opacity-50"
                                    >
                                        {isAnalyzing ? "Analyzing..." : "Analyze Recording"} <BarChart3 className="h-5 w-5" />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    {analysis ? (
                        <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: "Fluency", score: analysis.fluencyScore, icon: MessageSquare },
                                    { label: "Pronunciation", score: analysis.pronunciationScore, icon: Waves },
                                    { label: "Vocab", score: analysis.vocabularyScore, icon: BarChart3 }
                                ].map((stat) => (
                                    <Card key={stat.label} className="text-center p-4 border-primary/10">
                                        <span className="block text-xs font-bold uppercase tracking-tighter text-muted-foreground">{stat.label}</span>
                                        <span className="mt-2 block text-3xl font-black text-primary">{stat.score.toFixed(1)}</span>
                                    </Card>
                                ))}
                            </div>

                            <Card title="Expert Feedback" className="shadow-lg">
                                <ul className="space-y-4">
                                    {analysis.feedback.map((f, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <CheckCircle className="h-4 w-4" />
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">{f}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex gap-4">
                                    <button className="flex-1 rounded-lg border border-primary py-3 font-bold text-primary hover:bg-primary/5">Listen back</button>
                                    <button className="flex-1 rounded-lg bg-primary py-3 font-bold text-white shadow-md">Practice Again</button>
                                </div>
                            </Card>
                        </div>
                    ) : (
                        <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dotted border-border text-muted-foreground">
                            <BarChart3 className="h-12 w-12 mb-4 opacity-20" />
                            <p className="max-w-xs text-center">Complete a recording to see your fluency and pronunciation analysis.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
