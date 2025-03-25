export interface RoutineHabit {
    id: number;
    title: string;
    next: string;
    repetition: string;
    priority: 'High' | 'Medium' | 'Low';
  }