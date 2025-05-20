# FocusFlow Pomodoro Project Documentation

## Description

**FocusFlow** is a productivity web application that combines a Pomodoro timer with a To-Do List. It allows users to efficiently manage their time and tasks, helping to improve focus and personal organization.

---

## Technologies Used

### Languages

- **TypeScript**  
  Used for component and application logic development, providing static typing and greater robustness.

- **CSS**  
  Used for global style customization and color variables.

### Frameworks and Libraries

- **React**  
  Main framework for building the user interface with reusable components.

- **Next.js**  
  Framework for React applications with support for SSR, automatic routing, and optimization.

- **Tailwind CSS**  
  Utility-first CSS framework, allowing you to apply classes directly to components for fast and responsive design.

- **Lucide React**  
  SVG icon library for React, used to display icons such as the timer.

---

## Folder Structure

```
src/
  components/
    pomodoro-timer.tsx
    todo-list.tsx
  hooks/
    use-local-storage.ts
  pages/
    _app.tsx
  styles/
    globals.css
  types/
    index.ts (or Task.ts)
```

---

## Main Components

- **PomodoroTimer**  
  Component that manages the Pomodoro timer.

- **TodoList**  
  Component for task management, with localStorage persistence.

---

## Installation and Setup

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Install Tailwind CSS and its dependencies:**
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Import global styles in `_app.tsx`:**
   ```tsx
   import "@/styles/globals.css";
   ```

4. **Run the application:**
   ```
   npm run dev
   ```

---

## Notes

- The project uses Tailwind CSS classes for most styles.
- Colors and themes are defined using CSS variables in `globals.css`.
- Task storage uses a custom hook (`useLocalStorage`) for browser persistence.
- **If you are using Next.js, make sure to check your `next.config.js` or `next.config.ts` file. If you have the line `output: "export"`, comment it out or remove it if you are not exporting a static site:**
  ```js
  // output: "export",
  ```

---

## Credits
https://roadmap.sh/projects/pomodoro-timer
Developed with React, Tailwind CSS, and Lucide React.  
© {Current Year} FocusFlow.
