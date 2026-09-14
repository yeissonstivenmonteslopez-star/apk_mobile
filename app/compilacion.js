import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TerminalView from "../components/TerminalView";
import { COLORS, SPACING, RADIUS } from "../constants/theme";

const APK_STEPS = [
  "$ npx expo prebuild",
  "✔ Proyecto nativo generado en /android",
  "$ cd android && ./gradlew assembleRelease",
  "> Compilando en modo Release...",
  "> Aplicando R8 / ProGuard...",
  "> Firmando con Keystore...",
  "BUILD SUCCESSFUL",
  "✔ app-release.apk generado (simulado)",
];

const AAB_STEPS = [
  "$ npx expo prebuild",
  "✔ Proyecto nativo generado en /android",
  "$ eas build -p android --profile preview",
  "> Subiendo proyecto a EAS Build...",
  "> Compilando bundle...",
  "$ eas build -p android --profile production",
  "> Generando paquete de distribución...",
  "BUILD SUCCESSFUL",
  "✔ app-release.aab generado (simulado)",
];

export default function Compilacion() {
  const [lines, setLines] = useState([]);
  const [running, setRunning] = useState(false);
  const timeoutsRef = useRef([]);

  const clearTimers = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const runSimulation = (steps) => {
    clearTimers();
    setLines([]);
    setRunning(true);
    steps.forEach((line, index) => {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === steps.length - 1) {
          setRunning(false);
        }
      }, (index + 1) * 500);
      timeoutsRef.current.push(t);
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Compilación</Text>
      <Text style={styles.subheading}>
        Simulación del proceso de generación de la aplicación Android.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>APK</Text>
        <Text style={styles.cardText}>
          El APK puede utilizarse para instalar y probar la aplicación
          directamente en un dispositivo Android.
        </Text>
        <TouchableOpacity
          style={styles.actionButton}
          disabled={running}
          onPress={() => runSimulation(APK_STEPS)}
        >
          <Ionicons name="play" size={16} color={COLORS.white} />
          <Text style={styles.actionText}>Simular compilación APK</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>AAB</Text>
        <Text style={styles.cardText}>
          El AAB es el formato utilizado para distribuir la aplicación
          mediante Google Play.
        </Text>
        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonDark]}
          disabled={running}
          onPress={() => runSimulation(AAB_STEPS)}
        >
          <Ionicons name="play" size={16} color={COLORS.white} />
          <Text style={styles.actionText}>Simular compilación AAB</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.terminalLabel}>Terminal</Text>
      <TerminalView lines={lines} />

      <View style={styles.noticeBox}>
        <Ionicons name="information-circle" size={18} color={COLORS.blue} />
        <Text style={styles.noticeText}>
          Importante: los comandos mostrados son únicamente simulados dentro
          de la interfaz. La aplicación no ejecuta comandos reales del
          sistema.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.darkBlue,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: SPACING.lg,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.darkBlue,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 13,
    color: COLORS.gray,
    lineHeight: 19,
    marginBottom: SPACING.md,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.sm,
    paddingVertical: 10,
    gap: 6,
  },
  actionButtonDark: {
    backgroundColor: COLORS.darkBlue,
  },
  actionText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 13,
    marginLeft: 6,
  },
  terminalLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.darkBlue,
    marginBottom: SPACING.sm,
  },
  noticeBox: {
    flexDirection: "row",
    backgroundColor: "#EFF4FF",
    borderRadius: RADIUS.sm,
    padding: SPACING.md,
    marginTop: SPACING.md,
    gap: 8,
  },
  noticeText: {
    flex: 1,
    fontSize: 12,
    color: COLORS.darkBlue,
    marginLeft: 8,
    lineHeight: 18,
  },
});
