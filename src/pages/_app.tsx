"use client";

import React from 'react';
import PomodoroTimer from '@/components/pomodoro-timer';
import TodoList from '@/components/todo-list';
import useLocalStorage from '@/hooks/use-local-storage';
import type { Task } from '@/types';
import { Timer } from 'lucide-react'; // Changed from TimerIcon to Timer as per lucide-react
import "@/styles/globals.css";

export default function App() {

  const [tasks, setTasks] = useLocalStorage<Task[]>('todoTasks', []);


  return (<div className="container mx-auto px-4 py-8 flex flex-col items-center min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-primary flex items-center justify-center">
          <Timer className="w-12 h-12 mr-3" /> FocusFlow
        </h1>
        <p className="text-lg text-muted-foreground mt-2">Boost your productivity, one session at a time.</p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="pomodoro-section flex justify-center lg:justify-end">
          <PomodoroTimer />
        </section>
        <section className="todo-section flex flex-col items-center lg:items-start">
          <TodoList tasks={tasks} onTasksChange={setTasks} />
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} FocusFlow. Stay focused!</p>
      </footer>
    </div>
  );
}