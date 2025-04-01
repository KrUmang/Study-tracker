import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function StudyTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Spring Boot Video 1", completed: false },
    { id: 2, name: "Spring Boot Video 2", completed: false },
    { id: 3, name: "Math Class (12-2 PM)", completed: false },
    { id: 4, name: "Math Revision", completed: false },
    { id: 5, name: "Project Work", completed: false },
    { id: 6, name: "College Exam Study", completed: false },
    { id: 7, name: "DSA Practice", completed: false },
    { id: 8, name: "Reasoning & English (Optional)", completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const resetTasks = () => {
    setTasks(tasks.map(task => ({ ...task, completed: false })));
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Daily Study Progress Tracker</h1>
      <Card>
        <CardContent className="p-4 space-y-3">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center space-x-3">
              <Checkbox 
                checked={task.completed} 
                onCheckedChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>{task.name}</span>
            </div>
          ))}
          <Button onClick={resetTasks} className="mt-4">Reset</Button>
        </CardContent>
      </Card>
    </div>
  );
}
