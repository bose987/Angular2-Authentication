import {Injectable} from "angular2/core"

@Injectable()
export class UserModel{

	constructor(
		public name, public email, public role, public image_url = ''
	) {}

}