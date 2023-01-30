import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../../types/image";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() imagesSrc: string[] = [];
  images: Image[] = [];
  galleryMainImage!: string;
  lightboxMainImage!: string;
  showMask: boolean = false;
  currentLightboxIndex: number = 0;

  ngOnInit(): void {
    for (const imageSrc of this.imagesSrc) {
      this.images.push({
        src: imageSrc,
        isSelectedInGallery: false,
        isSelectedInLightbox: false
      });
    }
    this.images[0].isSelectedInGallery = true;
    this.images[0].isSelectedInLightbox = true;
    this.galleryMainImage = this.images[0].src;
    this.lightboxMainImage = this.images[0].src;
  }


  setGalleryImage(index: number) {
    this.galleryMainImage = this.images[index].src;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].isSelectedInGallery = i === index;
      this.images[i].isSelectedInLightbox = this.images[i].isSelectedInGallery;
    }
  }

  setLightboxImage(index: number) {
    this.currentLightboxIndex = index;
    this.lightboxMainImage = this.images[index].src;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].isSelectedInLightbox = i === index;
    }
  }

  previousLightboxImage() {
    this.currentLightboxIndex--;
    if (this.currentLightboxIndex < 0) {
      this.currentLightboxIndex += this.images.length;
    }
    this.setLightboxImage(this.currentLightboxIndex)
  }

  nextLightboxImage() {
    this.currentLightboxIndex++;
    if (this.currentLightboxIndex >= this.images.length) {
      this.currentLightboxIndex -= this.images.length;
    }
    this.setLightboxImage(this.currentLightboxIndex)
  }

  onPreviewImage() {
    this.showMask = !this.showMask;
  }
}
