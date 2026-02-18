"use client";

import { Book, Star, Lock, ArrowRight, CheckCircle, Headphones, BookOpen, Keyboard, Brain, Languages } from "lucide-react";
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
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-slate-800 tracking-tight">Your Learning Path</h2>
                    <p className="text-slate-600 text-lg">Master every unit from the textbook with an interactive study plan.</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-24 relative">
                    {/* 6 Sections based on the Textbook pillars */}
                    {[
                        { title: "Introduction", icon: Book, category: "intro", rangeText: "Summary (p5-12)", color: "slate" },
                        { title: "Listening Skills", icon: Headphones, category: "listening", rangeText: "8 Units (p13-41)", color: "amber" },
                        { title: "Reading Skills", icon: BookOpen, category: "BookOpen", rangeText: "8 Units (p42-90)", color: "blue" },
                        { title: "Writing Skills", icon: Keyboard, category: "writing", rangeText: "8 Units (p91-133)", color: "emerald" },
                        { title: "Speaking Skills", icon: Headphones, category: "speaking", rangeText: "4 Units (p134-153)", color: "purple" },
                        { title: "Practice Tests", icon: Star, category: "test", rangeText: "8 Tests (p154+)", color: "rose" }
                    ].map((section, sIdx) => {
                        const sectionUnits = courseUnits.filter(u => u.category === section.category);

                        // Icon mapping
                        const IconComponent = section.icon === BookOpen ? BookOpen :
                            section.icon === Headphones ? Headphones :
                                section.icon === Keyboard ? Keyboard :
                                    section.icon === Star ? Star : Book;

                        return (
                            <section key={sIdx} className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${sIdx * 100}ms` }}>
                                <div className={`flex items-center gap-5 border-l-4 border-${section.color}-500 pl-8 mb-14`}>
                                    <div className={`p-4 bg-${section.color}-100 text-${section.color}-600 rounded-3xl shadow-sm shadow-${section.color}-100`}>
                                        <IconComponent className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{section.title}</h2>
                                        <p className="text-slate-500 font-bold text-lg">{section.rangeText}</p>
                                    </div>
                                </div>

                                <div className="space-y-10 relative">
                                    {/* Vertical Line for this section */}
                                    <div className="absolute left-[31px] top-10 bottom-10 w-1.5 bg-slate-200/40 rounded-full -z-10" />

                                    {sectionUnits.length > 0 ? (
                                        sectionUnits.map((unit, index) => {
                                            const isUnlocked = true;
                                            const isCompleted = false; // Default for now
                                            const isActive = unit.id === "intro-summary";

                                            return (
                                                <div
                                                    key={unit.id}
                                                    className={`relative pl-24 group transition-all duration-500 ${!isUnlocked ? 'opacity-60 grayscale' : 'opacity-100'}`}
                                                >
                                                    {/* Node */}
                                                    <div className={`absolute left-0 top-6 h-18 w-18 rounded-[2rem] border-4 flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 shadow-2xl ${isCompleted ? 'bg-green-500 border-green-200 text-white' :
                                                        isActive ? `bg-${section.color}-500 border-${section.color}-200 text-white animate-pulse ring-12 ring-${section.color}-50` :
                                                            'bg-white border-slate-100 text-slate-400 group-hover:border-slate-300'
                                                        }`}>
                                                        {isCompleted ? <CheckCircle className="h-9 w-9" /> :
                                                            !isUnlocked ? <Lock className="h-7 w-7" /> :
                                                                <span className="text-3xl font-black font-heading leading-none">
                                                                    {typeof unit.number === 'number' ? unit.number : 'i'}
                                                                </span>
                                                        }
                                                    </div>

                                                    {/* Card */}
                                                    <div
                                                        onClick={() => isUnlocked && router.push(`/course/${unit.id}`)}
                                                        className={`bg-white p-8 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer overflow-hidden relative group shadow-sm hover:shadow-2xl ${isActive ? `border-${section.color}-500 shadow-xl shadow-${section.color}-50 transform scale-[1.03]` :
                                                            isCompleted ? 'border-green-500/40 shadow-lg shadow-green-50' :
                                                                'border-slate-50 hover:border-slate-200'
                                                            }`}
                                                    >
                                                        <div className="flex justify-between items-start mb-3">
                                                            <div className="z-10 max-w-[80%]">
                                                                <h3 className={`text-2xl font-black font-heading leading-tight ${isActive ? `text-${section.color}-900` : 'text-slate-800'}`}>
                                                                    {unit.title}
                                                                </h3>
                                                                <div className="flex items-center gap-2 mt-2">
                                                                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-black rounded-lg border border-slate-200 uppercase tracking-tighter">
                                                                        p. {unit.pageRange}
                                                                    </span>
                                                                    <p className="text-slate-500 font-bold text-lg line-clamp-1">{unit.description}</p>
                                                                </div>
                                                            </div>
                                                            {isActive && (
                                                                <div className={`px-5 py-2 bg-${section.color}-100 text-${section.color}-700 text-xs font-black uppercase rounded-2xl tracking-widest z-10 border border-${section.color}-200`}>
                                                                    Start Now
                                                                </div>
                                                            )}
                                                        </div>

                                                        <div className="flex flex-wrap gap-3 mt-8">
                                                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50/80 text-slate-600 text-xs font-black rounded-xl border border-slate-200/50 uppercase tracking-tight backdrop-blur-sm">
                                                                <Brain className="h-4 w-4 text-slate-400" /> {unit.topics.grammar}
                                                            </div>
                                                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50/80 text-slate-600 text-xs font-black rounded-xl border border-slate-200/50 uppercase tracking-tight backdrop-blur-sm">
                                                                <Languages className="h-4 w-4 text-slate-400" /> {unit.topics.vocabulary}
                                                            </div>
                                                        </div>

                                                        {/* Animated background icon */}
                                                        <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all transform group-hover:scale-125 duration-1000 rotate-12`}>
                                                            <IconComponent className="h-48 w-48" />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div className="pl-24 py-12">
                                            <div className="bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 text-center">
                                                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                                                    <Lock className="h-8 w-8 text-slate-300" />
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-400 font-heading">Units in Extraction</h4>
                                                <p className="text-slate-400 mt-1 font-medium italic">Fidelity mapping in progress...</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </main>
        </div>
    );
}
