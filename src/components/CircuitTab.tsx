import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Circuit } from "@/types/workout";
import { CircuitExerciseCard } from "./CircuitExerciseCard";
import { getMuscleGroupColor } from "@/lib/utils";

export function CircuitTab({ circuit }: { circuit: Circuit }) {
  return (
    <div className="space-y-6">
      {/* Header del giorno */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-primary">
                {circuit.name}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                {circuit.muscleGroups.map((muscleGroup) => (
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
              <p className="text-sm text-muted-foreground mt-2">
                Fare tutti gli esercizi senza alcun recupero tra uno e
                l&apos;altro e riposare alla fine del circuito
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Lista esercizi */}
      <div className="space-y-6">
        {circuit.exercises.map((exercise, index) => (
          <div key={exercise.id} className="relative">
            <CircuitExerciseCard
              exercise={exercise}
              exerciseNumber={index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
