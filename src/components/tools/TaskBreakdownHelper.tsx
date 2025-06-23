'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  ListChecks, 
  Plus, 
  CheckCircle, 
  Circle, 
  Zap, 
  Coffee, 
  Battery, 
  Trash2,
  Lightbulb,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface TaskStep {
  id: string;
  text: string;
  completed: boolean;
  energyLevel: 'low' | 'medium' | 'high';
  estimatedMinutes: number;
}

interface TaskTemplate {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  steps: Omit<TaskStep, 'id' | 'completed'>[];
}


const taskTemplates: TaskTemplate[] = [
  {
    id: 'organize-room',
    name: 'Organize My Room',
    description: 'Break down room organization into manageable chunks',
    keywords: ['organize', 'room', 'clean', 'tidy', 'declutter', 'space'],
    steps: [
      { text: 'Set a 15-minute timer for initial momentum', energyLevel: 'low', estimatedMinutes: 15 },
      { text: 'Choose one small area to start (desk, nightstand, or corner)', energyLevel: 'low', estimatedMinutes: 5 },
      { text: 'Sort items into 3 piles: keep, donate, trash', energyLevel: 'medium', estimatedMinutes: 20 },
      { text: 'Put "keep" items in their designated places', energyLevel: 'medium', estimatedMinutes: 15 },
      { text: 'Take a 5-minute break and celebrate progress', energyLevel: 'low', estimatedMinutes: 5 },
      { text: 'Bag up donation items and put by door', energyLevel: 'low', estimatedMinutes: 10 },
      { text: 'Take out trash items immediately', energyLevel: 'medium', estimatedMinutes: 5 },
    ]
  },
  {
    id: 'job-application',
    name: 'Job Application',
    description: 'Step-by-step approach to job applications',
    keywords: ['job', 'application', 'resume', 'cover letter', 'apply', 'work'],
    steps: [
      { text: 'Read job description thoroughly and take notes', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Update resume with relevant experience first', energyLevel: 'high', estimatedMinutes: 30 },
      { text: 'Take a 10-minute break - grab water/snack', energyLevel: 'low', estimatedMinutes: 10 },
      { text: 'Draft cover letter opening paragraph', energyLevel: 'high', estimatedMinutes: 15 },
      { text: 'Write middle paragraph highlighting key skills', energyLevel: 'high', estimatedMinutes: 20 },
      { text: 'Craft closing paragraph with call to action', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Proofread everything once (don\'t over-edit)', energyLevel: 'medium', estimatedMinutes: 15 },
      { text: 'Submit application before you second-guess yourself', energyLevel: 'low', estimatedMinutes: 5 },
    ]
  },
  {
    id: 'start-project',
    name: 'Start New Project',
    description: 'Overcome project initiation paralysis',
    keywords: ['project', 'start', 'begin', 'initiate', 'create', 'new'],
    steps: [
      { text: 'Write down the project goal in one sentence', energyLevel: 'low', estimatedMinutes: 5 },
      { text: 'List 3 things you already know about the project', energyLevel: 'low', estimatedMinutes: 10 },
      { text: 'Identify the very first small action you can take', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Do that first action right now (set 10-min timer)', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Celebrate completing the first step!', energyLevel: 'low', estimatedMinutes: 2 },
      { text: 'List 2-3 next logical steps', energyLevel: 'medium', estimatedMinutes: 15 },
      { text: 'Schedule time for next step in your calendar', energyLevel: 'low', estimatedMinutes: 5 },
    ]
  },
  {
    id: 'prepare-meeting',
    name: 'Prepare for Meeting',
    description: 'Meeting preparation without overthinking',
    keywords: ['meeting', 'prepare', 'presentation', 'work', 'discuss'],
    steps: [
      { text: 'Review meeting agenda and identify key topics', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Write down 2-3 main points you want to contribute', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Gather any documents or files you might need', energyLevel: 'low', estimatedMinutes: 5 },
      { text: 'Prepare 1-2 questions to ask if conversation lags', energyLevel: 'medium', estimatedMinutes: 5 },
      { text: 'Test tech setup if it\'s a video call', energyLevel: 'low', estimatedMinutes: 5 },
      { text: 'Set reminder 10 minutes before meeting', energyLevel: 'low', estimatedMinutes: 2 },
    ]
  },
  {
    id: 'learn-skill',
    name: 'Learn New Skill',
    description: 'Structured approach to skill acquisition',
    keywords: ['learn', 'skill', 'study', 'practice', 'develop', 'improve'],
    steps: [
      { text: 'Choose one specific aspect of the skill to focus on today', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Find one high-quality tutorial or resource', energyLevel: 'medium', estimatedMinutes: 15 },
      { text: 'Watch/read for 20 minutes, take notes on key points', energyLevel: 'high', estimatedMinutes: 20 },
      { text: 'Try applying what you learned for 15 minutes', energyLevel: 'high', estimatedMinutes: 15 },
      { text: 'Take a break - let your brain process', energyLevel: 'low', estimatedMinutes: 10 },
      { text: 'Practice the same thing for another 10 minutes', energyLevel: 'medium', estimatedMinutes: 10 },
      { text: 'Write down one thing you learned today', energyLevel: 'low', estimatedMinutes: 5 },
    ]
  },
];

const energyIcons = {
  low: Coffee,
  medium: Battery,
  high: Zap,
};

const energyLabels = {
  low: 'Low Energy',
  medium: 'Medium Energy', 
  high: 'High Energy',
};

const energyColors = {
  low: 'text-blue-600 bg-blue-50 border-blue-200',
  medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
  high: 'text-red-600 bg-red-50 border-red-200',
};

export function TaskBreakdownHelper() {
  const [taskInput, setTaskInput] = useState('');
  const [currentSteps, setCurrentSteps] = useState<TaskStep[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<TaskTemplate | null>(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [taskHistory, setTaskHistory] = useState<Array<{
    task: string;
    steps: TaskStep[];
    completedAt: Date;
  }>>([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('glooper-task-history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTaskHistory(parsed.map((item: { task: string; steps: TaskStep[]; completedAt: string }) => ({
          ...item,
          completedAt: new Date(item.completedAt)
        })));
      } catch (error) {
        console.warn('Failed to load task history:', error);
      }
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (taskHistory.length > 0) {
      localStorage.setItem('glooper-task-history', JSON.stringify(taskHistory));
    }
  }, [taskHistory]);

  const findMatchingTemplate = (input: string): TaskTemplate | null => {
    const lowerInput = input.toLowerCase();
    return taskTemplates.find(template => 
      template.keywords.some(keyword => lowerInput.includes(keyword))
    ) || null;
  };

  const generateStepsFromTemplate = (template: TaskTemplate): TaskStep[] => {
    return template.steps.map((step, index) => ({
      id: `step-${Date.now()}-${index}`,
      text: step.text,
      completed: false,
      energyLevel: step.energyLevel,
      estimatedMinutes: step.estimatedMinutes,
    }));
  };

  const generateCustomSteps = (task: string): TaskStep[] => {
    // Simple AI-like logic for breaking down tasks
    const steps: TaskStep[] = [];
    const taskLower = task.toLowerCase();
    
    // Add common preparatory steps
    steps.push({
      id: `step-${Date.now()}-0`,
      text: `Take 2 minutes to gather any materials needed for: ${task}`,
      completed: false,
      energyLevel: 'low',
      estimatedMinutes: 5,
    });

    // Add main work steps based on task complexity
    if (task.length > 50 || taskLower.includes('complex') || taskLower.includes('difficult')) {
      steps.push({
        id: `step-${Date.now()}-1`,
        text: `Break down "${task}" into 3 smaller parts`,
        completed: false,
        energyLevel: 'medium',
        estimatedMinutes: 10,
      });
      
      steps.push({
        id: `step-${Date.now()}-2`,
        text: `Work on the first part for 20 minutes`,
        completed: false,
        energyLevel: 'high',
        estimatedMinutes: 20,
      });
      
      steps.push({
        id: `step-${Date.now()}-3`,
        text: `Take a 5-minute break and assess progress`,
        completed: false,
        energyLevel: 'low',
        estimatedMinutes: 5,
      });
      
      steps.push({
        id: `step-${Date.now()}-4`,
        text: `Continue with the next part`,
        completed: false,
        energyLevel: 'medium',
        estimatedMinutes: 15,
      });
    } else {
      steps.push({
        id: `step-${Date.now()}-1`,
        text: `Start working on: ${task}`,
        completed: false,
        energyLevel: 'medium',
        estimatedMinutes: 15,
      });
      
      steps.push({
        id: `step-${Date.now()}-2`,
        text: `Review and refine your work`,
        completed: false,
        energyLevel: 'low',
        estimatedMinutes: 10,
      });
    }

    // Add completion step
    steps.push({
      id: `step-${Date.now()}-final`,
      text: `Celebrate completing: ${task}!`,
      completed: false,
      energyLevel: 'low',
      estimatedMinutes: 2,
    });

    return steps;
  };

  const handleBreakdownTask = () => {
    if (!taskInput.trim()) return;

    const matchedTemplate = findMatchingTemplate(taskInput);
    
    if (matchedTemplate) {
      setSelectedTemplate(matchedTemplate);
      setCurrentSteps(generateStepsFromTemplate(matchedTemplate));
    } else {
      setSelectedTemplate(null);
      setCurrentSteps(generateCustomSteps(taskInput));
    }
    
    setShowTemplates(false);
  };

  const toggleStep = (stepId: string) => {
    setCurrentSteps(prev => prev.map(step =>
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

  const addCustomStep = () => {
    const newStep: TaskStep = {
      id: `custom-${Date.now()}`,
      text: '',
      completed: false,
      energyLevel: 'medium',
      estimatedMinutes: 15,
    };
    setCurrentSteps(prev => [...prev, newStep]);
  };

  const updateStep = (stepId: string, updates: Partial<TaskStep>) => {
    setCurrentSteps(prev => prev.map(step =>
      step.id === stepId ? { ...step, ...updates } : step
    ));
  };

  const removeStep = (stepId: string) => {
    setCurrentSteps(prev => prev.filter(step => step.id !== stepId));
  };

  const resetBreakdown = () => {
    setCurrentSteps([]);
    setSelectedTemplate(null);
    setTaskInput('');
  };

  const saveToHistory = () => {
    if (currentSteps.length > 0 && taskInput.trim()) {
      const newEntry = {
        task: taskInput,
        steps: currentSteps,
        completedAt: new Date(),
      };
      setTaskHistory(prev => [newEntry, ...prev.slice(0, 9)]); // Keep last 10
      resetBreakdown();
    }
  };

  const completedSteps = currentSteps.filter(step => step.completed).length;
  const totalEstimatedTime = currentSteps.reduce((sum, step) => sum + step.estimatedMinutes, 0);
  const progressPercentage = currentSteps.length > 0 ? (completedSteps / currentSteps.length) * 100 : 0;

  return (
    <div className="bg-[var(--surface-primary)] rounded-[var(--radius-2xl)] p-8 border border-[var(--border-primary)] max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <ListChecks className="w-6 h-6 text-[var(--primary-500)]" />
        <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
          Task Breakdown Helper
        </h3>
      </div>

      {/* Task Input */}
      <div className="mb-6">
        <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
          What task feels overwhelming right now?
        </label>
        <div className="flex gap-3">
          <textarea
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="e.g., Organize my room, Apply for that job, Start my project..."
            className="flex-1 px-4 py-3 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2 resize-none"
            rows={3}
          />
        </div>
        
        <div className="flex gap-2 mt-3">
          <Button
            onClick={handleBreakdownTask}
            disabled={!taskInput.trim()}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Break It Down
          </Button>
          
          <Button
            variant="secondary"
            onClick={() => setShowTemplates(!showTemplates)}
            className="flex items-center gap-2"
          >
            <Lightbulb className="w-4 h-4" />
            Templates
          </Button>
          
          {currentSteps.length > 0 && (
            <Button
              variant="ghost"
              onClick={resetBreakdown}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Template Suggestions */}
      {showTemplates && (
        <div className="mb-6 p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-lg)]">
          <h4 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-3">
            Choose a Template
          </h4>
          <div className="grid gap-2">
            {taskTemplates.map(template => (
              <button
                key={template.id}
                onClick={() => {
                  setTaskInput(template.name);
                  setSelectedTemplate(template);
                  setCurrentSteps(generateStepsFromTemplate(template));
                  setShowTemplates(false);
                }}
                className="text-left p-3 rounded-[var(--radius-md)] border border-[var(--border-primary)] hover:bg-[var(--surface-primary)] transition-colors"
              >
                <div className="font-medium text-[var(--text-primary)] text-[var(--font-size-sm)]">
                  {template.name}
                </div>
                <div className="text-[var(--text-tertiary)] text-[var(--font-size-xs)] mt-1">
                  {template.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress Overview */}
      {currentSteps.length > 0 && (
        <div className="mb-6 p-4 bg-[var(--bg-secondary)] rounded-[var(--radius-lg)]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)]">
              Progress Overview
            </h4>
            {selectedTemplate && (
              <span className="text-[var(--font-size-xs)] text-[var(--primary-500)] font-medium">
                Using: {selectedTemplate.name}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-[var(--font-size-sm)] text-[var(--text-secondary)]">
            <span>{completedSteps} / {currentSteps.length} steps</span>
            <span>•</span>
            <span>~{totalEstimatedTime} min total</span>
            <span>•</span>
            <span>{Math.round(progressPercentage)}% complete</span>
          </div>
          
          <div className="mt-3 bg-[var(--border-primary)] rounded-full h-2">
            <div 
              className="bg-[var(--primary-500)] rounded-full h-2 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Steps List */}
      {currentSteps.length > 0 && (
        <div className="space-y-3 mb-6">
          {currentSteps.map((step, index) => {
            const EnergyIcon = energyIcons[step.energyLevel];
            
            return (
              <div
                key={step.id}
                className={cn(
                  "p-4 rounded-[var(--radius-lg)] border transition-all",
                  step.completed 
                    ? "bg-[var(--success-light)] border-[var(--success)]" 
                    : "bg-[var(--surface-secondary)] border-[var(--border-primary)] hover:border-[var(--border-secondary)]"
                )}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="mt-1 focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] rounded"
                  >
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[var(--border-secondary)]" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[var(--font-size-xs)] text-[var(--text-tertiary)] font-medium">
                        Step {index + 1}
                      </span>
                      
                      <div className={cn(
                        "flex items-center gap-1 px-2 py-1 rounded-full text-[var(--font-size-xs)] border",
                        energyColors[step.energyLevel]
                      )}>
                        <EnergyIcon className="w-3 h-3" />
                        {energyLabels[step.energyLevel]}
                      </div>
                      
                      <span className="text-[var(--font-size-xs)] text-[var(--text-tertiary)]">
                        ~{step.estimatedMinutes} min
                      </span>
                    </div>
                    
                    <textarea
                      value={step.text}
                      onChange={(e) => updateStep(step.id, { text: e.target.value })}
                      className="w-full text-[var(--text-primary)] bg-transparent border-none resize-none focus:outline-none"
                      style={{ 
                        textDecoration: step.completed ? 'line-through' : 'none',
                        opacity: step.completed ? 0.7 : 1
                      }}
                      rows={2}
                    />
                  </div>
                  
                  <button
                    onClick={() => removeStep(step.id)}
                    className="text-[var(--text-tertiary)] hover:text-[var(--error)] focus:outline-none focus:ring-2 focus:ring-[var(--border-focus)] rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
          
          <Button
            variant="ghost"
            onClick={addCustomStep}
            className="w-full flex items-center gap-2 border-2 border-dashed border-[var(--border-secondary)] hover:border-[var(--border-primary)]"
          >
            <Plus className="w-4 h-4" />
            Add Custom Step
          </Button>
        </div>
      )}

      {/* Action Buttons */}
      {currentSteps.length > 0 && (
        <div className="flex gap-3">
          <Button
            onClick={saveToHistory}
            disabled={completedSteps === 0}
            className="flex-1"
          >
            Save Progress
          </Button>
          
          {completedSteps === currentSteps.length && (
            <Button
              variant="secondary"
              onClick={() => {
                // Celebration animation could go here
                saveToHistory();
              }}
              className="bg-[var(--success)] text-white hover:bg-green-700"
            >
              🎉 Complete!
            </Button>
          )}
        </div>
      )}

      {/* ADHD-Friendly Insights */}
      <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
        <h4 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-2">
          💡 Executive Function Support
        </h4>
        <ul className="text-[var(--font-size-xs)] text-[var(--text-secondary)] space-y-1">
          <li>• Energy-level matching for optimal task sequencing</li>
          <li>• 15-30 minute chunks to prevent overwhelm</li>
          <li>• Built-in breaks and celebration moments</li>
          <li>• Flexible steps you can edit and customize</li>
        </ul>
      </div>
    </div>
  );
}