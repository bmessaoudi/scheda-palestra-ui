"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkoutDay as WorkoutDayType } from "@/types/workout";
import { ExerciseCard } from "./ExerciseCard";
import { getMuscleGroupColor } from "@/lib/utils";

interface WorkoutTabProps {
  workout: WorkoutDayType;
}

export function WorkoutTab({ workout }: WorkoutTabProps) {
  return (
    <div className="space-y-6">
      {/* Header del giorno */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-primary">
                {`Giorno ${workout.id.split("-")[1]}`}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                {workout.muscleGroups.map((muscleGroup) => (
                  <span
                    key={muscleGroup}
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getMuscleGroupColor(
                      muscleGroup
                    )}`}
                  >
                    {muscleGroup}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Lista esercizi */}
      <div className="space-y-6">
        {workout.exercises.map((exercise) => (
          <div key={exercise.id} className="relative">
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
    </div>
  );
}
