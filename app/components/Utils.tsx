import { LinearGradient } from "expo-linear-gradient";

export function GradientTheme({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={[ "#3515d2", "#3B4BFF", "#0a76b1"  ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
}