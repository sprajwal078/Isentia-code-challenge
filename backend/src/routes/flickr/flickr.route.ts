import { logger } from '@/services';
import * as config from 'config';
import { NextFunction, Request, Response } from 'express';
import * as request from 'request';
import { BaseRoute } from '../route';
/**
 * @api {get} /flickr flicker Request images
 * @apiName Flickr
 * @apiGroup Flickr
 *
 * @apiSuccess {String} type Json Type.
 */
export class FlickrRoute extends BaseRoute {
  public static path = '/flickr';
  private static instance: FlickrRoute;

  /**
   * @class FlickrRoute
   * @constructor
   */
  private constructor () {
    super();
    this.get = this.get.bind(this);
    this.init();
  }

  static get router () {
    if (!FlickrRoute.instance) {
      FlickrRoute.instance = new FlickrRoute();
    }
    return FlickrRoute.instance.router;
  }

  private init () {
    // log
    logger.info('[FlickrRoute] Creating flickr route.');

    // add index page route
    this.router.get('/', this.get);
  }

  /**
   * @class FlickrRoute
   * @method get
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @param next {NextFunction} Execute the next method.
   */
  private async get (req: Request, res: Response, next: NextFunction) {
    // make the http request to
    // https://api.flickr.com/services/feeds/photos_public.gne
    //  and return the result
    let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

    // append tags to the url
    if (req.query && req.query.tags) {
      url += `&tags=${req.query.tags}`;
    }

    // make get request to the url and forward the response
    request.get(url, (err, resp, body) => {
      err ? res.json(err) : res.json(this.stripResponse(body));
    });
  }

  /**
   * @class FlickrRoute
   * @method stripResponse
   * @param body {any} Response object to strip.
   */
  private stripResponse (body: string) {
    // the resoponse object looks something like this
    //  jsonFlickrFeed({...content})
    // so we need to strip out the jsonFlickrFeed( and the )
    // strips out the jsonFlickrFeed(
    body = body.slice('jsonFlickrFeed'.length + 1);
    // strips out the ) from last ite
    body = body.slice(0, -1);
    return JSON.parse(body);
  }
}
