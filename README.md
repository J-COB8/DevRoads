# 🌐 DevRoads

**DevRoads** is an accessible digital space where anyone interested in programming can learn, find direction, and collaborate. This site aims to inspire new developers by showcasing the real-world impact of coding — without idealizing or overcomplicating the journey.  
All you need is a computer, a clear vision, and the right guidance.

---

## 🚀 Installation & Setup

Make sure you have **Node.js (v16 or higher)** installed on your system.

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/devroads.git
   cd devroads

   <!-- installing proyect dependencies -->
   npm install

   <!-- starting the developer server -->
   npm run dev

   <!-- open on web navigator -->
   http://localhost:5173


 ## Proyect structure
devroads-app/
├── public/                  # Public files (logo, index.html, etc.)
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── assets/              # Static assets (e.g. SVGs)
│   │   └── react.svg
│   ├── components/          # Reusable components (Navbar, etc.)
│   │   └── navbar.tsx
│   ├── hooks/               # Custom hooks
│   ├── i18n/                # Internationalization setup
│   │   ├── locales/
│   │   │   ├── en/          # English translation files (home.json, etc.)
│   │   │   └── es/          # Spanish translation files
│   │   └── index.ts         # i18n configuration
│   ├── pages/               # Main pages (Home, About, etc.)
│   │   ├── about.tsx
│   │   ├── contribute.tsx
│   │   ├── home.tsx
│   │   ├── home.css
│   │   └── overviewComputing.tsx
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root component
│   ├── App.css              # Global styles
│   ├── index.css            # Base styles
│   └── main.tsx             # Main entry point
├── .gitignore               # Files/folders ignored by Git
├── index.html               # Base HTML file
├── LICENSE                  # MIT license
├── package.json             # Project configuration and npm scripts
├── package-lock.json        # Exact versions of dependencies
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
├── eslint.config.ts         # ESLint rules
└── vite.config.js           # Vite configuration

 ## Contribute
Contribution guidelines are still being defined.
Stay tuned for updates or open an issue to suggest ideas!

 ## Licencia
This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for more details.
