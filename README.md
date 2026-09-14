# Publicación de Aplicaciones Android (Expo SDK 57 + React Native)

Aplicación móvil educativa desarrollada para la Guía de Aprendizaje "Clase 12 - Publicación" (SENA - ADSO).
Simula, paso a paso, el proceso de preparar y publicar una app Expo/React Native en Android.

## Tecnologías

- Expo SDK 57
- React Native (JavaScript, sin TypeScript)
- Expo Router (navegación por pestañas)
- @expo/vector-icons

No usa backend, base de datos, login, HTML, Tailwind ni Vite. Todos los datos son locales
y los comandos de compilación que se muestran son **simulados** (no ejecutan nada real).

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

1. **Inicio** – Presentación y botón "Comenzar".
2. **Conceptos** – Tarjetas: Debug vs Release, APK vs AAB, Keystore, versionCode,
   versionName, SemVer, R8/ProGuard.
3. **Configuración** – Formulario para nombre, package, versionCode, version y
   credenciales del Keystore, con vista previa del `app.json`.
4. **Compilación** – Explicación de APK vs AAB y una terminal simulada que
   muestra los comandos típicos (`expo prebuild`, `eas build`, `gradlew`).
5. **Checklist** – Lista interactiva con checkboxes y barra de progreso.
6. **Autoevaluación** – Quiz de 4 preguntas con calificación final.

## Estructura del proyecto

```
app/                 Pantallas (Expo Router)
  _layout.js         Navegación por pestañas
  index.js           Inicio
  conceptos.js
  configuracion.js
  compilacion.js
  checklist.js
  autoevaluacion.js
components/          Componentes reutilizables (tarjetas, checklist, terminal, progreso)
constants/theme.js   Paleta de colores y espaciados
data/                Datos locales (conceptos, checklist, quiz)
```
