import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfographicData } from '../../models/book.model';

@Component({
  selector: 'app-infographic',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="infographic-container">
      <!-- Key Statistics -->
      <div class="stats-section">
        <h4>Key Statistics</h4>
        <div class="stats-grid">
          <div class="stat-card" 
               *ngFor="let stat of data.keyStats; let i = index"
               [style.animation-delay]="(i * 0.2) + 's'">
            <div class="stat-icon" [style.color]="stat.color">
              {{getIcon(stat.icon)}}
            </div>
            <div class="stat-value">{{stat.value}}</div>
            <div class="stat-label">{{stat.label}}</div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="timeline-section">
        <h4>Historical Timeline</h4>
        <div class="timeline" #timelineRef>
          <div class="timeline-item" 
               *ngFor="let event of data.timeline; let i = index"
               [class.high-importance]="event.importance === 'high'"
               [style.animation-delay]="(i * 0.3) + 's'">
            <div class="timeline-marker" [class]="event.importance"></div>
            <div class="timeline-content">
              <div class="timeline-year">{{event.year > 0 ? event.year : (-event.year) + ' BC'}}</div>
              <div class="timeline-event">{{event.event}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme Visualization -->
      <div class="themes-section">
        <h4>Theme Analysis</h4>
        <div class="themes-chart">
          <div class="theme-bar" 
               *ngFor="let theme of data.themes; let i = index"
               [style.animation-delay]="(i * 0.2) + 's'">
            <div class="theme-label">{{theme.theme}}</div>
            <div class="theme-progress">
              <div class="theme-fill" 
                   [style.width]="theme.weight + '%'"
                   [style.background-color]="theme.color">
              </div>
              <span class="theme-percentage">{{theme.weight}}%</span>
            </div>
            <div class="theme-description">{{theme.description}}</div>
          </div>
        </div>
      </div>

      <!-- Impact Metrics -->
      <div class="impact-section">
        <h4>Cultural Impact</h4>
        <div class="impact-chart">
          <div class="impact-metric" 
               *ngFor="let impact of data.impact; let i = index"
               [style.animation-delay]="(i * 0.25) + 's'">
            <div class="impact-category">{{impact.category}}</div>
            <div class="impact-score-container">
              <div class="impact-circle" 
                   [style.--score]="impact.score / impact.maxScore">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="30" 
                          class="circle-bg"></circle>
                  <circle cx="40" cy="40" r="30" 
                          class="circle-progress"
                          [style.stroke-dashoffset]="188.5 - (188.5 * impact.score / impact.maxScore)"></circle>
                </svg>
                <div class="score-text">{{impact.score}}</div>
              </div>
            </div>
            <div class="impact-description">{{impact.description}}</div>
          </div>
        </div>
      </div>

      <!-- Quotes Section -->
      <div class="quotes-section" *ngIf="data.quotes && data.quotes.length > 0">
        <h4>Notable Quotes</h4>
        <div class="quotes-container">
          <div class="quote-card" 
               *ngFor="let quote of data.quotes; let i = index"
               [style.animation-delay]="(i * 0.3) + 's'">
            <div class="quote-text">"{{quote.text}}"</div>
            <div class="quote-context">{{quote.context}}</div>
            <div class="quote-significance">{{quote.significance}}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .infographic-container {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 16px;
      padding: 30px;
      margin: 20px 0;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }

    h4 {
      font-family: 'Georgia', serif;
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
      position: relative;
    }

    h4::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #DAA520, #FFD700);
    }

    /* Statistics Section */
    .stats-section {
      margin-bottom: 40px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      animation: slideInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    .stat-card:hover {
      transform: translateY(-5px);
    }

    .stat-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .stat-value {
      font-size: 1.8rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 8px;
    }

    .stat-label {
      color: #666;
      font-size: 0.9rem;
    }

    /* Timeline Section */
    .timeline-section {
      margin-bottom: 40px;
    }

    .timeline {
      position: relative;
      padding-left: 30px;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #DAA520, #8B4513);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 30px;
      animation: slideInLeft 0.6s ease-out forwards;
      opacity: 0;
      transform: translateX(-30px);
    }

    .timeline-marker {
      position: absolute;
      left: -37px;
      top: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #DAA520;
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .timeline-marker.high {
      background: #e74c3c;
      width: 16px;
      height: 16px;
      left: -39px;
    }

    .timeline-content {
      background: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .timeline-year {
      font-weight: bold;
      color: #8B4513;
      margin-bottom: 5px;
    }

    .timeline-event {
      color: #2c3e50;
    }

    /* Themes Section */
    .themes-section {
      margin-bottom: 40px;
    }

    .themes-chart {
      margin-top: 20px;
    }

    .theme-bar {
      margin-bottom: 20px;
      animation: slideInRight 0.6s ease-out forwards;
      opacity: 0;
      transform: translateX(30px);
    }

    .theme-label {
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 8px;
    }

    .theme-progress {
      position: relative;
      background: #e9ecef;
      height: 30px;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 8px;
    }

    .theme-fill {
      height: 100%;
      border-radius: 15px;
      transition: width 1.5s ease-out;
      animation: expandWidth 1.5s ease-out;
    }

    .theme-percentage {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .theme-description {
      color: #666;
      font-size: 0.9rem;
    }

    /* Impact Section */
    .impact-section {
      margin-bottom: 40px;
    }

    .impact-chart {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .impact-metric {
      background: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      animation: fadeInScale 0.8s ease-out forwards;
      opacity: 0;
      transform: scale(0.8);
    }

    .impact-category {
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 15px;
    }

    .impact-score-container {
      margin: 20px 0;
    }

    .impact-circle {
      position: relative;
      display: inline-block;
    }

    .circle-bg {
      fill: none;
      stroke: #e9ecef;
      stroke-width: 6;
    }

    .circle-progress {
      fill: none;
      stroke: #4A90E2;
      stroke-width: 6;
      stroke-dasharray: 188.5;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      animation: drawCircle 2s ease-out forwards;
    }

    .score-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.4rem;
      font-weight: bold;
      color: #2c3e50;
    }

    .impact-description {
      color: #666;
      font-size: 0.9rem;
    }

    /* Quotes Section */
    .quotes-section {
      margin-bottom: 20px;
    }

    .quotes-container {
      margin-top: 20px;
    }

    .quote-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 12px;
      margin-bottom: 20px;
      position: relative;
      animation: slideInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(30px);
    }

    .quote-card::before {
      content: '"';
      position: absolute;
      top: -10px;
      left: 20px;
      font-size: 4rem;
      color: rgba(255,255,255,0.3);
      font-family: serif;
    }

    .quote-text {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 15px;
      padding-left: 30px;
    }

    .quote-context {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .quote-significance {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    /* Animations */
    @keyframes slideInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInScale {
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes expandWidth {
      from { width: 0; }
    }

    @keyframes drawCircle {
      from {
        stroke-dashoffset: 188.5;
      }
    }

    /* Dark Theme */
    [data-theme="dark"] .infographic-container {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      color: #ecf0f1;
    }

    [data-theme="dark"] h4 {
      color: #ecf0f1;
    }

    [data-theme="dark"] .stat-card,
    [data-theme="dark"] .timeline-content,
    [data-theme="dark"] .impact-metric {
      background: #34495e;
      color: #ecf0f1;
    }

    [data-theme="dark"] .stat-value {
      color: #ecf0f1;
    }

    [data-theme="dark"] .timeline-year {
      color: #f39c12;
    }

    [data-theme="dark"] .timeline-event,
    [data-theme="dark"] .theme-label,
    [data-theme="dark"] .impact-category {
      color: #bdc3c7;
    }

    [data-theme="dark"] .score-text {
      color: #ecf0f1;
    }
  `]
})
export class InfographicComponent implements OnInit, AfterViewInit {
  @Input() data!: InfographicData;
  @ViewChild('timelineRef') timelineRef!: ElementRef;

  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  getIcon(iconName: string): string {
    const icons: { [key: string]: string } = {
      'calendar': '📅',
      'chat': '💬',
      'book': '📚',
      'globe': '🌍',
      'library': '📖',
      'users': '👥',
      'clock': '⏰'
    };
    return icons[iconName] || '📊';
  }

  private animateOnScroll(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.stat-card, .timeline-item, .theme-bar, .impact-metric, .quote-card');
    elements.forEach(el => observer.observe(el));
  }
}