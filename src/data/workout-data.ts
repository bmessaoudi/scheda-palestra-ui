import { WorkoutPlan } from '@/types/workout'

export const workoutPlan: WorkoutPlan = {
    id: 'scheda-palestra-1',
    name: 'SCHEDA ALLENAMENTO',
    description: 'Scheda personalizzata per Bilal Messaoudi - Mantenere fino al: MINIMO 8 SETTIMANE, MASSIMO 10',
    duration: 8, // 8-10 settimane
    targetMuscleGroups: ['Petto', 'Schiena', 'Gambe', 'Spalle', 'Bicipiti', 'Tricipiti', 'Addominali', 'Polpacci'],
    days: [
        {
            type: 'workout',
            id: 'giorno-1',
            name: 'Giorno 1',
            muscleGroups: ['Petto', 'Spalle', 'Tricipiti'],
            exercises: [
                {
                    id: 'ex-1-1',
                    name: 'Distensioni manubri orizzontale',
                    sets: 4,
                    reps: '8',
                    restTime: 60,
                    muscleGroups: ['Petto'],
                    notes: 'Riscaldati bene prima di iniziare'
                },
                {
                    id: 'ex-1-2',
                    name: 'Croci orizzontali',
                    sets: 3,
                    reps: '12',
                    restTime: 60,
                    muscleGroups: ['Petto'],
                },
                {
                    id: 'ex-1-3',
                    name: 'Croci cavi chiusura centrale',
                    sets: 3,
                    reps: '10+10',
                    restTime: 60,
                    muscleGroups: ['Petto'],
                    notes: '10 con un carico alto + 10 con un carico minore, in ogni serie'
                },
                {
                    id: 'ex-1-4',
                    name: 'Distensioni panca alta',
                    sets: 4,
                    reps: '8/10',
                    restTime: 60,
                    muscleGroups: ['Petto'],
                },
                {
                    id: 'ex-1-5',
                    name: 'Alzate laterali',
                    sets: 3,
                    reps: '12',
                    restTime: 60,
                    muscleGroups: ['Spalle'],
                },
                {
                    id: 'ex-1-6',
                    name: 'Tric french press seduto 1 manubrio',
                    sets: 3,
                    reps: '10',
                    restTime: 60,
                    muscleGroups: ['Tricipiti'],
                },
                {
                    id: 'ex-1-7',
                    name: 'DIP',
                    sets: 4,
                    reps: 'Max',
                    restTime: 60,
                    muscleGroups: ['Tricipiti'],
                },
                {
                    id: 'ex-1-8',
                    name: 'Tric pushdown corda',
                    sets: 4,
                    reps: '10+10',
                    restTime: 60,
                    muscleGroups: ['Tricipiti'],
                },
                {
                    id: 'ex-1-9',
                    name: 'Calf',
                    sets: 5,
                    reps: '30',
                    restTime: 40,
                    muscleGroups: ['Polpacci'],
                }
            ]
        },
        {
            type: 'workout',
            id: 'giorno-2',
            name: 'Giorno 2',
            muscleGroups: ['Schiena', 'Bicipiti'],
            exercises: [
                {
                    id: 'ex-2-1',
                    name: 'Trazioni presa larga',
                    sets: 3,
                    reps: 'Max',
                    restTime: 60,
                    muscleGroups: ['Schiena'],
                },
                {
                    id: 'ex-2-2',
                    name: 'Lat machine',
                    sets: 4,
                    reps: '8',
                    restTime: 60,
                    muscleGroups: ['Schiena'],
                    notes: 'Riscaldati bene prima'
                },
                {
                    id: 'ex-2-3',
                    name: 'Pulley basso presa larga',
                    sets: 4,
                    reps: '6+6',
                    restTime: 60,
                    muscleGroups: ['Schiena'],
                },
                {
                    id: 'ex-2-4',
                    name: 'Scrollate manubri',
                    sets: 4,
                    reps: '15',
                    restTime: 90,
                    muscleGroups: ['Schiena'],
                },
                {
                    id: 'ex-2-5',
                    name: 'Row insieme',
                    sets: 3,
                    reps: '10',
                    restTime: 60,
                    muscleGroups: ['Schiena'],
                    notes: 'Se non hai il macchinario puoi fare rematore 2 manubri su panca 30°'
                },
                {
                    id: 'ex-2-6',
                    name: 'Trazione presa inversa',
                    sets: 3,
                    reps: 'MAX',
                    restTime: 60,
                    muscleGroups: ['Schiena'],
                },
                {
                    id: 'ex-2-7',
                    name: 'Bic martello',
                    sets: 3,
                    reps: '8',
                    restTime: 90,
                    muscleGroups: ['Bicipiti'],
                },
                {
                    id: 'ex-2-8',
                    name: 'Bic bilanciere angolato',
                    sets: 4,
                    reps: '10',
                    restTime: 60,
                    muscleGroups: ['Bicipiti'],
                },
                {
                    id: 'ex-2-9',
                    name: 'Bic cavo basso asta dritta',
                    sets: 3,
                    reps: '15',
                    restTime: 60,
                    muscleGroups: ['Bicipiti'],
                }
            ]
        },
        {
            type: 'workout',
            id: 'giorno-3',
            name: 'Giorno 3',
            muscleGroups: ['Gambe', 'Spalle'],
            exercises: [
                {
                    id: 'ex-3-1',
                    name: 'Leg ext',
                    sets: 3,
                    reps: '10+10',
                    restTime: 60,
                    muscleGroups: ['Gambe'],
                },
                {
                    id: 'ex-3-2',
                    name: 'Leg press',
                    sets: 4,
                    reps: '10, 10, 8, 8',
                    restTime: 60,
                    muscleGroups: ['Gambe'],
                },
                {
                    id: 'ex-3-3',
                    name: 'Bulgarian Squat',
                    sets: 3,
                    reps: '10',
                    restTime: 50,
                    muscleGroups: ['Gambe'],
                },
                {
                    id: 'ex-3-4',
                    name: 'Leg curl',
                    sets: 4,
                    reps: '12',
                    restTime: 30,
                    muscleGroups: ['Gambe'],
                },
                {
                    id: 'ex-3-5',
                    name: 'Hack squat',
                    sets: 3,
                    reps: '8',
                    restTime: 60,
                    muscleGroups: ['Gambe'],
                    notes: 'Se non hai H squat puoi fare squat multipower'
                },
                {
                    id: 'ex-3-6',
                    name: 'Alzate laterali cavo 1braccio',
                    sets: 4,
                    reps: '10',
                    restTime: 60,
                    muscleGroups: ['Spalle'],
                },
                {
                    id: 'ex-3-7',
                    name: 'Distensioni manubri seduto',
                    sets: 4,
                    reps: '10',
                    restTime: 60,
                    muscleGroups: ['Spalle'],
                },
                {
                    id: 'ex-3-8',
                    name: 'Aperture dietro posteriori manubri',
                    sets: 3,
                    reps: '12',
                    restTime: 60,
                    muscleGroups: ['Spalle'],
                },
                {
                    id: 'ex-3-9',
                    name: 'Alzate frontali manubri',
                    sets: 4,
                    reps: '10+10',
                    restTime: 60,
                    muscleGroups: ['Spalle'],
                }
            ]
        },

    ],
    circuits: [{
        type: 'circuit',
        id: 'circuito-1',
        name: 'Circuito Addominali',
        muscleGroups: ['Addominali'],
        exercises: [
            {
                id: 'circ-1',
                name: 'CRUNCH',
                sets: 5,
                time: 30,
                muscleGroups: ['Addominali'],
            },
            {
                id: 'circ-2',
                name: 'PLANK',
                sets: 5,
                time: 30,
                muscleGroups: ['Addominali'],
            },
            {
                id: 'circ-3',
                name: 'VACUUM',
                sets: 5,
                time: 30,
                muscleGroups: ['Addominali'],
            },
            {
                id: 'circ-4',
                name: 'RIPOSO',
                sets: 5,
                time: 40,
                muscleGroups: ['Addominali'],
            }
        ]
    }]
} 