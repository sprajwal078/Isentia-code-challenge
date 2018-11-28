import { Component, OnInit, Input } from '@angular/core';
import { ImageItem } from '../../models/image-item.model';

@Component({
  selector: 'isen-img-item',
  templateUrl: './img-item.component.html',
  styleUrls: ['./img-item.component.scss']
})
export class ImgItemComponent implements OnInit {

  @Input()
  image: ImageItem;

  constructor() { }

  ngOnInit() {
  }

}
