import StartRegister from "@/components/StartRegister";
import ConfirmCard from "@/components/ConfirmCard";
import { useState } from "react";

const Plans = () => {
  const [step, setStep] = useState("1");
  const [user, setUser] = useState(null);
  const goBack = () => setStep("1");
  const goNext = () => setStep("2");

  return (
    <section>
      {step == "1" && <StartRegister goNext={goNext} />}
      {step == "2" && <ConfirmCard goBack={goBack} />}
    </section>
  );
};

export default Plans;
