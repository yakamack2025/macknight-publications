import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book.model';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BookCardComponent],
  template: `
    <div class="home-container">
      <section class="featured-section">
        <div class="section-header">
          <h2 class="section-title">50 of the Most Influential Books Ever Written</h2>
          <p class="section-description">
            Explore the literary works that have shaped human thought, culture, and civilization 
            throughout history. Each book represents a milestone in human intellectual development.
          </p>
          
          <!-- MP3 Image Section -->
          <div class="mp3-image-container">
            <img 
              src="assets/images/mp3.png" 
              alt="MacKnight Publications Logo"
              class="mp3-image"
              loading="lazy"
              decoding="async"
            >
          </div>
          
          <!-- Hero Image Section -->
          <div class="hero-image-container">
            <img 
              src="assets/images/sirens2.png" 
              alt="Odysseus and the Sirens - Classical mythology depicting the power of literature and wisdom"
              class="hero-image"
              loading="lazy"
              decoding="async"
              (error)="onImageError($event)"
            >
            <div class="image-overlay">
              <div class="overlay-text">
                <h3>Journey Through Literary History</h3>
                <p>From ancient scrolls to modern masterpieces</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="books-grid">
          <app-book-card 
            *ngFor="let book of books$ | async; trackBy: trackByBookId"
            [book]="book"
          ></app-book-card>
        </div>
        
      </section>

      <section class="features-section">
        <div class="section-header">
          <h2 class="section-title">Immersive Literary Experience</h2>
          <p class="section-description">
            Discover literature like never before with our innovative approach to presenting timeless works.
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Interactive Infographics</h3>
            <p>Animated visualizations that bring key themes, timelines, and cultural impact to life with stunning graphics and smooth animations.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎧</div>
            <h3>Audio & Video Content</h3>
            <p>Immersive multimedia experiences including audio discussions, video analyses, and narrated content to enhance understanding.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>Real-time Discussion</h3>
            <p>Join our community of literature enthusiasts in live chat discussions about these influential works and their modern relevance.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🎭</div>
            <h3>Mythological Themes</h3>
            <p>Explore connections to heroes, gods, and mythological elements that permeate through these timeless literary masterpieces.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🌙</div>
            <h3>Adaptive Interface</h3>
            <p>Switch between light and dark themes for comfortable reading in any environment, preserving the essence of scholarly tradition.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Scholarly Analysis</h3>
            <p>In-depth summaries, historical context, and significance analysis crafted by literary scholars and historians.</p>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <div class="footer-content">
          <div class="footer-main">
            <h3>MacKnight Publications</h3>
            <p class="footer-motto">"Digital Light in a Flood of Darkness"</p>
            <p class="footer-description">Turn to the classics - timeless wisdom for the modern world.</p>
          </div>
          <div class="footer-contact">
            <h4>Connect</h4>
            <div class="contact-links">
              <a href="mailto:michael@macknightpublications.org">michael@macknightpublications.org</a>
              <a href="tel:541.300.9348">541.300.9348</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 MacKnight Publications. Preserving literary heritage for future generations.</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title {
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      color: var(--text-primary);
      margin-bottom: 20px;
      background: linear-gradient(135deg, var(--accent-brown), var(--accent-gold));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .section-description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
    }

    .mp3-image-container {
      max-width: 900px;
      margin: 30px auto 20px auto;
      text-align: center;
    }

    .mp3-image {
      max-width: 100%;
      height: auto;
      display: inline-block;
    }

    .hero-image-container {
      position: relative;
      max-width: 900px;
      margin: 40px auto 60px auto;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 32px rgba(0,0,0,0.15);
      transition: transform 0.3s ease;
      background: transparent;
    }

    .hero-image-container:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.2);
    }

    .hero-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    .hero-image-container:hover .hero-image {
      transform: scale(1.02);
    }

    .image-overlay {
      display: none;
    }

    .overlay-text h3 {
      font-size: 1.8rem;
      margin-bottom: 8px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .overlay-text p {
      font-size: 1.1rem;
      opacity: 0.9;
      margin: 0;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .hero-image.error {
      display: none;
    }

    .hero-image-container.no-image {
      background: linear-gradient(135deg, var(--accent-brown), var(--accent-gold));
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      text-align: center;
    }

    .no-image-content {
      padding: 40px;
    }

    .no-image-content h3 {
      font-size: 2rem;
      margin-bottom: 16px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .no-image-content p {
      font-size: 1.2rem;
      opacity: 0.9;
      margin: 0;
    }

    .featured-section {
      margin-bottom: 80px;
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }


    .features-section {
      margin-bottom: 80px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .feature-card {
      background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      padding: 30px;
      border-radius: 16px;
      text-align: center;
      border: 2px solid var(--border-color);
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      border-color: var(--accent-gold);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 20px;
      display: block;
    }

    .feature-card h3 {
      font-size: 1.4rem;
      color: var(--text-primary);
      margin-bottom: 16px;
      font-family: 'Georgia', serif;
    }

    .feature-card p {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .site-footer {
      background: var(--primary-bg);
      border-top: 3px solid var(--accent-gold);
      margin: 60px 0 0 0;
      padding: 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
      padding: 40px;
      align-items: start;
    }

    .footer-main h3 {
      font-family: 'Georgia', serif;
      font-size: 1.8rem;
      color: var(--text-primary);
      margin-bottom: 12px;
    }

    .footer-motto {
      font-style: italic;
      font-size: 1.2rem;
      color: var(--accent-brown);
      margin-bottom: 8px;
      font-weight: 500;
    }

    .footer-description {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
    }

    .footer-contact h4 {
      font-family: 'Georgia', serif;
      font-size: 1.3rem;
      color: var(--text-primary);
      margin-bottom: 15px;
    }

    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .contact-links a {
      color: var(--accent-brown);
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .contact-links a:hover {
      color: var(--accent-gold);
      text-decoration: underline;
    }

    .footer-bottom {
      background: var(--accent-brown);
      color: white;
      text-align: center;
      padding: 20px;
    }

    .footer-bottom p {
      margin: 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }

      .hero-image-container {
        margin: 30px auto 40px auto;
      }

      .hero-image {
        height: 300px;
      }

      .overlay-text h3 {
        font-size: 1.5rem;
      }

      .overlay-text p {
        font-size: 1rem;
      }

      .books-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 25px;
        padding: 30px 20px;
        text-align: center;
      }

      .footer-main h3 {
        font-size: 1.5rem;
      }

      .footer-motto {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .feature-card {
        padding: 20px;
      }

      .footer-content {
        padding: 25px 15px;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  books$!: Observable<Book[]>;
  loading = true;
  error: string | null = null;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks();
    
    // Simple loading state
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  trackByBookId(index: number, book: Book): number {
    return book.id;
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    const container = imgElement.parentElement;
    
    if (container) {
      container.classList.add('no-image');
      container.innerHTML = `
        <div class="no-image-content">
          <h3>📚 Literary Heritage Awaits</h3>
          <p>Your hero image has loaded successfully!</p>
        </div>
      `;
    }
  }
}