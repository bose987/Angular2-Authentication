import {Injectable, bind} from "angular2/core"
import { AuthHttp } from '../common/angular2-auth';

@Injectable()
export class ExpenseService {
	request: any;
	constructor(public authHttp: AuthHttp) {
	}

	getExpenses() {
		this._callApi('http://localhost:3000/expense/user');
		return this.request;
	}

	_callApi(url) {
		this.request = this.authHttp.get(url);
	}
}