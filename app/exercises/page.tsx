"use client";

import Link from "next/link";
import { BookOpen, TrendingUp, Award, Target } from "lucide-react";
import Card from "@/components/Card";
import { allExercises } from "@/data/exercises";

const levels = [
    {
        code: "A1",
        name: "Débutant",
        description: "Grammaire de base et vocabulaire essentiel",
        icon: BookOpen,
        color: "from-green-500 to-emerald-600",
        borderColor: "border-green-500/20",
        count: allExercises.A1.length
    },
    {
        code: "A2",
        name: "Élémentaire",
        description: "Temps du passé et expressions courantes",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-600",
        borderColor: "border-blue-500/20",
        count: allExercises.A2.length
    },
    {
        code: "B1",
        name: "Intermédiaire",
        description: "Conditionnels et structures complexes",
        icon: Target,
        color: "from-orange-500 to-amber-600",
        borderColor: "border-orange-500/20",
        count: allExercises.B1.length
    },
    {
        code: "B2",
        name: "Intermédiaire Supérieur",
        description: "Inversion et collocations avancées",
        icon: Award,
        color: "from-red-500 to-rose-600",
        borderColor: "border-red-500/20",
        count: allExercises.B2.length
    }
];

export default function ExercisesHub() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
                    Exercices par <span className="text-primary">Niveau</span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choisissez votre niveau CECR et pratiquez avec des exercices ciblés pour améliorer votre anglais.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {levels.map((level) => (
                    <Link key={level.code} href={`/exercises/${level.code.toLowerCase()}`}>
                        <Card className={`group cursor-pointer border-2 ${level.borderColor} hover:border-primary/50 transition-all hover:shadow-xl hover:scale-105 active:scale-100`}>
                            <div className={`mb-6 h-20 w-20 rounded-2xl bg-gradient-to-br ${level.color} p-4 text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                                <level.icon className="h-full w-full" />
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                {level.code} - {level.name}
                            </h3>

                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                {level.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    {level.count} questions
                                </span>
                                <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                                    Commencer →
                                </span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">À propos des niveaux CECR</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Le Cadre Européen Commun de Référence pour les Langues (CECR) définit 6 niveaux de compétence linguistique.
                    Ces exercices couvrent les niveaux A1 (débutant) à B2 (intermédiaire supérieur), vous permettant de progresser
                    étape par étape vers la maîtrise de l'anglais.
                </p>
            </div>
        </div>
    );
}
