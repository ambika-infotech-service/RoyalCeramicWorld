# Routing Structure - Royal Ceramic World

This application now uses Angular routing for multi-page navigation instead of a single-page layout.

## Routes Configuration

The following routes are configured in `src/app/app.routes.ts`:

| Path | Component | Page Title |
|------|-----------|------------|
| `/` | → Redirects to `/home` | - |
| `/home` | `HomeComponent` | Home - Royal Ceramic World |
| `/products` | `ProductsPageComponent` | Products - Royal Ceramic World |
| `/about` | `AboutPageComponent` | About Us - Royal Ceramic World |
| `/contact` | `ContactPageComponent` | Contact - Royal Ceramic World |
| `**` (Wildcard) | → Redirects to `/home` | - |

## Application Structure

```
app-root
├── app-header (Sticky at top)
├── router-outlet (Page content)
└── app-footer (At bottom)
```

### Layout Components (Shared across all pages)
- **Header**: Sticky navigation bar with logo and nav links
- **Footer**: Site footer with links and information

### Page Components (Rendered via router-outlet)
- **Home Page** (`/home`): Contains the Hero component
- **Products Page** (`/products`): Displays the products/collections
- **About Page** (`/about`): Company information and values
- **Contact Page** (`/contact`): Contact form and information

## Navigation

### Header Navigation
The header contains:
- **Logo**: Clickable, navigates to `/home`
- **Nav Links**: Home, Products, About, Contact
  - Uses `routerLink` directive
  - Active link highlighted with `routerLinkActive`
- **"Get in Touch" button**: Navigates to `/contact`

### Footer Navigation
Quick Links section with navigation to:
- Home
- Products
- About Us
- Contact

### Hero Section
Call-to-action buttons:
- **"Explore Collection"**: Navigates to `/products`
- **"Learn More"**: Navigates to `/about`

## Key Features

### 1. **Sticky Header**
The header is positioned as `sticky top-0 z-50`, remaining visible when scrolling.

### 2. **Active Route Indication**
Navigation links highlight the active route using `routerLinkActive`:
```html
<a routerLink="/home" routerLinkActive="text-ceramic-600 font-bold">Home</a>
```

### 3. **Page Titles**
Each route has a unique title that appears in the browser tab:
- Home - Royal Ceramic World
- Products - Royal Ceramic World
- About Us - Royal Ceramic World
- Contact - Royal Ceramic World

### 4. **Wildcard Route**
Invalid URLs automatically redirect to the home page.

### 5. **Default Route**
The root path `/` redirects to `/home`.

## File Structure

```
src/app/
├── pages/
│   ├── home/
│   │   ├── home.ts
│   │   ├── home.html
│   │   └── home.css
│   ├── products-page/
│   │   ├── products-page.ts
│   │   ├── products-page.html
│   │   └── products-page.css
│   ├── about-page/
│   │   ├── about-page.ts
│   │   ├── about-page.html
│   │   └── about-page.css
│   └── contact-page/
│       ├── contact-page.ts
│       ├── contact-page.html
│       └── contact-page.css
├── components/
│   ├── header/
│   ├── hero/
│   ├── products/
│   ├── about/
│   ├── contact/
│   └── footer/
├── app.routes.ts (Route configuration)
├── app.config.ts (Router provider)
├── app.ts (Root component)
└── app.html (Router outlet template)
```

## How It Works

1. **User visits the site**: Lands on `/` which redirects to `/home`
2. **Home page loads**: Header + Hero component + Footer
3. **User clicks navigation**: Angular Router loads the appropriate page component
4. **Content swaps**: Only the middle section (router-outlet) changes
5. **Header/Footer persist**: Shared layout components remain unchanged
6. **Browser history**: Users can use back/forward buttons naturally

## Benefits of This Architecture

✅ **Better SEO**: Each page has a unique URL and title
✅ **Improved Performance**: Lazy loading potential for future features
✅ **Better UX**: Browser history, bookmarkable URLs, proper navigation
✅ **Cleaner Code**: Separation of concerns between pages
✅ **Scalability**: Easy to add new pages/routes
✅ **Professional**: Standard web application behavior

## Adding New Routes

To add a new page:

1. Generate the page component:
```bash
ng generate component pages/new-page --standalone --skip-tests --change-detection=OnPush
```

2. Add the route in `app.routes.ts`:
```typescript
{
  path: 'new-page',
  component: NewPageComponent,
  title: 'New Page - Royal Ceramic World',
}
```

3. Add navigation link in header/footer:
```html
<a routerLink="/new-page" routerLinkActive="text-ceramic-600 font-bold">
  New Page
</a>
```

## Testing Navigation

Visit these URLs to test routing:
- http://localhost:4200/home
- http://localhost:4200/products
- http://localhost:4200/about
- http://localhost:4200/contact
- http://localhost:4200/invalid-url (should redirect to home)
