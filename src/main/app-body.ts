import {Component} from "angular2/core"
import {AppLogin} from "../login/app-login"

@Component({
	selector: "app-body",
	directives: [AppLogin],
	template: "<app-login></app-login>"
})

export class AppBody{}
