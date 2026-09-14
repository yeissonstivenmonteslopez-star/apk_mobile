# Rendimiento Deportivo (Expo SDK 57 + React Native)

Aplicación móvil deportiva para organizar sesiones, disciplinas, recuperación y progreso del atleta.

## Tecnologías

- Expo SDK 57
- React Native (JavaScript, sin TypeScript)
- Expo Router (navegación por pestañas)
- @expo/vector-icons

Usa un login local demostrativo y datos deportivos locales. No requiere backend, HTML, Tailwind ni Vite.

## Cómo ejecutar el proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Si `npm install` marca conflictos de versión, ajusta las dependencias a las
   correctas para tu instalación de Expo SDK 57 con:
   ```bash
   npx expo install --fix
   ```
3. Inicia el proyecto:
   ```bash
   npx expo start
   ```
4. Escanea el código QR con la app **Expo Go** (compatible con Expo SDK 57) desde
   un celular Android, o presiona `a` en la terminal para abrir un emulador Android.

## Pantallas

1. **Login** – Acceso local de demostracion.
2. **Inicio** – Resumen para comenzar a entrenar.
3. **Deportes** – Disciplinas y recomendaciones.
4. **Perfil** – Datos del atleta y objetivo semanal.
5. **Entrenar** – Registro de sesion principal o recuperacion.
6. **Rutina** – Lista interactiva de tareas deportivas.

## Estructura del proyecto

```
app/                 Pantallas (Expo Router)
  _layout.js         Navegación por pestañas
  index.js           Inicio
  conceptos.js
  configuracion.js
  compilacion.js
  checklist.js
components/          Componentes reutilizables (tarjetas, checklist, terminal, progreso)
constants/theme.js   Paleta de colores y espaciados
data/                Datos locales de disciplinas y rutinas
```
