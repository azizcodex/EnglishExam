import React from 'react';
import { Level } from '../types';

interface LevelBadgeProps {
  level: Level;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
}