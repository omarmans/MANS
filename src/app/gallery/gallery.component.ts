import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  title = 'Gallery';
  Imgs: string[] = [
    'gallery-01.png',
    'gallery-02.png',
    'gallery-03.jpg',
    'gallery-04.png',
    'gallery-05.jpg',
    'gallery-06.png',
  ];
}
