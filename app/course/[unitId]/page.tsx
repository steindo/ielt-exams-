"use client";

import { useParams, useRouter } from "next/navigation";
import { courseUnits } from "@/data/course_content";
import ExerciseEngine from "@/components/ExerciseEngine";
import { useState } from "react";
import { ArrowLeft, BookOpen, Brain, PenTool, CheckCircle } from "lucide-react";

export default function UnitPage() {
    const params = useParams();
    const router = useRouter();
    const unitId = params.unitId as string;
    const unit = courseUnits.find(u => u.id === unitId);

    const [activeTab, setActiveTab] = useState<'grammar' | 'vocabulary' | 'reading'>('grammar');

    // Define handler for exercise completion
    const handleExerciseComplete = (score: number) => {
        // In a real application, we would save the progress here
        // For now, we just acknowledge completion
        console.log(`Exercise completed with score: ${score}`);
    };

    if (!unit) return <div className="p-10 text-center text-xl">Unit not found</div>;

    const tabs = [
        { id: 'grammar', icon: Brain, label: 'Grammar' },
        { id: 'vocabulary', icon: BookOpen, label: 'Vocabulary' },
        { id: 'reading', icon: PenTool, label: 'Skills Practice' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Header */}
            <div className="bg-slate-900 text-white pb-24 pt-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <Brain className="h-64 w-64 text-white" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <button onClick={() => router.push('/course')} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Course Map
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{unit.title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">{unit.description}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-16 relative z-20">
                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${activeTab === tab.id
                                    ? 'bg-amber-500 text-white scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-white' : 'text-amber-500'}`} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 min-h-[500px]">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded text-sm uppercase tracking-wider">
                            {activeTab} Focus
                        </span>
                        <span className="text-slate-400 font-normal text-base">
                            {activeTab === 'grammar' ? unit.topics.grammar :
                                activeTab === 'vocabulary' ? unit.topics.vocabulary :
                                    unit.topics.skills.join(", ")}
                        </span>
                    </h2>

                    {activeTab === 'grammar' && (
                        <div>
                            {unit.exercises.grammar.length > 0 ? (
                                <ExerciseEngine questions={unit.exercises.grammar} onComplete={handleExerciseComplete} />
                            ) : (
                                <div className="text-slate-400 italic p-10 text-center bg-slate-50 rounded-xl">
                                    Coming soon: Interactive exercises for {unit.topics.grammar}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'vocabulary' && (
                        <div>
                            {unit.exercises.vocabulary.length > 0 ? (
                                <ExerciseEngine questions={unit.exercises.vocabulary} onComplete={handleExerciseComplete} />
                            ) : (
                                <div className="text-slate-400 italic p-10 text-center bg-slate-50 rounded-xl">
                                    Coming soon: Flashcards for {unit.topics.vocabulary}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'reading' && unit.exercises.reading && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="prose prose-slate max-w-none bg-slate-50 p-6 rounded-xl border">
                                <div dangerouslySetInnerHTML={{ __html: unit.exercises.reading.passage.replace(/\n/g, '<br/>') }} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Questions</h3>
                                <ExerciseEngine questions={unit.exercises.reading.questions} onComplete={handleExerciseComplete} />
                            </div>
                        </div>
                    )}
                    {activeTab === 'reading' && !unit.exercises.reading && (
                        <div className="text-slate-400 italic p-10 text-center bg-slate-50 rounded-xl">
                            Coming soon: Reading Practice
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
