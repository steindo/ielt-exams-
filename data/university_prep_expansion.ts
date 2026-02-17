import { Question } from "@/components/ExerciseEngine";

// ==============================================================================
// UNIVERSITY PREP EXPANSION PACK (MONTHS 1-2)
// Focus: Literary Analysis, Rhetoric/Style, Error Correction
// ==============================================================================

export const uniPrepExpansion: Question[] = [

    // ============================================================================
    // MODULE 4: LITERARY & ACADEMIC ANALYSIS (Reading - 20 Questions)
    // Deep reading of complex texts (Philosophy, Literature, Criticism)
    // ============================================================================
    {
        id: "uni-lit-1",
        type: "MCQ",
        question: "PASSAGE EXCERPT: 'To say that the novel is dead is to misunderstand the very nature of narrative, which mutates rather than expires. The modern novel has merely shed its Victorian skin for a more fragmented, digital exoskeleton.' \n\nThe author uses the metaphor of 'shedding skin' to suggest that the novel:",
        options: ["Has evolved into a new form while retaining its essence.", "Is strictly biological in nature.", "Has completely abandoned its past traditions.", "Is weaker than it was in the Victorian era."],
        correctAnswer: 0,
        explanation: "Shedding skin implies growth and renewal of the same entity, fitting the idea of 'mutation' rather than death."
    },
    {
        id: "uni-lit-2",
        type: "MCQ",
        question: "Which word best describes the tone of the excerpt above?",
        options: ["Analytically optimistic", "Deeply pessimistic", "Indifferent", "Mocking"],
        correctAnswer: 0,
        explanation: "The author defends the novel against claims of its death ('misunderstand'), viewing its change as natural evolution ('mutates')."
    },
    {
        id: "uni-lit-3",
        type: "GapFill",
        question: "The professor's lecture was so ___ (obscure/heavy) that many students dropped the course.",
        correctAnswer: "abstruse",
        explanation: "'Abstruse' means difficult to understand; obscure."
    },
    {
        id: "uni-lit-4",
        type: "MCQ",
        question: "In the sentence 'The protagonist's journey acts as an allegory for post-war disillusionment', what does 'allegory' mean?",
        options: ["A symbol for a broader abstract meaning", "A true historical account", "A contradictory statement", "A type of rhyme scheme"],
        correctAnswer: 0,
        explanation: "An allegory is a story/poem/picture that can be interpreted to reveal a hidden meaning, typically a moral or political one."
    },
    {
        id: "uni-lit-5",
        type: "MCQ",
        question: "PASSAGE: 'The empiricist view posits that all knowledge arises from sensory experience.' \n\nWhich statement would an empiricist most likely REJECT?",
        options: ["We are born with innate ideas.", "Observation is the key to science.", "Data is superior to intuition.", "We learn by touching and creating."],
        correctAnswer: 0,
        explanation: "Empiricism (knowledge from experience) opposes Nativism/Rationalism (innate ideas present at birth)."
    },

    // ============================================================================
    // MODULE 5: RHETORIC & STYLE (20 Questions)
    // Improving sentence flow, identifying devices, formal editing
    // ============================================================================
    {
        id: "uni-rhet-1",
        type: "MCQ",
        question: "Identify the rhetorical device: 'Ask not what your country can do for you, ask what you can do for your country.'",
        options: ["Chiasmus", "Metaphor", "Simile", "Hyperbole"],
        correctAnswer: 0,
        explanation: "Chiasmus is a rhetorical or literary figure in which words, grammatical constructions, or concepts are repeated in reverse order."
    },
    {
        id: "uni-rhet-2",
        type: "MCQ",
        question: "Which sentence is the most concise and forceful?",
        options: ["The application was rejected by the committee due to a lack of funds.", "The committee rejected the application because of insufficient funds.", "Due to the fact that funds were low, the committee made a rejection.", "It was due to a lack of funds that the committee rejected it."],
        correctAnswer: 1,
        explanation: "It uses active voice ('The committee rejected') and eliminates wordy phrases ('due to the fact that')."
    },
    {
        id: "uni-rhet-3",
        type: "GapFill",
        question: "The repetition of the 's' sound in 'Sweet silent thought' is an example of ___.",
        correctAnswer: "sibilance",
        explanation: "Sibilance is a specific type of alliteration involving 's' or 'sh' sounds."
    },
    {
        id: "uni-rhet-4",
        type: "MCQ",
        question: "Which version is most appropriate for an academic paper?",
        options: ["The results are pretty cool and show big changes.", "The data indicates significant variance in the outcomes.", "We found some awesome stuff in the data.", "The things we found change everything."],
        correctAnswer: 1,
        explanation: "Uses precise vocabulary ('indicates', 'variance') and objective tone."
    },
    {
        id: "uni-rhet-5",
        type: "GapFill",
        question: "To ___ (make shorter) the text, the editor removed the second paragraph.",
        correctAnswer: "abridge",
        explanation: "'Abridge' means to shorten (a piece of writing) without losing the sense."
    },

    // ============================================================================
    // MODULE 6: ERROR CORRECTION / EDITING (20 Questions)
    // Spotting subtle errors common in high-level writing
    // ============================================================================
    {
        id: "uni-err-1",
        type: "MCQ",
        question: "Identify the error: 'Neither the professor nor his students was aware of the schedule change.'",
        options: ["was -> were", "nor -> or", "aware -> knowing", "No error"],
        correctAnswer: 0,
        explanation: "In 'Neither... nor' constructions, the verb agrees with the noun closest to it. 'Students' is plural, so 'was' should be 'were'."
    },
    {
        id: "uni-err-2",
        type: "MCQ",
        question: "Identify the error: 'The data shows that less people are attending the lectures this year.'",
        options: ["shows -> show", "less -> fewer", "attending -> going to", "No error"],
        correctAnswer: 1,
        explanation: "'People' is a countable noun, so 'fewer' must be used instead of 'less'. ('Data' is technically plural but often treated as singular in modern usage, but 'less' is a definitive error)."
    },
    {
        id: "uni-err-3",
        type: "GapFill",
        question: "Correct the sentence: 'Running down the street, the trees looked beautiful.' (Dangling Modifier). Rewrite the first word to fix it: '___'",
        correctAnswer: "While",
        explanation: "Fix: 'While I was running down the street...' The original implies the trees were running."
    },
    {
        id: "uni-err-4",
        type: "MCQ",
        question: "Identify the error: 'He is one of the only people who has visited that island.'",
        options: ["one -> some", "only -> unique", "has -> have", "No error"],
        correctAnswer: 2,
        explanation: "In 'one of the [plural noun] who...', the relative pronoun refers to the plural noun. 'People who HAVE visited'."
    },
    {
        id: "uni-err-5",
        type: "MCQ",
        question: "Identify the error: 'Comparing to his previous work, this novel is disappointing.'",
        options: ["Comparing -> Compared", "is -> was", "work -> works", "No error"],
        correctAnswer: 0,
        explanation: "It should be 'Compared to...' (Passive) or 'Comparing this to...' (Active). 'Comparing to' creates a dangling participle."
    },

    // ============================================================================
    // MODULE 7: ADVANCED VOCAB W/ ETYMOLOGY (20 Questions)
    // Understanding roots to decipher unknown words
    // ============================================================================
    {
        id: "uni-etym-1",
        type: "MCQ",
        question: "Based on the root 'bene' (good), which word means 'a person who gives money or help'?",
        options: ["Benefactor", "Malevolent", "Benign", "Beneficiary"],
        correctAnswer: 0,
        explanation: "Benefactor (bene = good, factor = doer/maker)."
    },
    {
        id: "uni-etym-2",
        type: "GapFill",
        question: "The root 'chron' refers to ___.",
        correctAnswer: "time",
        explanation: "As in chronological, chronic, anachronism."
    },
    {
        id: "uni-etym-3",
        type: "MCQ",
        question: "If 'pan' means 'all', what is a 'panacea'?",
        options: ["A cure for all diseases", "A view of all directions", "A group of all gods", "A fear of everything"],
        correctAnswer: 0,
        explanation: "Panacea = cure-all."
    },
    {
        id: "uni-etym-4",
        type: "GapFill",
        question: "The root 'path' in 'apathy' means ___.",
        correctAnswer: "feeling",
        explanation: "Apathy = lack of feeling. Pathos = quality evoking pity."
    },
    {
        id: "uni-etym-5",
        type: "MCQ",
        question: "The prefix 'ante-' in 'antediluvian' means:",
        options: ["Before", "Against", "After", "Between"],
        correctAnswer: 0,
        explanation: "'Ante' means before. Antediluvian = before the flood (very old)."
    }
];
