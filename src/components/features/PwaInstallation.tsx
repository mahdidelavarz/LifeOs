import { useEffect, useState } from "react";
import BeforeInstallPromptEvent from "../../types/pwaInstallation";
import useThemeStore from "../../store/themeStore";

function PwaInstallation() {
  const { theme } = useThemeStore(); // Zustand hook
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    document.documentElement.className = theme; // Set initial theme
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    });
  }, [theme]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted")
          console.log("User installed Life OS");
        setDeferredPrompt(null);
      });
    }
  };
  return (
    <div>
      {deferredPrompt && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleInstallClick}
            className="bg-accent-100 text-white px-4 py-2 rounded-lg shadow hover:bg-accent-200"
          >
            Install Life OS
          </button>
        </div>
      )}
    </div>
  );
}

export default PwaInstallation;
