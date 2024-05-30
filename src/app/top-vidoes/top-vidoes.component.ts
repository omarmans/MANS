interface VIDS {
  title: string;
  duration: string;
  src?: string;
}
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TopVidService } from './top-vid.service';

@Component({
  selector: 'app-top-vidoes',
  templateUrl: './top-vidoes.component.html',
  styleUrls: ['./top-vidoes.component.scss'],
})
export class TopVidoesComponent implements OnInit {
  title = 'Videos';
  Videos: VIDS[] = [];
  currentVideo!: VIDS;
  @ViewChild('myvido') videoElement!: ElementRef;
  constructor(private vid: TopVidService) {}
  ngOnInit(): void {
    this.get_data();
  }

  get_data() {
    this.vid.Get_data_From_SERVER().subscribe((vid: any) => {
      this.Videos = vid;
      this.Videos = vid.map((vid: any) => ({
        title: vid?.title,
        duration: '0:00', // Initialize duration string
        src: 'assets/Images/vid/' + vid?.title, // Set video src
      }));
      this.Videos.forEach((x: any, index) => {
        let videoElement = document.createElement('video');

        videoElement.src = 'assets/Images/vid/' + x.title;

        videoElement.addEventListener('loadedmetadata', () => {
          // Once metadata is loaded, update the duration for the corresponding video
          let durationInSeconds = videoElement.duration;
          let minutes = Math.floor(durationInSeconds / 60);
          let seconds = Math.floor(durationInSeconds % 60);
          let durationString = `${minutes}:${seconds}`;
          this.Videos[index].duration = durationString;

          this.throw_title(this.Videos[0]);
        });
      });
      console.log(this.Videos);
    });
    //##################
  }

  // throw_title(vid: VIDS) {
  //   this.currentVideo = vid;
  //   const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
  //   videoElement.src = this.currentVideo.src!;
  //   videoElement.load(); // Reload the video
  // }
  throw_title(vid: VIDS) {
    this.currentVideo = vid;
    const videoSrc = this.currentVideo?.src;

    if (videoSrc && this.videoElement && this.videoElement.nativeElement) {
      const video: HTMLVideoElement = this.videoElement.nativeElement;
      video.src = videoSrc;
      video.load();
    }
  }
}
