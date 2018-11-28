import { ImageItem } from './image-item.model';

export interface FlickrFeed {
  title: string;
  link: string;
  description: string;
  modified: Date;
  generator: string;
  items: ImageItem[];
}
