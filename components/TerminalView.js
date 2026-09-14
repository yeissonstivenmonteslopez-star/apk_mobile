import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

export default function TerminalView({ lines }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <View style={[styles.dot, { backgroundColor: "#FF5F56" }]} />
        <View style={[styles.dot, { backgroundColor: "#FFBD2E" }]} />
        <View style={[styles.dot, { backgroundColor: "#27C93F" }]} />
        <Text style={styles.headerTitle}>sesion (registro)</Text>
      </View>
      <ScrollView style={styles.body} contentContainerStyle={{ padding: SPACING.md }}>
        {lines.length === 0 ? (
          <Text style={styles.placeholder}>
            Presiona una accion para registrar tu actividad...
          </Text>
        ) : (
          lines.map((line, idx) => (
            <Text key={idx} style={styles.line}>
              {line}
            </Text>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.black,
    borderRadius: RADIUS.md,
    overflow: "hidden",
    height: 220,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
    paddingHorizontal: SPACING.md,
    paddingVertical: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  headerTitle: {
    color: COLORS.grayLight,
    fontSize: 11,
    marginLeft: 8,
  },
  body: {
    flex: 1,
  },
  placeholder: {
    color: COLORS.grayLight,
    fontSize: 12,
    fontStyle: "italic",
  },
  line: {
    color: "#7CD3FF",
    fontSize: 12,
    marginBottom: 4,
    fontFamily: Platform.select({ ios: "Menlo", android: "monospace", default: "monospace" }),
  },
});
