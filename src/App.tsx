import PwaInstallation from "./components/features/PwaInstallation";
import RoutineHabits from "./pages/RoutineHabits";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import ConfirmOtpForm from "./pages/auth/ConfirmOtpForm";
import FirstStep from "./pages/auth/completeProfile/FirstStep";
import SecondStep from "./pages/auth/completeProfile/SecondStep";
import ThirdStep from "./pages/auth/completeProfile/ThirdStep";
import FourthStep from "./pages/auth/completeProfile/FourthStep";
import CompleteProfileLayout from "./components/layout/CompleteProfileLayout";

function App() {
  return (
    <div className="min-h-screen">
      <PwaInstallation />
      <Routes>
        <Route path="/" element={<RoutineHabits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmOtp" element={<ConfirmOtpForm />} />
        <Route
          path="/completeProfile"
          element={<Navigate to="/completeProfile/firstStep" replace />}
        />
        <Route path="/completeProfile" element={<CompleteProfileLayout />}>
          <Route path="firstStep" element={<FirstStep />} />
          <Route path="secondStep" element={<SecondStep />} />
          <Route path="thirdStep" element={<ThirdStep />} />
          <Route path="fourthStep" element={<FourthStep />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
