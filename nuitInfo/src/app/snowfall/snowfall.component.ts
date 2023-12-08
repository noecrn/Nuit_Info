import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-snowfall',
  templateUrl: './snowfall.component.html',
  styleUrls: ['./snowfall.component.scss']
})
export class SnowfallComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.createSnowflakes();
  }

  private createSnowflakes() {
    const snowflakesContainer = this.renderer.createElement('div');
    this.renderer.addClass(snowflakesContainer, 'snowflakes');

    this.renderer.appendChild(this.document.body, snowflakesContainer);

    for (let i = 0; i < 150; i++) {
      const snowflake = this.renderer.createElement('div');
      this.renderer.addClass(snowflake, 'snowflake');
      this.renderer.setStyle(snowflake, 'left', `${Math.random() * 100}vw`);
      this.renderer.setStyle(snowflake, 'animationDuration', `${Math.random() * 3 + 2}s`);

      this.renderer.appendChild(snowflakesContainer, snowflake);
    }
  }
}
