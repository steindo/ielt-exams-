"use client";

import { Book, Star, Lock, Unlock, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { courseUnits } from "@/data/course_content";

export default function CourseMapPage() {
    const router = useRouter();

    // For demo, assume user unlocked up to Unit 3
    const currentUnit = 1;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] pb-20">
            <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-amber-200">
                            <Book className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Official Course</h1>
                            <p className="text-sm text-slate-500 font-medium">IELTS Integrated Program</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-bold border border-slate-200">
                        <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                        <span>0 / {courseUnits.length * 100} XP</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-slate-800">Your Learning Path</h2>
                    <p className="text-slate-600">Master every unit from the textbook to achieve Band 8.0+</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-200 rounded-full -z-10" />

                    {courseUnits.map((unit, index) => {
                        const isUnlocked = index < 3; // Demo: first 3 unlocked
                        const isCompleted = index < 1; // Demo: unit 1 completed
                        const isActive = index === 1;   // Demo: unit 2 active

                        return (
                            <div
                                key={unit.id}
                                className={`relative pl-24 group transition-all duration-500 ${!isUnlocked ? 'opacity-60 grayscale' : 'opacity-100'}`}
                            >
                                {/* Node on the line */}
                                <div className={`absolute left-0 top-6 h-16 w-16 rounded-full border-4 flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 shadow-lg ${isCompleted ? 'bg-green-500 border-green-200 text-white' :
                                        isActive ? 'bg-amber-500 border-amber-200 text-white animate-pulse' :
                                            'bg-white border-slate-200 text-slate-300'
                                    }`}>
                                    {isCompleted ? <CheckCircle className="h-8 w-8" /> :
                                        !isUnlocked ? <Lock className="h-6 w-6" /> :
                                            <span className="text-2xl font-bold">{unit.number}</span>
                                    }
                                </div>

                                {/* Card */}
                                <div
                                    onClick={() => isUnlocked && router.push(`/course/${unit.id}`)}
                                    className={`bg-white p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${isActive ? 'border-amber-500 shadow-xl shadow-amber-100 ring-4 ring-amber-50 transform scale-[1.02]' :
                                            isCompleted ? 'border-green-500 shadow-md' :
                                                'border-slate-100 shadow-sm hover:border-slate-300 hover:shadow-md'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className={`text-xl font-bold ${isActive ? 'text-amber-700' : 'text-slate-800'}`}>
                                                {unit.title}
                                            </h3>
                                            <p className="text-slate-500 font-medium text-sm mt-1">{unit.description}</p>
                                        </div>
                                        {isActive && (
                                            <div className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase rounded-full tracking-wide">
                                                Current
                                            </div>
                                        )}
                                    </div>

                                    {/* Topics Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">
                                            {unit.topics.grammar}
                                        </span>
                                        <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded border border-purple-100">
                                            {unit.topics.vocabulary}
                                        </span>
                                    </div>

                                    {/* Action Button */}
                                    {isUnlocked && (
                                        <div className="mt-6 flex justify-end">
                                            <button className={`flex items-center gap-2 font-bold transition-colors ${isActive ? 'text-amber-600 hover:text-amber-800' : 'text-slate-400 hover:text-slate-900'
                                                }`}>
                                                {isCompleted ? 'Review Unit' : 'Start Unit'} <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </main>
        </div>
    );
}
