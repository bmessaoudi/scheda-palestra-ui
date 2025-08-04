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
import { WorkoutExercise } from "@/types/workout";
import { Image, Video, Timer as TimerIcon } from "lucide-react";
import { getMuscleGroupColor } from "@/lib/utils";

interface ExerciseCardProps {
  exercise: WorkoutExercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-xl">
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
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {exercise.sets}
            </div>
            <div className="text-xs text-muted-foreground">Serie</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {exercise.reps}
            </div>
            <div className="text-xs text-muted-foreground">Ripetizioni</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">
              {Math.floor(exercise.restTime / 60)}:
              {(exercise.restTime % 60).toString().padStart(2, "0")}
            </div>
            <div className="text-xs text-muted-foreground">Recupero</div>
          </div>
        </div>

        {/* Descrizione sempre visibile */}
        {exercise.notes && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
            <p className="text-sm text-muted-foreground">{exercise.notes}</p>
          </div>
        )}

        {/* Timer sempre visibile */}
        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <TimerIcon className="h-4 w-4" />
            <span className="text-sm font-medium">Timer Recupero</span>
          </div>
          <Timer duration={exercise.restTime} />
        </div>
      </CardContent>
    </Card>
  );
}
