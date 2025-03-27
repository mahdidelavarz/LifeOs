import AuthLayout from "../../../components/layout/AuthLayout";
import useProgressStore from "../../../store/ProfileProgressStore";

function ThirdStep() {
  const { step } = useProgressStore();
  console.log(step);
  return (
    <AuthLayout isBack={false}>
      <div></div>
    </AuthLayout>
  );
}

export default ThirdStep;
