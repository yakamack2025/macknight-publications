import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { InfographicComponent } from '../infographic/infographic.component';
import { MediaPlayerComponent } from '../media-player/media-player.component';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, InfographicComponent, MediaPlayerComponent],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$!: Observable<Book | undefined>;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.booksService.getBookById(+params['id']))
    );
  }

  readOnline(book: Book): void {
    if (book.gutenbergUrl) {
      // Open Project Gutenberg link for online reading
      window.open(book.gutenbergUrl, '_blank');
    } else if (book.ebookUrl) {
      // Fallback to local ebook if available
      window.open(book.ebookUrl, '_blank');
    } else {
      // Final fallback to Project Gutenberg search
      const searchUrl = `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(book.title + ' ' + book.author)}`;
      window.open(searchUrl, '_blank');
    }
  }

  downloadEbook(book: Book): void {
    if (book.gutenbergUrl) {
      // For Project Gutenberg books, open the book page where users can choose format
      // Gutenberg offers multiple formats (EPUB, Kindle, PDF, HTML, Plain Text)
      window.open(book.gutenbergUrl, '_blank');
    } else if (book.ebookUrl && book.ebookUrl.startsWith('http')) {
      // For external ebook URLs
      window.open(book.ebookUrl, '_blank');
    } else {
      // Fallback to Project Gutenberg search
      const searchUrl = `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(book.title + ' ' + book.author)}`;
      window.open(searchUrl, '_blank');
    }
  }
}