import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';
import { Observable, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="theme-toggle" 
      (click)="toggleTheme()"
      [attr.aria-label]="'Switch to ' + (oppositeTheme$ | async) + ' theme'"
    >
      <div class="toggle-container">
        <div class="toggle-icon sun-icon" [class.active]="(currentTheme$ | async) === 'light'">
          ☀️
        </div>
        <div class="toggle-slider" [class.dark]="(currentTheme$ | async) === 'dark'"></div>
        <div class="toggle-icon moon-icon" [class.active]="(currentTheme$ | async) === 'dark'">
          🌙
        </div>
      </div>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 25px;
      transition: all 0.3s ease;
      outline: none;
      position: relative;
      z-index: 10;
    }

    .toggle-container {
      display: flex;
      align-items: center;
      position: relative;
      width: 60px;
      height: 30px;
      background: linear-gradient(45deg, #87ceeb, #f0e68c);
      border-radius: 15px;
      padding: 3px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .toggle-slider {
      position: absolute;
      width: 24px;
      height: 24px;
      background: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      left: 3px;
    }

    .toggle-slider.dark {
      transform: translateX(30px);
      background: #2c3e50;
    }

    .toggle-icon {
      font-size: 14px;
      z-index: 1;
      transition: opacity 0.3s ease;
      opacity: 0.6;
    }

    .toggle-icon.active {
      opacity: 1;
    }

    .sun-icon {
      margin-right: 6px;
    }

    .moon-icon {
      margin-left: 6px;
    }

    .theme-toggle:hover .toggle-container {
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  `]
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  currentTheme$: Observable<Theme>;
  oppositeTheme$: Observable<Theme>;
  private subscription = new Subscription();

  constructor(private themeService: ThemeService) {
    this.currentTheme$ = this.themeService.theme$;
    this.oppositeTheme$ = this.themeService.theme$.pipe(
      map(theme => theme === 'light' ? 'dark' : 'light')
    );
  }

  ngOnInit(): void {
    // Theme setting is handled in ThemeService
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTheme(): void {
    console.log('Theme toggle clicked!');
    this.themeService.toggleTheme();
    console.log('New theme:', this.themeService.getCurrentTheme());
  }
}