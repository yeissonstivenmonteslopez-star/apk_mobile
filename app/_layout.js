import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.darkBlue },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: "700" },
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.border,
          },
          tabBarLabelStyle: { fontSize: 11 },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="conceptos"
          options={{
            title: "Conceptos",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="configuracion"
          options={{
            title: "Config",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="compilacion"
          options={{
            title: "Compilar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hammer" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="checklist"
          options={{
            title: "Checklist",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark-done" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="autoevaluacion"
          options={{
            title: "Quiz",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
