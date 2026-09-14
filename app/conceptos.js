import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ConceptCard from "../components/ConceptCard";
import { CONCEPTS } from "../data/concepts";
import { COLORS, SPACING } from "../constants/theme";

export default function Conceptos() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Disciplinas deportivas</Text>
        <Text style={styles.subheading}>
          Explora ideas para entrenar mejor y sostener tu progreso.
        </Text>

        {CONCEPTS.map((item) => (
          <ConceptCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            text={item.text}
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
  content: {
    padding: SPACING.lg,
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
});
