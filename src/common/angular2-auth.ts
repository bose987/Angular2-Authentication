import {Injectable, Injector} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, BaseRequestOptions, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

// Avoid TS error "cannot find name escape"
declare var escape: any;

export interface IAuthConfig {

  authHeaders: any;
}

/**
 * Sets up the authentication configuration.
 */

export class AuthConfig {
  
  config: any;

  authHeaders: any;

  constructor(config?: any) {
    this.config = config || {};

    this.authHeaders = this.config.authHeaders || [];
  }

  getConfig() {
    return {
      authHeaders: this.authHeaders
    }
  }

}

/**
 * Allows for explicit authenticated HTTP requests.
 */

@Injectable()
export class AuthHttp {

  private _config: IAuthConfig;
  public tokenStream: Observable<string>;

  constructor(options: AuthConfig, private http: Http) {
    this._config = options.getConfig();
  }

  private _request( requestOptions: RequestOptions ) : Observable<Response> {

    let request:any;
	let headers:any;
    let index:any;
    
	if(!requestOptions.headers) {
		requestOptions.headers = new Headers();
	}

	for( index in this._config.authHeaders ) {
		requestOptions.headers.set( this._config.authHeaders[index][0], this._config.authHeaders[index][1] );
	}

    switch( requestOptions.method ) {
     	case 0:
     		request = this.http.get( requestOptions.url, requestOptions );
     		break;

     	case 1:
     		request = this.http.post( requestOptions.url, requestOptions.body, requestOptions );
     		break;

     	case 2:
     		request = this.http.put( requestOptions.url, requestOptions.body, requestOptions );
     		break;

     	case 3:
     		request = this.http.delete( requestOptions.url, requestOptions );
     		break;

     	case 4:
     		request = this.http.patch( requestOptions.url, requestOptions.body, requestOptions );
     		break;

     	case 5:
     		request = this.http.head( requestOptions.url, requestOptions );
     		break;

     	default:
     		request = this.http.get( requestOptions.url, requestOptions );
	     	break;
     }

    return request;
  }

  private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions: RequestOptionsArgs) : Observable<Response> {
    let requestOptions = new RequestOptions(requestArgs);
    
    if(additionalOptions) {
      requestOptions = requestOptions.merge(additionalOptions)
    }
    
    return this._request( requestOptions )
  }

  get(url: string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, method: RequestMethod.Get }, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, body: body, method: RequestMethod.Post }, options);
  }

  put(url: string, body: string, options ?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, body: body, method: RequestMethod.Put }, options);
  }

  delete(url: string, options ?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, method: RequestMethod.Delete }, options);
  }

  patch(url: string, body:string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, body: body, method: RequestMethod.Patch }, options);
  }

  head(url: string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, method: RequestMethod.Head }, options);
  }

}
