import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ChecklistItem from "../components/ChecklistItem";
import ProgressBar from "../components/ProgressBar";
import { CHECKLIST_ITEMS } from "../data/checklist";
import { COLORS, SPACING } from "../constants/theme";

export default function Checklist() {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const total = CHECKLIST_ITEMS.length;
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Checklist de publicación</Text>
        <ProgressBar
          progress={total ? done / total : 0}
          label={`${done} de ${total} completados`}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {CHECKLIST_ITEMS.map((item) => (
          <ChecklistItem
            key={item.id}
            label={item.label}
            checked={!!checked[item.id]}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.darkBlue,
    marginBottom: SPACING.md,
  },
  content: {
    padding: SPACING.lg,
  },
});
