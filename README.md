# Univer Carz — Planeto Series

A premium, interactive digital showroom showcase built for **Univer Carz**, highlighting their signature **Planeto Series** vehicle lineup. The website is engineered with modern front-end standards, a fully responsive grid system, dynamic user experience enhancements, and cross-platform light/dark themes.

---

## 🚀 Key Features

*   **Premium Interactive Lineup Grid**: Showcases six high-performance machines with categorized fuel tags, key telemetry specs, and dynamic modal overlays.
*   **Aero-Styled Details Modals**: Opens smooth overlays containing comprehensive vehicle information, features checklists, and detailed powertrain metrics for each model.
*   **Dual-Theme Architecture**: Integrates a client-side Light/Dark theme toggle adjusting background hues, text contrast, panels, and borders instantly.
*   **Dynamic Scroll Interactions**:
    *   **Scroll Gauge**: A progress-indicator bar running at the top of the header.
    *   **Intersection Counters**: Statistics counters (delivered cars, average rating, etc.) that increment using custom cubic-bezier animation curves when scrolled into view.
    *   **Reveal-on-Scroll**: Sections fade and slide into place gracefully as the user scrolls.
*   **Interactive Showroom Contact & Enquiries**:
    *   **Custom Map Canvas**: Visually styled showroom map visual with a pulsing location marker.
    *   **Form Validation**: Javascript validation engine checking telephone numbers, email formats, and string lengths before accepting form submission.

---

## 🛠️ Technology Stack

*   **HTML5 Semantic Elements**: Standard markup framework with accessibility features (`aria-label`, correct heading hierarchy).
*   **CSS3 Variables & Tokens**: Centralized custom properties defining the color palette, animation ease states, and sizing borders.
*   **Vanilla ECMAScript 6**: Built purely with native JavaScript using `IntersectionObserver`, `performance.now()` animation ticks, and class selectors for high-performance rendering.

---

## 📁 Project Structure

```
univer-carz/
├── images/             # Vehicle visual assets and transparent renders
├── index.html          # Main page document layout
├── style.css           # Core stylesheet, tokens, grids, and themes
├── script.js          # Interactive lineup render, navbar scroll, and counters
└── README.md           # Documentation file
```

---

## 🚘 Lineup Catalog

The showcase displays detailed specifications for the following signature models:
1.  **Univer Eartho**: Compact electric sedan (₹42.5L, 421 km range, 201 bhp)
2.  **Univer Mars**: All-terrain diesel crossover (₹35.2L, 18 km/l, 148 bhp)
3.  **Univer Urano**: Compact hybrid SUV (₹28.75L, 26 km/l, 126 bhp)
4.  **Univer Nepti**: Full-size petrol luxury SUV (₹68.9L, 12 km/l, 296 bhp)
5.  **Univer Venus**: Twin-turbo V8 performance coupe (₹95.0L, 9 km/l, 512 bhp)
6.  **Univer Saturnaus**: Flagship electric limousine (₹1.2Cr, 612 km range, 402 bhp)

---

## 🔧 Installation & Local Server

Since the application is built entirely on client-side vanilla technologies, there are no compilers or complex build steps. 

1.  Clone or download the project files into a folder.
2.  Launch a local web server from the project directory. E.g., using Python:
    ```bash
    python -m http.server 3000
    ```
    Or Node.js:
    ```bash
    npx http-server -p 3000
    ```
3.  Open your browser and navigate to `http://localhost:3000`.
