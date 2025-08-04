export interface Exercise {
    id: string
    name: string
    sets: number
    muscleGroups: string[]
    imageUrl?: string
    videoUrl?: string
    notes?: string
}

export interface WorkoutExercise extends Exercise {
    reps: string
    restTime: number // in secondi
}

export interface Workout {
    id: string
    name: string
    muscleGroups: string[]
}

export interface WorkoutDay extends Workout {
    type: 'workout'
    exercises: WorkoutExercise[]
}

export interface CircuitExercise extends Exercise {
    time: number // in secondi
}

export interface Circuit extends Workout {
    type: 'circuit'
    exercises: CircuitExercise[]
}

export interface WorkoutPlan {
    id: string
    name: string
    description: string
    duration: number // in settimane
    targetMuscleGroups: string[]
    days: WorkoutDay[]
    circuits: Circuit[]
} 