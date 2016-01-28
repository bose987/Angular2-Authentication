import {Injectable, bind} from "angular2/core"
import { contentHeaders } from '../common/http-headers';
import { Router, RouterLink } from 'angular2/router';
import { AuthHttp } from '../common/angular2-auth';

@Injectable()

export class ActionItemsService{
	request: any;
	constructor( public authHttp: AuthHttp ) {
	}

	getNotifications() {
		this._callApi('http://localhost:3000/notifications');
		return this.request;
	}

	getReport() {
		this._callApi('http://localhost:3000/expense/all');
		return this.request;
	}

	_callApi( url ) {
		this.request = this.authHttp.get(url);
	}
}