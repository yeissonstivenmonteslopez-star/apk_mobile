import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/theme";

export default function ProgressBar({ progress, label }) {
  const pct = Math.max(0, Math.min(1, progress));
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${pct * 100}%` }]} />
      </View>
      <Text style={styles.percent}>{Math.round(pct * 100)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
  },
  label: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 6,
  },
  track: {
    width: "100%",
    height: 12,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.border,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.sm,
  },
  percent: {
    marginTop: 6,
    fontSize: 12,
    color: COLORS.darkBlue,
    fontWeight: "700",
    textAlign: "right",
  },
});
