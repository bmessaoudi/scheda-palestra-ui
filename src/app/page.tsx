"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkoutTab } from "@/components/WorkoutTab";
import { workoutPlan } from "@/data/workout-data";
import { Dumbbell } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Timer } from "@/components/ui/timer";
import { Circuit } from "@/types/workout";
import { CircuitTab } from "@/components/CircuitTab";

export default function Home() {
  const [activeDay, setActiveDay] = useState(workoutPlan.days[0].id);

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-b">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary">
              {workoutPlan.name}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>👤 Nome: Bilal Messaoudi</span>
            <span>📅 Durata: 8-10 settimane</span>
            <span>🏋️‍♂️ 3 giorni settimanali</span>
          </div>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-6 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              Cardio
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-xs text-muted-foreground">Minuti</div>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-xs text-muted-foreground">Pendenza</div>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Velocità</div>
              </div>
            </div>
            {/* Timer sempre visibile */}
            <Timer
              duration={900} // 15 minuti in secondi
            />
          </CardContent>
        </Card>
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="grid w-full h-auto grid-cols-4 mb-8">
            {[...workoutPlan.days, ...workoutPlan.circuits].map((day) => (
              <TabsTrigger key={day.id} value={day.id} className="text-sm">
                {day.type === "workout"
                  ? `Giorno ${day.id.split("-")[1]}`
                  : "Circuito"}
              </TabsTrigger>
            ))}
          </TabsList>

          {[...workoutPlan.days, ...workoutPlan.circuits].map((day) => (
            <TabsContent key={day.id} value={day.id}>
              {day.type === "workout" ? (
                <WorkoutTab workout={day} />
              ) : (
                <CircuitTab circuit={day as Circuit} />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>💪 Scheda Allenamento Palestra</p>
            <p className="mt-1">Sviluppato da BM with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
