"use client";

import { useParams, useRouter } from "next/navigation";
import { BookOpen, ArrowLeft } from "lucide-react";
import ExerciseEngine from "@/components/ExerciseEngine";
import { allExercises } from "@/data/exercises";

export default function ExercisesPage() {
    const params = useParams();
    const router = useRouter();
    const level = (params.level as string)?.toUpperCase();

    // Get exercises for the selected level
    const exercises = allExercises[level as keyof typeof allExercises];

    if (!exercises) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold text-foreground">Niveau non trouvé</h1>
                <p className="mt-4 text-muted-foreground">Le niveau {level} n'existe pas.</p>
                <button
                    onClick={() => router.push("/exercises")}
                    className="mt-8 rounded-lg bg-primary px-6 py-3 font-bold text-white"
                >
                    Retour aux exercices
                </button>
            </div>
        );
    }

    const handleComplete = (score: number) => {
        const percentage = Math.round((score / exercises.length) * 100);
        alert(`Exercice terminé !\n\nScore: ${score}/${exercises.length} (${percentage}%)`);
        router.push("/dashboard");
    };

    const levelDescriptions: Record<string, { title: string; description: string; color: string }> = {
        A1: {
            title: "Débutant (A1)",
            description: "Grammaire de base, vocabulaire essentiel, phrases simples",
            color: "bg-green-500"
        },
        A2: {
            title: "Élémentaire (A2)",
            description: "Temps du passé, comparatifs, expressions courantes",
            color: "bg-blue-500"
        },
        B1: {
            title: "Intermédiaire (B1)",
            description: "Conditionnels, voix passive, structures complexes",
            color: "bg-orange-500"
        },
        B2: {
            title: "Intermédiaire Supérieur (B2)",
            description: "Inversion, collocations avancées, structures formelles",
            color: "bg-red-500"
        }
    };

    const levelInfo = levelDescriptions[level] || levelDescriptions.A1;

    return (
        <div className="container mx-auto px-4 py-12">
            <button
                onClick={() => router.push("/exercises")}
                className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Retour aux niveaux
            </button>

            <div className={`mb-12 overflow-hidden rounded-2xl ${levelInfo.color} px-8 py-12 text-white shadow-xl`}>
                <div className="flex items-center gap-4 mb-4">
                    <BookOpen className="h-10 w-10" />
                    <h1 className="text-4xl font-extrabold tracking-tight">{levelInfo.title}</h1>
                </div>
                <p className="text-lg opacity-90">{levelInfo.description}</p>
                <div className="mt-6 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
                    {exercises.length} questions
                </div>
            </div>

            <ExerciseEngine questions={exercises} onComplete={handleComplete} />
        </div>
    );
}
