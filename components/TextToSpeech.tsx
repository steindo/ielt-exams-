"use client";

import { VolumeX, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TextToSpeechProps {
    text: string;
    autoPlay?: boolean;
}

export default function TextToSpeech({ text, autoPlay = false }: TextToSpeechProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-GB'; // British English for IELTS context
        u.rate = 0.9; // Slightly slower for clarity

        u.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        setUtterance(u);

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        if (!utterance) return;

        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
        } else {
            window.speechSynthesis.speak(utterance);
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (isPlaying) {
            window.speechSynthesis.pause();
            setIsPaused(true);
            setIsPlaying(false);
        }
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    return (
        <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-lg border border-slate-200 inline-flex">
            {!isPlaying && !isPaused ? (
                <button onClick={handlePlay} className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors" title="Play Audio">
                    <Play className="h-4 w-4" />
                </button>
            ) : isPlaying ? (
                <button onClick={handlePause} className="p-2 bg-slate-300 text-slate-700 rounded-full hover:bg-slate-400 transition-colors" title="Pause">
                    <Pause className="h-4 w-4" />
                </button>
            ) : (
                <button onClick={handlePlay} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors" title="Resume">
                    <Play className="h-4 w-4" />
                </button>
            )}

            <button onClick={handleStop} className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Stop">
                <VolumeX className="h-4 w-4" />
            </button>

            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                Audio v1.0
            </span>
        </div>
    );
}
