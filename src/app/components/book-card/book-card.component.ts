import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="book-card" [routerLink]="['/book', book.id]">
      <div class="mp-brand">MP</div>
      <div class="card-header">
        <div class="rank-badge">#{{ book.rank }}</div>
        <div class="book-cover">
          <img *ngIf="book.coverImageUrl" [src]="book.coverImageUrl" [alt]="book.title">
          <div *ngIf="!book.coverImageUrl" class="placeholder-cover">
            <div class="book-spine">
              <div class="title-text">{{ book.title }}</div>
              <div class="author-text">{{ book.author }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-content">
        <h3 class="book-title">{{ book.title }}</h3>
        <p class="book-author">by {{ book.author }}</p>
        <p class="book-year">{{ book.yearPublished > 0 ? book.yearPublished : (-book.yearPublished) + ' BC' }}</p>
        <p class="book-overview">{{ book.overview | slice:0:120 }}<span *ngIf="book.overview.length > 120">...</span></p>
        
        <div class="themes-container">
          <span class="theme-tag" *ngFor="let theme of book.keyThemes.slice(0, 3)">
            {{ theme }}
          </span>
          <span *ngIf="book.keyThemes.length > 3" class="theme-more">
            +{{ book.keyThemes.length - 3 }}
          </span>
        </div>
        
        <div class="media-indicators">
          <span *ngIf="book.audioUrl" class="media-icon audio" title="Audio available">🎧</span>
          <span *ngIf="book.videoUrl" class="media-icon video" title="Video available">🎬</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!: Book;
}