import useThemeStore from '../store/themeStore';
import { RoutineHabit } from '../types/routineHabit';

function RoutineHabits() {
  const { theme } = useThemeStore();

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
    <div data-theme={theme} className="min-h-screen p-6 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            Routine Habits
          </h1>
          <button className="bg-[var(--accent)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
            Add New Routine Habit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routines.map((routine) => (
            <div
              key={routine.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                {routine.title}
              </h2>
              <p className="text-gray-700">Next: {routine.next}</p>
              <p className="text-sm text-gray-500">Repeats: {routine.repetition}</p>
              <p className="text-sm text-gray-500">Priority: {routine.priority}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoutineHabits;