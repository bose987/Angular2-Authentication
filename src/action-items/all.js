var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var action_items_service_1 = require('../services/action-items-service');
var allTemplate = require('./all.html');
var ActionItemsAll = (function () {
    function ActionItemsAll(actionItemsService) {
        var _this = this;
        this.actionItemsService = actionItemsService;
        actionItemsService.getReport()
            .map(function (r) { return r.json(); })
            .subscribe(function (response) {
            _this.arrjsonData = response.expenses;
        });
    }
    ActionItemsAll = __decorate([
        core_1.Component({
            selector: 'action-items-all',
            providers: [action_items_service_1.ActionItemsService]
        }),
        core_1.View({
            directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: allTemplate
        }), 
        __metadata('design:paramtypes', [action_items_service_1.ActionItemsService])
    ], ActionItemsAll);
    return ActionItemsAll;
})();
exports.ActionItemsAll = ActionItemsAll;
//# sourceMappingURL=all.js.map