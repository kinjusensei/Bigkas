import InfoStep from "./tutorial/InfoStep";
import WelcomeStep from "./tutorial/WelcomeStep";

type TutorialStep = {
  type: string;
  icon: string;
  title: string;
  description: string;
  button: string;
  cardTitle?: string;
  cardItems?: string[];
};

type TutorialContentProps = {
  step: TutorialStep;
};

export default function TutorialContent({ step }: TutorialContentProps) {
  if (step.type === "welcome") {
    return (
      <WelcomeStep
        icon={step.icon}
        title={step.title}
        description={step.description}
      />
    );
  }

  return (
    <InfoStep
      icon={step.icon}
      title={step.title}
      description={step.description}
      cardTitle={step.cardTitle ?? ""}
      cardItems={step.cardItems ?? []}
    />
  );
}
