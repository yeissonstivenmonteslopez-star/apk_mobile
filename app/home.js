import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS } from "../constants/theme";

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="phone-portrait" size={48} color={COLORS.white} />
      </View>
      <Text style={styles.title}>Rendimiento Deportivo</Text>
      <Text style={styles.subtitle}>Entrena con intencion</Text>
      <Text style={styles.description}>
        Organiza tus sesiones, conoce nuevas disciplinas y convierte cada
        entrenamiento en un paso hacia tu mejor version.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={() => router.push("/conceptos")}
      >
        <Text style={styles.buttonText}>Ver disciplinas</Text>
        <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
      </TouchableOpacity>
      <Text style={styles.footer}>Entrena · mide · mejora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, alignItems: "center", justifyContent: "center", padding: SPACING.lg },
  iconCircle: { width: 96, height: 96, borderRadius: 48, backgroundColor: COLORS.darkBlue, alignItems: "center", justifyContent: "center", marginBottom: SPACING.lg },
  title: { fontSize: 24, fontWeight: "800", color: COLORS.black, textAlign: "center", marginBottom: SPACING.xs },
  subtitle: { fontSize: 16, fontWeight: "600", color: COLORS.blue, textAlign: "center", marginBottom: SPACING.md },
  description: { fontSize: 14, lineHeight: 21, color: COLORS.gray, textAlign: "center", marginBottom: SPACING.xl },
  button: { flexDirection: "row", alignItems: "center", backgroundColor: COLORS.blue, paddingVertical: 14, paddingHorizontal: 32, borderRadius: RADIUS.lg, gap: 8 },
  buttonText: { color: COLORS.white, fontWeight: "700", fontSize: 16, marginRight: 6 },
  footer: { position: "absolute", bottom: SPACING.lg, fontSize: 11, color: COLORS.grayLight },
});