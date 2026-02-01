import { LinearGradient } from "expo-linear-gradient";

export function GradientTheme({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={[ "#179be2", "#3B4BFF", "#3515d2" ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}