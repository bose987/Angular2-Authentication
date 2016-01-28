// Angular
import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

import { ActionItemsService } from '../services/action-items-service';


let pendingTemplate = require('./pending.html');

@Component({
    selector: 'action-items-pending',
    providers: [ActionItemsService]
})

@View({
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: pendingTemplate
})

export class ActionItemsPending{
	arrjsonData:any;

	constructor( public actionItemsService: ActionItemsService ) {
		actionItemsService.getNotifications()
		.map(r => r.json())
		.subscribe( response => {
		    this.arrjsonData = response;
		});
		
	}



}