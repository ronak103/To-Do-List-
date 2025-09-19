# To-Do List

A minimal, responsive To‑Do List web app built with HTML, CSS and JavaScript. It features a centered card layout, localStorage persistence, smooth animations, and a modern, mobile-friendly UI.

Live demo: https://ronak103.github.io/To-Do-List-/

## Features

- Add new tasks with an input and Add button
- Mark tasks as completed (strike-through + faded)
- Edit tasks inline (double-click or Edit button)
- Delete individual tasks
- Filter view: All / Active / Completed
- Persist tasks in `localStorage`
- Smooth add/remove animations
- Responsive, mobile-friendly layout with clean fonts and subtle shadows

## Files

- `index.html` — app markup
- `style.css` — styles and animations
- `script.js` — app logic (localStorage, add/edit/delete, filters)

## Usage

1. Open `index.html` in a browser (double-click or use a local server).
2. Type a task in the input and press Enter or click Add.
3. Click the checkbox to mark complete. Double-click a task to edit it.
4. Use the filters to view All / Active / Completed tasks.

## Run locally (recommended)

If you want to serve the project on a local web server (recommended for some browsers):

PowerShell (Windows):

```powershell
# using Python 3 built-in server
python -m http.server 8000

# then open http://localhost:8000/ in your browser
```

Or use any static file server (VS Code Live Server extension, http-server, etc.).

## Deployment (GitHub Pages)

1. Commit the project to a GitHub repository (for example `To-Do-List-` under your account).
2. In the repository settings enable GitHub Pages from the `main` branch and `/ (root)` folder.
3. After a minute the site will be available at `https://<your-username>.github.io/To-Do-List-/`.

The Live demo link above assumes the repository is published at `https://ronak103.github.io/To-Do-List-/`.

## Notes & Next steps

- Improve accessibility (aria attributes, keyboard navigation) — low risk, high value.
- Add drag-and-drop reorder or due dates/tags if you want prioritization.

---

If you'd like, I can update the README with screenshots, badges, or add a GitHub Actions workflow to auto-deploy to Pages.
# To-Do-List-