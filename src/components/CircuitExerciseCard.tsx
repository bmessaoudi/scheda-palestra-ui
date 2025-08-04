"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer } from "@/components/ui/timer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircuitExercise } from "@/types/workout";
import { Image, Video, Timer as TimerIcon } from "lucide-react";

interface CircuitExerciseCardProps {
  exercise: CircuitExercise;
  exerciseNumber: number;
}

export function CircuitExerciseCard({
  exercise,
  exerciseNumber,
}: CircuitExerciseCardProps) {
  const getMuscleGroupColor = (muscleGroup: string) => {
    const colors: Record<string, string> = {
      Petto: "bg-red-500/20 text-red-500 border-red-500/30",
      Schiena: "bg-blue-500/20 text-blue-500 border-blue-500/30",
      Gambe: "bg-green-500/20 text-green-500 border-green-500/30",
      Spalle: "bg-purple-500/20 text-purple-500 border-purple-500/30",
      Bicipiti: "bg-orange-500/20 text-orange-500 border-orange-500/30",
      Tricipiti: "bg-pink-500/20 text-pink-500 border-pink-500/30",
      Addominali: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
      Polpacci: "bg-teal-500/20 text-teal-500 border-teal-500/30",
    };
    return (
      colors[muscleGroup] || "bg-gray-500/20 text-gray-500 border-gray-500/30"
    );
  };

  return (
    <Card className="w-full border-yellow-500/30 bg-yellow-500/5">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                #{exerciseNumber}
              </span>
              {exercise.name}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              {exercise.muscleGroups.map((muscleGroup) => (
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

          <div className="flex gap-2">
            {(exercise.imageUrl || exercise.videoUrl) && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    {exercise.videoUrl ? (
                      <Video className="h-4 w-4" />
                    ) : (
                      <Image className="h-4 w-4" />
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{exercise.name}</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    {exercise.videoUrl ? (
                      <video controls className="w-full h-full rounded-lg">
                        <source src={exercise.videoUrl} type="video/mp4" />
                        Il tuo browser non supporta il tag video.
                      </video>
                    ) : exercise.imageUrl ? (
                      <img
                        src={exercise.imageUrl}
                        alt={exercise.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-muted-foreground">
                        Nessun media disponibile
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {exercise.sets}
            </div>
            <div className="text-xs text-muted-foreground">Circuiti</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {exercise.time}
            </div>
            <div className="text-xs text-muted-foreground">Durata</div>
          </div>
        </div>

        {/* Descrizione sempre visibile */}
        {exercise.notes && (
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-sm text-muted-foreground">{exercise.notes}</p>
          </div>
        )}

        {/* Timer per il recupero (solo se presente) */}
        {exercise.time > 0 && (
          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <TimerIcon className="h-4 w-4" />
              <span className="text-sm font-medium">
                Recupero dopo Circuito
              </span>
            </div>
            <Timer duration={exercise.time} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
