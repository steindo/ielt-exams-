"use client";

import { useState } from "react";
import { PenTool, Send, Info, CheckCircle2, AlertCircle } from "lucide-react";
import Card from "@/components/Card";
import { cn } from "@/lib/utils";

interface FeedbackCriteria {
    score: number;
    max: number;
    comment: string;
}

interface WritingFeedback {
    overallBand: number;
    criteria: {
        taskResponse: FeedbackCriteria;
        coherence: FeedbackCriteria;
        lexicalResource: FeedbackCriteria;
        grammar: FeedbackCriteria;
    };
    suggestions: string[];
}

export default function WritingModule() {
    const [essay, setEssay] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [feedback, setFeedback] = useState<WritingFeedback | null>(null);

    const wordCount = essay.trim() === "" ? 0 : essay.trim().split(/\s+/).length;

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
            setFeedback({
                overallBand: 7.0,
                criteria: {
                    taskResponse: { score: 7.5, max: 9, comment: "Excellent address of all parts of the prompt." },
                    coherence: { score: 6.5, max: 9, comment: "Good progression but some paragraph transitions could be smoother." },
                    lexicalResource: { score: 7.0, max: 9, comment: "Accurate use of academic vocabulary with minor colocation errors." },
                    grammar: { score: 7.0, max: 9, comment: "Wide range of structures used accurately." }
                },
                suggestions: [
                    "Use more varied transition words (e.g., 'Furthermore', 'Conversely').",
                    "Ensure each paragraph has a clear topic sentence.",
                    "Check the use of definite articles in the third paragraph."
                ]
            });
            setIsAnalyzing(false);
        }, 3000);
    };

    return (
        <div className="container mx-auto px-4 py-12 text-foreground">
            <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-700 px-8 py-10 text-white shadow-xl">
                <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tight">
                    <PenTool className="h-8 w-8" /> Writing Task 2: Academic Essay
                </h1>
                <p className="mt-4 text-lg opacity-90">
                    Professional AI evaluation based on official IELTS/TOEFL criteria.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <Card title="Writing Prompt" className="border-l-4 border-l-accent">
                        <p className="text-lg font-medium leading-relaxed italic">
                            "Some people believe that technology has made our lives more complex rather than simpler. To what extent do you agree or disagree with this statement?"
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><Info className="h-4 w-4" /> 250 words minimum</span>
                            <span className="flex items-center gap-1"><Info className="h-4 w-4" /> 40 minutes suggested</span>
                        </div>
                    </Card>

                    <div className="relative group">
                        <textarea
                            className="min-h-[400px] w-full rounded-2xl border border-border bg-card p-6 text-lg shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                            placeholder="Start writing your essay here..."
                            value={essay}
                            onChange={(e) => setEssay(e.target.value)}
                            disabled={isAnalyzing || !!feedback}
                        />
                        <div className="absolute bottom-4 right-4 text-sm font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded">
                            {wordCount} words
                        </div>
                    </div>

                    {!feedback && (
                        <button
                            onClick={handleAnalyze}
                            disabled={wordCount < 50 || isAnalyzing}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:grayscale"
                        >
                            {isAnalyzing ? "AI is analyzing your writing..." : "Submit for AI Evaluation"}
                            {!isAnalyzing && <Send className="h-5 w-5" />}
                        </button>
                    )}
                </div>

                <div>
                    {feedback ? (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <Card className="text-center p-10 bg-primary/5 border-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <h2 className="text-xl font-bold text-muted-foreground">Estimated Overall Band</h2>
                                <div className="mt-4 text-7xl font-black text-primary">
                                    {feedback.overallBand.toFixed(1)}
                                </div>
                                <p className="mt-4 text-sm font-medium text-green-600 bg-green-50 rounded-full py-1 px-4 inline-block">
                                    Strong Candidate
                                </p>
                            </Card>

                            <Card title="Detailed Feedback">
                                <div className="space-y-4">
                                    {Object.entries(feedback.criteria).map(([key, data]) => (
                                        <div key={key}>
                                            <div className="flex justify-between text-sm font-bold mb-1">
                                                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                <span className="text-primary">{data.score} / {data.max}</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ width: `${(data.score / data.max) * 100}%` }}
                                                />
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground">{data.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card title="Suggestions for Improvement" icon={AlertCircle}>
                                <ul className="space-y-3">
                                    {feedback.suggestions.map((s, i) => (
                                        <li key={i} className="flex gap-3 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => { setFeedback(null); setEssay(""); }}
                                    className="mt-8 w-full border border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/5 transition-colors"
                                >
                                    Try Another Prompt
                                </button>
                            </Card>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full min-h-[400px] border-2 border-dashed border-border rounded-2xl text-muted-foreground">
                            <PenTool className="h-12 w-12 mb-4 opacity-20" />
                            <p className="max-w-xs text-center">Submit your essay to receive a detailed band score and personalized suggestions.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
