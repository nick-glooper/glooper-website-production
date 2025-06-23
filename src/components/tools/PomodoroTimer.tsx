'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Coffee, 
  Brain,
  Clock,
  CheckCircle
} from 'lucide-react';

interface PomodoroSettings {
  workMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
  autoStartBreaks: boolean;
  autoStartSessions: boolean;
  soundEnabled: boolean;
}

type SessionType = 'work' | 'shortBreak' | 'longBreak';
type TimerState = 'idle' | 'running' | 'paused' | 'extending';

const defaultSettings: PomodoroSettings = {
  workMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 15,
  autoStartBreaks: false,
  autoStartSessions: false,
  soundEnabled: false,
};

export function PomodoroTimer() {
  const [settings, setSettings] = useState<PomodoroSettings>(defaultSettings);
  const [currentSession, setCurrentSession] = useState<SessionType>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [completedSessions, setCompletedSessions] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showExtendOption, setShowExtendOption] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize timer with current session duration
  useEffect(() => {
    const duration = currentSession === 'work' 
      ? settings.workMinutes * 60
      : currentSession === 'shortBreak'
      ? settings.shortBreakMinutes * 60
      : settings.longBreakMinutes * 60;
    
    if (timerState === 'idle') {
      setTimeLeft(duration);
    }
  }, [currentSession, settings, timerState]);

  // Timer countdown logic
  useEffect(() => {
    if (timerState === 'running') {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 30 && prev > 0 && currentSession === 'work') {
            // Show extend option 30 seconds before work session ends
            setShowExtendOption(true);
          }
          
          if (prev <= 1) {
            handleSessionComplete();
            return 0;
          }
          
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerState, currentSession]);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('glooper-pomodoro-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.warn('Failed to load pomodoro settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('glooper-pomodoro-settings', JSON.stringify(settings));
  }, [settings]);

  const handleSessionComplete = () => {
    setTimerState('idle');
    setShowExtendOption(false);
    
    if (currentSession === 'work') {
      setCompletedSessions(prev => prev + 1);
      // After 4 work sessions, suggest long break
      const nextBreak = (completedSessions + 1) % 4 === 0 ? 'longBreak' : 'shortBreak';
      setCurrentSession(nextBreak);
    } else {
      setCurrentSession('work');
    }

    if (settings.soundEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Handle audio play failure silently
      });
    }
  };

  const startTimer = () => {
    setTimerState('running');
    setShowExtendOption(false);
  };

  const pauseTimer = () => {
    setTimerState('paused');
  };

  const resetTimer = () => {
    setTimerState('idle');
    setShowExtendOption(false);
    const duration = currentSession === 'work' 
      ? settings.workMinutes * 60
      : currentSession === 'shortBreak'
      ? settings.shortBreakMinutes * 60
      : settings.longBreakMinutes * 60;
    setTimeLeft(duration);
  };

  const extendSession = (minutes: number) => {
    setTimeLeft(prev => prev + (minutes * 60));
    setShowExtendOption(false);
    setTimerState('extending');
    
    // Auto-resume if was running
    setTimeout(() => {
      if (timerState === 'running') {
        setTimerState('running');
      }
    }, 100);
  };

  const switchSession = (sessionType: SessionType) => {
    setCurrentSession(sessionType);
    setTimerState('idle');
    setShowExtendOption(false);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSessionIcon = (sessionType: SessionType) => {
    switch (sessionType) {
      case 'work':
        return <Brain className="w-5 h-5" />;
      case 'shortBreak':
        return <Coffee className="w-5 h-5" />;
      case 'longBreak':
        return <Coffee className="w-5 h-5" />;
    }
  };

  const getSessionLabel = (sessionType: SessionType) => {
    switch (sessionType) {
      case 'work':
        return 'Focus Time';
      case 'shortBreak':
        return 'Short Break';
      case 'longBreak':
        return 'Long Break';
    }
  };

  const getEncouragingMessage = () => {
    if (currentSession === 'work') {
      if (timerState === 'running') {
        return "You're in the zone! Keep going.";
      } else if (timerState === 'paused') {
        return "Take your time. Resume when ready.";
      }
      return "Ready to focus? No pressure.";
    } else {
      return "Enjoy your break. You've earned it.";
    }
  };

  return (
    <div className="bg-[var(--surface-primary)] rounded-[var(--radius-2xl)] p-8 border border-[var(--border-primary)] max-w-md mx-auto">
      {/* Audio element for notifications */}
      <audio
        ref={audioRef}
        preload="auto"
        aria-hidden="true"
      >
        <source src="/notification-gentle.mp3" type="audio/mpeg" />
      </audio>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-[var(--primary-500)]" />
          <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--text-primary)]">
            Adaptive Pomodoro
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Timer settings"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Session Type Selector */}
      <div className="flex gap-2 mb-6">
        {(['work', 'shortBreak', 'longBreak'] as SessionType[]).map((sessionType) => (
          <Button
            key={sessionType}
            variant={currentSession === sessionType ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => switchSession(sessionType)}
            disabled={timerState === 'running'}
            className="flex-1 flex items-center gap-2"
          >
            {getSessionIcon(sessionType)}
            <span className="text-xs">{getSessionLabel(sessionType)}</span>
          </Button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="text-center mb-8">
        <div className="text-[var(--font-size-5xl)] font-bold text-[var(--text-primary)] mb-2 font-mono">
          {formatTime(timeLeft)}
        </div>
        <p className="text-[var(--font-size-sm)] text-[var(--text-secondary)]">
          {getEncouragingMessage()}
        </p>
      </div>

      {/* Extend Session Option (ADHD-friendly) */}
      {showExtendOption && (
        <div className="bg-[var(--warning-light)] border border-[var(--warning)] rounded-[var(--radius-lg)] p-4 mb-6">
          <p className="text-[var(--font-size-sm)] text-[var(--warning)] mb-3 font-medium">
            In hyperfocus? Extend this session:
          </p>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => extendSession(5)}
              className="flex-1"
            >
              +5 min
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => extendSession(10)}
              className="flex-1"
            >
              +10 min
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => extendSession(15)}
              className="flex-1"
            >
              +15 min
            </Button>
          </div>
        </div>
      )}

      {/* Timer Controls */}
      <div className="flex gap-3 mb-6">
        {timerState === 'running' ? (
          <Button
            variant="secondary"
            size="lg"
            onClick={pauseTimer}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Pause className="w-5 h-5" />
            Pause
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={startTimer}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            {timerState === 'paused' ? 'Resume' : 'Start'}
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="lg"
          onClick={resetTimer}
          aria-label="Reset timer"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between text-[var(--font-size-sm)] text-[var(--text-tertiary)]">
        <span>Sessions completed: {completedSessions}</span>
        <div className="flex gap-1">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < completedSessions % 4
                  ? 'bg-[var(--primary-500)]'
                  : 'bg-[var(--border-primary)]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
          <h4 className="text-[var(--font-size-lg)] font-semibold text-[var(--text-primary)] mb-4">
            Timer Settings
          </h4>
          
          <div className="space-y-4">
            {/* Work Duration */}
            <div>
              <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
                Work Duration (minutes)
              </label>
              <input
                type="number"
                min="15"
                max="60"
                value={settings.workMinutes}
                onChange={(e) => setSettings(prev => ({ 
                  ...prev, 
                  workMinutes: parseInt(e.target.value) || 25 
                }))}
                className="w-full px-3 py-2 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2"
              />
            </div>

            {/* Break Durations */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
                  Short Break
                </label>
                <input
                  type="number"
                  min="3"
                  max="15"
                  value={settings.shortBreakMinutes}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    shortBreakMinutes: parseInt(e.target.value) || 5 
                  }))}
                  className="w-full px-3 py-2 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2"
                />
              </div>
              
              <div>
                <label className="block text-[var(--font-size-sm)] font-medium text-[var(--text-primary)] mb-2">
                  Long Break
                </label>
                <input
                  type="number"
                  min="15"
                  max="30"
                  value={settings.longBreakMinutes}
                  onChange={(e) => setSettings(prev => ({ 
                    ...prev, 
                    longBreakMinutes: parseInt(e.target.value) || 15 
                  }))}
                  className="w-full px-3 py-2 rounded-[var(--radius-lg)] border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-3 focus:ring-[var(--border-focus)] focus:ring-offset-2"
                />
              </div>
            </div>

            {/* Sound Toggle */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={(e) => setSettings(prev => ({ 
                  ...prev, 
                  soundEnabled: e.target.checked 
                }))}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  settings.soundEnabled
                    ? 'border-[var(--primary-500)] bg-[var(--primary-500)]'
                    : 'border-[var(--border-secondary)]'
                }`}
              >
                {settings.soundEnabled && (
                  <CheckCircle className="w-3 h-3 text-white" />
                )}
              </div>
              <span className="text-[var(--font-size-sm)] text-[var(--text-primary)]">
                Gentle notification sounds
              </span>
            </label>
          </div>
        </div>
      )}

      {/* ADHD-Friendly Insights */}
      <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
        <h4 className="text-[var(--font-size-sm)] font-semibold text-[var(--text-primary)] mb-2">
          💡 ADHD-Friendly Features
        </h4>
        <ul className="text-[var(--font-size-xs)] text-[var(--text-secondary)] space-y-1">
          <li>• Extend sessions during hyperfocus</li>
          <li>• No shame language - "resume when ready"</li>
          <li>• Gentle visual transitions and notifications</li>
          <li>• Flexible timing to match your rhythm</li>
        </ul>
      </div>
    </div>
  );
}