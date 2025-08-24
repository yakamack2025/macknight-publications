#!/usr/bin/env python3
"""
Script to add custom cover images to EPUB files.
This script will embed the PNG cover images from the assets/images folder
into the corresponding EPUB files.
"""

import os
import zipfile
import shutil
from pathlib import Path
import xml.etree.ElementTree as ET

# Mapping of ebook names to their corresponding cover image files
EBOOK_COVER_MAPPING = {
    'republic.epub': 'theRepublic.png',
    'bible-kjv.epub': 'bible.png',
    'odyssey.epub': 'theIlliad.png',  # Using Illiad image for Odyssey
    'divine-comedy.epub': 'dante.png',
    'hamlet.epub': 'hamlet.png',
    'don-quixote.epub': 'donQuixote.png',
    'paradise-lost.epub': 'paradiseLost.png',
    'iliad.epub': 'theIlliad.png',
    'art-of-war.epub': 'artWar.png',
    'nicomachean-ethics.epub': 'ethics.png',
    'meditations.epub': 'meditations.png',
    'the-prince.epub': 'thePrince.png',
    'leviathan.epub': 'leviathan.png',
    'two-treatises.epub': 'twoTreaGovt.png',
    'wealth-of-nations.epub': 'wealthNations.png',
    'origin-of-species.epub': 'originSpecies.png',
    'discourse-on-method.epub': 'methodDescarte.png',
    'critique-pure-reason.epub': 'pureReason.png',
    'rights-of-man.epub': 'rightsOfMan.png',
    'democracy-in-america.epub': 'democracyAmerica.png',
    'social-contract.epub': 'socialContract.png',
    'on-liberty.epub': 'onLiberty.png',
    'canterbury-tales.epub': 'canterbury.png',
    'aeneid.epub': 'aeneid.png',
    'metamorphoses.epub': 'metamorphoses.png',
    'essays-montaigne.epub': 'essaysMont.png',
    'gullivers-travels.epub': 'gullTravels.png',
    'robinson-crusoe.epub': 'robinsonCur.png',
    'tom-jones.epub': 'tomJones.png',
    'pride-and-prejudice.epub': 'pride.png',
    'frankenstein.epub': 'frankieBaby.png',
    'tale-two-cities.epub': 'taleOfTwo.png',
    'jane-eyre.epub': 'janeEyre.png',
    'wuthering-heights.epub': 'wuthering.png',
    'great-expectations.epub': 'expectations.png',
    'moby-dick.epub': 'mobyDick.png',
    'scarlet-letter.epub': 'scarletLetter.png',
    'huckleberry-finn.epub': 'huckFinn.png',
    'uncle-toms-cabin.epub': 'uncleTom.png',
    'leaves-of-grass.epub': 'leavesGrass.png',
    'common-sense.epub': 'commonSense.png',
    'federalist-papers.epub': 'fedsPaper.png',
    'confessions.epub': 'confessions.png',
    'analects.epub': 'analects.png',
    'principia.epub': 'principMath.png',
    'elements.epub': 'elements.png',
    'histories-herodotus.epub': 'histories.png',
    'peloponnesian-war.epub': 'pelopWar.png',
    'life-of-johnson.epub': 'samJohnson.png',
}

def add_cover_to_epub(epub_path, cover_image_path):
    """
    Add a cover image to an EPUB file.
    
    Args:
        epub_path: Path to the EPUB file
        cover_image_path: Path to the cover image (PNG)
    """
    if not os.path.exists(epub_path):
        print(f"  ⚠ EPUB not found: {epub_path}")
        return False
    
    if not os.path.exists(cover_image_path):
        print(f"  ⚠ Cover image not found: {cover_image_path}")
        return False
    
    # Create a temporary directory for extraction
    temp_dir = f"{epub_path}.temp"
    
    try:
        # Extract EPUB contents
        with zipfile.ZipFile(epub_path, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
        
        # Copy cover image to EPUB's images directory
        # Most EPUBs have an images or Images folder
        image_dirs = ['OEBPS/images', 'OEBPS/Images', 'images', 'Images']
        image_dir = None
        
        for dir_name in image_dirs:
            dir_path = os.path.join(temp_dir, dir_name)
            if os.path.exists(dir_path):
                image_dir = dir_path
                break
        
        # If no image directory exists, create one
        if not image_dir:
            image_dir = os.path.join(temp_dir, 'OEBPS', 'images')
            os.makedirs(image_dir, exist_ok=True)
        
        # Copy the cover image
        cover_filename = 'macknight-cover.png'
        cover_dest = os.path.join(image_dir, cover_filename)
        shutil.copy2(cover_image_path, cover_dest)
        
        # Update the OPF file to reference the new cover
        opf_paths = ['OEBPS/content.opf', 'content.opf']
        opf_file = None
        
        for opf_path in opf_paths:
            full_path = os.path.join(temp_dir, opf_path)
            if os.path.exists(full_path):
                opf_file = full_path
                break
        
        if opf_file:
            # Parse and update OPF
            tree = ET.parse(opf_file)
            root = tree.getroot()
            
            # Register namespaces
            ns = {'opf': 'http://www.idpf.org/2007/opf'}
            
            # Add cover image to manifest if not already present
            manifest = root.find('.//opf:manifest', ns)
            if manifest is not None:
                # Check if cover already exists
                cover_item = manifest.find(".//opf:item[@id='macknight-cover']", ns)
                if cover_item is None:
                    # Add new cover item
                    cover_item = ET.SubElement(manifest, 'item')
                    cover_item.set('id', 'macknight-cover')
                    cover_item.set('href', f'images/{cover_filename}')
                    cover_item.set('media-type', 'image/png')
                
                # Add cover meta tag
                metadata = root.find('.//opf:metadata', ns)
                if metadata is not None:
                    # Check if cover meta already exists
                    cover_meta = metadata.find(".//opf:meta[@name='cover']", ns)
                    if cover_meta is None:
                        cover_meta = ET.SubElement(metadata, 'meta')
                        cover_meta.set('name', 'cover')
                        cover_meta.set('content', 'macknight-cover')
            
            # Save updated OPF
            tree.write(opf_file, encoding='utf-8', xml_declaration=True)
        
        # Create new EPUB file
        backup_path = f"{epub_path}.original"
        if not os.path.exists(backup_path):
            shutil.move(epub_path, backup_path)
        
        # Repackage EPUB
        with zipfile.ZipFile(epub_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            for root, dirs, files in os.walk(temp_dir):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, temp_dir)
                    zipf.write(file_path, arcname)
        
        print(f"  ✓ Cover added successfully")
        return True
        
    except Exception as e:
        print(f"  ✗ Error: {str(e)}")
        return False
    
    finally:
        # Clean up temporary directory
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)

def main():
    """Main function to process all ebooks."""
    ebooks_dir = Path('public/assets/ebooks')
    images_dir = Path('public/assets/images')
    
    print("Adding custom covers to EPUB files...")
    print("=" * 50)
    
    success_count = 0
    skip_count = 0
    error_count = 0
    
    for ebook_name, cover_name in EBOOK_COVER_MAPPING.items():
        epub_path = ebooks_dir / ebook_name
        cover_path = images_dir / cover_name
        
        print(f"\nProcessing: {ebook_name}")
        print(f"  Cover: {cover_name}")
        
        if add_cover_to_epub(str(epub_path), str(cover_path)):
            success_count += 1
        else:
            if not epub_path.exists():
                skip_count += 1
            else:
                error_count += 1
    
    print("\n" + "=" * 50)
    print(f"Summary:")
    print(f"  ✓ Successfully updated: {success_count} ebooks")
    print(f"  ⚠ Skipped (not found): {skip_count} ebooks")
    print(f"  ✗ Errors: {error_count} ebooks")
    
    if success_count > 0:
        print("\nOriginal ebooks have been backed up with .original extension")
        print("To restore originals, rename .original files back to .epub")

if __name__ == "__main__":
    main()