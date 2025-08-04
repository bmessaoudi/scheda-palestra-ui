"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Progress } from "./progress";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerProps {
  duration: number; // in secondi
  onComplete?: () => void;
}

export function Timer({ duration, onComplete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  const startTimer = useCallback(() => {
    setIsRunning(true);
    setIsCompleted(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  const resetTimer = useCallback(() => {
    setTimeLeft(duration);
    setIsRunning(false);
    setIsCompleted(false);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="space-y-4 p-6">
        <div className="text-center">
          <div className="text-4xl font-bold tracking-wider text-primary">
            {formatTime(timeLeft)}
          </div>
          <Progress value={progress} className="mt-2" />
        </div>

        <div className="flex justify-center gap-2">
          {!isRunning && timeLeft > 0 && !isCompleted && (
            <Button onClick={startTimer} size="sm">
              <Play className="h-4 w-4 mr-1" />
              Avvia
            </Button>
          )}

          {isRunning && (
            <Button onClick={pauseTimer} variant="outline" size="sm">
              <Pause className="h-4 w-4 mr-1" />
              Pausa
            </Button>
          )}

          <Button onClick={resetTimer} variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>

        {isCompleted && (
          <div className="text-center text-green-500 font-medium">
            Recupero completato! 🎉
          </div>
        )}
      </CardContent>
    </Card>
  );
}
