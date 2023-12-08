import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  @ViewChild('backgroundMusic') backgroundMusic!: ElementRef;

  numberOfImages = 1;

  ngOnInit() {
    this.playBackgroundMusic();
  }

  playBackgroundMusic() {
    const audio: HTMLAudioElement = this.backgroundMusic.nativeElement;
    audio.play().catch((error) => {
      console.error('Error playing background music:', error);
    });
  }
}
