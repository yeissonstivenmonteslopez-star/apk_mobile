export const CONCEPTS = [
  {
    id: "debug-release",
    icon: "bug-outline",
    title: "Debug vs Release",
    text:
      "El modo Debug incluye herramientas de depuración, es más pesado y lento, pensado solo para desarrollo. El modo Release está optimizado, firmado y listo para ser instalado por usuarios finales.",
  },
  {
    id: "apk-aab",
    icon: "archive-outline",
    title: "APK vs AAB",
    text:
      "El APK (Android Package) es un binario instalable directamente en un dispositivo. El AAB (Android App Bundle) es el formato que exige Google Play y permite generar paquetes optimizados según cada dispositivo.",
  },
  {
    id: "keystore",
    icon: "key-outline",
    title: "Keystore",
    text:
      "Archivo protegido con contraseña que guarda las claves criptográficas usadas para firmar digitalmente la aplicación, garantizando su autenticidad e integridad.",
  },
  {
    id: "versioncode",
    icon: "git-commit-outline",
    title: "versionCode",
    text:
      "Número entero que se incrementa en cada publicación. Google Play lo usa internamente para identificar qué versión es más reciente.",
  },
  {
    id: "versionname",
    icon: "pricetag-outline",
    title: "versionName",
    text:
      "Texto visible para el usuario (por ejemplo 1.0.0) que indica la versión de la aplicación de forma comprensible.",
  },
  {
    id: "semver",
    icon: "layers-outline",
    title: "SemVer",
    text:
      "Versionado Semántico: MAJOR.MINOR.PATCH. MAJOR para cambios grandes, MINOR para nuevas funciones compatibles y PATCH para correcciones.",
  },
  {
    id: "r8-proguard",
    icon: "shield-checkmark-outline",
    title: "R8 / ProGuard",
    text:
      "Herramientas que reducen, ofuscan y optimizan el código para dificultar la ingeniería inversa y disminuir el tamaño final de la aplicación.",
  },
];
