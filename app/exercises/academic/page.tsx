"use client";

import { Crown, BookOpen, ArrowLeft, Brain, GraduationCap, Library } from "lucide-react";
import { useRouter } from "next/navigation";
import ExerciseEngine from "@/components/ExerciseEngine";
// Import the massive new dataset
import { universityPrepExercises } from "@/data/university_prep_exercises";

export default function UniversityPrepPage() {
    const router = useRouter();

    const handleComplete = (score: number) => {
        const percentage = Math.round((score / universityPrepExercises.length) * 100);
        alert(`Progression Programme Harvard/Oxford Terminée !\n\nScore: ${score}/${universityPrepExercises.length} (${percentage}%)`);
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
                <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-4">
                    Programme Intensif <span className="text-amber-600">6 Mois</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Votre feuille de route vers Oxford, Harvard et Cambridge. Ce module couvre la grammaire d'élite,
                    le vocabulaire GRE/GMAT, et la logique critique.
                </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-700">
                        <Library className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Grammaire & Rhétorique</h3>
                    <p className="text-sm text-muted-foreground">Maîtrisez l'inversion, le subjonctif et les structures stylistiques complexes.</p>
                </div>
                <div className="p-6 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-700">
                        <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Vocabulaire C2+</h3>
                    <p className="text-sm text-muted-foreground">Lexique de niveau GRE/GMAT pour une précision chirurgicale.</p>
                </div>
                <div className="p-6 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-700">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Logique Critique</h3>
                    <p className="text-sm text-muted-foreground">Analyse d'arguments et identification de fallacies logiques.</p>
                </div>
            </div>

            {/* Main Exercise Engine */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="flex items-center justify-between mb-8 border-b pb-6">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Crown className="h-6 w-6 text-amber-500" />
                            Session d'entraînement intensif
                        </h2>
                        <p className="text-slate-500 mt-1">Série complète de {universityPrepExercises.length} questions</p>
                    </div>

                    <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold text-sm">
                        Objective: Top 1%
                    </div>
                </div>

                <ExerciseEngine questions={universityPrepExercises} onComplete={handleComplete} />
            </div>
        </div>
    );
}
