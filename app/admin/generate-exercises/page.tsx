"use client";

import { useState } from "react";
import { Sparkles, Loader2, CheckCircle, XCircle } from "lucide-react";
import Card from "@/components/Card";
import { EXERCISE_GENERATOR_CONFIG } from "@/lib/exercise-generator-config";

export default function ExerciseGeneratorAdmin() {
    const [selectedLevel, setSelectedLevel] = useState<string>("A1");
    const [selectedTopic, setSelectedTopic] = useState<string>("");
    const [count, setCount] = useState<number>(10);
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string>("");

    const handleGenerate = async () => {
        if (!selectedTopic) {
            setError("Please select a topic");
            return;
        }

        setIsGenerating(true);
        setError("");
        setResult(null);

        try {
            const response = await fetch("/api/generate-exercises", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    level: selectedLevel,
                    topic: selectedTopic,
                    count
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate exercises");
            }

            setResult(data);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setIsGenerating(false);
        }
    };

    const currentTopics = EXERCISE_GENERATOR_CONFIG.levels[selectedLevel as keyof typeof EXERCISE_GENERATOR_CONFIG.levels]?.topics || [];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-3">
                    <Sparkles className="h-10 w-10 text-primary" />
                    AI Exercise Generator
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Generate unlimited exercises using OpenAI GPT-4
                </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
                <Card title="Generation Settings">
                    <div className="space-y-4">
                        {/* Level Selection */}
                        <div>
                            <label className="block text-sm font-bold mb-2">CEFR Level</label>
                            <select
                                value={selectedLevel}
                                onChange={(e) => {
                                    setSelectedLevel(e.target.value);
                                    setSelectedTopic("");
                                }}
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="A1">A1 - Beginner</option>
                                <option value="A2">A2 - Elementary</option>
                                <option value="B1">B1 - Intermediate</option>
                                <option value="B2">B2 - Upper Intermediate</option>
                            </select>
                        </div>

                        {/* Topic Selection */}
                        <div>
                            <label className="block text-sm font-bold mb-2">Topic</label>
                            <select
                                value={selectedTopic}
                                onChange={(e) => setSelectedTopic(e.target.value)}
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select a topic...</option>
                                {currentTopics.map((topic) => (
                                    <option key={topic} value={topic}>
                                        {topic}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Count Selection */}
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Number of Exercises (1-50)
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                value={count}
                                onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                                className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !selectedTopic}
                            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="h-5 w-5" />
                                    Generate Exercises
                                </>
                            )}
                        </button>
                    </div>
                </Card>

                {/* Error Display */}
                {error && (
                    <Card className="border-red-500/20 bg-red-50">
                        <div className="flex items-center gap-3 text-red-700">
                            <XCircle className="h-6 w-6" />
                            <div>
                                <p className="font-bold">Error</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        </div>
                    </Card>
                )}

                {/* Success Display */}
                {result && (
                    <Card className="border-green-500/20 bg-green-50">
                        <div className="flex items-center gap-3 text-green-700 mb-4">
                            <CheckCircle className="h-6 w-6" />
                            <div>
                                <p className="font-bold">Successfully Generated!</p>
                                <p className="text-sm">
                                    {result.count} exercises for {result.level} - {result.topic}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 rounded-lg bg-white p-4 max-h-96 overflow-y-auto">
                            <pre className="text-xs">
                                {JSON.stringify(result.exercises, null, 2)}
                            </pre>
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Copy this JSON and add it to your exercises database file.
                        </p>
                    </Card>
                )}

                {/* Instructions */}
                <Card title="Setup Instructions" className="bg-muted/50">
                    <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Get your OpenAI API key from <a href="https://platform.openai.com/api-keys" target="_blank" className="text-primary underline">platform.openai.com</a></li>
                        <li>2. Create a file named <code className="bg-background px-2 py-1 rounded">.env.local</code> in your project root</li>
                        <li>3. Add: <code className="bg-background px-2 py-1 rounded">OPENAI_API_KEY=your_key_here</code></li>
                        <li>4. Restart your development server</li>
                        <li>5. Generate exercises and copy the JSON to your database</li>
                    </ol>
                </Card>
            </div>
        </div>
    );
}
