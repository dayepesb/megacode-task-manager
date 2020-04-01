import {Component, OnInit, ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {ImageService} from '@app/service/image-service/image.service';
import {Constants} from '@app/util/constants';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  images: any [];
  url: string;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = false;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private imageService: ImageService) {
    this.getImagesCarrousel();
    this.images = imageService.images;
    console.log(this.images);
    this.url = Constants.URL_IMAGES_S3;
  }

  ngOnInit() {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  getImagesCarrousel() {
    this.imageService.getImagePrincipalPage();
  }
}
