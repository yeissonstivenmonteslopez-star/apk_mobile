import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QUIZ } from "../data/quiz";
import { COLORS, SPACING, RADIUS } from "../constants/theme";

export default function Autoevaluacion() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selectAnswer = (questionId, optionIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const allAnswered = QUIZ.every((q) => answers[q.id] !== undefined);

  const score = QUIZ.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correct ? 1 : 0);
  }, 0);

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Autoevaluación</Text>
      <Text style={styles.subheading}>
        Responde las 4 preguntas para comprobar lo aprendido.
      </Text>

      {submitted && (
        <View style={styles.scoreBox}>
          <Ionicons name="ribbon" size={22} color={COLORS.white} />
          <Text style={styles.scoreText}>
            Puntaje final: {score} / {QUIZ.length}
          </Text>
        </View>
      )}

      {QUIZ.map((q, qIndex) => {
        const selected = answers[q.id];
        return (
          <View key={q.id} style={styles.questionCard}>
            <Text style={styles.questionText}>
              {qIndex + 1}. {q.question}
            </Text>
            {q.options.map((option, optIndex) => {
              const isSelected = selected === optIndex;
              const isCorrectOption = optIndex === q.correct;

              let optionStyle = [styles.option];
              let icon = null;

              if (submitted) {
                if (isCorrectOption) {
                  optionStyle.push(styles.optionCorrect);
                  icon = (
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color={COLORS.blue}
                    />
                  );
                } else if (isSelected && !isCorrectOption) {
                  optionStyle.push(styles.optionIncorrect);
                  icon = (
                    <Ionicons
                      name="close-circle"
                      size={18}
                      color={COLORS.danger}
                    />
                  );
                }
              } else if (isSelected) {
                optionStyle.push(styles.optionSelected);
              }

              return (
                <TouchableOpacity
                  key={optIndex}
                  style={optionStyle}
                  activeOpacity={0.8}
                  onPress={() => selectAnswer(q.id, optIndex)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  {icon}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}

      {!submitted ? (
        <TouchableOpacity
          style={[styles.submitButton, !allAnswered && styles.disabledButton]}
          disabled={!allAnswered}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Ver resultados</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
          <Ionicons name="refresh" size={16} color={COLORS.darkBlue} />
          <Text style={styles.restartText}>Intentar de nuevo</Text>
        </TouchableOpacity>
      )}
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
  scoreBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.darkBlue,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    gap: 8,
  },
  scoreText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 8,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  questionText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: SPACING.sm,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    padding: 10,
    marginBottom: 8,
  },
  optionSelected: {
    borderColor: COLORS.blue,
    backgroundColor: "#EFF4FF",
  },
  optionCorrect: {
    borderColor: COLORS.blue,
    backgroundColor: "#EFF4FF",
  },
  optionIncorrect: {
    borderColor: COLORS.danger,
    backgroundColor: "#FDECEC",
  },
  optionText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.black,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: SPACING.sm,
  },
  disabledButton: {
    backgroundColor: COLORS.grayLight,
  },
  submitText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 15,
  },
  restartButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.darkBlue,
    borderRadius: RADIUS.md,
    paddingVertical: 12,
    marginTop: SPACING.sm,
    gap: 6,
  },
  restartText: {
    color: COLORS.darkBlue,
    fontWeight: "700",
    fontSize: 14,
    marginLeft: 6,
  },
});
