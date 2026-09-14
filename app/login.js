import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, RADIUS, SPACING } from "../constants/theme";
import { useAuth } from "../context/AuthContext";

const DEMO_USERNAME = "aprendiz";
const DEMO_PASSWORD = "sena123";

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (username.trim().toLowerCase() === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setError("");
      login();
      router.replace("/home");
      return;
    }

    setError("Usuario o contraseña incorrectos.");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.brand}>
        <View style={styles.iconCircle}>
          <Ionicons name="phone-portrait" size={42} color={COLORS.white} />
        </View>
        <Text style={styles.title}>Rendimiento Deportivo</Text>
        <Text style={styles.subtitle}>Tu entrenamiento empieza aqui</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Escribe tu atleta"
          placeholderTextColor={COLORS.grayLight}
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Escribe tu contraseña"
          placeholderTextColor={COLORS.grayLight}
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleLogin}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
          <Ionicons name="arrow-forward" size={18} color={COLORS.white} />
        </TouchableOpacity>

        <Text style={styles.hint}>Demo: aprendiz · sena123</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    padding: SPACING.lg,
  },
  brand: {
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  iconCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: COLORS.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },
  title: {
    color: COLORS.black,
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.blue,
    fontSize: 15,
    fontWeight: "600",
    marginTop: SPACING.xs,
  },
  form: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: RADIUS.md,
    padding: SPACING.lg,
  },
  label: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: SPACING.xs,
  },
  input: {
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: RADIUS.sm,
    color: COLORS.black,
    fontSize: 16,
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: 12,
  },
  error: {
    color: COLORS.danger,
    fontSize: 13,
    marginBottom: SPACING.md,
  },
  button: {
    alignItems: "center",
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.sm,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 14,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
    marginRight: SPACING.sm,
  },
  hint: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: SPACING.md,
    textAlign: "center",
  },
});