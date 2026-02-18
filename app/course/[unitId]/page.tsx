"use client";

import { useParams, useRouter } from "next/navigation";
import { courseUnits } from "@/data/course_content";
import ExerciseEngine from "@/components/ExerciseEngine";
import TextToSpeech from "@/components/TextToSpeech";
import { useState } from "react";
import { ArrowLeft, BookOpen, Brain, PenTool, Headphones, Mic, Keyboard } from "lucide-react";

export default function UnitPage() {
    const params = useParams();
    const router = useRouter();
    const unitId = params.unitId as string;
    const unit = courseUnits.find(u => u.id === unitId);

    const [activeTab, setActiveTab] = useState<'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking'>('grammar');

    // Define handler for exercise completion
    const handleExerciseComplete = (score: number) => {
        // In a real application, we would save the progress here
        // For now, we just acknowledge completion
        console.log(`Exercise completed with score: ${score}`);
    };

    if (!unit) return <div className="p-10 text-center text-xl">Unit not found</div>;

    // Determine available tabs based on unit content
    const tabs = [];
    if (unit.exercises.listening) tabs.push({ id: 'listening', icon: Headphones, label: 'Listening' });
    if (unit.exercises.reading) tabs.push({ id: 'reading', icon: BookOpen, label: 'Reading' });
    if (unit.exercises.writing) tabs.push({ id: 'writing', icon: Keyboard, label: 'Writing' });
    if (unit.exercises.speaking) tabs.push({ id: 'speaking', icon: Mic, label: 'Speaking' });

    // Always include Grammar & Vocab as they are foundational
    tabs.push({ id: 'grammar', icon: Brain, label: 'Grammar' });
    tabs.push({ id: 'vocabulary', icon: PenTool, label: 'Vocabulary' });

    // Set initial active tab if current one is not valid
    if (!tabs.find(t => t.id === activeTab)) {
        if (tabs.length > 0) setActiveTab(tabs[0].id as 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking');
    }

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
                            onClick={() => setActiveTab(tab.id as 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking')}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-lg shadow-lg transition-all whitespace-nowrap ${activeTab === tab.id
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
                    </h2>

                    {activeTab === 'grammar' && (
                        <div>
                            {unit.exercises.grammar.length > 0 ? (
                                <ExerciseEngine questions={unit.exercises.grammar} onComplete={handleExerciseComplete} />
                            ) : (
                                <div className="text-slate-400 italic p-10 text-center bg-slate-50 rounded-xl">
                                    Grammar exercises for this unit are being prepared.
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
                                    Vocabulary exercises for this unit are being prepared.
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

                    {activeTab === 'listening' && unit.exercises.listening && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl border relative">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold flex items-center gap-2"><Headphones className="h-4 w-4" /> Audio Track</h3>
                                    <TextToSpeech text={unit.exercises.listening.transcript} />
                                </div>

                                <div className="prose prose-slate max-w-none italic text-slate-600 border-t pt-4">
                                    <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Transcript Preview</span>
                                    &quot;{unit.exercises.listening.transcript}&quot;
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Questions</h3>
                                <ExerciseEngine questions={unit.exercises.listening.questions} onComplete={handleExerciseComplete} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'writing' && unit.exercises.writing && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-6 rounded-xl border">
                                <h3 className="font-bold mb-4">Task Information</h3>
                                <p className="text-slate-700 whitespace-pre-wrap">{unit.exercises.writing.task}</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Model Answer</h3>
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 text-amber-900 italic">
                                    {unit.exercises.writing.modelAnswer}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'speaking' && unit.exercises.speaking && (
                        <div className="bg-slate-50 p-8 rounded-xl border text-center">
                            <Mic className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                            <h3 className="font-bold text-xl mb-4">Speaking Practice</h3>
                            <p className="text-slate-600 mb-6">This section will allow you to record your voice and get AI feedback.</p>
                            <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold">Start Recording (Demo)</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
