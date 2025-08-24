#!/bin/bash

# Create ebooks directory if it doesn't exist
mkdir -p public/assets/ebooks

echo "Downloading ebooks from Project Gutenberg..."

# Download ebooks with proper names
# Format: wget -O "output-filename.epub" "gutenberg-url.epub"

echo "Downloading The Republic..."
wget -q -O "public/assets/ebooks/republic.epub" "https://www.gutenberg.org/ebooks/1497.epub3.images"

echo "Downloading The Bible (KJV)..."
wget -q -O "public/assets/ebooks/bible-kjv.epub" "https://www.gutenberg.org/ebooks/10.epub3.images"

echo "Downloading The Odyssey..."
wget -q -O "public/assets/ebooks/odyssey.epub" "https://www.gutenberg.org/ebooks/1727.epub3.images"

echo "Downloading The Divine Comedy..."
wget -q -O "public/assets/ebooks/divine-comedy.epub" "https://www.gutenberg.org/ebooks/8800.epub3.images"

echo "Downloading Hamlet..."
wget -q -O "public/assets/ebooks/hamlet.epub" "https://www.gutenberg.org/ebooks/1524.epub3.images"

echo "Downloading Don Quixote..."
wget -q -O "public/assets/ebooks/don-quixote.epub" "https://www.gutenberg.org/ebooks/996.epub3.images"

echo "Downloading Paradise Lost..."
wget -q -O "public/assets/ebooks/paradise-lost.epub" "https://www.gutenberg.org/ebooks/26.epub3.images"

echo "Downloading The Iliad..."
wget -q -O "public/assets/ebooks/iliad.epub" "https://www.gutenberg.org/ebooks/6130.epub3.images"

echo "Downloading The Art of War..."
wget -q -O "public/assets/ebooks/art-of-war.epub" "https://www.gutenberg.org/ebooks/132.epub3.images"

echo "Downloading Nicomachean Ethics..."
wget -q -O "public/assets/ebooks/nicomachean-ethics.epub" "https://www.gutenberg.org/ebooks/8438.epub3.images"

echo "Downloading Meditations..."
wget -q -O "public/assets/ebooks/meditations.epub" "https://www.gutenberg.org/ebooks/2680.epub3.images"

echo "Downloading The Prince..."
wget -q -O "public/assets/ebooks/the-prince.epub" "https://www.gutenberg.org/ebooks/1232.epub3.images"

echo "Downloading Leviathan..."
wget -q -O "public/assets/ebooks/leviathan.epub" "https://www.gutenberg.org/ebooks/3207.epub3.images"

echo "Downloading Two Treatises of Government..."
wget -q -O "public/assets/ebooks/two-treatises.epub" "https://www.gutenberg.org/ebooks/7370.epub3.images"

echo "Downloading The Wealth of Nations..."
wget -q -O "public/assets/ebooks/wealth-of-nations.epub" "https://www.gutenberg.org/ebooks/3300.epub3.images"

echo "Downloading On the Origin of Species..."
wget -q -O "public/assets/ebooks/origin-of-species.epub" "https://www.gutenberg.org/ebooks/1228.epub3.images"

echo "Downloading Discourse on Method..."
wget -q -O "public/assets/ebooks/discourse-on-method.epub" "https://www.gutenberg.org/ebooks/59.epub3.images"

echo "Downloading Critique of Pure Reason..."
wget -q -O "public/assets/ebooks/critique-pure-reason.epub" "https://www.gutenberg.org/ebooks/4280.epub3.images"

echo "Downloading Rights of Man..."
wget -q -O "public/assets/ebooks/rights-of-man.epub" "https://www.gutenberg.org/ebooks/3742.epub3.images"

echo "Downloading Democracy in America..."
wget -q -O "public/assets/ebooks/democracy-in-america.epub" "https://www.gutenberg.org/ebooks/815.epub3.images"

echo "Downloading The Social Contract..."
wget -q -O "public/assets/ebooks/social-contract.epub" "https://www.gutenberg.org/ebooks/46333.epub3.images"

echo "Downloading On Liberty..."
wget -q -O "public/assets/ebooks/on-liberty.epub" "https://www.gutenberg.org/ebooks/34901.epub3.images"

echo "Downloading The Canterbury Tales..."
wget -q -O "public/assets/ebooks/canterbury-tales.epub" "https://www.gutenberg.org/ebooks/2383.epub3.images"

echo "Downloading The Aeneid..."
wget -q -O "public/assets/ebooks/aeneid.epub" "https://www.gutenberg.org/ebooks/228.epub3.images"

echo "Downloading Metamorphoses..."
wget -q -O "public/assets/ebooks/metamorphoses.epub" "https://www.gutenberg.org/ebooks/26073.epub3.images"

echo "Downloading Essays (Montaigne)..."
wget -q -O "public/assets/ebooks/essays-montaigne.epub" "https://www.gutenberg.org/ebooks/3600.epub3.images"

echo "Downloading Gulliver's Travels..."
wget -q -O "public/assets/ebooks/gullivers-travels.epub" "https://www.gutenberg.org/ebooks/829.epub3.images"

echo "Downloading Robinson Crusoe..."
wget -q -O "public/assets/ebooks/robinson-crusoe.epub" "https://www.gutenberg.org/ebooks/521.epub3.images"

echo "Downloading Tom Jones..."
wget -q -O "public/assets/ebooks/tom-jones.epub" "https://www.gutenberg.org/ebooks/6593.epub3.images"

echo "Downloading Pride and Prejudice..."
wget -q -O "public/assets/ebooks/pride-and-prejudice.epub" "https://www.gutenberg.org/ebooks/1342.epub3.images"

echo "Downloading Frankenstein..."
wget -q -O "public/assets/ebooks/frankenstein.epub" "https://www.gutenberg.org/ebooks/84.epub3.images"

echo "Downloading A Tale of Two Cities..."
wget -q -O "public/assets/ebooks/tale-two-cities.epub" "https://www.gutenberg.org/ebooks/98.epub3.images"

echo "Downloading Jane Eyre..."
wget -q -O "public/assets/ebooks/jane-eyre.epub" "https://www.gutenberg.org/ebooks/1260.epub3.images"

echo "Downloading Wuthering Heights..."
wget -q -O "public/assets/ebooks/wuthering-heights.epub" "https://www.gutenberg.org/ebooks/768.epub3.images"

echo "Downloading Great Expectations..."
wget -q -O "public/assets/ebooks/great-expectations.epub" "https://www.gutenberg.org/ebooks/1400.epub3.images"

echo "Downloading Moby-Dick..."
wget -q -O "public/assets/ebooks/moby-dick.epub" "https://www.gutenberg.org/ebooks/2701.epub3.images"

echo "Downloading The Scarlet Letter..."
wget -q -O "public/assets/ebooks/scarlet-letter.epub" "https://www.gutenberg.org/ebooks/25344.epub3.images"

echo "Downloading The Adventures of Huckleberry Finn..."
wget -q -O "public/assets/ebooks/huckleberry-finn.epub" "https://www.gutenberg.org/ebooks/76.epub3.images"

echo "Downloading Uncle Tom's Cabin..."
wget -q -O "public/assets/ebooks/uncle-toms-cabin.epub" "https://www.gutenberg.org/ebooks/203.epub3.images"

echo "Downloading Leaves of Grass..."
wget -q -O "public/assets/ebooks/leaves-of-grass.epub" "https://www.gutenberg.org/ebooks/1322.epub3.images"

echo "Downloading Common Sense..."
wget -q -O "public/assets/ebooks/common-sense.epub" "https://www.gutenberg.org/ebooks/147.epub3.images"

echo "Downloading The Federalist Papers..."
wget -q -O "public/assets/ebooks/federalist-papers.epub" "https://www.gutenberg.org/ebooks/1404.epub3.images"

# Copy to dist folder
echo "Copying ebooks to dist folder..."
cp -r public/assets/ebooks dist/macknight-publications/assets/

echo "Done! All ebooks have been downloaded."
echo "Books without Gutenberg versions will need to be sourced separately:"
echo "- Confessions (Augustine)"
echo "- The Analects (Confucius)"
echo "- Principia Mathematica (Newton)"
echo "- Elements (Euclid)"
echo "- The Histories (Herodotus)"
echo "- History of the Peloponnesian War (Thucydides)"
echo "- The Spirit of the Laws (Montesquieu)"
echo "- The Life of Samuel Johnson (Boswell)"