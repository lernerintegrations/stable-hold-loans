
## Add Social Media Icons to Footer

Add Instagram, Facebook, and LinkedIn icons to the site footer, styled to match the existing design.

### Changes

**`src/components/SiteFooter.tsx`**
- Import `Instagram`, `Facebook`, and `Linkedin` icons from `lucide-react`
- Add a row of social icon links below the copyright text (or next to it)
- Each icon will link to a placeholder URL (e.g., `https://instagram.com/rentrefi`) that you can update with your actual account URLs
- Icons will open in a new tab (`target="_blank"`)
- Styled with `text-muted-foreground` and a hover effect matching the existing link pill style

### Technical Details
- Uses Lucide React icons (already installed): `Instagram`, `Facebook`, `Linkedin`
- Links use `rel="noopener noreferrer"` for security
- Placeholder URLs will be set to `https://instagram.com/`, `https://facebook.com/`, and `https://linkedin.com/` -- you can provide your actual profile URLs and I'll update them
