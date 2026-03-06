# Royal Ceramic World - Theme Variables

This project uses CSS custom properties (variables) for all theme-related values. This makes the website theme highly customizable and maintainable.

## CSS Variables

All theme variables are defined in `src/styles.css` and organized into the following categories:

### Color Variables

#### Primary Colors (Ceramic)
- `--color-ceramic-50` through `--color-ceramic-900`
- Used for primary buttons, headings, and key elements

#### Secondary Colors (Clay)
- `--color-clay-50` through `--color-clay-900`
- Used for accents and background gradients

#### Neutral Colors
- `--color-white`: #ffffff
- `--color-black`: #000000
- Gray scale: `--color-gray-50` through `--color-gray-900`

#### Status Colors
- `--color-success`: #10b981
- `--color-warning`: #f59e0b
- `--color-error`: #ef4444
- `--color-info`: #3b82f6

### Typography Variables

#### Font Families
- `--font-sans`: Inter, system-ui, -apple-system, Segoe UI, sans-serif
- `--font-serif`: Playfair Display, serif

#### Font Sizes
- `--text-xs`: 0.75rem
- `--text-sm`: 0.875rem
- `--text-base`: 1rem
- `--text-lg`: 1.125rem
- `--text-xl`: 1.25rem
- `--text-2xl`: 1.5rem
- `--text-3xl`: 1.875rem
- `--text-4xl`: 2.25rem
- `--text-5xl`: 3rem
- `--text-6xl`: 3.75rem

#### Font Weights
- `--font-light`: 300
- `--font-normal`: 400
- `--font-medium`: 500
- `--font-semibold`: 600
- `--font-bold`: 700

### Spacing Variables
- `--space-0` through `--space-32`
- Used for padding, margins, and gaps

### Border Radius
- `--radius-none` through `--radius-full`
- Used for rounded corners

### Shadows
- `--shadow-sm` through `--shadow-2xl`
- Used for box shadows and depth effects

### Transitions
- `--transition-fast`: 150ms
- `--transition-base`: 200ms (default)
- `--transition-slow`: 300ms

### Z-Index
- `--z-hide`: -1
- `--z-base`: 0
- `--z-dropdown`: 1000
- `--z-sticky`: 1100
- `--z-fixed`: 1200
- `--z-modal`: 1300
- `--z-popover`: 1400
- `--z-tooltip`: 1500

## How to Use

### In HTML/Templates
```html
<button style="background-color: var(--color-ceramic-600)">Click me</button>
```

### In CSS
```css
.button {
  background-color: var(--color-ceramic-600);
  color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  transition: background-color var(--transition-base);
}

.button:hover {
  background-color: var(--color-ceramic-700);
}
```

### In Tailwind Templates
The Tailwind configuration is set up to use these CSS variables, so you can use them naturally:
```html
<button class="bg-ceramic-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-ceramic-700 transition-all duration-200">
  Click me
</button>
```

## Customizing the Theme

To change the theme globally, simply update the CSS variables in `src/styles.css`:

```css
:root {
  /* Change primary ceramic color */
  --color-ceramic-600: #your-color-here;

  /* Change fonts */
  --font-sans: 'Your Font', sans-serif;

  /* Change spacing */
  --space-4: 1.5rem; /* Increase padding sizes */
}
```

### Per-Page Theme Customization
You can also override variables for specific pages or components:

```css
/* In a component's CSS file */
:root {
  --color-ceramic-600: #custom-color;
}
```

## Benefits

1. **Consistency**: All colors, spacing, and typography are centralized
2. **Maintainability**: Change theme values in one place, updates everywhere
3. **Flexibility**: Easy to create theme variations (light/dark mode, etc.)
4. **Performance**: CSS variables are processed natively by browsers
5. **Scalability**: Easy to add new variables as needed

## Adding New Variables

To add a new variable:

1. Define it in `src/styles.css` in the `:root` section
2. Update `tailwind.config.js` if it's a Tailwind-related variable
3. Use it in your components

Example:
```css
/* In styles.css */
--color-accent: #ff6b6b;

/* In tailwind.config.js */
colors: {
  accent: 'var(--color-accent)',
}

/* In templates */
<div class="bg-accent">Content</div>
```
