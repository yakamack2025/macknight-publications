# Ebook Integration Instructions

## Cover Images

Place your designed book covers in the `/public/assets/images/` directory using this naming convention:

```
/public/assets/images/
├── theRepublic.png ✅ (READY)
├── bible.png ✅ (READY)
├── sirens2.png ✅ (READY - hero image)
├── nicomachean-ethics.jpg  
├── meditations.jpg
├── confessions.jpg
├── divine-comedy.jpg
├── prince.jpg
├── don-quixote.jpg
└── paradise-lost.jpg
```

**Requirements:**
- Use `.jpg` format for optimal web performance
- Recommended dimensions: 300x400 pixels (3:4 aspect ratio)
- File size should be under 200KB for fast loading

## Ebook Files

### Sources for Public Domain Ebooks

All books are confirmed public domain. Download from these reliable sources:

**Project Gutenberg** (https://www.gutenberg.org/)
- The Republic: https://www.gutenberg.org/ebooks/1497
- Nicomachean Ethics: https://www.gutenberg.org/ebooks/8438
- Meditations: https://www.gutenberg.org/ebooks/2680
- Confessions: https://www.gutenberg.org/ebooks/3296
- Divine Comedy: https://www.gutenberg.org/ebooks/1012
- The Prince: https://www.gutenberg.org/ebooks/1232
- Don Quixote: https://www.gutenberg.org/ebooks/996
- Paradise Lost: https://www.gutenberg.org/ebooks/26

### File Organization

Place ebook files in `/src/assets/ebooks/` using this naming convention:

```
/src/assets/ebooks/
├── republic.epub
├── nicomachean-ethics.epub
├── meditations.epub  
├── confessions.epub
├── divine-comedy.epub
├── prince.epub
├── don-quixote.epub
└── paradise-lost.epub
```

### Updating Book Service

After adding files, update the `coverImageUrl` paths in `/src/app/services/books.service.ts`:

```typescript
{
  id: 1,
  // ... other properties
  coverImageUrl: 'assets/images/theRepublic.png', ✅ (UPDATED)
  ebookUrl: 'assets/ebooks/republic.epub',
  ebookFormat: 'epub'
}
```

**Note**: The Republic and Bible covers are already configured and working!

### Supported Formats

- **EPUB**: Best for most e-readers and mobile devices
- **PDF**: Good for desktop reading with preserved formatting  
- **TXT**: Universal compatibility, plain text

The app will automatically display the format and provide download functionality.