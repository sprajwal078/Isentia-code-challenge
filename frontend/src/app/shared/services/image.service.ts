import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlickrFeed } from '../models/flickr-feed.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  fetchImage (tags: any[] = []): Observable<FlickrFeed> {
    tags = tags.map(tag => tag.value);
    const params = new HttpParams().set('tags', tags.join(','));
    return this.http.get<FlickrFeed>('/flickr', {params});
  }
}
