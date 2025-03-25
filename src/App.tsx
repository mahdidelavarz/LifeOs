import { useState, useEffect } from 'react';
import RoutineHabits from './pages/RoutineHabits';
import './index.css';
import './styles/theme.css';

function App() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User installed Life OS');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="min-h-screen">
      {deferredPrompt && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleInstallClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Install Life OS
          </button>
        </div>
      )}
      <RoutineHabits />
    </div>
  );
}

export default App;

// Type for beforeinstallprompt (not in @types by default)
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}