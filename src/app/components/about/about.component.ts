import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="about-container">
      <section class="about-hero">
        <div class="hero-content">
          <h1 class="main-title">Digital Light in a Flood of Darkness</h1>
          <p class="subtitle">Turn to the Classics</p>
        </div>
      </section>

      <section class="mission-section">
        <div class="content-wrapper">
          <div class="mission-content">
            <h2>Our Mission</h2>
            <p class="lead-text">
              In an age drowning in digital noise, superficial content, and fleeting distractions, 
              MacKnight Publications stands as a lighthouse—illuminating the path back to wisdom.
            </p>
            <p>
              We believe humanity's greatest insights aren't found in tomorrow's trending topics, 
              but in yesterday's timeless truths. The classics aren't old; they're eternal. 
              They've survived millennia because they speak to what is unchanging in the human soul.
            </p>
            <p>
              From Plato's cave to Dante's journey, from Homer's heroes to Shakespeare's stages, 
              these works have guided civilizations through their darkest hours and brightest triumphs. 
              Now, as our world faces new complexities, we turn again to these beacons of wisdom.
            </p>
          </div>
        </div>
      </section>

      <section class="philosophy-section">
        <div class="content-wrapper">
          <h2>Why the Classics Matter Now</h2>
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <div class="icon">🕯️</div>
              <h3>Enduring Wisdom</h3>
              <p>While algorithms feed us what we want to hear, the classics challenge us with what we need to know.</p>
            </div>
            <div class="philosophy-card">
              <div class="icon">⚖️</div>
              <h3>Moral Clarity</h3>
              <p>In an age of relativism, these works offer fixed stars by which to navigate ethical complexity.</p>
            </div>
            <div class="philosophy-card">
              <div class="icon">🌟</div>
              <h3>Human Excellence</h3>
              <p>They show us not just who we are, but who we might become—the heights of human potential.</p>
            </div>
            <div class="philosophy-card">
              <div class="icon">🔗</div>
              <h3>Cultural Foundation</h3>
              <p>Understanding our civilization requires knowing its roots—the ideas that shaped our world.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="info-section">
        <div class="content-wrapper">
          <div class="info-cards">
            <div class="info-card">
              <div class="card-header">
                <h2>About MacKnight Publications</h2>
              </div>
              <div class="card-content">
                <p>
                  Founded with a simple yet profound conviction: that the greatest books ever written 
                  should be accessible, understood, and celebrated in our digital age. We combine 
                  scholarly depth with modern technology to bring these masterworks to new generations.
                </p>
                <p>
                  Our interactive infographics, comprehensive analyses, and multimedia experiences 
                  transform ancient wisdom into living knowledge. We don't just preserve these texts; 
                  we illuminate them for the 21st century mind.
                </p>
              </div>
            </div>

            <div class="info-card">
              <div class="card-header">
                <h2>Connect With Us</h2>
              </div>
              <div class="card-content">
                <p class="contact-intro">
                  Join us in preserving and celebrating humanity's greatest literary achievements.
                </p>
                <div class="contact-details">
                  <div class="contact-item">
                    <strong>Michael Allen Ackerman</strong><br>
                    Founder & Curator
                  </div>
                  <div class="contact-item">
                    <a href="mailto:michael@macknightpublications.org">michael@macknightpublications.org</a>
                  </div>
                  <div class="contact-item">
                    <a href="tel:541.300.9348">541.300.9348</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="developer-word-section">
        <div class="content-wrapper">
          <h2>A Word from the Developer</h2>
          <div class="developer-content">
            <p class="opening-quote">
              "What we need is not the will to believe, but the wish to find out." — Bertrand Russell
            </p>
            
            <p>
              Like Harold Bloom's monumental <em>The Western Canon</em>, this collection represents a carefully curated 
              selection of humanity's most transformative literary works. While Bloom championed the aesthetic and 
              intellectual sovereignty of great literature, our approach embraces a broader, more inclusive understanding 
              of influence—recognizing that profound ideas have emerged from every corner of human civilization.
            </p>

            <p>
              These 50 works represent more than mere books; they are the intellectual DNA of our species. From Plato's 
              <em>Republic</em> to Darwin's <em>Origin of Species</em>, from the ancient wisdom of Confucius to the 
              revolutionary insights of modern thinkers, each text has fundamentally altered how we understand ourselves, 
              our societies, and our place in the cosmos.
            </p>

            <p>
              This collection marks the inaugural volume of our <strong>"In A NutShell Series"</strong>—a commitment 
              to making complex, influential ideas accessible through interactive digital experiences. In an era of 
              information overload, we believe in the power of deep engagement with enduring truths. Each subsequent 
              volume will explore different facets of human knowledge, always with the goal of illuminating rather 
              than overwhelming.
            </p>

            <p class="closing-signature">
              The goal is not to replace reading these masterworks in full, but to inspire a return to them. In this 
              digital age, we offer light—not to blind, but to guide you toward the classics that have lit the way 
              for millennia.
            </p>

            <div class="series-announcement">
              <h4>🥜 In A NutShell Series - Volume 1</h4>
              <p><em>More volumes exploring philosophy, science, art, and human thought coming soon.</em></p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="content-wrapper">
          <h2>Begin Your Journey</h2>
          <p>Discover the 50 books that shaped civilization</p>
          <button class="cta-button" routerLink="/">Explore the Collection</button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f4e8 0%, #e8e6d3 100%);
    }

    .about-hero {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #8B4513 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .about-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(218,165,32,0.1) 0%, transparent 70%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
    }

    .main-title {
      font-family: 'Georgia', serif;
      font-size: 3rem;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      line-height: 1.2;
    }

    .subtitle {
      font-size: 1.8rem;
      font-style: italic;
      color: #DAA520;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }

    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 60px 20px;
    }

    section h2 {
      font-family: 'Georgia', serif;
      font-size: 2.2rem;
      color: #2c3e50;
      margin-bottom: 30px;
      text-align: center;
      border-bottom: 3px solid #DAA520;
      padding-bottom: 15px;
      display: inline-block;
      width: 100%;
    }

    .mission-content {
      text-align: center;
    }

    .lead-text {
      font-size: 1.3rem;
      line-height: 1.8;
      color: #2c3e50;
      margin-bottom: 30px;
      font-weight: 500;
    }

    .mission-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #444;
      margin-bottom: 20px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .philosophy-section {
      background: linear-gradient(135deg, #e8e6d3 0%, #f5f4e8 100%);
    }

    .philosophy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .philosophy-card {
      background: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .philosophy-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .philosophy-card .icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    .philosophy-card h3 {
      font-size: 1.4rem;
      color: #2c3e50;
      margin-bottom: 15px;
      font-family: 'Georgia', serif;
    }

    .philosophy-card p {
      color: #666;
      line-height: 1.6;
    }

    .info-section {
      background: linear-gradient(135deg, #e8e6d3 0%, #f5f4e8 100%);
    }

    .info-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 20px;
    }

    @media (min-width: 769px) {
      .info-cards {
        grid-template-columns: 1fr 1fr;
      }
    }

    .info-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .info-card .card-header {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      color: white;
      padding: 25px;
    }

    .info-card .card-header h2 {
      color: white;
      border: none;
      margin: 0;
      font-size: 1.6rem;
      text-align: left;
    }

    .info-card .card-content {
      padding: 30px;
    }

    .info-card .card-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #444;
      margin-bottom: 20px;
    }

    .contact-intro {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #2c3e50;
      font-weight: 500;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .contact-item {
      font-size: 1.1rem;
      color: #444;
    }

    .contact-item a {
      color: #8B4513;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-item a:hover {
      color: #DAA520;
    }

    .cta-section {
      background: linear-gradient(135deg, #8B4513 0%, #DAA520 100%);
      color: white;
      text-align: center;
      padding: 80px 20px;
    }

    .cta-section h2 {
      color: white;
      border: none;
      margin-bottom: 15px;
    }

    .cta-section p {
      font-size: 1.3rem;
      margin-bottom: 30px;
    }

    .cta-button {
      background: white;
      color: #8B4513;
      border: none;
      padding: 15px 40px;
      border-radius: 30px;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }

    .developer-word-section {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      padding: 0;
    }

    .developer-word-section h2 {
      color: white;
      border-bottom-color: #f39c12;
      text-align: center;
      margin-bottom: 40px;
    }

    .developer-content {
      background: rgba(255,255,255,0.05);
      padding: 50px;
      border-radius: 16px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
    }

    .opening-quote {
      font-size: 1.3rem;
      font-style: italic;
      text-align: center;
      color: #DAA520;
      margin-bottom: 30px;
      padding: 20px;
      border-left: 4px solid #f39c12;
      background: rgba(218,165,32,0.1);
      border-radius: 8px;
    }

    .developer-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 25px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }

    .closing-signature {
      font-style: italic;
      font-size: 1.2rem;
      color: #ecf0f1;
      border-top: 2px solid #f39c12;
      padding-top: 20px;
      margin-top: 30px;
    }

    .series-announcement {
      background: linear-gradient(135deg, #8B4513, #DAA520);
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      margin-top: 30px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    .series-announcement h4 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .series-announcement p {
      margin: 0;
      color: rgba(255,255,255,0.9);
      font-size: 1rem;
    }

    @media (max-width: 600px) {
      .main-title {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1.4rem;
      }

      .philosophy-grid {
        grid-template-columns: 1fr;
      }

      .info-cards {
        grid-template-columns: 1fr;
      }

      .developer-content {
        padding: 30px 20px;
      }

      .opening-quote {
        font-size: 1.1rem;
        padding: 15px;
      }

      .series-announcement {
        padding: 20px;
      }
    }

    [data-theme="dark"] .about-container {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    }

    [data-theme="dark"] section h2 {
      color: #ecf0f1;
      border-bottom-color: #f39c12;
    }

    [data-theme="dark"] .philosophy-card {
      background: #34495e;
      color: #ecf0f1;
    }

    [data-theme="dark"] .philosophy-card h3 {
      color: #ecf0f1;
    }

    [data-theme="dark"] .philosophy-card p {
      color: #bdc3c7;
    }

    [data-theme="dark"] .info-section {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
    }

    [data-theme="dark"] .info-card {
      background: #34495e;
    }

    [data-theme="dark"] .info-card .card-content p {
      color: #bdc3c7;
    }

    [data-theme="dark"] .contact-intro {
      color: #ecf0f1;
    }

    [data-theme="dark"] .contact-item {
      color: #bdc3c7;
    }

    [data-theme="dark"] .contact-item a {
      color: #DAA520;
    }

    [data-theme="dark"] .contact-item a:hover {
      color: #FFD700;
    }

    [data-theme="dark"] .philosophy-section {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
    }
  `]
})
export class AboutComponent {}