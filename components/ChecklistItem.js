import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS } from "../constants/theme";

export default function ChecklistItem({ label, checked, onToggle }) {
  return (
    <TouchableOpacity
      style={[styles.row, checked && styles.rowChecked]}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Ionicons
        name={checked ? "checkbox" : "square-outline"}
        size={24}
        color={checked ? COLORS.blue : COLORS.gray}
      />
      <Text style={[styles.label, checked && styles.labelChecked]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },
  rowChecked: {
    borderColor: COLORS.blue,
  },
  label: {
    marginLeft: SPACING.sm,
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
  },
  labelChecked: {
    color: COLORS.darkBlue,
    fontWeight: "600",
  },
});
