/** @format */

/** @format */

// ### Ignore List
const ignoreListFolderStructure: string[] = [
  // General
  ".git", // Git repository metadata
  "node_modules", // Node.js modules
  ".idea", // JetBrains IDE project files
  ".vscode", // Visual Studio Code settings
  "__pycache__", // Python bytecode cache
  ".DS_Store", // macOS directory metadata
  ".env", // Environment variable files
  "venv", // Python virtual environment
  "build", // Build output directories
  "dist", // Distribution directories
  "target", // Output from Java and Rust builds
  ".pytest_cache", // Pytest cache files
  "*.log", // Log files
  "*.tmp", // Temporary files
  // Python
  "*.pyc", // Compiled Python files
  ".mypy_cache", // Mypy type checker cache
  ".tox", // Tox environment
  // JavaScript/Node.js
  "npm-debug.log", // NPM debug logs
  "yarn-error.log", // Yarn error logs
  ".parcel-cache", // Parcel bundler cache
  "coverage", // Code coverage reports
  ".next", // Next.js build directory
  "out", // Output directory for Next.js
  // Java
  "*.class", // Compiled Java classes
  "*.jar", // JAR files
  "*.war", // WAR files
  ".settings", // Eclipse settings
  ".classpath", // Eclipse classpath
  ".project", // Eclipse project file
  // C/C++
  "*.o", // Object files
  "*.a", // Static libraries
  "*.so", // Shared libraries
  "*.out", // Executable files
  "*.exe", // Windows executables
  "CMakeFiles", // CMake build files
  "CMakeCache.txt", // CMake cache
  "*.dSYM", // macOS debug symbols
  "*.pdb", // Windows debug symbols
  // Rust
  "*.rlib", // Rust libraries
  "Cargo.lock", // Cargo lock file
  // Go
  "bin", // Binary output directory
  "pkg", // Package output directory
  "*.test", // Go test binaries
  "vendor", // Vendor directory (if not used)
  // Ruby
  ".bundle", // Bundler directory
  "vendor/bundle", // Bundled gems
  "log", // Log files
  "tmp", // Temporary files
  ".gem", // RubyGems metadata
  // PHP
  "vendor", // Composer dependencies
  ".phpunit.result.cache", // PHPUnit result cache
  // Android
  ".gradle", // Gradle files
  "*.apk", // Android package
  "*.ap_ ", // Android resources package
  "local.properties", // Android SDK settings
  // .NET/C#
  "bin", // Binary output directory
  "obj", // Object files directory
  "*.dll", // DLL files
  "*.user", // User settings
  "packages", // NuGet packages
  // LaTeX
  "*.aux", // Auxiliary files
  "*.toc", // Table of contents
  "*.out", // Auxiliary output files
  "*.synctex.gz", // SyncTeX file
  "*.fls", // LaTeX build files
  "*.fdb_latexmk", // LaTeX build files
];

// List of file extensions to be ignored based on file types:
const ignoreListExtensions: string[] = [
  // Image formats
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".bmp",
  ".svg",
  ".tiff",
  ".webp",
  ".heif",
  ".heic",
  ".ico",
  ".raw",
  ".psd",
  // Audio formats
  ".mp3",
  ".wav",
  ".flac",
  ".aac",
  ".ogg",
  ".m4a",
  ".wma",
  ".aiff",
  ".alac",
  ".pcm",
  // Video formats
  ".mp4",
  ".avi",
  ".mkv",
  ".mov",
  ".wmv",
  ".flv",
  ".webm",
  ".m4v",
  ".mpg",
  ".mpeg",
  ".3gp",
  ".ogv",
  ".rm",
  ".swf",
  // Binary files
  ".exe",
  ".dll",
  ".bin",
  ".iso",
  ".img",
  // System files
  ".sys",
  ".log",
  ".bak",
  ".tmp",
  ".ini",
  // Font files
  ".ttf",
  ".otf",
  ".woff",
  ".woff2",
  // Miscellaneous
  ".ico",
  ".svg",
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
];

// List of additional file extensions to be ignored when searching for API references,
// as they are unlikely to contain relevant API information.
const apiAdditionalExtensions: string[] = [
  // Text and document formats
  ".copy",
  ".local",
  ".json",
  ".config",
  ".md",
  ".txt",
  ".log",
  ".yml",
  ".yaml",
  ".xml",
  ".ini",
  ".pdf",
  ".csv",
  ".tsv",
  // Font formats
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".otf",
  // Configuration and map files
  ".config.ts",
  ".map",
  ".lock",
  // Styling files
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".styl",
  ".pcss",
  ".postcss",
];

// Combine ignoreExtensions and apiAdditionalExtensions
const apiIgnoreExtensions: string[] = [
  ...ignoreListExtensions,
  ...apiAdditionalExtensions,
];

// Additional specific ignores for API references
const specificIgnoresAPI: string[] = [".gitignore", ".config.js", ".config.ts"];

export {
  ignoreListFolderStructure,
  ignoreListExtensions,
  apiAdditionalExtensions,
  apiIgnoreExtensions,
  specificIgnoresAPI,
  // projectIcons,
};

// // ### Project Icons
// // This section defines the map of the project type and project icons
// interface ProjectIcons {
//   [key: string]: {
//     icon: string;
//   };
// }

// const projectIcons: ProjectIcons = {
//   ecommerce: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/shopping-basket-2.png",
//   },
//   banking: { icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/bank.png" },
//   school: { icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/school.png" },
//   education: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/graduation-cap.png",
//   },
//   work: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/briefcase.png",
//   },
//   healthcare: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/hospital-room.png",
//   },
//   real_estate: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/home.png",
//   },
//   travel: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/passport.png",
//   },
//   social_media: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/share.png",
//   },
//   fitness: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/dumbbell.png",
//   },
//   news: { icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/news.png" },
//   entertainment: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/clapperboard.png",
//   },
//   food_delivery: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/food-delivery.png",
//   },
//   finance: { icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/money.png" },
//   transportation: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/bus.png",
//   },
//   hospitality: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/hotel.png",
//   },
//   music: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/musical-notes.png",
//   },
//   gaming: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/controller.png",
//   },
//   environment: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/earth-planet.png",
//   },
//   nonprofit: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/charity.png",
//   },
//   photography: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/camera.png",
//   },
//   sports: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/soccer-ball.png",
//   },
//   fashion: { icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/dress.png" },
//   automotive: {
//     icon: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/car.png",
//   },
// };
