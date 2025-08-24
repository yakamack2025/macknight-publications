# 📸 Adding Your Hero Image

## Quick Instructions:

1. **Find your image** (JPG, PNG, or WebP format recommended)
2. **Rename it to:** `hero-image.jpg` (or `.png` or `.webp`)
3. **Place it in:** `src/assets/images/hero-image.jpg`
4. **Update the image path** in `src/app/components/home/home.component.ts` (line ~26)

## Step-by-Step:

### 1. Prepare Your Image
- **Recommended size:** 1200x500 pixels (or similar wide aspect ratio)
- **Good subjects:** Classical library, ancient books, scrolls, literary scenes
- **Format:** JPG, PNG, or WebP

### 2. Add to Project
```bash
# Place your image here:
src/assets/images/hero-image.jpg
```

### 3. Update Code
Open: `src/app/components/home/home.component.ts`

Change line ~26 from:
```html
src="assets/images/hero-placeholder.svg" 
```

To:
```html
src="assets/images/hero-image.jpg"  
```

### 4. Save & Reload
The image will automatically appear with:
- ✨ Hover effects
- 📱 Responsive sizing
- 🎨 Beautiful overlay text
- 🌙 Dark/light theme compatibility

## 🎨 Image Styling Features:

- **Hover Animation:** Image scales slightly on hover
- **Text Overlay:** Appears on hover with gradient background
- **Responsive:** Adapts to mobile/tablet screens
- **Error Handling:** Shows placeholder if image fails to load

## 💡 Pro Tips:

1. **Literary themes work best:** Ancient libraries, classical architecture, manuscripts
2. **Wide aspect ratio preferred:** 2.4:1 or 3:1 ratio looks great
3. **High quality:** Sharp, clear images look professional
4. **Consider dark areas:** The overlay text appears at the bottom, so darker bottom areas work well

## 🔧 Current Placeholder:
The app currently shows a custom SVG placeholder with classical elements (columns, books, scrolls) in the Macknight Publications color scheme.

Your custom image will replace this placeholder and inherit all the beautiful styling! 📚✨