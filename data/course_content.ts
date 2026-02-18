import { Question } from "@/components/ExerciseEngine";
import courseData from "./courseContent.json";

export interface LessonParagraph {
    type: 'text' | 'bullet' | 'tip' | 'header' | 'audio_script' | 'table';
    text?: string;
    headers?: string[];
    rows?: string[][];
}

export interface LessonPart {
    title: string;
    content: LessonParagraph[];
}

export type UnitCategory = 'intro' | 'listening' | 'reading' | 'writing' | 'speaking' | 'test';

export interface CourseUnit {
    id: string;
    number: number | string;
    title: string;
    description: string;
    category: UnitCategory;
    pageRange?: string;
    topics: {
        grammar: string;
        vocabulary: string;
    };
    lessons?: LessonPart[];
    exercises: {
        grammar: Question[];
        vocabulary: Question[];
        reading?: { passage: string; questions: Question[] };
        listening?: { transcript: string; questions: Question[] };
        writing?: { task: string; modelAnswer: string };
        speaking?: { part1: string[]; part2: string; part3: string[]; audioModel?: string };
    };
}

// Convert JSON data to CourseUnit type
export const courseUnits: CourseUnit[] = courseData as any[];
