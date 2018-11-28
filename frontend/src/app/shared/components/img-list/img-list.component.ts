import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Subscription } from 'rxjs';
import { FlickrFeed } from '../../models/flickr-feed.model';
import { SpinnerService } from '../spinner/spinner.service';

@Component({
  selector: 'isen-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit, OnDestroy {

  feed: FlickrFeed;
  subscription: Subscription;
  tags: any[];

  constructor(
    private imgService: ImageService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // when refetching the data, unsubscribe the previous subscribtion
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.spinnerService.show();
    this.subscription = this.imgService.fetchImage(this.tags)
      .subscribe((feed: FlickrFeed) => {
        this.spinnerService.hide();
        this.feed = feed;
      });
  }

  ngOnDestroy() {
    // TODO: use takeUntil and subjects to unsubscribe
    // rxjs takeUntil is not recognized for some reason
    this.subscription.unsubscribe();
  }

}
