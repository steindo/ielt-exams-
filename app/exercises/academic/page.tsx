"use client";

import { Crown, ArrowLeft, Brain, GraduationCap, Library } from "lucide-react";
import { useRouter } from "next/navigation";
import ExerciseEngine from "@/components/ExerciseEngine";
// Import the massive new dataset
import { universityPrepExercises } from "@/data/university_prep_exercises";
import { uniPrepExpansion } from "@/data/university_prep_expansion";

const allUniversityExercises = [...universityPrepExercises, ...uniPrepExpansion];


export default function UniversityPrepPage() {
    const router = useRouter();

    const handleComplete = (score: number) => {
        const percentage = Math.round((score / allUniversityExercises.length) * 100);
        alert(`Session Académique Terminée !\n\nScore: ${score}/${allUniversityExercises.length} (${percentage}%)`);
        router.push("/dashboard");
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <button
                onClick={() => router.push("/exercises")}
                className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Retour aux exercices
            </button>

            {/* Header Section */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                    Harvard &amp; Oxford <span className="text-amber-600">Premium Prep</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Votre feuille de route vers Oxford, Harvard et Cambridge. Ce module couvre la grammaire d'élite,
                    le vocabulaire GRE/GMAT, et la logique critique.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-3 text-amber-700">
                        <Library className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-md mb-1">Grammaire & Style</h3>
                    <p className="text-xs text-muted-foreground">Rhétorique, Inversion, Subjonctif</p>
                </div>
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-3 text-amber-700">
                        <Brain className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-md mb-1">Vocab & Étymologie</h3>
                    <p className="text-xs text-muted-foreground">GRE/GMAT, Racines latines/grecques</p>
                </div>
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-3 text-amber-700">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-md mb-1">Analyse Littéraire</h3>
                    <p className="text-xs text-muted-foreground">Lecture critique de textes complexes</p>
                </div>
                <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-3 text-amber-700">
                        <Crown className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-md mb-1">Correction d'Erreurs</h3>
                    <p className="text-xs text-muted-foreground">Édition et précision chirurgicale</p>
                </div>
            </div>

            {/* Main Exercise Engine */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="flex items-center justify-between mb-8 border-b pb-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Crown className="h-6 w-6 text-amber-500" />
                            Session Intensive (6 Mois)
                        </h2>
                        <p className="text-slate-600 mt-2">
                            Master the &apos;Oxbridge&apos; style of critical thinking and argumentation.
                            These exercises are designed to push your logic and vocabulary to the C2 level.
                        </p>
                    </div>

                    <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold text-sm">
                        Objectif: Harvard/Oxford Admission
                    </div>
                </div>

                <ExerciseEngine questions={allUniversityExercises} onComplete={handleComplete} />
            </div>
        </div>
    );
}
