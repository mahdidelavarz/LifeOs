import useThemeStore from '../store/themeStore';
import { RoutineHabit } from '../types/routineHabit';

function RoutineHabits() {
  const { theme, setTheme } = useThemeStore();

  const routines: RoutineHabit[] = [
    {
      id: 1,
      title: 'Water the plants',
      next: 'Sat, Mar 22, 10 AM',
      repetition: 'Every Saturday',
      priority: 'Medium',
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-light-bg-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-text-100">Routine Habits</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('light')}
              className={`px-4 py-1 rounded  bg-accent-100 hover:bg-accent-200 ${theme === 'light' ? 'ring-2 ring-border-100' : ''}`}
            >
              Light
            </button>
            <button
              onClick={() => setTheme('rainbow')}
              className={`px-4 py-1 rounded  bg-accent-100 hover:bg-accent-200 ${theme === 'rainbow' ? 'ring-2 ring-border-100' : ''}`}
            >
              Rainbow
            </button>
            <button
              onClick={() => setTheme('obsidian')}
              className={`px-4 py-1 rounded  bg-accent-100 hover:bg-accent-200 ${theme === 'obsidian' ? 'ring-2 ring-border-100' : ''}`}
            >
              Obsidian
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routines.map((routine) => (
            <div
              key={routine.id}
              className="bg-white p-4 rounded-lg shadow-md border border-border-100"
            >
              <h2 className="text-xl font-semibold text-text-100">{routine.title}</h2>
              <p className="text-dark-text-100">Next: {routine.next}</p>
              <p className="text-sm text-text-200">Repeats: {routine.repetition}</p>
              <p className="text-sm text-text-200">Priority: {routine.priority}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoutineHabits;