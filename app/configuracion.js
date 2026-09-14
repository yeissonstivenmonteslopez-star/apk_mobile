import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// Platform se usa tanto para el comportamiento del teclado como para la
// tipografía monoespaciada de la vista previa del JSON.
import { COLORS, SPACING, RADIUS } from "../constants/theme";

export default function Configuracion() {
  const [appName, setAppName] = useState("Rendimiento Deportivo");
  const [sport, setSport] = useState("Futbol");
  const [goal, setGoal] = useState("Mejorar resistencia");
  const [weeklySessions, setWeeklySessions] = useState("4");
  const [athleteName, setAthleteName] = useState("Mi perfil");

  const previewJson = `{
    "perfil": {
      "atleta": "${athleteName}",
      "deporte": "${sport}",
      "objetivo": "${goal}",
      "sesionesPorSemana": ${weeklySessions || 0}
    }
}`;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Perfil del atleta</Text>
        <Text style={styles.subheading}>
          Personaliza tu enfoque para que cada sesion tenga un objetivo claro.
        </Text>

        <Field
          label="Nombre del plan"
          value={appName}
          onChangeText={setAppName}
        />
        <Field
          label="Nombre del atleta"
          value={athleteName}
          onChangeText={setAthleteName}
        />
        <Field
          label="Deporte principal"
          value={sport}
          onChangeText={setSport}
        />
        <Field
          label="Objetivo de la temporada"
          value={goal}
          onChangeText={setGoal}
        />
        <Field
          label="Sesiones por semana"
          value={weeklySessions}
          onChangeText={setWeeklySessions}
          keyboardType="numeric"
        />

        <Text style={styles.previewLabel}>Resumen del perfil</Text>
        <View style={styles.previewBox}>
          <Text style={styles.previewText}>{previewJson}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Field({ label, ...rest }) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.grayLight}
        {...rest}
      />
    </View>
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
  fieldWrap: {
    marginBottom: SPACING.md,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.darkBlue,
    marginBottom: 6,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.black,
  },
  previewLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.darkBlue,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  previewBox: {
    backgroundColor: COLORS.black,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
  },
  previewText: {
    color: "#7CD3FF",
    fontFamily: Platform.select({
      ios: "Menlo",
      android: "monospace",
      default: "monospace",
    }),
    fontSize: 12,
    lineHeight: 18,
  },
});
