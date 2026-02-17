"use client";

import { Crown, BookOpen, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ExerciseEngine from "@/components/ExerciseEngine";
import { academicExercises } from "@/data/oxford_harvard_exercises";

export default function AcademicExercisesPage() {
    const router = useRouter();

    const handleComplete = (score: number) => {
        const percentage = Math.round((score / academicExercises.length) * 100);
        alert(`Session Académique Terminée !\n\nScore: ${score}/${academicExercises.length} (${percentage}%)`);
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

            <div className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-700 to-amber-900 px-8 py-12 text-white shadow-xl relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Crown className="h-64 w-64" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <Crown className="h-10 w-10 text-amber-400" />
                        <h1 className="text-4xl font-extrabold tracking-tight text-amber-100">
                            Harvard & Oxford Style
                        </h1>
                    </div>
                    <p className="text-lg text-amber-200/90 max-w-2xl">
                        Exercices de niveau académique avancé (C1-C2) conçus pour maîtriser les
                        subtilités de la langue anglaise : inversion, structures passives, et vocabulaire formel.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <span className="inline-block rounded-full bg-black/30 px-4 py-2 text-sm font-bold border border-amber-500/30">
                            {academicExercises.length} Questions Haute Précision
                        </span>
                        <span className="inline-block rounded-full bg-amber-500/20 px-4 py-2 text-sm font-bold border border-amber-500/30 text-amber-300">
                            Niveau C1-C2
                        </span>
                    </div>
                </div>
            </div>

            <ExerciseEngine questions={academicExercises} onComplete={handleComplete} />
        </div>
    );
}
