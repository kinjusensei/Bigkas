export function calculateAccuracy(
  correctAnswers: number,
  totalQuestions: number,
): number {
  if (totalQuestions === 0) return 0;

  return Math.round((correctAnswers / totalQuestions) * 100);
}

export function calculateXP(correctAnswers: number): number {
  return correctAnswers * 10;
}

export function calculateStars(accuracy: number): number {
  if (accuracy >= 90) return 3;
  if (accuracy >= 70) return 2;
  if (accuracy >= 50) return 1;

  return 0;
}

export function calculateBadge(accuracy: number): string {
  if (accuracy === 100) return "Perfect";
  if (accuracy >= 90) return "Excellent";
  if (accuracy >= 70) return "Great";
  if (accuracy >= 50) return "Good";

  return "Keep Practicing";
}
