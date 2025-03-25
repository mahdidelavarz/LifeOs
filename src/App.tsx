import PwaInstallation from "./components/features/PwaInstallation";
import RoutineHabits from "./pages/RoutineHabits";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen">
      <PwaInstallation />
      <Routes>
        <Route path="/" element={<RoutineHabits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
