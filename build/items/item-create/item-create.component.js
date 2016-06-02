"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var item_service_1 = require('../shared/item.service');
var validators_1 = require('../shared/validators');
var ItemCreateComponent = (function () {
    function ItemCreateComponent(itemService, fb) {
        this.itemService = itemService;
        this.createForm = fb.group({
            'itemName': ['', common_1.Validators.compose([
                    common_1.Validators.required, validators_1.ExtendedValidators.nameValidator])],
            'itemCode': ['', common_1.Validators.required]
        });
        //this.controls = this.createForm.controls;
    }
    ItemCreateComponent.prototype.stateCheck = function (control, code) {
        var checks = {};
        return (code in checks) ? checks[code] : control.touched;
    };
    ItemCreateComponent.prototype.validityCheck = function (control, code) {
        var checks = {
            'itemName': {
                'condition': control.hasError('invalidName'),
                'message': 'Name must start with abc'
            }
        }[code];
        return {
            "result": checks['condition'],
            "message": checks['message']
        };
    };
    ItemCreateComponent.prototype.check = function (control) {
        var c = this.createForm.controls[control];
        if (this.stateCheck(c, control)) {
            if (c.hasError('required')) {
                return {
                    "result": true,
                    "message": "Required Field!"
                };
            }
            else {
                return this.validityCheck(c, control);
            }
        }
        else {
            return {
                "result": false,
                "message": ""
            };
        }
    };
    ItemCreateComponent.prototype.submitItem = function (form) {
        console.log(form);
        this.itemName = form['itemName'];
        this.itemCode = form['itemCode'];
        this.itemService.setItem(this.itemName, this.itemCode);
        this.itemName = '';
        this.itemCode = '';
    };
    ItemCreateComponent = __decorate([
        core_1.Component({
            selector: 'create-item',
            templateUrl: 'app/items/item-create/item-create.component.html',
            styleUrls: ['app/items/item-create/item-create.component.css'],
            directives: [common_1.FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, common_1.FormBuilder])
    ], ItemCreateComponent);
    return ItemCreateComponent;
}());
exports.ItemCreateComponent = ItemCreateComponent;
//# sourceMappingURL=item-create.component.js.map