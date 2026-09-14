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
  const [appName, setAppName] = useState("Mi Aplicacion");
  const [packageName, setPackageName] = useState("com.example.miapp");
  const [versionCode, setVersionCode] = useState("1");
  const [version, setVersion] = useState("1.0.0");
  const [keystoreName, setKeystoreName] = useState("my-upload-key.keystore");
  const [keystoreAlias, setKeystoreAlias] = useState("my-key-alias");
  const [keystorePassword, setKeystorePassword] = useState("");

  const previewJson = `{
  "expo": {
    "name": "${appName}",
    "version": "${version}",
    "android": {
      "package": "${packageName}",
      "versionCode": ${versionCode || 0}
    }
  }
}`;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Configuración de la aplicación</Text>
        <Text style={styles.subheading}>
          En Expo SDK 57 la configuración de Android se realiza principalmente
          desde app.json o app.config.js.
        </Text>

        <Field
          label="Nombre de la aplicación"
          value={appName}
          onChangeText={setAppName}
        />
        <Field
          label="android.package"
          value={packageName}
          onChangeText={setPackageName}
          autoCapitalize="none"
        />
        <Field
          label="versionCode"
          value={versionCode}
          onChangeText={setVersionCode}
          keyboardType="numeric"
        />
        <Field label="version" value={version} onChangeText={setVersion} />
        <Field
          label="Nombre del Keystore"
          value={keystoreName}
          onChangeText={setKeystoreName}
          autoCapitalize="none"
        />
        <Field
          label="Alias del Keystore"
          value={keystoreAlias}
          onChangeText={setKeystoreAlias}
          autoCapitalize="none"
        />
        <Field
          label="Contraseña del Keystore"
          value={keystorePassword}
          onChangeText={setKeystorePassword}
          secureTextEntry
        />

        <Text style={styles.previewLabel}>Vista previa (app.json)</Text>
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
