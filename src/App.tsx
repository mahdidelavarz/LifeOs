import PwaInstallation from "./components/features/PwaInstallation";
import RoutineHabits from "./pages/RoutineHabits";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import ConfirmOtpForm from "./pages/auth/ConfirmOtpForm";
import FirstStep from "./pages/auth/completeProfile/FirstStep";
import SecondStep from "./pages/auth/completeProfile/SecondStep";
import ThirdStep from "./pages/auth/completeProfile/ThirdStep";
import FourthStep from "./pages/auth/completeProfile/FourthStep";

function App() {
  return (
    <div className="min-h-screen">
      <PwaInstallation />
      <Routes>
        <Route path="/" element={<RoutineHabits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmOtp" element={<ConfirmOtpForm />} />
        <Route path="/completeProfile/firstStep" element={<FirstStep />} />
        <Route path="/completeProfile/secondStep" element={<SecondStep />} />
        <Route path="/completeProfile/thirdStep" element={<ThirdStep />} />
        <Route path="/completeProfile/fourthStep" element={<FourthStep />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
