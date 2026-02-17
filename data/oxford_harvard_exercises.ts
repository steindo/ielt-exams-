import { Question } from "@/components/ExerciseEngine";

// ==============================================================================
// OXFORD & HARVARD STYLE ACADEMIC EXERCISES
// High-level academic English aiming for C1-C2 proficiency
// ==============================================================================

export const academicExercises: Question[] = [
    // ----------------------------------------------------------------------------
    // ADVANCED GRAMMAR & STRUCTURE (20 Exercises)
    // Focus: Inversion, Cleft Sentences, Subjunctive, Advanced Passive
    // ----------------------------------------------------------------------------
    {
        id: "acad-gram-1",
        type: "MCQ",
        question: "Rarely ___ such a display of public discontent been witnessed in the capital.",
        options: ["has", "have", "had", "having"],
        correctAnswer: 0,
        explanation: "Inversion after negative adverbials ('Rarely') requires the auxiliary verb before the subject. 'Has' fits the present perfect context."
    },
    {
        id: "acad-gram-2",
        type: "GapFill",
        question: "Had it not been for your assistance, the project ___ (fail).",
        correctAnswer: "would have failed",
        explanation: "Third conditional inversion: 'Had it not been for...' requires 'would have + past participle' in the main clause."
    },
    {
        id: "acad-gram-3",
        type: "MCQ",
        question: "It is essential that every student ___ the regulations carefully.",
        options: ["reads", "read", "reading", "to read"],
        correctAnswer: 1,
        explanation: "The subjunctive mood is used after 'essential that', requiring the base form of the verb 'read'."
    },
    {
        id: "acad-gram-4",
        type: "MCQ",
        question: "___, the theory proved to be seminal in the field of astrophysics.",
        options: ["Controversial though it was", "Controversial although it was", "Despite controversial", "In spite of controversial"],
        correctAnswer: 0,
        explanation: "The structure 'Adjective + though + subject + verb' is a formal way to express concession."
    },
    {
        id: "acad-gram-5",
        type: "GapFill",
        question: "Not only ___ (he/fail) to report the error, but he also attempted to conceal it.",
        correctAnswer: "did he fail",
        explanation: "Inversion is required after 'Not only' at the beginning of a sentence."
    },
    {
        id: "acad-gram-6",
        type: "MCQ",
        question: "The findings were ___ inconclusive, requiring further investigation.",
        options: ["somewhat", "utterly", "virtually", "merely"],
        correctAnswer: 0,
        explanation: "'Somewhat' is an appropriate academic hedge. 'Utterly inconclusive' is possible but stronger; 'somewhat' fits standard academic caution."
    },
    {
        id: "acad-gram-7",
        type: "MCQ",
        question: "Little ___ that he was about to make a discovery that would change history.",
        options: ["he knew", "did he know", "does he know", "he knows"],
        correctAnswer: 1,
        explanation: "Negative adverbial 'Little' at the start triggers inversion: 'did he know'."
    },
    {
        id: "acad-gram-8",
        type: "GapFill",
        question: "Should you ___ (require) any further information, please do not hesitate to contact us.",
        correctAnswer: "require",
        explanation: "Inversion in conditional sentences: 'Should you require' replaces 'If you should require'.Base form is used."
    },
    {
        id: "acad-gram-9",
        type: "MCQ",
        question: "___ been informed of the change in policy, I would have adjusted the schedule.",
        options: ["Had I", "If I had", "Should I have", "Were I to have"],
        correctAnswer: 0,
        explanation: "Inversion 'Had I been...' is the formal equivalent of 'If I had been...'"
    },
    {
        id: "acad-gram-10",
        type: "MCQ",
        question: "Everything depends on ___ the proposal is accepted by the board.",
        options: ["whether", "if", "that", "unless"],
        correctAnswer: 0,
        explanation: "After prepositions like 'on', 'whether' is preferred over 'if' in formal academic English."
    },
    {
        id: "acad-gram-11",
        type: "GapFill",
        question: "I would rather you ___ (not/mention) this to anyone yet.",
        correctAnswer: "didn't mention",
        explanation: "'Would rather' followed by valid object requires the past subjunctive (simple past form) for present/future meaning."
    },
    {
        id: "acad-gram-12",
        type: "MCQ",
        question: "___ the data were analyzed, a clear pattern emerged.",
        options: ["Once", "Immediate", "During", "While"],
        correctAnswer: 0,
        explanation: "'Once' acts as a conjunction meaning 'as soon as'. 'During' is a preposition."
    },
    {
        id: "acad-gram-13",
        type: "MCQ",
        question: "Whatever the outcome ___, we must proceed with the initial plan.",
        options: ["be", "is", "will be", "being"],
        correctAnswer: 0,
        explanation: "The subjunctive 'be' is used in formal concessions: 'Whatever the outcome be' (though 'is' is also common, 'be' is higher register)."
    },
    {
        id: "acad-gram-14",
        type: "GapFill",
        question: "Under no circumstances ___ (should/you) open the sealed container.",
        correctAnswer: "should you",
        explanation: "Negative adverbial phrase 'Under no circumstances' triggers inversion."
    },
    {
        id: "acad-gram-15",
        type: "MCQ",
        question: "There is a widespread belief ___ inflation will soon stabilize.",
        options: ["that", "which", "where", "whose"],
        correctAnswer: 0,
        explanation: "'Belief that...' introduces an appositive noun clause."
    },
    {
        id: "acad-gram-16",
        type: "MCQ",
        question: "Included in the report ___ a detailed analysis of the cost implications.",
        options: ["is", "are", "being", "have been"],
        correctAnswer: 0,
        explanation: "Inversion of place/direction: 'Included... is a detailed analysis'. Analysis is singular."
    },
    {
        id: "acad-gram-17",
        type: "GapFill",
        question: "Only after months of negotiation ___ (they/reach) an agreement.",
        correctAnswer: "did they reach",
        explanation: "'Only after...' triggers inversion in the main clause."
    },
    {
        id: "acad-gram-18",
        type: "MCQ",
        question: "She is one of those researchers who ___ always willing to collaborate.",
        options: ["is", "are", "be", "being"],
        correctAnswer: 1,
        explanation: "'Researchers' is the antecedent of 'who', so the verb must be plural 'are'."
    },
    {
        id: "acad-gram-19",
        type: "MCQ",
        question: "So distinctive ___ his writing style that he was instantly recognizable.",
        options: ["was", "is", "were", "had been"],
        correctAnswer: 0,
        explanation: "'So + adjective' inversion: 'So distinctive was his writing style...'."
    },
    {
        id: "acad-gram-20",
        type: "GapFill",
        question: "Be that as it ___, we cannot ignore the statistical anomalies.",
        correctAnswer: "may",
        explanation: "Fixed subjunctive phrase 'Be that as it may' meaning 'Nevertheless'."
    },

    // ----------------------------------------------------------------------------
    // ACADEMIC VOCABULARY & COLLOCATION (20 Exercises)
    // Focus: Formal Register, Precise Lexis, nuanced meaning
    // ----------------------------------------------------------------------------
    {
        id: "acad-vocab-1",
        type: "MCQ",
        question: "The results of the study ___ the hypothesis proposed earlier.",
        options: ["corroborate", "collaborate", "cooperate", "circumvent"],
        correctAnswer: 0,
        explanation: "'Corroborate' means to confirm or give support to (a statement, theory, or finding)."
    },
    {
        id: "acad-vocab-2",
        type: "GapFill",
        question: "The argument is ___ on the assumption that resources are infinite.",
        correctAnswer: "predicated",
        explanation: "'Predicated on' means based or founded on."
    },
    {
        id: "acad-vocab-3",
        type: "MCQ",
        question: "There is a ___ difference between the two statistical models.",
        options: ["subtle", "feeble", "slight", "mild"],
        correctAnswer: 0,
        explanation: "'Subtle' implies a fine or delicate meaning or distinction, often used in academic contexts."
    },
    {
        id: "acad-vocab-4",
        type: "MCQ",
        question: "The author ___ several key issues in the final chapter.",
        options: ["elucidates", "hallucinates", "illuminates", "illustrates"],
        correctAnswer: 0,
        explanation: "'Elucidate' means to make (something) clear; explain."
    },
    {
        id: "acad-vocab-5",
        type: "GapFill",
        question: "Such behavior is ___ with the company's code of ethics.",
        correctAnswer: "incompatible",
        explanation: "'Incompatible with' means not consistent or able to coexist with."
    },
    {
        id: "acad-vocab-6",
        type: "MCQ",
        question: "The evidence presented was ___ and could not be ignored.",
        options: ["compelling", "compulsive", "compulsory", "repelling"],
        correctAnswer: 0,
        explanation: "'Compelling' evidence is convincing and evokes interest or attention."
    },
    {
        id: "acad-vocab-7",
        type: "MCQ",
        question: "We need to ___ the broader implications of this policy.",
        options: ["assess", "access", "excess", "asset"],
        correctAnswer: 0,
        explanation: "'Assess' means to evaluate or estimate the nature, ability, or quality of."
    },
    {
        id: "acad-vocab-8",
        type: "GapFill",
        question: "The project's success is ___ on securing adequate funding.",
        correctAnswer: "contingent",
        explanation: "'Contingent on' means occurring or existing only if (certain circumstances) are the case."
    },
    {
        id: "acad-vocab-9",
        type: "MCQ",
        question: "His theory implies a ___ relationship between income and health.",
        options: ["causal", "casual", "clause", "caustic"],
        correctAnswer: 0,
        explanation: "'Causal' relates to or involving a cause (cause and effect). 'Casual' means relaxed."
    },
    {
        id: "acad-vocab-10",
        type: "MCQ",
        question: "The professor offered a ___ critique of the student's paper.",
        options: ["scathing", "scorching", "scratching", "scalding"],
        correctAnswer: 0,
        explanation: "'Scathing' means witheringly scornful; severely critical."
    },
    {
        id: "acad-vocab-11",
        type: "GapFill",
        question: "This study ___ to investigate the effects of sleep deprivation.",
        correctAnswer: "aims",
        explanation: "'Aims to' is standard academic phrasing for stating the purpose of research."
    },
    {
        id: "acad-vocab-12",
        type: "MCQ",
        question: "The rapid expansion of the city has ___ the local infrastructure.",
        options: ["strained", "strung", "stricken", "stroked"],
        correctAnswer: 0,
        explanation: "'Strain' means to force (a part of one's body or oneself) to make an unusually great effort; here, to put pressure on."
    },
    {
        id: "acad-vocab-13",
        type: "MCQ",
        question: "It is ___ that we address climate change immediately.",
        options: ["imperative", "impediment", "imperial", "impetuous"],
        correctAnswer: 0,
        explanation: "'Imperative' means of vital importance; crucial."
    },
    {
        id: "acad-vocab-14",
        type: "GapFill",
        question: "These findings are ___ with previous research in the field.",
        correctAnswer: "consistent",
        explanation: "'Consistent with' implies agreement or harmony with other data."
    },
    {
        id: "acad-vocab-15",
        type: "MCQ",
        question: "The data contains several ___ which alter the average significantly.",
        options: ["outliers", "outlines", "outcasts", "outlays"],
        correctAnswer: 0,
        explanation: "'Outliers' are data points that differ significantly from other observations."
    },
    {
        id: "acad-vocab-16",
        type: "MCQ",
        question: "A ___ approach is required to solve such a multifaceted problem.",
        options: ["holistic", "holy", "hollow", "holocaust"],
        correctAnswer: 0,
        explanation: "'Holistic' means characterized by the belief that parts of something are intimately interconnected and explicable only by reference to the whole."
    },
    {
        id: "acad-vocab-17",
        type: "GapFill",
        question: "We must ___ the variables to ensure a fair test.",
        correctAnswer: "isolate",
        explanation: "To 'isolate variables' is a standard scientific method to test specific effects."
    },
    {
        id: "acad-vocab-18",
        type: "MCQ",
        question: "The lecture provided a comprehensive ___ of modern economic theory.",
        options: ["overview", "overlook", "oversee", "oversight"],
        correctAnswer: 0,
        explanation: "An 'overview' is a general review or summary of a subject."
    },
    {
        id: "acad-vocab-19",
        type: "MCQ",
        question: "There is a ___ correlation between exercise and longevity.",
        options: ["positive", "posit", "position", "posing"],
        correctAnswer: 0,
        explanation: "A 'positive correlation' means as one variable increases, so does the other."
    },
    {
        id: "acad-vocab-20",
        type: "GapFill",
        question: "The distinction between the two concepts is often ___.",
        correctAnswer: "blurred",
        explanation: "'Blurred' distinction means it is not clear or sharp."
    }
];
