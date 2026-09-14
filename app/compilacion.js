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

const TRAINING_STEPS = [
  "$ iniciar sesion de entrenamiento",
  "✔ Calentamiento activado",
  "$ completar bloque de tecnica",
  "> Registrando repeticiones...",
  "> Ajustando intensidad...",
  "> Guardando rendimiento...",
  "SESION COMPLETADA",
  "✔ Entrenamiento registrado",
];

const RECOVERY_STEPS = [
  "$ iniciar rutina de recuperacion",
  "✔ Respiracion controlada",
  "> Movilidad articular...",
  "> Hidratacion registrada...",
  "> Estiramiento suave...",
  "RECUPERACION COMPLETADA",
  "✔ Sesion de recuperacion registrada",
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
      <Text style={styles.heading}>Entrenamiento</Text>
      <Text style={styles.subheading}>
        Inicia una sesion y sigue tu progreso deportivo.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sesion principal</Text>
        <Text style={styles.cardText}>
          Completa tu bloque principal de tecnica, fuerza o velocidad.
        </Text>
        <TouchableOpacity
          style={styles.actionButton}
          disabled={running}
          onPress={() => runSimulation(TRAINING_STEPS)}
        >
          <Ionicons name="play" size={16} color={COLORS.white} />
          <Text style={styles.actionText}>Iniciar sesion</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recuperacion</Text>
        <Text style={styles.cardText}>
          Baja la intensidad, recupera el cuerpo y preparate para la proxima sesion.
        </Text>
        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonDark]}
          disabled={running}
          onPress={() => runSimulation(RECOVERY_STEPS)}
        >
          <Ionicons name="play" size={16} color={COLORS.white} />
          <Text style={styles.actionText}>Iniciar recuperacion</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.terminalLabel}>Registro de actividad</Text>
      <TerminalView lines={lines} />

      <View style={styles.noticeBox}>
        <Ionicons name="information-circle" size={18} color={COLORS.blue} />
        <Text style={styles.noticeText}>
          Consejo: aumenta la intensidad de forma gradual y escucha las señales de tu cuerpo.
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
