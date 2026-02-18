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

    const [activeTab, setActiveTab] = useState<'lesson' | 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking'>('lesson');
    const [showTranscript, setShowTranscript] = useState(false);

    // Define handler for exercise completion
    const handleExerciseComplete = (score: number) => {
        // In a real application, we would save the progress here
        // For now, we just acknowledge completion
        console.log(`Exercise completed with score: ${score}`);
    };

    if (!unit) return <div className="p-10 text-center text-xl">Unit not found</div>;

    // Determine available tabs based on unit content
    const tabs = [];
    const tabs = [
        { id: 'lesson', label: 'Lesson', icon: BookOpen },
        { id: 'grammar', label: 'Grammar', icon: Brain },
        { id: 'vocabulary', label: 'Vocabulary', icon: PenTool },
    ];
    if (unit.exercises.listening) tabs.push({ id: 'listening', icon: Headphones, label: 'Listening' });
    if (unit.exercises.reading) tabs.push({ id: 'reading', icon: BookOpen, label: 'Reading' });
    if (unit.exercises.writing) tabs.push({ id: 'writing', icon: Keyboard, label: 'Writing' });
    if (unit.exercises.speaking) tabs.push({ id: 'speaking', icon: Mic, label: 'Speaking' });

    // Set initial active tab if current one is not valid
    if (!tabs.find(t => t.id === activeTab)) {
        if (tabs.length > 0) setActiveTab(tabs[0].id as 'lesson' | 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking');
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
                            onClick={() => setActiveTab(tab.id as 'lesson' | 'grammar' | 'vocabulary' | 'reading' | 'listening' | 'writing' | 'speaking')}
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

                    {activeTab === 'lesson' && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm mb-8">
                                <h2 className="text-3xl font-bold text-amber-900 mb-4">{unit.title}</h2>
                                <p className="text-amber-800 opacity-90 text-lg leading-relaxed font-medium">
                                    Welcome to this unit. Follow the textbook lessons below to build your core foundations before moving to practice.
                                </p>
                            </div>

                            {unit.lessons && unit.lessons.length > 0 ? (
                                <div className="space-y-12">
                                    {unit.lessons.map((lesson, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100/80 relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 text-lg font-black font-heading">
                                                    {idx + 1}
                                                </span>
                                                {lesson.title}
                                            </h3>
                                            <div className="space-y-6">
                                                {lesson.content.map((p, pIdx) => (
                                                    <div key={pIdx}>
                                                        {p.type === 'header' && <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4 border-b-2 border-slate-50 pb-2">{p.text}</h4>}
                                                        {p.type === 'text' && <p className="text-slate-600 leading-relaxed text-lg">{p.text}</p>}
                                                        {p.type === 'bullet' && (
                                                            <div className="flex gap-4 items-start text-slate-600 my-4 pl-2">
                                                                <div className="h-2 w-2 rounded-full bg-amber-400 mt-2.5 flex-shrink-0 animate-pulse" />
                                                                <p className="text-lg font-medium">{p.text}</p>
                                                            </div>
                                                        )}
                                                        {p.type === 'tip' && (
                                                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 my-8 shadow-sm">
                                                                <div className="flex items-center gap-3 text-blue-800 font-black mb-3 text-sm tracking-wider uppercase">
                                                                    <div className="p-2 bg-blue-100 rounded-lg">
                                                                        <Brain className="h-5 w-5" />
                                                                    </div>
                                                                    Test Tip
                                                                </div>
                                                                <p className="text-blue-700 text-lg leading-relaxed italic">{p.text}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-colors"
                                        onClick={() => setActiveTab('listening')}>
                                        <div>
                                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Up Next</p>
                                            <h4 className="text-2xl font-bold">Start Listening Exercises</h4>
                                        </div>
                                        <div className="h-14 w-14 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ArrowRight className="h-8 w-8" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-24 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <BookOpen className="h-10 w-10 text-slate-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-400">Lessons coming soon...</h3>
                                    <p className="text-slate-400 text-lg max-w-md mx-auto">We are currently digitizing the full theory for this unit from the textbook.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'grammar' && (
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
                                    <Brain className="h-5 w-5" /> Grammar Lesson: {unit.topics.grammar}
                                </h3>
                                <p className="text-blue-900 opacity-80">
                                    In this unit, we focus on <strong>{unit.topics.grammar}</strong>.
                                    Review the rules below before starting the exercises.
                                </p>
                            </div>
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
                        <div className="space-y-6">
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                                    <PenTool className="h-5 w-5" /> Vocabulary Focus: {unit.topics.vocabulary}
                                </h3>
                                <p className="text-purple-900 opacity-80">
                                    Mastering <strong>{unit.topics.vocabulary}</strong> is essential for this unit's theme.
                                </p>
                            </div>
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

                                <div className="mt-4">
                                    <button
                                        onClick={() => setShowTranscript(!showTranscript)}
                                        className="text-xs font-bold text-slate-500 hover:text-amber-600 transition-colors uppercase tracking-widest flex items-center gap-1"
                                    >
                                        {showTranscript ? "Hide Transcript" : "Show Transcript"}
                                    </button>
                                </div>

                                {showTranscript && (
                                    <div className="prose prose-slate max-w-none italic text-slate-600 border-t pt-4 mt-4 animate-in fade-in duration-300">
                                        <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Audio Script</span>
                                        &quot;{unit.exercises.listening.transcript}&quot;
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold mb-4 text-slate-700">Questions</h3>
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
