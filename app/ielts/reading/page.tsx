"use client";

import ExerciseEngine, { Question } from "@/components/ExerciseEngine";

const readingQuestions: Question[] = [
    {
        id: "r1",
        type: "MCQ",
        question: "According to the passage, what is the primary reason for the decline in bird populations?",
        options: [
            "Climate change",
            "Habitat loss and fragmentation",
            "Increased predation",
            "Lack of food sources"
        ],
        correctAnswer: 1,
        explanation: "The second paragraph explicitly states that habitat loss due to urban expansion is the leading cause."
    },
    {
        id: "r2",
        type: "GapFill",
        question: "The study concludes that urban expansion is responsible for ______ percent of the observed decline.",
        correctAnswer: "45",
        explanation: "Reference the statistical table on page 4 of the original report."
    }
];

export default function ReadingModule() {
    const handleComplete = (score: number) => {
        alert(`Exercise Complete! Your score: ${score}/${readingQuestions.length}`);
        window.location.href = "/dashboard";
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 max-w-3xl">
                <h1 className="text-4xl font-extrabold tracking-tight">Reading: Environmental Impact</h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Read the following passage about the impact of urbanization on local ecosystems and answer the questions below.
                    Pay close attention to statistical data and causal relationships mentioned in the text.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-10 shadow-sm overflow-y-auto max-h-[70vh]">
                    <h2 className="mb-6 text-xl font-bold border-b pb-4">Ecosystems in Flux</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Urbanization represents one of the most significant threats to biodiversity worldwide. As cities expand, natural habitats are often replaced by concrete jungles, leading to what ecologists call "habitat fragmentation."
                        </p>
                        <p>
                            A recent comprehensive study published in the Journal of Environmental Ecology analyzed data from over fifty thousand locations across North America. The findings were stark: urban expansion is responsible for 45 percent of the observed decline in avian populations over the last two decades.
                        </p>
                        <p>
                            While climate change remains a significant factor, the immediate physical removal of nesting grounds and food sources in urban corridors creates a more abrupt and devastating impact for many migratory species.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="prose prose-slate max-w-none">
                        <p className="mb-4 text-lg leading-relaxed text-slate-700">
                            The concept of &quot;emotional intelligence&quot; has gained significant traction in recent years...
                        </p>
                    </div>
                    <ExerciseEngine
                        questions={readingQuestions}
                        onComplete={handleComplete}
                    />
                </div>
            </div>
        </div>
    );
}
