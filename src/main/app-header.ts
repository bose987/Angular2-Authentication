import {Component} from "angular2/core"

@Component({
	selector: "app-header",
	template: `
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="/">Expense approval</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a class="" href="/login"><span class="glyphicon glyphicon-log-in"></span>
							<span>Login</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`
})

export class AppHeader { }
