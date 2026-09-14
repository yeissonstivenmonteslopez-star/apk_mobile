export const QUIZ = [
  {
    id: "q1",
    question: "¿Cuál es la principal diferencia entre un APK y un AAB?",
    options: [
      "El APK es un binario instalable directo; el AAB es el formato de distribución que Google Play optimiza por dispositivo.",
      "El APK solo funciona en iOS y el AAB solo en Android.",
      "No existe diferencia, son el mismo archivo con distinta extensión.",
      "El AAB se usa únicamente en modo Debug.",
    ],
    correct: 0,
  },
  {
    id: "q2",
    question: "¿Cuál es la función principal del Keystore?",
    options: [
      "Almacenar el historial de versiones de la app.",
      "Guardar las claves criptográficas usadas para firmar digitalmente la aplicación.",
      "Guardar las imágenes del Splash Screen.",
      "Compilar automáticamente el proyecto.",
    ],
    correct: 1,
  },
  {
    id: "q3",
    question: "¿Para qué sirve el versionCode?",
    options: [
      "Es el texto de versión que ve el usuario, como 1.0.0.",
      "Es un identificador del Keystore.",
      "Es un número entero que se incrementa en cada publicación para que Google Play identifique la versión más reciente.",
      "Sirve para nombrar el paquete de la aplicación.",
    ],
    correct: 2,
  },
  {
    id: "q4",
    question:
      "¿Cuál es el orden correcto general para publicar una app Expo/React Native en Android?",
    options: [
      "Publicar en Play Store, luego configurar el proyecto y generar el Keystore.",
      "Configurar la app (nombre, package, versión), generar/usar el Keystore, compilar en modo Release (APK/AAB) y luego probar/publicar.",
      "Solo generar un APK en modo Debug y subirlo directamente a Google Play.",
      "Eliminar el Keystore antes de compilar en modo Release.",
    ],
    correct: 1,
  },
];
