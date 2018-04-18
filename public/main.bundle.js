webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/general/general.module": [
		"../../../../../src/app/general/general.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        loadChildren: 'app/general/general.module#GeneralModule',
        component: __WEBPACK_IMPORTED_MODULE_3__general_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div class=\"container\"  style=\"margin-top:15px;\">\r\n    <flash-messages></flash-messages>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "app";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_general_module__ = __webpack_require__("../../../../../src/app/general/general.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__("../../../../ngx-qrcode2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__upload_service__ = __webpack_require__("../../../../../src/app/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularx_qrcode__ = __webpack_require__("../../../../angularx-qrcode/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import {DashboardComponent} from './general/dashboard/dashboard.component';
/*import {NavbarComponent} from './general/navbar/navbar.component';
import {SidebarComponent} from './general/sidebar/sidebar.component';
import {FooterComponent} from './gafooter/footer.component';*/
// services









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */]
                //DashboardComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                //routing module
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                //user defines modules
                __WEBPACK_IMPORTED_MODULE_6__general_general_module__["GeneralModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["AutoCompleteModule"], __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["PickListModule"], __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["ConfirmDialogModule"], __WEBPACK_IMPORTED_MODULE_14_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__custom_http_service__["a" /* CustomHttpService */],
                __WEBPACK_IMPORTED_MODULE_15__upload_service__["a" /* UploadService */],
                __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header\">\n    <div class=\"col-xs-12\">\n        <h2>\n            All Areas\n        </h2>\n    </div>\n</section>\n<section class=\"content\">\n    <!--  Page Content Here -->\n\n    <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n            <div class=\"box-header\">\n                <h3 class=\"box-title\">List Of All Areas</h3>\n                <br>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body table-responsive no-padding\">\n                <table class=\"table table-hover\">\n                    <tbody>\n                        <tr>\n                            <th>Name</th>\n                            <!--<th>Status</th>-->\n                            <th>Action</th>\n                        </tr>\n                        <tr *ngFor=\"let area of areas | paginate: { itemsPerPage: 15, currentPage: p }\">\n                            <td>{{ area.name }}</td>\n                            <!--<td *ngIf=\"area.status\">\n                                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(area._id,area.status)\"> Active</button>\n                            </td>\n                            <td *ngIf=\"!area.status\">\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(area._id,area.status)\"> Inactive</button>\n                            </td>-->\n                            <td>\n                                <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"editArea(area._id)\"> Edit</a>\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n            <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaAllComponent = (function () {
    function AreaAllComponent(areaService) {
        this.areaService = areaService;
        this.areas = [];
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEditForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AreaAllComponent.prototype.ngOnInit = function () {
    };
    AreaAllComponent.prototype.toggleStatus = function (id, status) {
        var _this = this;
        var data = {
            id: id,
            status: !status
        };
        this.areaService.setStatus(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.statusChange.emit(true);
            }
            else {
                _this.statusChange.emit(false);
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    AreaAllComponent.prototype.editArea = function (id) {
        this.showEditForm.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AreaAllComponent.prototype, "areas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AreaAllComponent.prototype, "statusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AreaAllComponent.prototype, "showEditForm", void 0);
    AreaAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-all',
            template: __webpack_require__("../../../../../src/app/area/area-all/area-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area/area-all/area-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__area_service__["a" /* AreaService */]])
    ], AreaAllComponent);
    return AreaAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:1000px\">\n  <div class=\"col-xs-12\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Area Added Successfully !!</div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n\n    <ol class=\"breadcrumb \">\n      <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n      <li><a [routerLink]=\"[ '/dashboard/area' ] \"><i class=\"fa fa-dashboard \"></i> Area</a></li>\n      <li class=\"active \">New</li>\n    </ol>\n  </div>\n  <section class=\" content-header \">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              (click)=\"createModeOn()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;New Area\n      </button>\n      <h2 *ngIf=\"!editMode && createMode\">\n        Add New Area\n      </h2>\n      <h2 *ngIf=\"editMode && !createMode\">\n        Update Area\n      </h2>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"createMode || editMode\">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\">\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"areaCreateForm\" (submit)=\"submitCreateAreaForm()\">\n          <!--name-->\n          <div class=\" form-group\">\n            <label for=\"name\" class=\"col-sm-2 control-label \">Name</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"name\" type=\"text \" class=\"form-control\" id=\"name\" placeholder=\"area name \">\n            </div>\n          </div>\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"!editMode\">Save</button>\n              <button type=\"submit\" class=\"btn btn-warning\" *ngIf=\"editMode\">Update</button>\n              <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"editMode || createMode\" (click)=\"cancelEdit()\">Cancel</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </section>\n  <app-area-all (showEditForm)=\"showEditForm($event)\" (statusChange)=\"statusChanged($event)\"\n                [areas]=\"areas\"></app-area-all>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaCreateComponent = (function () {
    function AreaCreateComponent(areaService, fb) {
        this.areaService = areaService;
        this.fb = fb;
        this.showSuccess = false;
        this.showError = false;
        this.areas = [];
        this.editMode = false;
        this.createMode = false;
    }
    AreaCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getAllArea();
    };
    AreaCreateComponent.prototype.buildForm = function () {
        this.areaCreateForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    AreaCreateComponent.prototype.submitCreateAreaForm = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        var data = {
            id: this.id,
            name: this.areaCreateForm.value.name,
            status: true
        };
        if (!this.editMode) {
            this.areaService.createArea(data)
                .subscribe(function (res) {
                if (res.status) {
                    _this.getAllArea();
                    _this.showSuccess = true;
                    _this.areaCreateForm.reset();
                }
                else {
                    _this.showError = true;
                }
            }, function (err) {
                console.log("ERROR from createArea");
                _this.showError = true;
            });
        }
        else {
            this.areaService.updateArea(data)
                .subscribe(function (res) {
                // console.log(res);
                _this.getAllArea();
                _this.areaCreateForm.reset();
                _this.editMode = false;
            }, function (err) {
            });
        }
    };
    AreaCreateComponent.prototype.getAllArea = function () {
        var _this = this;
        this.areaService.getAllArea()
            .subscribe(function (res) {
            _this.areas = res;
        }, function (err) {
            console.log(err);
        });
    };
    AreaCreateComponent.prototype.statusChanged = function (event) {
        this.getAllArea();
    };
    AreaCreateComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.createMode = false;
        this.areaCreateForm.reset();
        this.getAllArea();
    };
    AreaCreateComponent.prototype.showEditForm = function (event) {
        var _this = this;
        this.editMode = true;
        this.createMode = false;
        this.id = event;
        this.areaService.getAreaById(event)
            .subscribe(function (res) {
            _this.areaCreateForm.patchValue({
                name: [res.name]
            });
        }, function (err) {
        });
    };
    AreaCreateComponent.prototype.createModeOn = function () {
        this.editMode = false;
        this.createMode = true;
        this.areaCreateForm.reset();
    };
    AreaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-create',
            template: __webpack_require__("../../../../../src/app/area/area-create/area-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area/area-create/area-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AreaCreateComponent);
    return AreaCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var areaRoutes = [];
var AreaRoutingModule = (function () {
    function AreaRoutingModule() {
    }
    AreaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(areaRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], AreaRoutingModule);
    return AreaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_create_area_create_component__ = __webpack_require__("../../../../../src/app/area/area-create/area-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_routing_module__ = __webpack_require__("../../../../../src/app/area/area-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_all_area_all_component__ = __webpack_require__("../../../../../src/app/area/area-all/area-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AreaModule = (function () {
    function AreaModule() {
    }
    AreaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__area_routing_module__["a" /* AreaRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__area_create_area_create_component__["a" /* AreaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__area_all_area_all_component__["a" /* AreaAllComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__area_service__["a" /* AreaService */]
            ]
        })
    ], AreaModule);
    return AreaModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaService = (function () {
    function AreaService(http) {
        this.http = http;
        this.areaUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'area/';
    }
    AreaService.prototype.createArea = function (data) {
        var url = this.areaUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    AreaService.prototype.getAllArea = function () {
        var url = this.areaUrl + 'all/';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AreaService.prototype.setStatus = function (data) {
        var url = this.areaUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    AreaService.prototype.getAreaById = function (id) {
        var url = this.areaUrl + 'id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AreaService.prototype.updateArea = function (data) {
        var url = this.areaUrl + 'update/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    AreaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "../../../../../src/app/custom-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomHttpService = (function () {
    function CustomHttpService(http) {
        this.http = http;
    }
    CustomHttpService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get(url, { headers: headers });
    };
    CustomHttpService.prototype.post = function (url, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post(url, d, { headers: headers });
    };
    CustomHttpService.prototype.put = function (url, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.put(url, d, { headers: headers });
    };
    CustomHttpService.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.delete(url, { headers: headers });
    };
    CustomHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CustomHttpService);
    return CustomHttpService;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 15px;*/\n}\n\n.box-header {\n    margin-bottom: 20px;\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3500px;\">\n  <div *ngIf=\"autoGenerateList\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isAutoGenerateError\">\n      Error in saving auto invoices\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isAutoGenerateSuccess\">\n      Auto Invoices saved successfully !!\n    </div>\n  </div>\n\n  <app-customer-search></app-customer-search>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        All Customers\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/customer/all' ]\"><i class=\"fa fa-dashboard\"></i> Customer</a></li>\n        <li class=\"active\">All</li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"content\">\n    <!--  Page Content Here -->\n\n    <div class=\"col-xs-12\">\n\n      <div class=\"box box-primary\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">List Of All Customers</h3>\n          <br>\n          <div class=\"box-tools\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\"\n                         placeholder=\"Filter Customers List in this page\"\n                         (keyup)=\"quickSearch($event.target.value)\">\n                </div>\n                <br>\n                <button class=\"btn btn-primary pull-right\" (click)=\"generateAutoInvoice()\">Generate Invoice\n                </button>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <!-- /.row -->\n            <!-- /.row -->\n            <div class=\"col-md-offset-4\">\n              <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n            </div>\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:100px\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Email</th>\n              <th>Fullname</th>\n              <th>Customer ID</th>\n              <th>GST No.</th>\n              <th>Product</th>\n              <th>Mobile</th>\n              <th>Location</th>\n              <th>Area</th>\n              <th>City</th>\n              <th>Status</th>\n              <th>Action</th>\n              <th>Auto generate <br> invoice monthly</th>\n            </tr>\n            <tr\n              *ngFor=\"let customer of customers | paginate: { itemsPerPage: 40, currentPage: p,totalItems:totalCustomerCount }\">\n              <td>{{ customer.username }}</td>\n              <td>{{ customer.email }}</td>\n              <td>{{ customer.fullname }}</td>\n              <td>{{ customer.nid}}</td>\n              <td>{{ customer.gstno }}</td>\n              <!--<td><span *ngIf=\"customer.productData?.length>0\"> {{ customer.productData[0]?.name }} - <em *ngIf=\"customer.productData[0]?.rate\">{{ customer.productData[0]?.rate }} INR/month</em> </span><small class=\"label bg-blue\">{{ customer.productData.length }}</small></td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ customer.productData.length }}</small>\n              </td>\n              <td>{{ customer.mobile_primary }}</td>\n              <td>{{ customer.location }}</td>\n              <td>{{ customer.areaData?.name }}</td>\n              <td>{{ customer.city }}</td>\n              <td *ngIf=\"customer.status\">\n                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(customer)\"> Active</button>\n              </td>\n              <td *ngIf=\"!customer.status\">\n                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(customer)\"> Inactive</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\" [routerLink]=\"['/dashboard/customer/detail',customer._id]\">\n                  Edit</a>\n              </td>\n              <td>\n                <input [attr.checked]=\"customer.isGenerateInvoiceMonthly ? 'checked' : null\"\n                       style=\"zoom: 1.5;margin-left: 10px;\" type=\"checkbox\"\n                       name=\"customer._id\" value=\"customer._id\" (click)=\"checkGenerateInvoice(customer)\">\n              </td>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n\n  </section>\n  <!--for generating invoice-->\n</div>\n<div class=\"col-md-12\" style=\"margin-top:-20px\">\n  <div *ngFor=\"let autoInvoice of autoGenerateList\">\n    <app-invoice-html [autoInvoice]=\"autoInvoice\"></app-invoice-html>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerAllComponent = (function () {
    // public tempCustomer:Customer;
    function CustomerAllComponent(customerService, productService, areaService) {
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.customers = [];
        this.display = false;
        this.productList = [];
        this.searchMode = 'username';
        this.totalCustomerCount = 0;
        this.paginator = 1;
        this.autoGenerateList = [];
        this.isAutoGenerateSuccess = false;
        this.isAutoGenerateError = false;
        this.options = [
            {
                measure: 'length',
                display: 'Length'
            },
            {
                measure: 'area',
                display: 'Area'
            },
            {
                measure: 'volume',
                display: 'volume'
            },
            {
                measure: 'time',
                display: 'Time'
            },
            {
                measure: 'current',
                display: 'Current'
            },
            {
                measure: 'energy',
                display: 'Energy'
            },
        ];
    }
    CustomerAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAutoGenerateSuccess = false;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getAllCustomer(this.paginator);
    };
    CustomerAllComponent.prototype.getAllCustomer = function (paginator) {
        var _this = this;
        this.customers = [];
        this.customerService.getAllCustomers(paginator)
            .subscribe(function (res) {
            var data = [];
            data = res;
            // getting products
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](data, function (item) {
                item.productData = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](item.productList, function (element) {
                    _this.productService.getProductById(element)
                        .subscribe(function (res) {
                        item.productData.push(res);
                    }, function (err) {
                    });
                });
                if (item.area) {
                    _this.areaService.getAreaById(item.area)
                        .subscribe(function (res) {
                        item.areaData = res;
                    }, function (err) {
                    });
                }
                _this.customers.push(item);
            });
        }, function (err) {
            console.log("Error In getAllCustomer");
        });
    };
    CustomerAllComponent.prototype.toggleStatus = function (customer) {
        var data = {
            id: customer['_id'],
            status: !customer['status']
        };
        this.customerService.setStatus(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['status'] = !customer['status'];
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    CustomerAllComponent.prototype.showDialog = function () {
        this.display = true;
    };
    CustomerAllComponent.prototype.getCustomerDetails = function (id) {
        this.customerService.getCustomerDetails(id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    CustomerAllComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getAllCustomer(this.paginator);
            return;
        }
        var data = {
            text: event
        };
        if (this.searchMode == 'username') {
            var reg_1 = new RegExp(event, "i");
            var resArray_1 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_1.test(item['username'])) {
                    resArray_1.push(item);
                }
            });
            this.customers = resArray_1;
        }
        else if (this.searchMode == 'mobile_number') {
            var reg_2 = new RegExp(event, "i");
            var resArray_2 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_2.test(item['mobile_primary'])) {
                    resArray_2.push(item);
                }
            });
            this.customers = resArray_2;
        }
        else if (this.searchMode == 'area') {
            var reg_3 = new RegExp(event, "i");
            var resArray_3 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_3.test(item['areaData'].name)) {
                    resArray_3.push(item);
                }
            });
            this.customers = resArray_3;
        }
    };
    CustomerAllComponent.prototype.buildSearchResult = function (customerList) {
        var _this = this;
        this.customers = [];
        // getting products
        __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](customerList, function (item) {
            item.productData = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](item.productList, function (element) {
                _this.productService.getProductById(element)
                    .subscribe(function (res) {
                    item.productData.push(res);
                }, function (err) {
                });
            });
            if (item.area) {
                _this.areaService.getAreaById(item.area)
                    .subscribe(function (res) {
                    item.areaData = res;
                }, function (err) {
                });
            }
            _this.customers.push(item);
        });
    };
    //change search filter
    CustomerAllComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    CustomerAllComponent.prototype.checkGenerateInvoice = function (customer) {
        var data = {
            id: customer['_id'],
            isGenerateInvoiceMonthly: !customer['isGenerateInvoiceMonthly']
        };
        this.customerService.setCheckGenerateInvoice(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['isGenerateInvoiceMonthly'] = !customer['isGenerateInvoiceMonthly'];
            }
        }, function (err) {
            console.log("Error in setCheckGenerateInvoice");
        });
    };
    //  for pagination
    CustomerAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllCustomer(this.paginator);
    };
    //  click event triggered for auto generate invoice
    CustomerAllComponent.prototype.generateAutoInvoice = function () {
        var _this = this;
        this.isAutoGenerateSuccess = false;
        this.isAutoGenerateError = false;
        this.autoGenerateList = [];
        __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (customer) {
            if (customer.isGenerateInvoiceMonthly == true) {
                _this.customerService.generateAutoInvoice(customer['_id'])
                    .subscribe(function (res) {
                    _this.autoGenerateList.push(res);
                }, function (err) {
                    _this.isAutoGenerateSuccess = false;
                    _this.isAutoGenerateError = true;
                }, function () {
                    _this.isAutoGenerateSuccess = true;
                });
            }
        });
    };
    CustomerAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-all',
            template: __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]])
    ], CustomerAllComponent);
    return CustomerAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}\n\n.productSelectBox {\n    margin-bottom: 10px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1500px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Create New Customer\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/customer/create' ] \"><i class=\"fa fa-dashboard \"></i> Customer</a></li>\n        <li class=\"active \">Create</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n\n      <div class=\"box box-primary\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Customer Created Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"customerCreateForm\" (submit)=\"submitCustomerCreateForm()\">\n          <!--username-->\n          <div class=\" form-group \">\n            <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                     placeholder=\"Username \" required>\n            </div>\n          </div>\n\n          <!--NID-->\n          <div class=\" form-group \">\n            <label for=\"gstno\" class=\"col-sm-2 control-label \">GST No.</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"gstno\" type=\"text\" class=\"form-control \" id=\"gstno \" placeholder=\"Enter GST number \" required>\n            </div>\n          </div>\n\n          <!--NID-->\n          <div class=\" form-group \">\n            <label for=\"nid\" class=\"col-sm-2 control-label \">Customer ID</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"nid\" type=\"number\" class=\"form-control \" id=\"nid \" placeholder=\"Customer ID \" required>\n            </div>\n          </div>\n          <!--email-->\n          <div class=\"form-group \">\n            <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \">\n            </div>\n          </div>\n          <!--fullname-->\n          <div class=\"form-group \">\n            <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n            <div class=\"col-sm-10 \">\n              <input  type=\"text \" name=\"fullname\" class=\"form-control \" id=\"fullname \" \n                    placeholder=\"Fullname \" formControlName=\"fullname\" required >\n                  \n            </div>\n          </div>\n          <!--customer_currency-->\n          <!--<div class=\"form-group \">\n          <label for=\"customer_currency \" class=\"col-sm-2 control-label \">Customer Currency</label>\n          <div class=\"col-sm-10 \">\n              <input formControlName=\"customer_currency\" type=\"text \" class=\"form-control \" id=\"customer_currency \" placeholder=\"Customer Currency \">\n          </div>\n      </div>-->\n\n          <!--mobile_primary-->\n          <div class=\"form-group \">\n            <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                     placeholder=\"Mobile primary \">\n            </div>\n          </div>\n\n          <!--mobile_secondary-->\n          <div class=\"form-group \">\n            <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                     placeholder=\"Mobile secondary \">\n            </div>\n          </div>\n\n          <!--website-->\n          <div class=\"form-group \">\n            <label for=\"website \" class=\"col-sm-2 control-label \">Website</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text\" formControlName=\"website\" class=\"form-control \" id=\"website \" placeholder=\"website \">\n            </div>\n          </div>\n\n          <!--country-->\n          <!--<div class=\"form-group \">\n              <label for=\"country \" class=\"col-sm-2 control-label \">Country</label>\n              <div class=\"col-sm-10 \">\n                  <input type=\"text\" formControlName=\"country\" class=\"form-control \" id=\"country \" placeholder=\"country \">\n              </div>\n          </div>-->\n\n          <!--location-->\n          <div class=\"form-group \">\n            <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                     placeholder=\"location \">\n            </div>\n          </div>\n\n          <!--area list-->\n          <div class=\"form-group \">\n            <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n            <div class=\"col-sm-10 \">\n              <select required *ngIf=\"areaList\" class=\"form-control\" formControlName=\"area\">\n                <option *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }}</option>\n              </select>\n            </div>\n          </div>\n\n          <!--city-->\n          <div class=\"form-group \">\n            <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \">\n            </div>\n          </div>\n           \n          <div class=\"form-group\">\n            <label for=\"description\" class=\"col-sm-2 control-label \">Remarks</label>\n            <div class=\"col-sm-10 \">\n              <textarea type=\"text\" formControlName=\" description\" class=\"form-control\" id=\"description\"></textarea>\n            </div>\n          </div>\n\n          <!--postal_code-->\n          <div class=\"form-group \">\n            <label for=\"postal_code \" class=\"col-sm-2 control-label \">Postal Code</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"number\" formControlName=\"postal_code\" class=\"form-control \" id=\"postal_code \"\n                     placeholder=\"Postal Code \">\n            </div>\n          </div>\n\n          <!--status-->\n          <div class=\"form-group \">\n            <label for=\"postal_code \" class=\"col-sm-2 control-label \">Status</label>\n            <div class=\"col-sm-10 \">\n              <select formControlName=\"status\" required class=\"form-control\">\n                <option value=\"true\">Active</option>\n                <option value=\"false\">Inactive</option>\n              </select>\n            </div>\n          </div>\n\n          <!--product list-->\n         <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n            <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n            <div class=\"col-sm-10 \">\n              <div class=\"productSelectBox\">\n                <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                  <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                    {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                  </option>\n                  \n                </select>\n                <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\"><i\n                  class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </div>\n          <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                             aria-hidden=\"true\"></i>\n            &nbsp; Add Product\n          </button>\n\n\n          <!--<div class=\"row invoice-item\" ng-repeat=\"item in invoice.items\" ng-animate=\"'slide-down'\">\n              <div class=\"col-xs-1 remove-item-container\">\n                <a href ng-hide=\"printMode\" ng-click=\"removeItem(item)\" class=\"btn btn-danger\">[X]</a>\n              </div>\n              <div class=\"col-xs-5 input-container\">\n                <input ng-model=\"item.description\" placeholder=\"Description\" />\n              </div>\n              <div class=\"col-xs-2 input-container\">\n                <input ng-model=\"item.qty\" value=\"1\" size=\"4\" ng-required ng-validate=\"integer\" placeholder=\"Quantity\" />\n              </div>\n              <div class=\"col-xs-2 input-container\">\n                <input ng-model=\"item.cost\" value=\"0.00\" ng-required ng-validate=\"number\" size=\"6\" placeholder=\"Cost\" />\n              </div>\n              <div class=\"col-xs-2 text-right input-container\">\n                {{item.cost * item.qty | currency: currencySymbol}}\n              </div>\n            </div>\n            <div class=\"row invoice-item\">\n              <div class=\"col-xs-12 add-item-container\" ng-hide=\"printMode\">\n                <a class=\"btn btn-primary\" href ng-click=\"addItem()\" >[+]</a>\n              </div>\n            </div>-->\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success \">Save</button>\n              <a type=\"button\" class=\"btn btn-primary \" [routerLink]=\"['/dashboard/customer/all']\">Back</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerCreateComponent = (function () {
    function CustomerCreateComponent(fb, customerService, productService, areaService) {
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.showSuccess = false;
        this.showError = false;
        this.productList = [];
        this.areaList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAreaList();
    };
    CustomerCreateComponent.prototype.buildForm = function () {
        this.customerCreateForm = this.fb.group({
            username: [''],
            gstno: [''],
            nid: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            fullname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            mobile_primary: ['+91'],
            mobile_secondary: ['+91'],
            website: [''],
            location: [''],
            area: [''],
            city: ['Hyderabad'],
            description: [''],
            postal_code: [''],
            status: [''],
            product: ['']
        });
    };
    CustomerCreateComponent.prototype.submitCustomerCreateForm = function () {
        var _this = this;
        this.showSuccess = false;
        this.showError = false;
        this.allProducts = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](this.allProducts);
        var data = {
            username: this.customerCreateForm.value.username,
            gstno: this.customerCreateForm.value.gstno,
            nid: this.customerCreateForm.value.nid,
            email: this.customerCreateForm.value.email,
            fullname: this.customerCreateForm.value.fullname,
            customer_currency: 'INR',
            mobile_primary: this.customerCreateForm.value.mobile_primary,
            mobile_secondary: this.customerCreateForm.value.mobile_secondary,
            website: this.customerCreateForm.value.website,
            country: 'India',
            location: this.customerCreateForm.value.location,
            area: this.customerCreateForm.value.area,
            city: this.customerCreateForm.value.city,
            description: this.customerCreateForm.value.description,
            postal_code: this.customerCreateForm.value.postal_code,
            status: this.customerCreateForm.value.status,
            productList: this.allProducts,
        };
        this.customerService.createNewCustomer(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.showSuccess = true;
                _this.customerCreateForm.reset();
            }
            else {
                _this.showError = true;
            }
        }, function (err) {
            _this.showError = true;
            console.log("Error in createNewCustomer");
        });
    };
    CustomerCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]._id);
        });
    };
    CustomerCreateComponent.prototype.getAreaList = function () {
        var _this = this;
        this.areaList = [];
        this.areaService.getAllArea()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.areaList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from getAreaList");
        });
    };
    CustomerCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    CustomerCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0]._id;
        this.allProducts.push(newProduct);
    };
    CustomerCreateComponent.prototype.onProductChange = function (event, index) {
        this.allProducts[index] = event.target.value;
    };
    CustomerCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    CustomerCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;\">\n    <section class=\" content-header \" *ngIf=\"customer \">\n        <div class=\"col-xs-12\">\n            <h1>\n                Customer Details - <em>{{ customer.username }}</em>\n            </h1>\n            <ol class=\"breadcrumb \">\n                <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n                <li><a [routerLink]=\"[ 'dasboard/customar/all' ] \"><i class=\"fa fa-dashboard \"></i> Customer</a></li>\n                <li class=\"active \">All</li>\n            </ol>\n        </div>\n    </section>\n    <section class=\"content \">\n        <div class=\"col-md-offset-2 col-md-7\">\n            <div class=\"box box-primary\">\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Customer Data Updated Successfully !!</div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n                <!--  Page Content Here -->\n                <form class=\"form-horizontal \" [formGroup]=\"customerDetailForm\" *ngIf=\"customer\" (submit)=\"submitCustomerDetail()\">\n                    <!--username-->\n                    <div class=\" form-group \">\n                        <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \" placeholder=\"Username \" ng-model=\"u\">\n                        </div>\n                    </div>\n                    <div class=\" form-group \">\n                        <label for=\"gstno\" class=\"col-sm-2 control-label \">GST No.</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"gstno\" type=\"text\" class=\"form-control \" id=\"gstno \" placeholder=\"Enter GST Number \" required>\n                        </div>\n                    </div>\n                    <!--NID-->\n                    <div class=\" form-group \">\n                        <label for=\"nid\" class=\"col-sm-2 control-label \">NID</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"nid\" type=\"number\" class=\"form-control \" id=\"nid \" placeholder=\"NID \" required>\n                        </div>\n                    </div>\n                    <!--email-->\n                    <div class=\"form-group \">\n                        <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \">\n                        </div>\n                    </div>\n                    <!--fullname-->\n                    <div class=\"form-group \">\n                        <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \" placeholder=\"Fullname \">\n                        </div>\n                    </div>\n                    <!--customer_currency-->\n                    <div class=\"form-group \">\n                        <label for=\"customer_currency \" class=\"col-sm-2 control-label \">Customer Currency</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"customer_currency\" type=\"text \" class=\"form-control \" id=\"customer_currency \" placeholder=\"Customer Currency \">\n                        </div>\n                    </div>\n\n                    <!--mobile_primary-->\n                    <div class=\"form-group \">\n                        <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \" placeholder=\"Mobile primary \">\n                        </div>\n                    </div>\n\n                    <!--mobile_secondary-->\n                    <div class=\"form-group \">\n                        <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \" placeholder=\"Mobile secondary \">\n                        </div>\n                    </div>\n\n                    <!--website-->\n                    <div class=\"form-group\">\n                        <label for=\"website\" class=\"col-sm-2 control-label \">Website</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" formControlName=\"website\" class=\"form-control \" id=\"website \" placeholder=\"website \">\n                        </div>\n                    </div>\n\n                    <!--country-->\n                    <div class=\"form-group \">\n                        <label for=\"country \" class=\"col-sm-2 control-label \">Country</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" formControlName=\"country\" class=\"form-control \" id=\"country \" placeholder=\"website \">\n                        </div>\n                    </div>\n\n                    <!--location-->\n                    <div class=\"form-group \">\n                        <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \" placeholder=\"location \">\n                        </div>\n                    </div>\n\n                    <!--area list-->\n                    <div class=\"form-group \">\n                        <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n                        <div class=\"col-sm-10 \">\n                            <select required *ngIf=\"areaList\" class=\"form-control\" formControlName=\"area\">\n                            <option  [selected]=\"area._id == customer.area\" *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }} </option>\n                        </select>\n                        </div>\n                    </div>\n\n                    <!--city-->\n                    <div class=\"form-group \">\n                        <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n                        <div class=\"col-sm-10 \">\n                            <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"description\" class=\"col-sm-2 control-label \">Remarks</label>\n                        <div class=\"col-sm-10 \">\n                          <textarea formControlName=\" description\" class=\"form-control\" id=\"description\"></textarea>\n                        </div>\n                      </div>\n                      \n                    <!--postal_code-->\n                    <div class=\"form-group \">\n                        <label for=\"postal_code \" class=\"col-sm-2 control-label \">Postal Code</label>\n                        <div class=\"col-sm-10 \">\n                            <input type=\"text \" formControlName=\"postal_code\" class=\"form-control \" id=\"postal_code \" placeholder=\"Postal Code \">\n                        </div>\n                    </div>\n\n                    <!--status-->\n                    <div class=\"form-group \">\n                        <label for=\"postal_code \" class=\"col-sm-2 control-label \">Status</label>\n                        <div class=\"col-sm-10 \">\n                            <select formControlName=\"status\" class=\"form-control\">\n                            <option value=\"true\">Active</option>\n                            <option value=\"false\">Inactive</option>\n                        </select>\n                        </div>\n                    </div>\n\n                    <!--product list-->\n                    <div class=\"form-group \" *ngFor=\"let myProduct of customer.productList;let i=index\">\n                        <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                        <div class=\"col-sm-10 \">\n                            <div class=\"productSelectBox\">\n                                <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                                <option [selected]=\"product._id == myProduct\" *ngFor=\"let product of productList\" value=\"{{ product._id }}\">{{ product.name }} - <em> {{ product.rate }} INR/month </em> </option>\n                                </select>\n                                <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add Product</button>\n\n                    <div class=\"form-group \">\n                        <div class=\"col-sm-offset-2 col-sm-10 \">\n                            <button type=\"submit \" class=\"btn btn-success \">Update</button>\n                            \n                            <a type=\"button\" class=\"btn btn-primary \" [routerLink]=\"['/dashboard/customer/all']\">Back</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(areaService, productService, fb, route, router, customerService) {
        this.areaService = areaService;
        this.productService = productService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.productList = [];
        this.areaList = [];
        this.showSuccess = false;
        this.showError = false;
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.getAreaList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.getCustomerDetails(params['id']);
            _this.id = params['id'];
        });
    };
    CustomerDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CustomerDetailComponent.prototype.getCustomerDetails = function (id) {
        var _this = this;
        this.customerService.getCustomerDetails(id)
            .subscribe(function (res) {
            _this.customer = res;
            _this.allProductCounter = _this.customer.productList.length;
            console.log(_this.allProductCounter);
            _this.buildForm();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerDetailComponent.prototype.buildForm = function () {
        var productId = '';
        if (this.customer.productList.length > 0) {
            productId = this.customer.productList[0]["_id"];
        }
        this.customerDetailForm = this.fb.group({
            username: [this.customer.username],
            gstno: [this.customer.gstno],
            nid: [this.customer.nid],
            email: [this.customer.email],
            fullname: [this.customer.fullname],
            customer_currency: [this.customer.customer_currency],
            mobile_primary: [this.customer.mobile_primary],
            mobile_secondary: [this.customer.mobile_secondary],
            website: [this.customer.website],
            country: [this.customer.country],
            location: [this.customer.location],
            area: [this.customer.area],
            city: [this.customer.city],
            description: [this.customer.description],
            postal_code: [this.customer.postal_code],
            status: [this.customer.status],
            product: ['']
        });
    };
    CustomerDetailComponent.prototype.submitCustomerDetail = function () {
        var _this = this;
        this.customer.productList = __WEBPACK_IMPORTED_MODULE_2_underscore__["uniq"](this.customer.productList);
        var data = {
            id: this.id,
            username: this.customerDetailForm.value.username,
            gstno: this.customerDetailForm.value.gstno,
            nid: this.customerDetailForm.value.nid,
            email: this.customerDetailForm.value.email,
            fullname: this.customerDetailForm.value.fullname,
            customer_currency: this.customerDetailForm.value.customer_currency,
            mobile_primary: this.customerDetailForm.value.mobile_primary,
            mobile_secondary: this.customerDetailForm.value.mobile_secondary,
            website: this.customerDetailForm.value.website,
            country: this.customerDetailForm.value.country,
            location: this.customerDetailForm.value.location,
            area: this.customerDetailForm.value.area,
            city: this.customerDetailForm.value.city,
            description: this.customerDetailForm.value.description,
            postal_code: this.customerDetailForm.value.postal_code,
            status: this.customerDetailForm.value.status,
            productList: this.customer.productList
        };
        this.customerService.updateCustomer(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.showSuccess = true;
            }
            else {
                _this.showError = true;
            }
        }, function (err) {
            _this.showError = true;
        });
    };
    CustomerDetailComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    CustomerDetailComponent.prototype.getAreaList = function () {
        var _this = this;
        this.areaList = [];
        this.areaService.getAllArea()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.areaList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from getAreaList");
        });
    };
    CustomerDetailComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    CustomerDetailComponent.prototype.onProductChange = function (event, index) {
        this.customer.productList[index] = event.target.value;
    };
    CustomerDetailComponent.prototype.removeProduct = function (index) {
        this.customer.productList.splice(index, 1);
    };
    CustomerDetailComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0]._id;
        this.customer.productList.push(newProduct);
    };
    CustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var customerUploadRoutes = [];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(customerUploadRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search_form {\n  width: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"col-xs-12\">\n    <div class=\"box box-primary\">\n      <h2 style=\"margin-left:10px\">Search All Customers</h2>\n      <hr>\n\n      <!--search result customers show box-->\n      <div class=\"box-body table-responsive no-padding\" style=\"margin-bottom:20px;margin-top:20px\" *ngIf=\"customer && searchResults.length>0\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <th>Username</th>\n            <th>Email</th>\n            <th>Fullname</th>\n            <th>GST No.</th>\n            <th>Product</th>\n            <th>Mobile</th>\n            <th>Location</th>\n            <th>Area</th>\n            <th>City</th>\n            <th>Status</th>\n            <th>Action</th>\n            <th>Auto generate <br> invoice monthly</th>\n          </tr>\n          <tr>\n            <td>{{ customer.username }}</td>\n            <td>{{ customer.email }}</td>\n            <td>{{ customer.fullname }}</td>\n            <td>{{ customer.gstno}}</td>\n            <!--<td><span *ngIf=\"customer.productData?.length>0\"> {{ customer.productData[0]?.name }} - <em *ngIf=\"customer.productData[0]?.rate\">{{ customer.productData[0]?.rate }} BDT/month</em> </span><small class=\"label bg-blue\">{{ customer.productData.length }}</small></td>-->\n            <td>\n              <small class=\"label bg-blue\">{{ customer.productData.length }}</small>\n            </td>\n            <td>{{ customer.mobile_primary }}</td>\n            <td>{{ customer.location }}</td>\n            <td>{{ customer.areaData?.name }}</td>\n            <td>{{ customer.city }}</td>\n            <td *ngIf=\"customer.status\">\n              <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(customer)\"> Active</button>\n            </td>\n            <td *ngIf=\"!customer.status\">\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(customer)\"> Inactive</button>\n            </td>\n            <td>\n              <a type=\"button\" class=\"btn btn-primary btn-xs\" [routerLink]=\"['/dashboard/customer/detail',customer._id]\">\n                Edit</a>\n            </td>\n            <td>\n              <input [attr.checked]=\"customer.isGenerateInvoiceMonthly ? 'checked' : null\"\n                     style=\"zoom: 1.5;margin-left: 10px;\" type=\"checkbox\"\n                     name=\"customer._id\" value=\"customer._id\" (click)=\"checkGenerateInvoice(customer)\">\n            </td>\n          </tr>\n          </tbody>\n\n        </table>\n      </div>\n\n      <!--search box and functionality-->\n      <div class=\"container\">\n        <div class=\"col-lg-12\">\n          <form class=\"form-group\">\n            <input (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                   placeholder=\"Search All Customers\">\n          </form>\n\n          <!--search resultsa-->\n          <div *ngIf=\"searchResults.length>0\">\n            <strong style=\"font-size: 20px\"> Search results for: </strong> <span class=\"search_text\"\n                                                                                 style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n            <br>\n            <ul style=\"list-style-type:none\">\n              <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                <br>\n              </li>\n              <hr>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerSearchComponent = (function () {
    function CustomerSearchComponent(customerService, productService, areaService) {
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
    }
    CustomerSearchComponent.prototype.ngOnInit = function () {
    };
    CustomerSearchComponent.prototype.getSearchText = function (event) {
        var _this = this;
        this.customer = undefined;
        this.searchResults = [];
        this.searchText = event.target.value;
        this.customerService.globalSearch(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    CustomerSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        this.searchText = '';
        var id = data['_id'];
        this.customerService.getCustomerDetails(id)
            .subscribe(function (customer) {
            customer.productData = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](customer.productList, function (element) {
                _this.productService.getProductById(element)
                    .subscribe(function (res) {
                    customer.productData.push(res);
                });
            });
            if (customer.area) {
                _this.areaService.getAreaById(customer.area)
                    .subscribe(function (res) {
                    customer.areaData = res;
                    _this.customer = customer;
                });
            }
        }, function (err) {
        }, function () {
            console.log(_this.customer);
        });
    };
    CustomerSearchComponent.prototype.toggleStatus = function (customer) {
        var data = {
            id: customer['_id'],
            status: !customer['status']
        };
        this.customerService.setStatus(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['status'] = !customer['status'];
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    CustomerSearchComponent.prototype.checkGenerateInvoice = function (customer) {
        var data = {
            id: customer['_id'],
            isGenerateInvoiceMonthly: !customer['isGenerateInvoiceMonthly']
        };
        this.customerService.setCheckGenerateInvoice(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['isGenerateInvoiceMonthly'] = !customer['isGenerateInvoiceMonthly'];
            }
        }, function (err) {
            console.log("Error in setCheckGenerateInvoice");
        });
    };
    CustomerSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-search',
            template: __webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__ = __webpack_require__("../../../../../src/app/customer/customer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_all_customer_all_component__ = __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_detail_customer_detail_component__ = __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_create_customer_create_component__ = __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_module__ = __webpack_require__("../../../../../src/app/invoice/invoice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_search_customer_search_component__ = __webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__["a" /* CustomerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__customer_all_customer_all_component__["a" /* CustomerAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__customer_create_customer_create_component__["a" /* CustomerCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.customerUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'customer/';
    }
    CustomerService.prototype.globalSearch = function (data) {
        var url = this.customerUrl + 'global-search/' + data;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAllCustomers = function (paginator) {
        var url = this.customerUrl + 'all/' + 'page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.setStatus = function (data) {
        var url = this.customerUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustomerDetails = function (id) {
        var url = this.customerUrl + 'details/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateCustomer = function (data) {
        var url = this.customerUrl + 'details/update';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.createNewCustomer = function (data) {
        var url = this.customerUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByUsername = function (data) {
        var url = this.customerUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByMobileNumber = function (data) {
        var url = this.customerUrl + 'search/mobile_number/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByArea = function (data) {
        var url = this.customerUrl + 'search/area/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustomerByArea = function (data) {
        var url = this.customerUrl + 'search/customerByArea/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.setCheckGenerateInvoice = function (data) {
        var url = this.customerUrl + 'check_change_generate_invoice_monthly';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.uploadFileContents = function (data) {
        var url = this.customerUrl + 'upload-file-contents';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getTotalCustomerCount = function () {
        var url = this.customerUrl + 'customer-count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.generateAutoInvoice = function (id) {
        var url = this.customerUrl + 'generate-auto-invoice/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAutoGenerateList = function () {
        var url = this.customerUrl + 'get-auto-generate-list';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>\n      Upload File\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a [routerLink]=\"['/dashboard/home']\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n      <li class=\"active\">Upload Data File</li>\n    </ol>\n    <br>\n  </section>\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <h4>Customer Data File (.csv) </h4>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isUploadSuccess\">Customers Data Successfully Inserted Into\n          Database\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fileInput\">File input</label>\n          <input name=\"csvFile\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" id=\"fileInput\" placeholder=\"Upload File\" accept=\".csv\"\n                 (change)=\"getFile($event)\">\n          <p class=\"help-block\">* Uploading this file will rewrite your database of customers.</p>\n        </div>\n        <button class=\"btn btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload</button>\n      </div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelFileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExcelFileUploaderComponent = (function () {
    function ExcelFileUploaderComponent(http, customerService, fb) {
        this.http = http;
        this.customerService = customerService;
        this.fb = fb;
        this.isUploadSuccess = false;
        this.uploadUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_server + 'customer/upload-file-contents';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.uploadUrl, itemAlias: 'csvFile' });
    }
    ExcelFileUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (status == 200) {
                _this.isUploadSuccess = true;
            }
        };
    };
    ExcelFileUploaderComponent.prototype.createForm = function () {
        this.fileUploadForm = this.fb.group({
            file: ''
        });
    };
    ExcelFileUploaderComponent.prototype.onSubmitForm = function () {
    };
    ExcelFileUploaderComponent.prototype.getFile = function (event) {
        var fileList = event.target.files;
        this.file = fileList[0];
    };
    ExcelFileUploaderComponent.prototype.errorHandler = function (event) {
        this.isFileRead = false;
        console.log("Error in uploading file");
    };
    ExcelFileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-excel-file-uploader',
            template: __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ExcelFileUploaderComponent);
    return ExcelFileUploaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var fileUploadRoutes = [];
var FileUploadRoutingModule = (function () {
    function FileUploadRoutingModule() {
    }
    FileUploadRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(fileUploadRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], FileUploadRoutingModule);
    return FileUploadRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_routing_module__ = __webpack_require__("../../../../../src/app/file-upload/file-upload-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__ = __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload_service__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// components

//service



var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__file_upload_routing_module__["a" /* FileUploadRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__file_upload_service__["a" /* FileUploadService */],
                __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */]
            ]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploadService = (function () {
    function FileUploadService(http) {
        this.http = http;
        this.customerUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'customer/';
    }
    FileUploadService.prototype.createNewCustomer = function (data) {
        var url = this.customerUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res; });
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-navbar></app-navbar>\n    <app-sidebar *ngIf=\"isDisplaySideBar\"></app-sidebar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(generalService) {
        this.generalService = generalService;
        this.isDisplaySideBar = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDisplaySideBar = true;
        this.generalService.displaySidebarConfirmed$.subscribe(function (status) {
            _this.isDisplaySideBar = status;
            console.log(status);
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__general_service__["a" /* GeneralService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__general_service__["a" /* GeneralService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"main-footer\">\n    <!-- To the right -->\n    <div class=\"pull-right hidden-xs\">\n        <strong>Powered by <a href=\"https://www.sofkul.com\" target=\"_blank\">Sofkul</a></strong>\n      <!--<i class=\"fa fa-heart\" aria-hidden=\"true\"></i><span> Angular </span> &nbsp;-->\n      <!--<i class=\"fa fa-bolt\" aria-hidden=\"true\"></i><span> Node.js</span>-->\n    </div>\n    <!-- Default to the left -->\n    <strong>Copyright © 2018 <a href=\"https://www.minovative.com\" target=\"_blank\">Minovative Technologies Private Limited.</a> All Rights Reserved</strong>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/general/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/general-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_body_home_body_component__ = __webpack_require__("../../../../../src/app/home/home-body/home-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_excel_file_uploader_excel_file_uploader_component__ = __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_all_customer_all_component__ = __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_detail_customer_detail_component__ = __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_customer_create_customer_create_component__ = __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_create_area_create_component__ = __webpack_require__("../../../../../src/app/area/area-create/area-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quotation_quotation_all_quotation_all_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quotation_quotation_recent_quotation_recent_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quotation_quotation_edit_quotation_edit_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quotation_quotation_html_quotation_html_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_create_quotation_create_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_search_quotation_search_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_all_invoice_all_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_recent_invoice_recent_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__invoice_invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__invoice_invoice_html_invoice_html_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__report_location_due_report_location_due_report_component__ = __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_create_invoice_create_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__invoice_invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components







//Quotation






// Invoice







var generalRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_body_home_body_component__["a" /* HomeBodyComponent */]
    },
    {
        path: 'upload-file',
        component: __WEBPACK_IMPORTED_MODULE_3__file_upload_excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */]
    },
    {
        path: 'customer/all',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_all_customer_all_component__["a" /* CustomerAllComponent */]
    },
    {
        path: 'customer/detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__customer_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */]
    },
    {
        path: 'customer/create',
        component: __WEBPACK_IMPORTED_MODULE_7__customer_customer_create_customer_create_component__["a" /* CustomerCreateComponent */]
    },
    {
        path: 'product',
        component: __WEBPACK_IMPORTED_MODULE_6__product_product_create_product_create_component__["a" /* ProductCreateComponent */]
    },
    {
        path: 'area',
        component: __WEBPACK_IMPORTED_MODULE_8__area_area_create_area_create_component__["a" /* AreaCreateComponent */]
    },
    {
        path: 'invoice/all',
        component: __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_all_invoice_all_component__["a" /* InvoiceAllComponent */]
    },
    {
        path: 'invoice/search',
        component: __WEBPACK_IMPORTED_MODULE_21__invoice_invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
    },
    {
        path: 'invoice/create',
        component: __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_create_invoice_create_component__["a" /* InvoiceCreateComponent */]
    },
    {
        path: 'invoice/recent',
        component: __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_recent_invoice_recent_component__["a" /* InvoiceRecentComponent */]
    },
    {
        path: 'invoice/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_18__invoice_invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */]
    },
    {
        path: 'invoice/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__invoice_invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */]
    },
    {
        path: 'quotation/all',
        component: __WEBPACK_IMPORTED_MODULE_9__quotation_quotation_all_quotation_all_component__["a" /* QuotationAllComponent */]
    },
    {
        path: 'quotation/search',
        component: __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_search_quotation_search_component__["a" /* QuotationSearchComponent */]
    },
    {
        path: 'quotation/create',
        component: __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_create_quotation_create_component__["a" /* QuotationCreateComponent */]
    },
    {
        path: 'quotation/recent',
        component: __WEBPACK_IMPORTED_MODULE_10__quotation_quotation_recent_quotation_recent_component__["a" /* QuotationRecentComponent */]
    },
    {
        path: 'quotation/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__quotation_quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */]
    },
    {
        path: 'quotation/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__quotation_quotation_edit_quotation_edit_component__["a" /* QuotationEditComponent */]
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_19__report_location_due_report_location_due_report_component__["a" /* LocationDueReportComponent */]
    }
];
var GeneralRoutingModule = (function () {
    function GeneralRoutingModule() {
    }
    GeneralRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(generalRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], GeneralRoutingModule);
    return GeneralRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/general/general.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_routing_module__ = __webpack_require__("../../../../../src/app/general/general-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/general/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/general/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_upload_file_upload_module__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_customer_module__ = __webpack_require__("../../../../../src/app/customer/customer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_module__ = __webpack_require__("../../../../../src/app/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__area_area_module__ = __webpack_require__("../../../../../src/app/area/area.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__invoice_invoice_module__ = __webpack_require__("../../../../../src/app/invoice/invoice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_module__ = __webpack_require__("../../../../../src/app/quotation/quotation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__report_report_module__ = __webpack_require__("../../../../../src/app/report/report.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//own components
//import { LoginComponent } from '../login/login.component';




// modules










var GeneralModule = (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__general_routing_module__["a" /* GeneralRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_10__customer_customer_module__["a" /* CustomerModule */],
                __WEBPACK_IMPORTED_MODULE_11__product_product_module__["a" /* ProductModule */],
                __WEBPACK_IMPORTED_MODULE_12__area_area_module__["a" /* AreaModule */],
                __WEBPACK_IMPORTED_MODULE_13__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_module__["a" /* QuotationModule */],
                __WEBPACK_IMPORTED_MODULE_15__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_16__report_report_module__["a" /* ReportModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__general_service__["a" /* GeneralService */]]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "../../../../../src/app/general/general.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GeneralService = (function () {
    function GeneralService() {
        this.displaySidebarSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.displaySidebarConfirmed$ = this.displaySidebarSource.asObservable();
    }
    GeneralService.prototype.displaySidebar = function (status) {
        this.displaySidebarSource.next(status);
    };
    GeneralService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n    <!-- Logo -->\n    <a  (click)=\"reload()\" class=\"logo\" style=\"cursor:pointer\">\n\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class=\"logo-mini\"><img src=\"./assets/dist/img/favicon1.png\"  alt=\"favicon1\" style=\"width:50%; height:50%;\"></span>\n        <!-- logo for regular state and mobile devices -->\n        <span class=\"logo-lg col-xs-8 col-md-12\"><img src=\"../../../assets/dist/img/Sofkullogo1.png\" style=\"height: 40%; width: 70%;\"></span>\n    \n      </a>\n  \n    <!-- Header Navbar -->\n    <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n          <span class=\"sr-only\">Toggle navigation</span>\n        </a>\n      <!-- Navbar Right Menu -->\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <!-- Menu toggle button -->\n            \n                      \n            \n          </li>\n          <!-- /.messages-menu -->\n  \n          <!-- Notifications Menu -->\n          \n          <!-- Tasks Menu -->\n          \n          <!-- User Account Menu -->\n          <li class=\"dropdown user user-menu\" *ngIf=\"user\">\n            <!-- Menu Toggle Button -->\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <!-- The user image in the navbar-->\n              <img src=\"../../../assets/dist/img/avatar5.png\" class=\"user-image\" alt=\"User Image\">\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\n              <span class=\"hidden-xs\">{{user.name}}</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- The user image in the menu -->\n              <li class=\"user-header\">\n                <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n  \n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                   </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n              <a  class=\"btn btn-default btn-primary\" *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\">Sign out</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    \n  </header>"

/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (navbar) {
            _this.user = navbar.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('you are logged out, redirecting to login page', {
            cssClass: 'alert-success', timeout: 5000
        });
        this.router.navigate(['login']);
        return true;
    };
    NavbarComponent.prototype.reload = function () {
        //window.location.href = '/dashboard/home';
        this.router.navigate(['/dashboard/home']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/general/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .main-sidebar {\n      /*font-size: 17px;*/\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\" id=\"side-bar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n\n    <div class=\"user-panel\" *ngIf=\"user\">\n      <div class=\"pull-left image\">\n        <img src=\"../../../assets/dist/img/avatar5.png\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <b>Welcome: {{user.username}}</b> <p>Email: {{user.email}}</p>\n        <!-- Status -->\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form (Optional)\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>-->\n    <!-- /.search form -->\n\n    <!-- Sidebar Menu -->\n    <ul class=\"sidebar-menu\">\n      <li class=\"header\">Sofkul solutions</li>\n      <!-- Optionally, you can add icons to the links -->\n      <li class=\"active\"><a [routerLink]=\"['home']\"><i class=\"fa fa-home\"></i><span>Home</span></a></li>\n      <!-- customer options -->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-users\"></i> <span>Customers</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['customer/all']\"><i class=\"fa fa-user\"></i> All Customers</a></li>\n          <li><a [routerLink]=\"['customer/create']\"><i class=\"fa fa-user-plus\"></i> New Customer</a></li>\n        </ul>\n      </li>\n      <!-- products options -->\n      <li><a [routerLink]=\"['product']\"><i class=\"fa fa-shopping-cart\"></i> <span>Products</span></a></li>\n      <!-- area options -->\n      <li><a [routerLink]=\"['area']\"><i class=\"fa fa-map-marker\"></i> <span>Area</span></a></li>\n      <!-- invoice options -->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span>Invoices</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['invoice/search']\"> <i class=\"fa fa-search\"></i> Search Invoice</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['invoice/create']\"> <i class=\"fa fa-file-o\"></i> Create Invoice</a>\n          </li>\n          <!--<li>\n            <a [routerLink]=\"['dashboard/invoice/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Invoices</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['invoice/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Invoices</a>\n          </li>\n        <!--  <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      <!-- Quotation options-->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span>Quotations</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['quotation/search']\"> <i class=\"fa fa-search\"></i> Search Quotations</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['quotation/create']\"> <i class=\"fa fa-file-o\"></i> Create Quotations</a>\n          </li>\n          <!--<li>\n            <a [routerLink]=\"['quotation/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Quotations</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['quotation/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Quotations</a>\n          </li>\n         <!-- <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      \n\n      \n\n      <!--reports-->\n      <li><a [routerLink]=\"['report']\"><i class=\"fa fa-pie-chart\"></i><span>Reports</span></a></li>\n      <li><a [routerLink]=\"['upload-file']\"><i class=\"fa fa-upload\"></i> <span>Upload File</span></a></li>\n      <!--<li><a [routerLink]=\"['settings']\"><i class=\"fa fa-cogs\"></i> <span>Settings</span></a></li>-->\n    </ul>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (dashboard) {
            _this.user = dashboard.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        console.log('changing');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1000px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 500px;\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        \n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li class=\"active\">Home</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <div class=\"col-md-12\">\n      <h3>Payment Date vs. Paid Amount </h3>\n      <app-pay-date-chart></app-pay-date-chart>\n    </div>\n    <br>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeBodyComponent = (function () {
    function HomeBodyComponent(generalService, homeService) {
        this.generalService = generalService;
        this.homeService = homeService;
    }
    HomeBodyComponent.prototype.ngOnInit = function () {
        this.generalService.displaySidebar(true);
        this.wakeUpPayDateCounter();
    };
    HomeBodyComponent.prototype.wakeUpPayDateCounter = function () {
        this.homeService.buildPayDateCounter()
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("error in buildPayDateCounter");
        });
    };
    HomeBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body',
            template: __webpack_require__("../../../../../src/app/home/home-body/home-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/home-body.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__general_general_service__["a" /* GeneralService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]])
    ], HomeBodyComponent);
    return HomeBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-charts/home-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeChartComponent = (function () {
    function HomeChartComponent(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    HomeChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            google.charts.load('current', { 'packages': ['corechart'] });
            setTimeout(function () {
                _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element);
            }, 1000);
        }, 1000);
    };
    HomeChartComponent.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            wrapper.draw();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'),
        __metadata("design:type", String)
    ], HomeChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
        __metadata("design:type", Object)
    ], HomeChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
        __metadata("design:type", Object)
    ], HomeChartComponent.prototype, "chartData", void 0);
    HomeChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[HomeChart]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HomeChartComponent);
    return HomeChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var homeRoutes = [];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__ = __webpack_require__("../../../../../src/app/home/home-body/home-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_charts_home_charts_component__ = __webpack_require__("../../../../../src/app/home/home-charts/home-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_date_chart_pay_date_chart_component__ = __webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__["a" /* HomeBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_charts_home_charts_component__["a" /* HomeChartComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pay_date_chart_pay_date_chart_component__["a" /* PayDateChartComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__["a" /* HomeBodyComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_service__["a" /* InvoiceService */],
                __WEBPACK_IMPORTED_MODULE_9__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.homeUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'home/';
    }
    HomeService.prototype.buildPayDateCounter = function () {
        var url = this.homeUrl + 'pay-date-counter/clean-build';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" >\n  <div id=\"column_chart\" [chartData]=\"column_ChartData\" [chartOptions]=\"column_ChartOptions\" chartType=\"ColumnChart\"\n       HomeChart></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayDateChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayDateChartComponent = (function () {
    function PayDateChartComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]('en-US');
        this.column_ChartData = [
            ['Date', 'Pay Amount', 'Pay Count']
        ];
        this.column_ChartOptions = {
            width: 1100,
            height: 450,
            chart: {
                title: 'Payments vs Date',
                subtitle: 'Payments done this month'
            },
            series: {
                0: { axis: 'pay_amount' },
                1: { axis: 'pay_count' } // Bind series 1 to an axis named 'brightness'.
            },
            axes: {
                y: {
                    pay_amount: { label: 'parsecs' },
                    pay_count: { side: 'right', label: 'apparent magnitude' } // Right y-axis.
                }
            }
        };
    }
    PayDateChartComponent.prototype.ngOnInit = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var day = date.getDate();
        var limit = 0;
        if (month % 2 == 0) {
            limit = 30;
        }
        else {
            limit = 31;
        }
        for (var i = 1; i <= limit; i++) {
            var data = [];
            if (i < 10) {
                data[0] = '0' + i + '/' + month + '/' + year;
            }
            else {
                data[0] = i + '/' + month + '/' + year;
            }
            data[2] = 0;
            data[1] = 0;
            this.column_ChartData.push(data);
        }
        this.getPayDateCounter();
    };
    PayDateChartComponent.prototype.getPayDateCounter = function () {
        var _this = this;
        this.invoiceService.getPaidDateCounter()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (element) {
                for (var i = 0; i < _this.column_ChartData.length; i++) {
                    if (_this.column_ChartData[i][0].split('/')[0] == _this.datePipe.transform(element['date'], 'dd/MM/yyyy').split('/')[0]) {
                        _this.column_ChartData[i][1] = element['amount'];
                        _this.column_ChartData[i][2] = element['invoice_id'].length;
                        break;
                    }
                }
            });
        }, function (err) {
        });
    };
    PayDateChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pay-date-chart',
            template: __webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_invoice_service__["a" /* InvoiceService */]])
    ], PayDateChartComponent);
    return PayDateChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        All Invoices\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ]\"><i class=\"fa fa-dashboard\"></i> Invoice</a></li>\n        <li class=\"active\">All</li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">List Of All Invoice</h3>\n          <br>\n          <div class=\"box-tools\">\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Invoices\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"invoiceList\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Customer ID</th>\n              <th>GST No.</th>\n              <th>Invoice No.</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Invoice Generated On</th>\n              <th>Last Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalInvoiceCount }\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.nid}}</td>\n              <td>{{ invoice.customerData?.gstno}}</td>\n              <td>{{ invoice?.invoice_number}}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} BDT/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td>\n                {{ invoice?.created_on | date: 'yMMMd' }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','all',invoice?._id]\">\n                  View</a>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceAllComponent = (function () {
    function InvoiceAllComponent(customerService, router, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.invoiceList = [];
        this.totalInvoiceCount = 0;
        this.paginator = 1;
    }
    InvoiceAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoiceService.getAllInvoiceCount()
            .subscribe(function (res) {
            _this.totalInvoiceCount = res.count;
        });
        this.getAllInvoice();
    };
    InvoiceAllComponent.prototype.getAllInvoice = function () {
        var _this = this;
        this.invoiceList = [];
        this.invoiceService.getAllInvoice(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.invoiceList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (invoice) {
                    var customer;
                    _this.customerService.getCustomerDetails(invoice.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllInvoice');
        });
    };
    InvoiceAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    InvoiceAllComponent.prototype.filterChange = function (event) {
    };
    InvoiceAllComponent.prototype.quickSearch = function (event) {
    };
    InvoiceAllComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        invoice['type'] = 'all';
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    //  for pagination
    InvoiceAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllInvoice();
    };
    InvoiceAllComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-all',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], InvoiceAllComponent);
    return InvoiceAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Create New Invoice\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/create' ] \"><i class=\"fa fa-dashboard \"></i> Invoice</a></li>\n        <li class=\"active \">Create</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" style=\"height:2000px\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Invoice Created Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <br>\n        <!--customer list-->\n        <form class=\"form-horizontal \">\n          <div class=\"col-md-12\">\n            <div class=\" form-group \">\n              <label class=\"col-sm-2 control-label \">Choose Customer: </label>\n              <div class=\"col-sm-10 \">\n                <div>\n                  <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\n                    <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\n                      <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <br><br>\n        </form>\n\n\n        <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"invoiceCreateForm\"\n              (submit)=\"submitInvoiceCreateForm()\">\n          <div class=\"col-md-12\" *ngIf=\"resCustomer\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!-- customer ID -->\n            <div class=\" form-group \">\n              <label for=\"nid \" class=\"col-sm-2 control-label \">Customer ID</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"nid\" type=\"text \" class=\"form-control \" id=\"nid \"\n                       placeholder=\"Customer ID \" readonly>\n              </div>\n            </div>\n\n            <!-- GST no -->\n            <div class=\" form-group \">\n                <label for=\"gstno\" class=\"col-sm-2 control-label \">GST No.</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"gstno\" type=\"text \" class=\"form-control \" id=\"gstno\"\n                         placeholder=\"GST no.\" readonly>\n                </div>\n              </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \">\n              </div>\n            </div>\n        \n\n            <div class=\"form-group \">\n              <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\n              <div class=\"col-sm-10\">\n                <label class=\"label label-danger\">Due</label>\n              </div>\n            </div>\n            <br>\n\n            <div class=\"form-group\">\n              <label for=\"invoice_number\" class=\"col-sm-2 control-label \">Invoice Number</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"invoice_number\" class=\"form-control\" id=\"invoice_number \" placeholder=\" Enter Invoice Number \">\n              </div>\n            </div>\n\n            <!--invoice_created_date-->\n            <div class=\"form-group\">\n              <label for=\"date\" class=\"col-sm-2 control-label\">Invoice Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"date\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"remarks\" class=\"col-sm-2 control-label \">Remarks</label>\n                <div class=\"col-sm-10 \">\n                  <textarea formControlName=\"remarks\" class=\"form-control\" id=\"remarks \" placeholder=\"Write remarks \"></textarea>\n                </div>\n              </div>\n\n              <!-- GST type -->\n            <div class=\"form-group\">\n                <label for=\"remarks\" class=\"col-sm-2 control-label \">Select GST Type</label>\n              <div class=\"col-sm-10 \">\n                  <label class=\"checkbox-inline\"><input type=\"checkbox\" checked=\"true\" value=\"\">GST</label>\n                  <label class=\"checkbox-inline\"><input type=\"checkbox\"  value=\"\">IGST</label>\n                  \n              </div>\n            </div>\n              \n\n            <!--total amount-->\n            <div class=\"form-group \">\n              <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (INR)</label>\n              <div class=\"col-sm-10\">\n                <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\n                       placeholder=\"total \"\n                       readonly>\n              </div>\n            </div>\n             \n            <!--discount-->\n           <div class=\"form-group \">\n            <label for=\"discount \" class=\"col-sm-2 control-label \">Adjustments</label>\n            <div class=\"col-sm-10\">\n            <input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"\n            class=\"form-control \" id=\"discount \" placeholder=\"discount\">\n            </div>\n            </div>\n            <!--product list-->\n            <div class=\"form-group row \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n              <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n              <div class=\"col-sm-10 \">\n                <div class=\"productSelectBox\">\n                  <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                    <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                      {{ product.name }} - <em> {{ product.rate }} </em>\n                    </option>\n                  </select>\n\n                 <!-- <div class=\"form-group \">\n                    <label for=\"quantity \" class=\"col-sm-2 control-label \">Quantity</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"number \" formControlName=\"quantity\"  class=\"form-control \" id=\"quantity \" \n                             placeholder=\"enter quantity\">\n                    </div>\n                  </div>-->\n                \n                <!--  <input type=\"number \" formControlName=\"quantity\"  class=\"form-control \" id=\"quantity \" \n                             placeholder=\"enter quantity\">-->\n\n                 <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\n                    <i\n                      class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n              \n            </div>\n            \n            <!--<div class=\"col-sm-4 pull-right\">\n                <div class=\"form-group \">\n                    <label for=\"quantity \" class=\"col-sm-2 control-label \">Quantity</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"number \" formControlName=\"quantity\"  class=\"form-control \" id=\"quantity \" \n                             placeholder=\"enter quantity\">\n                    </div>\n                  </div>\n                  </div>-->\n            \n            <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                               aria-hidden=\"true\"></i>\n              &nbsp; Add Product\n            </button>\n\n          \n            <div class=\"form-group \">\n              <div class=\"col-md-offset-2 col-md-10\">\n                <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\n\n              </div>\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <div class=\"col-md-12\" *ngIf=\"isSaved\">\n            <div class=\"alert alert-success\" role=\"alert\">Invoice Created Successfully !!</div>\n            <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/invoice/display/all/',resultInvoice._id]\">Generate Invoice Now</a>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceCreateComponent = (function () {
    function InvoiceCreateComponent(invoiceService, fb, customerService, productService, areaService) {
        this.invoiceService = invoiceService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
        this.allProductsAdd = [];
    }
    InvoiceCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    InvoiceCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.invoiceCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            nid: [''],
            gstno: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            amount_due: [''],
            total: [''],
            qty: [''],
            invoice_number: [''],
            discount: [0],
            date: [date],
            remarks: [''],
            status: ['Due'],
            productList: [],
            cost: [''],
            quantity: [''],
        });
    };
    InvoiceCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    InvoiceCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.invoiceCreateForm.patchValue({
            username: this.resCustomer.username,
            gstno: this.resCustomer.gstno,
            nid: this.resCustomer.nid,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.invoiceCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    InvoiceCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList.forEach(function (product) { product.quantity = 0; });
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.invoiceCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    InvoiceCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    InvoiceCreateComponent.prototype.addProduct = function (product) {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    InvoiceCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    InvoiceCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    InvoiceCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            //product.total = product.qty * product.rate;
            total += product['rate'];
        });
        this.invoiceCreateForm.patchValue({
            total: total
        });
    };
    /*updateForm(data) {
      const items = data.invoiceItems;
      let sub = 0;
      for(let i of items){
        i.total = i.qty*i.cost;
        sub += i.total;
      }
      this.form.value.subTotal = sub;
      const tax = sub * (this.form.value.taxPercent / 100);
      this.form.value.tax = tax;
      this.form.value.grantTotal = sub + tax;
    }
  */
    InvoiceCreateComponent.prototype.submitInvoiceCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.invoiceCreateForm.patchValue({
            productList: product_list,
            remarks: this.invoiceCreateForm.value.remarks,
            invoice_number: this.invoiceCreateForm.value.invoice_number,
            qty: this.invoiceCreateForm.value.qty,
            customer_id: this.resCustomer['_id'],
        });
        this.invoiceService.createNewInvoice(this.invoiceCreateForm.value)
            .subscribe(function (res) {
            _this.resultInvoice = res;
            _this.isSaved = true;
        });
    };
    InvoiceCreateComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate * product.quantity;
        });
        this.invoiceDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    InvoiceCreateComponent.prototype.getquantity = function (event) {
        this.invoiceDetailForm.patchValue({
            total: this.invoiceDetailForm.value.amount_due * event.target.value
        });
    };
    InvoiceCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-create',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], InvoiceCreateComponent);
    return InvoiceCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Invoice Details of <em>{{ invoice.customerData?.username }}</em>\n        <small>for the month of {{ invoice?.created_on | date:'MMMM'}}</small>\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ] \"><i class=\"fa fa-dashboard \"></i> Invoices</a></li>\n        <li class=\"active \">Edit</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" *ngIf=\"invoice\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Invoice Data Updated Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"invoiceDetailForm\" *ngIf=\"invoice\"\n              (submit)=\"submitInvoiceEditForm()\">\n          <div class=\"col-md-6\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!-- customer ID -->\n            <div class=\" form-group \">\n              <label for=\"nid \" class=\"col-sm-2 control-label \">Customer ID</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"nid\" type=\"text \" class=\"form-control \" id=\"nid \"\n                       placeholder=\"Customer ID \" readonly>\n              </div>\n            </div>\n             <!-- GST No -->\n             <div class=\" form-group \">\n                <label for=\"gstno\" class=\"col-sm-2 control-label \">GST No.</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"gstno\" type=\"text \" class=\"form-control \" id=\"gstno \"\n                         placeholder=\"Enter GST no\" readonly>\n                </div>\n              </div>\n              <!-- invoice number -->\n              <div class=\" form-group \">\n                  <label for=\"invoice_number\" class=\"col-sm-2 control-label \">Invoice Number</label>\n                  <div class=\"col-sm-10 \">\n                    <input formControlName=\"invoice_number\" type=\"text\" class=\"form-control \" id=\"invoice_number \"\n                           placeholder=\"Enter Invoice Number\" readonly>\n                  </div>\n                </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                       readonly>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <!--choose status-->\n            <div class=\"form-group \">\n              <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\n              <div class=\"col-sm-6\">\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\">{{ invoice.status }}</label>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\">{{ invoice.status }}</label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\">{{ invoice.status }}</label>\n              </div>\n            </div>\n\n            <!--invoice_created_date-->\n            <!--<div class=\"form-group \">\n            <!--<label for=\"invoice_created_date \" class=\"col-sm-2 control-label \">Invoice created on</label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"date\" formControlName=\"invoice_created_date\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--payment_due_date-->\n            <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\n                <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\n                </div>\n            </div>-->\n\n            <!--for partial payment only-->\n            <div class=\"form-group \" *ngIf=\"invoice.status=='Partially Paid' \">\n              <div *ngFor=\"let x of invoice?.amount_partially_paid;let i = index\">\n                <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\n                <div class=\"col-sm-6\">\n                  <h5 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h5>\n                  <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h5>\n                  <br>\n                </div>\n              </div>\n            </div>\n\n            <!--payment paid / partially paid date-->\n            <div class=\"form-group \" *ngIf=\"invoice.status=='Paid' && paymentStatus!='Due'\">\n              <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"paid_date\">\n              </div>\n            </div>\n\n            <!--amoount partially paid-->\n            <!--<div class=\"form-group \" *ngIf=\"invoice.status=='Partially Paid'\">-->\n            <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (INR) </label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--amount_due-->\n            <div class=\"form-group \" *ngIf=\"invoice.status!='Paid'\">\n              <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"invoice.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\n                       id=\"amount_due \" placeholder=\"amount due\" readonly>\n                <input *ngIf=\"invoice.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\n                       class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\n              </div>\n            </div>\n\n\n            <!--discount-->\n            <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label\">Adjustments (INR) </label>\n              <div class=\"col-sm-10\">\n                <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\n                       id=\"discount \" placeholder=\"discount\">\n              </div>\n            </div>\n\n            \n\n            <!--total-->\n            <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"invoice.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\">\n                <input *ngIf=\"invoice.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\" readonly>\n              </div>\n            </div>\n\n            <!-- remarks -->\n            <div class=\"form-group\">\n              <label for=\"remarks\" class=\"col-sm-2 control-label \">Remarks</label>\n              <div class=\"col-sm-10 \">\n                <textarea formControlName=\"remarks\" class=\"form-control\" id=\"remarks \" placeholder=\"Write remarks \"></textarea>\n              </div>\n            </div>\n\n\n            <div>\n              <!--for products already list-->\n              <div class=\"form-group \" *ngFor=\"let myProduct of invoice.customerData?.productData;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\n                              value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <!--for new additional products-->\n              <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+invoice.customerData?.productData.length+1\n                  }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\n                    </select>\n                    <button *ngIf=\"invoice.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\n                            (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                  </div>\n                </div>\n              </div>\n              <button *ngIf=\"invoice.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\n                      class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\n                Product\n              </button>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\n              <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\n              <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Invoice</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InvoiceEditComponent = (function () {
    function InvoiceEditComponent(areaService, customerService, elementRef, productService, fb, invoiceService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.invoiceService = invoiceService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    InvoiceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.invoiceService.getInvoiceById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.invoice = res;
                    _this.allProductsAdd = _this.invoice.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    InvoiceEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.invoice.customer_id)
            .subscribe(function (res) {
            _this.invoice.customerData = res;
            _this.invoice.customerData.productData = [];
            var total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.invoice.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.invoice.customerData.productData.push(res);
                });
                total_partially_paid += item['amount'];
            });
            _this.invoiceDetailForm = _this.fb.group({
                username: [res['username']],
                gstno: [res['gstno']],
                nid: [res['nid']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.invoice['payment_due_date']],
                amount_due: [_this.invoice['amount_due']],
                status: [_this.invoice['status']],
                total: [_this.invoice['total']],
                invoice_number: [_this.invoice['invoice_number']],
                remarks: [_this.invoice['remarks']],
                discount: [_this.invoice['discount']],
                invoice_created_date: [_this.invoice['invoice_created_date']],
                paid_date: [_this.invoice['paid_date']],
                amount_partially_paid: total_partially_paid
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.invoiceDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    InvoiceEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    InvoiceEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    InvoiceEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.invoice.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.submitInvoiceEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            invoice_number: this.invoiceDetailForm.value.invoice_number,
            amount_due: this.invoiceDetailForm.value.amount_due,
            total: this.invoiceDetailForm.value.total,
            remarks: this.invoiceDetailForm.value.remarks,
            discount: this.invoiceDetailForm.value.discount,
            productList: this.allProductsAdd,
            amount_partially_paid: this.invoice.amount_partially_paid,
            type: this.type
        };
        this.invoiceService.preGenerateInvoiceUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/invoice/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    InvoiceEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.invoiceDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    InvoiceEditComponent.prototype.getPartiallyPaid = function (event) {
        this.invoiceDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.invoice.amount_due - event.target.value
        });
    };
    InvoiceEditComponent.prototype.getDiscount = function (event) {
        this.invoiceDetailForm.patchValue({
            total: this.invoiceDetailForm.value.amount_due - event.target.value
        });
    };
    InvoiceEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.invoiceDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], InvoiceEditComponent.prototype, "productSelectBox", void 0);
    InvoiceEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-invoice-edit',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#invoice_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#invoice_table {\n  background-color: #fff;\n  font-size: 20px;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#invoice_box {\n  font-weight: 550;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Invoice Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"> <i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ] \"><i class=\"fa fa-dashboard \"></i> Invoice</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"invoice\">\n    <div class=\"col-xs-12\" id=\"invoice_main\">\n      <div id=\"invoice_body\">\n        <!--invoice display starts here-->\n        <div class=\"\" id=\"invoice_box\" style=\"margin-top:10px\" #invoiceBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"../../../assets/dist/img/Sofkullogo.png\" style=\"width:40%; height:50%; padding:5px;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-6\" style=\"text-align: -webkit-left; margin-top:8px;\">\n                <h4 class=\"title font-bold\"><strong>Company Address comes here</strong></h4>\n                \n                <!--<p style=\"font-size: 15px;\"><i class=\"fa fa-home mr-3\"></i> <b># 8-1-284/OU/385/1&2 | 4th Floor Bait-ul-Rida | OU Colony Shaikpet, Lanco Hills Lane <br> Hyderabad, Telangana 500 008, India.</b></p>\n  \n                <p style=\"font-size: 15px;\"><i class=\"fa fa-envelope mr-3\"></i> <b><span>info@aquality.in | accounts@aquality.in</span>  <span style=\"margin-left:6px;\"> <i class=\"fa fa-phone mr-3\"></i> + 91 406 888 8486 | + 91 709 389 8486</span></b> </p>\n               <p><i class=\"fa fa-envelope mr-3\"></i> info@aquality.in | accounts@aquality.in</p>\n                <p style=\"margin-top: -5px;\"> <strong>GSTIN : 36AAMCA2366GIZM</strong></p> -->\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Invoice for: </span><br>\n                      <strong> {{ invoice.customerData?.fullname }} </strong><br>\n                      <span> {{ invoice.customerData?.location }} </span><br>\n                      <span> {{ invoice.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ invoice.customerData?.mobile_primary }} </span><br>\n                      <span> {{ invoice.customerData?.email }} </span><br>\n                      <!--<span> {{ invoice.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">INVOICE</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Invoice Date: {{ invoice.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid Upto: 12 Months from the date of purchased</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                     <span> Invoice Number: {{ invoice.invoice_number }}</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Customer ID: </strong> {{ invoice.customerData?.nid }} <br> <strong>Customer GSTIN : </strong> {{ invoice.customerData?.gstno}}</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ invoice.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                </div>\n\n              <!--table-->\n              <div id=\"invoice_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"invoice.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                      <th>S.No.</th>\n                      <th>ITEM DESCRIPTION</th>\n                      <TH>HSN CODE</TH>\n                      <th>UNIT PRICE</th>\n                      <th>SGST</th>\n                      <th>CGST</th>\n                      <th>IGST</th>\n                      <th>TAX RATE</th>\n                      <th>QUANTITY</th>\n                      <th style=\"padding-left:100px;\">AMOUNT</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of invoice.productData;let i=index\" \n                    [ngClass]=\"i==invoice.productData.length-1 ? 'row-divide' : '' \">\n                    <td>{{ i + 1 }}</td>\n                    <td>{{ product?.name }}</td>\n                    <td>{{ product?.hsn_code }}</td>\n                    <td> {{ product?.rate | currency:'INR' }}</td>\n                    \n                    <td> {{ product?.vat / 2 }}%</td>\n                    <td> {{ product?.vat / 2 }}%</td>\n                    <td> {{ product?.vat }} % </td>\n                    <td> {{ product?.amount_with_vat - product?.rate }}</td>\n                    \n                    \n                    \n                      <td>1</td>\n                      <td style=\"padding-left:100px; background-color:#ffe6e6; width:20%;\"> {{ product?.amount_with_vat * 1 | currency:'INR' }}</td>\n                    </tr>\n                    <tr>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        \n                        <td>\n                          <strong>SUB TOTAL: </strong>\n                        </td>\n                        <td style=\"padding-left:100px; background-color:#ffe6e6;width:20%;\">\n                           {{ invoice.total | currency:'INR' }}\n                        </td>\n                      </tr>\n\n                      <tr *ngFor=\"let x of invoice?.amount_partially_paid;let i = index\">\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          \n                        \n                          <td>\n                            <strong>Payment On : {{ x.date | date }} </strong>\n                          </td>\n                          <td>\n                             {{ x.amount | currency:'INR' }}\n                          </td>\n                        </tr>\n            \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          \n                          <td>\n                           Adjustments\n                          </td>\n                          <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                             {{ invoice.discount | currency:'INR'}}\n                          </td>\n\n                        </tr>\n                  \n                          \n                            \n\n                           <!--<tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                \n                                <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                                  GRAND TOTAL\n                                </td>\n                                <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px; \">\n                                  INR. {{ invoice.total }}\n                                </td>\n      \n                              </tr>-->\n                        <tr *ngIf=\"invoice.status == 'Paid'\">\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:darkslategray; color:#fff;\">\n                            <strong>Amount Paid </strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px;\">\n                            <strong> {{ invoice.total - invoice.discount | currency:'INR' }}</strong>\n                          </td>\n                        </tr>\n\n                        <tr *ngIf=\"invoice.status == 'Due'\">\n                          <td></td>\n                          <td></td>\n                         <td></td>\n                         <td></td>\n                    \n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:red; color:#fff;\">\n                            <strong>Amount Due </strong>\n                          </td>\n                          <td style=\"padding-left:100px; background-color:red; color:#fff;\">\n                            <strong> {{ finalTotal | currency:'INR'}}</strong><br>\n                          </td>\n                        </tr>\n                        \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        \n                          <td style=\"background-color:darkslategray; color:#fff;\">\n                            <strong>TOTAL(in words)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                            <strong style=\"text-transform: capitalize;\"> {{ finalTotalWords }}</strong>\n                          </td>\n                        </tr>\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        \n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\"> Note*: {{invoice.remarks}}</h3>\n                      <h3 class=\"well\"> Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                   <!-- <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>-->\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p style=\"text-align:center;\"><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                     <b>Terms & Conditions:</b> <hr>\n                     <!-- <p style=\"text-align:center;\"> Water | Air | Energy </p> -->\n\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ invoice.created_on | date }} </span><br>\n                    <span> <strong>Invoice ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ invoice.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>Invoice Number: </strong> #001</span><br>\n                  <span> <strong>Invoice Date: </strong> {{ invoice.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ invoice.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ invoice.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InvoiceHtmlComponent = (function () {
    function InvoiceHtmlComponent(generalService, router, productService, customerService, invoiceService, route) {
        this.generalService = generalService;
        this.router = router;
        this.productService = productService;
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoInvoice = false;
    }
    InvoiceHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoInvoice']) {
            this.isAutoInvoice = true;
            this.tempInvoice = changes['autoInvoice'].currentValue;
        }
    };
    InvoiceHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.generalService.displaySidebar(true);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoInvoice) {
                _this.getInvoiceById(params['id']);
            }
            else {
                _this.invoice = _this.tempInvoice;
                _this.invoice['created_on'] = _this.currentDate;
                _this.finalTotal = _this.invoice.amount_due - _this.invoice.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.invoice.total, '');
            }
        });
    };
    InvoiceHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InvoiceHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoInvoice) {
        //   this.downloadPDF();
        //
        // }
    };
    InvoiceHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoInvoice) {
            this.downloadPDF();
        }
    };
    InvoiceHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('invoice_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoInvoice) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.invoice.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.invoiceService.saveAutoInvoice(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.invoice.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    InvoiceHtmlComponent.prototype.getInvoiceById = function (id) {
        var _this = this;
        this.invoiceService.getInvoiceById(this.type, id)
            .subscribe(function (res) {
            //this.invoice.tax = 0;
            _this.invoice = res;
            _this.invoice.total = 0;
            _this.invoice.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.invoice.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    _this.invoice.productData.push(res);
                    _this.invoice.total = _this.invoice.total + res['amount_with_vat'];
                    _this.invoice.amount_due = _this.invoice.total;
                }, function (err) {
                }, function () {
                    if (_this.invoice.amount_partially_paid.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.invoice.amount_partially_paid, function (data) {
                            _this.invoice.amount_due = _this.invoice.amount_due - data['amount'];
                        });
                    }
                    if (_this.invoice.status == 'Paid') {
                        _this.invoice.amount_due = 0;
                    }
                    _this.finalTotal = _this.invoice.amount_due - _this.invoice.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.invoice.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.invoice.customer_id)
                .subscribe(function (res) {
                _this.invoice.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.invoice);
            });
        }, function (err) {
            console.log(err);
        });
    };
    InvoiceHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    InvoiceHtmlComponent.prototype.reload = function () {
        // window.location.href = '';
        this.router.navigate(['/dashboard/home']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('invoiceBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InvoiceHtmlComponent.prototype, "invoiceBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InvoiceHtmlComponent.prototype, "autoInvoice", void 0);
    InvoiceHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-html',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], InvoiceHtmlComponent);
    return InvoiceHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isInvoiceSaved\">Invoice Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isInvoiceError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Invoices\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Invoice</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delInvoice\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the invoice for <em>{{ delInvoice.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Invoice List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Invoices\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"invoiceList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','recent',invoice?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(invoice)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceRecentComponent = (function () {
    function InvoiceRecentComponent(customerService, router, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.invoiceList = [];
        this.searchMode = 'username';
        this.isInvoiceSaved = false;
        this.isInvoiceError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    InvoiceRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentInvoiceDB();
        // this.wakeUpInvoiceDemon();
    };
    //useless shitty method
    InvoiceRecentComponent.prototype.wakeUpInvoiceDemon = function () {
        var _this = this;
        this.invoiceService.cleanInvoice()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewInvoice();
            }
            else {
                _this.getRecentInvoiceDB();
            }
        });
    };
    //useless shitty method
    InvoiceRecentComponent.prototype.generateNewInvoice = function () {
        var _this = this;
        this.invoiceService.dropRecentInvoice()
            .subscribe(function (res) {
            _this.buildAndSaveRecentInvoice();
        });
    };
    InvoiceRecentComponent.prototype.getRecentInvoiceDB = function () {
        var _this = this;
        this.invoiceList = [];
        this.invoiceService.getRecentInvoiceDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (invoice) {
                var customer;
                _this.customerService.getCustomerDetails(invoice.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.invoiceList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    InvoiceRecentComponent.prototype.buildAndSaveRecentInvoice = function () {
        var _this = this;
        this.invoiceService.buildAndSaveRecentInvoice()
            .subscribe(function (res) {
            _this.getRecentInvoiceDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    InvoiceRecentComponent.prototype.saveRecentInvoice = function (invoice) {
        this.invoiceService.saveRecentInvoice(invoice)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    InvoiceRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    InvoiceRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentInvoiceDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
    };
    InvoiceRecentComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        invoice['type'] = 'recent';
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    InvoiceRecentComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentInvoiceDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.invoiceList = resArray;
    };
    InvoiceRecentComponent.prototype.savePartialPay = function () {
        var _this = this;
        var data = {
            id: this.partialInvoice['_id'],
            amount_partially_paid: this.partialPay
        };
        this.invoiceService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getRecentInvoiceDB();
            }
        }, function (err) {
        });
    };
    InvoiceRecentComponent.prototype.remove = function (delInvoice) {
        this.showRemoveConfirmation = true;
        this.delInvoice = delInvoice;
    };
    InvoiceRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.invoiceService.deleteInvoice(this.delInvoice)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.invoiceList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.invoiceList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.invoiceList, {
                        _id: _this.delInvoice['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delInvoice = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    InvoiceRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentInvoiceDB();
    };
    InvoiceRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-invoice-recent',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], InvoiceRecentComponent);
    return InvoiceRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var invoiceRoutes = [];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(invoiceRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delInvoice\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the invoice for <em>{{ delInvoice.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Invoices of any customer</h2>\n        <hr>\n\n        <!--search results for invoices show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"invoiceList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Customer ID</th>\n              <th>GST No.</th>\n              <th>Invoice No.</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Invoice Generated On</th>\n              <th>Last Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.nid}}</td>\n              <td>{{ invoice.customerData?.gstno}}</td>\n              <td>{{ invoice?.invoice_number }}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td>\n                {{ invoice?.created_on | date: 'yMMMd' }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" *ngIf=\"invoice?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','recent',invoice?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"invoice?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','all',invoice?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(invoice)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialInvoice)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceSearchComponent = (function () {
    function InvoiceSearchComponent(customerService, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.invoiceList = [];
        this.showRemoveConfirmation = false;
    }
    InvoiceSearchComponent.prototype.ngOnInit = function () {
    };
    InvoiceSearchComponent.prototype.getSearchText = function (event) {
        this.invoiceList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalInvoiceSearchByCustomer();
    };
    InvoiceSearchComponent.prototype.getGlobalInvoiceSearchByCustomer = function () {
        var _this = this;
        this.invoiceService.globalInvoiceSearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    InvoiceSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.invoiceList = [];
        this.invoiceService.getInvoiceByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (invoice) {
                var customer;
                if (invoice['type'] == '') {
                    invoice['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(invoice.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    InvoiceSearchComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        if (invoice['type'] != 'recent') {
            invoice['type'] = 'all';
        }
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    InvoiceSearchComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceSearchComponent.prototype.savePartialPay = function (invoice) {
        var _this = this;
        var data = {
            id: this.partialInvoice['_id'],
            amount_partially_paid: this.partialPay
        };
        this.invoiceService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getSearchDetails({ _id: invoice.customer_id });
            }
        }, function (err) {
        });
    };
    InvoiceSearchComponent.prototype.remove = function (invoice) {
        this.showRemoveConfirmation = true;
        this.delInvoice = invoice;
    };
    InvoiceSearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.invoiceService.deleteInvoice(this.delInvoice)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.invoiceList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.invoiceList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.invoiceList, {
                        _id: _this.delInvoice['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delInvoice = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    InvoiceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-search',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_routing_module__ = __webpack_require__("../../../../../src/app/invoice/invoice-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_all_invoice_all_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoice_create_invoice_create_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_recent_invoice_recent_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__invoice_routing_module__["a" /* InvoiceRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__invoice_all_invoice_all_component__["a" /* InvoiceAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__invoice_create_invoice_create_component__["a" /* InvoiceCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__invoice_recent_invoice_recent_component__["a" /* InvoiceRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__invoice_service__["a" /* InvoiceService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
        this.invoiceUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'invoice/';
    }
    InvoiceService.prototype.removeInvoice = function (invoice) {
        var url = this.invoiceUrl + 'remove-invoice';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getInvoiceByCustomerId = function (id) {
        var url = this.invoiceUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.globalInvoiceSearchByCustomer = function (query) {
        var url = this.invoiceUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.saveAutoInvoice = function (data) {
        var url = this.invoiceUrl + 'save-auto-invoice';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getAllInvoice = function (paginator) {
        var url = this.invoiceUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getRecentInvoice = function () {
        var url = this.invoiceUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.storeInvoice = function (data) {
        var url = this.invoiceUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.downloadPDF = function (data) {
        var url = this.invoiceUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getInvoiceById = function (type, id) {
        var url = this.invoiceUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.searchByUsername = function (data) {
        var url = this.invoiceUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.saveRecentInvoice = function (data) {
        var url = this.invoiceUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.dropRecentInvoice = function () {
        var url = this.invoiceUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.checkIfRecentInvoiceExists = function () {
        var url = this.invoiceUrl + 'recent_invoice/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getRecentInvoiceDB = function (paginator) {
        var url = this.invoiceUrl + 'recent_invoice_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.cleanInvoice = function () {
        var url = this.invoiceUrl + 'clean_invoice';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.changeInvoiceStatus = function (data) {
        var url = this.invoiceUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    InvoiceService.prototype.getTotal = function (data) {
        var url = this.invoiceUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.buildAndSaveRecentInvoice = function () {
        var url = this.invoiceUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.savePartialPay = function (data) {
        var url = this.invoiceUrl + 'recent/partial_pay/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.preGenerateInvoiceUpdate = function (data) {
        var url = this.invoiceUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.deleteInvoice = function (invoice) {
        var url = this.invoiceUrl + 'delete';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.setPaidDateCounter = function (invoice) {
        var url = this.invoiceUrl + 'set_paid_date_counter';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getPaidDateCounter = function () {
        var url = this.invoiceUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getAllInvoiceCount = function () {
        var url = this.invoiceUrl + 'all_invoice_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.createNewInvoice = function (data) {
        var url = this.invoiceUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: rgb(255, 255, 255)\" >\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" style=\"color: #fff; margin-top:20px;\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" style=\"color: #fff; height:25%;\"> <img src=\"../../../assets/dist/img/Sofkullogo.png\" style=\"height:30%; width:180px; margin-top:8px; margin-left:15px;\" />  </a> \n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <form class=\"form-inline pull-right\" style=\"margin-top:20px; padding: 2px;\" (submit)=\"onLoginSubmit()\" >\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"username\">Username:</label>\n              <input type=\"username\" class=\"form-control\"  placeholder=\"Enter username\" [(ngModel)]=\"username\" name=\"username\" >\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"password\">Password:</label>\n              <input type=\"password\" class=\"form-control\"  placeholder=\"Enter password\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\" value=\"remember-me\"> Remember me\n              </label>\n            </div>\n            <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n          </form>\n        </ul>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"container\"><flash-messages></flash-messages></div>\n  </nav>\n  \n\n  \n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top: 110px;\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item active\">\n        <img src=\"../../../assets/dist/img/3.jpg\" style=\"height:400px; width: 100%;\" alt=\"Image\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../../assets/dist/img/4.jpg\" style=\"height:400px; width:100%;\" alt=\"Image\">\n      </div>\n      <div class=\"item\">\n        <img src=\"../../../assets/dist/img/GST.jpg\" style=\"height:400px; width:100%;\" alt=\"Image\">\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../../assets/dist/img/5.png\" style=\"height:400px; width: 100%;\" alt=\"Image\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n\n<div class=\"container text-center\">\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <img src=\"../../../assets/dist/img/11.jpeg\" class=\"img-responsive\" style=\"width:100%; height: 98%\" alt=\"Image\">\n    </div>\n    <div class=\"col-sm-4\">\n      <img src=\"../../../assets/dist/img/22.jpeg\" class=\"img-responsive\" style=\"width:100%; height: 100%\" alt=\"Image\">\n    </div>\n\n    <div class=\"col-sm-4\">\n      <img src=\"../../../assets/dist/img/9.jpeg\" class=\"img-responsive\" style=\"width:100%; height: 100%\" alt=\"Image\">\n    </div>\n    \n  </div>\n</div><br>\n\n<!--Footer-->\n<footer class=\"page-footer center-on-small-only unique-color-dark pt-0\" style=\"background-color: #212529;\">\n\n  <div style=\"background-color: #6495ED;\">\n      <div class=\"container\">\n          <!--Grid row-->\n          <div class=\"row py-4 d-flex align-items-center\">\n\n              <!--Grid column-->\n              <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\" style=\"margin-top: 7px; color:#fff;\">\n                  <h4 class=\"mb-0 white-text\">Get connected with us on social networks!</h4>\n              </div>\n              <!--Grid column-->\n\n              <!--Grid column-->\n              <div class=\"col-md-6 col-lg-7 text-center text-md-right\" style=\"margin-top:4px;\">\n                <!--Facebook-->\n                <a href=\"#\" class=\"icons-sm fb-ic ml-0\"><i class=\"fa fa-facebook white-text mr-lg-6\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                <!--Twitter-->\n                <a href=\"#\" class=\"icons-sm tw-ic\"><i class=\"fa fa-twitter white-text mr-lg-6\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                <!--Linkedin-->\n                <a href=\"#\" class=\"icons-sm li-ic\"><i class=\"fa fa-linkedin white-text mr-lg-4\" style=\"font-size: 25px;  padding: 15px;\"> </i></a>\n                <a href=\"#\" class=\"icons-sm ins-ic\"><i class=\"fa fa-youtube white-text mr-lg-4\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                <a href=\"#\" class=\"icons-sm ins-ic\"><i class=\"fa fa-pinterest white-text mr-lg-4\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n            </div>\n              <!--Grid column-->\n\n          </div>\n          <!--Grid row-->\n      </div>\n  </div>\n\n  <!--Footer Links-->\n  <div class=\"container-fluid mt-5 mb-4 text-md-left\" style=\"background-color: #365264; opacity: 0.8; color: #fff; font-size: 16px;\">\n    <div class=\"row mt-3\">\n\n        <!--First column-->\n        <div class=\"col-md-4 col-lg-4 col-xl-3\">\n            <h4 class=\"title font-bold\"><strong>Sofkul</strong></h4>\n            <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" >\n            <p style=\"text-align: justify;\">We believe that innovation holds the key to growth and sustainability of any organization. While high growth remains a key parameter to success but that in itself may not ensure community development and environmental replenishment</p>\n        </div>\n        <!--/.First column-->\n\n        <!--Third column-->\n        <div class=\"col-md-4 col-lg-3 col-xl-3\" style=\"color:#fff;\">\n            <h4 class=\"title font-bold\"><strong>Useful links</strong></h4>\n            <hr class=\"accent-2 mb-4 mt-0 d-inline-block mx-auto color: #fff;\">\n            <div class=\"v1\">\n            <p><a style=\"color:#fff;\" href=\"#!\">Log in</a></p>\n            <p><a  style=\"color:#fff;\" href=\"#!\">Billing Application</a></p>\n          </div>\n        </div>\n        <!--/.Third column-->\n\n        <!--Fourth column-->\n        <div class=\"col-md-4 col-lg-3 col-xl-3\">\n            <h4 class=\"title font-bold\"><strong>Contact</strong></h4>\n            <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\">\n            <p><i class=\"fa fa-home mr-3\"></i>  Moghal Emami Mansion, 3rd Floor </p>\n            <p><i class=\"fa fa-home mr-3\"></i>Opposite Shadan College, Khairatabad</p>\n            <p><i class=\"fa fa-home mr-3\"></i> Hyderabad, Telangana 500 004, India</p>\n            <p><i class=\"fa fa-envelope mr-3\"></i> info@sofkul.com | accounts@sofkul.com</p>\n            <p><i class=\"fa fa-phone mr-3\"></i> + 91 824 753 4729 | +91 868 697 4941</p>\n        </div>\n        <!--/.Fourth column-->\n\n    </div>\n</div>\n  <!--/.Footer Links-->\n\n  <!-- Copyright-->\n  <div class=\"footer-copyright\">\n      <div class=\"container-fluid\" style=\" text-align:center; padding: 12px;\">\n        \n          <span style=\"color: #fff ;\">\n          © 2018 Copyright:</span> <a href=\"https://www.sofkul.com\" target=\"_blank\" style=\"color: #fff;\"> www.sofkul.com</a>\n        \n      </div>\n  </div>\n  <!--/.Copyright -->\n\n</footer>\n<!--/.Footer-->\n\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in, redirecting to login page', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard/home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"col-xs-12\">\n    <h2>\n      All Products\n    </h2>\n  </div>\n</section>\n<section class=\"content\">\n  <!--  Page Content Here -->\n  <div class=\"col-xs-12\">\n    <div class=\"box box-primary\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">List Of All Products</h3>\n        <br>\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body table-responsive no-padding\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <th>Name</th>\n            <th>HSN code</th>\n            <th>Rate &nbsp;(INR/month)</th>\n            <th>Quantity</th>\n            <th>GST(%)</th>\n            <th>Description</th>\n            <th>Action</th>\n\n          </tr>\n          <tr *ngFor=\"let product of products | paginate: { itemsPerPage: 10, currentPage: p }\">\n            <td>{{ product.name }}</td>\n            <td>{{ product.hsn_code}}</td>\n            <td>{{ product.rate }}</td>\n            <td>{{ product.quantity }}</td>\n            <td>{{ product.vat }}</td>\n            <td>{{ product.description }}</td>\n            <td *ngIf=\"product.status\">\n                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(product._id,product.status)\"> Active</button>\n            </td>\n            <td *ngIf=\"!product.status\">\n                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(product._id,product.status)\"> Inactive</button>\n            </td>\n            <td>\n              <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"editProduct(product._id)\"> Edit</a>\n            </td>\n          </tr>\n          </tbody>\n\n        </table>\n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n    <div class=\"col-md-offset-4\">\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductAllComponent = (function () {
    function ProductAllComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEditForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductAllComponent.prototype.ngOnInit = function () {
    };
    ProductAllComponent.prototype.toggleStatus = function (id, status) {
        var _this = this;
        var data = {
            id: id,
            status: !status
        };
        this.productService.setStatus(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.statusChange.emit(true);
            }
            else {
                _this.statusChange.emit(false);
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    ProductAllComponent.prototype.editProduct = function (id) {
        this.showEditForm.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProductAllComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductAllComponent.prototype, "statusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductAllComponent.prototype, "showEditForm", void 0);
    ProductAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-all',
            template: __webpack_require__("../../../../../src/app/product/product-all/product-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-all/product-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductAllComponent);
    return ProductAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:1000px\">\n  <div class=\"col-xs-12\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Product Created Successfully !!</div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n    <ol class=\"breadcrumb \">\n      <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n      <li><a [routerLink]=\"[ '/dashboard/product' ] \"><i class=\"fa fa-dashboard \"></i> Product</a></li>\n      <li class=\"active \">New</li>\n    </ol>\n  </div>\n  <section class=\"content-header\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              (click)=\"createModeOn()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;New Product\n      </button>\n      <h2 *ngIf=\"!editMode && createMode\">\n        Create New Product\n      </h2>\n      <h2 *ngIf=\"editMode && !createMode\">\n        Update Product\n      </h2>\n    </div>\n  </section>\n\n  <section class=\"content\" *ngIf=\"createMode || editMode\">\n    <div class=\"col-md-12\">\n\n      <div class=\"box box-primary\">\n\n          <input  type=\"text\" class=\"form-control\" id=\"quantity2\" [(ngModel)]=\"sqty2\" placeholder=\"enter Qr input\" (ngModelChange)=\"setValue3()\">\n\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"productCreateForm\" (submit)=\"submitCreateProductForm()\">\n         \n         \n          <!--name-->\n          <div class=\" form-group\">\n            <label for=\"name\" class=\"col-sm-2 control-label \">Name</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"name\" type=\"text \" class=\"form-control\" id=\"name\" placeholder=\"product name \" [(ngModel)]=\"sname\" >\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"hsn_code\" class=\"col-sm-2 control-label \">HSN code</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"hsn_code\" type=\"number\" class=\"form-control\" id=\"hsn_code\" \n                     placeholder=\"enter HSN code of the product\">\n            </div>\n          </div>\n\n          <!--rate-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Rate</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"rate\" type=\"text\" class=\"form-control\" id=\"rate\"  placeholder=\"monthly rate in INR\" [(ngModel)]=\"srate\">\n            </div>\n          </div>\n          <!--Qauntity-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Quantity</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"quantity\" type=\"text\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"sqty\"\n                     placeholder=\"enter quantity\">\n            </div>\n          </div>\n\n          <!--VAT %-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">GST (%)</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"vat\" type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"GST (%)\" [(ngModel)]=\"sgst\">\n            </div>\n          </div>\n          <!--description-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Description</label>\n            <div class=\"col-sm-10 \">\n              <textarea formControlName=\"description\" class=\"form-control\" [(ngModel)]=\"sdesc\"></textarea>\n            </div>\n          </div>\n\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"!editMode\">Save</button>\n              <button type=\"submit\" class=\"btn btn-warning\" *ngIf=\"editMode\">Update</button>\n              \n\n              <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"editMode || createMode\" (click)=\"cancelEdit()\"> Cancel</button>\n              \n            </div>\n          </div>\n\n        </form>\n        \n      </div>\n    </div>\n  </section>\n  <app-product-all (showEditForm)=\"showEditForm($event)\" (statusChange)=\"statusChanged($event)\" [products]=\"products\"></app-product-all>                 \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCreateComponent = (function () {
    function ProductCreateComponent(fb, productService) {
        this.fb = fb;
        this.productService = productService;
        this.products = [];
        this.showSuccess = false;
        this.showError = false;
        this.editMode = false;
        this.createMode = false;
        this.updateSuccess = false;
        this.test = "";
        this.name = 'abcd';
        this.sname = '';
        this.srate = '';
        this.sqty = '';
        this.sqty2 = '';
        this.sdesc = '';
        this.sgst = '';
        this.sgst2 = '';
        this.sqr = '';
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getAllProduct();
        // product.q 
    };
    ProductCreateComponent.prototype.setValue2 = function () {
        var str = 'p2-xyz,r2-300,q2-5,g-6%,d2-this xyz product companyyy';
        this.f_GetByQrCode(str);
    };
    ProductCreateComponent.prototype.setValue = function () {
        var str = 'p-xyz,r-300,q-5,g-6%,d-this xyz product companyyy';
        this.f_GetByQrCode(str);
    };
    ProductCreateComponent.prototype.setValue3 = function () {
        //  var s = this.sqr;
        var q2 = this.sqty2;
        // var q1 = this.sqty;
        // alert("q2 "+q2+"\n q1="+q1);
        this.f_GetByQrCode(q2);
    };
    ProductCreateComponent.prototype.fmakeQr = function () {
    };
    ProductCreateComponent.prototype.fqr = function () {
        //  var s=this.sqr;
        //alert("qr value "+s);
        alert("qr value chng");
    };
    ProductCreateComponent.prototype.f_GetByQrCode = function (str) {
        //alert(str);
        var str_array = str.split(',');
        for (var i = 0; i < str_array.length; i++) {
            str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            ///  alert(str_array[i]+"\n i="+i);
            if (i == 0) {
                this.sname = str_array[i].toString();
            }
            else if (i == 1) {
                this.srate = str_array[i].toString();
            }
            else if (i == 2) {
                this.sqty = str_array[i].toString();
            }
            else if (i == 3) {
                this.sgst = str_array[i].toString();
            }
            else if (i == 4) {
                this.sdesc = str_array[i].toString();
            }
        }
    };
    ProductCreateComponent.prototype.buildForm = function () {
        this.productCreateForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            rate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            hsn_code: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: [''],
            status: [true],
            vat: [''],
            tb: ['value on build'],
            test: ['hh']
        });
    };
    ProductCreateComponent.prototype.submitCreateProductForm = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        // console.log(this.productCreateForm.value);
        var data = {
            id: this.id,
            name: this.productCreateForm.value.name,
            rate: this.productCreateForm.value.rate,
            quantity: this.productCreateForm.value.quantity,
            hsn_code: this.productCreateForm.value.hsn_code,
            description: this.productCreateForm.value.description,
            status: true,
            vat: this.productCreateForm.value.vat
        };
        if (!this.editMode) {
            this.productService.createProduct(data)
                .subscribe(function (res) {
                if (res.status) {
                    _this.getAllProduct();
                    _this.showSuccess = true;
                    _this.productCreateForm.reset();
                }
                else {
                    _this.showError = true;
                }
            }, function (err) {
                console.log("ERROR from createProduct");
                _this.showError = true;
            });
        }
        else {
            this.productService.updateProduct(data)
                .subscribe(function (res) {
                // console.log(res);
                _this.getAllProduct();
                _this.productCreateForm.reset();
                _this.editMode = false;
            }, function (err) {
            });
        }
    };
    ProductCreateComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.productService.getAllProduct()
            .subscribe(function (res) {
            _this.products = res;
        }, function (err) {
            console.log("Error in getAllProduct");
        });
    };
    ProductCreateComponent.prototype.statusChanged = function (event) {
        this.getAllProduct();
    };
    ProductCreateComponent.prototype.showEditForm = function (event) {
        var _this = this;
        this.editMode = true;
        this.createMode = false;
        this.id = event;
        this.productService.getProductById(event)
            .subscribe(function (res) {
            _this.productCreateForm.patchValue({
                name: res.name,
                rate: res.rate,
                quantity: res.quantity,
                hsn_code: res.hsn_code,
                description: res.description,
                status: res.status,
                vat: res.vat
            });
        }, function (err) {
        });
    };
    ProductCreateComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.createMode = false;
        this.productCreateForm.reset();
        this.getAllProduct();
    };
    ProductCreateComponent.prototype.createModeOn = function () {
        this.editMode = false;
        this.createMode = true;
        this.productCreateForm.reset();
    };
    ProductCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__("../../../../../src/app/product/product-create/product-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var productRoutes = [];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(productRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_routing_module__ = __webpack_require__("../../../../../src/app/product/product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_all_product_all_component__ = __webpack_require__("../../../../../src/app/product/product-all/product-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__product_routing_module__["a" /* ProductRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__["a" /* ProductCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_all_product_all_component__["a" /* ProductAllComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'product/';
    }
    ProductService.prototype.createProduct = function (data) {
        var url = this.productUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllProduct = function () {
        var url = this.productUrl + 'all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductService.prototype.setStatus = function (data) {
        var url = this.productUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductById = function (id) {
        var url = this.productUrl + 'id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (data) {
        var url = this.productUrl + 'update/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.searchByName = function (data) {
        var url = this.productUrl + 'search/name/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n    <section class=\"content-header\">\n      <div class=\"col-xs-12\">\n        <h1>\n          All Quotations\n        </h1>\n        <ol class=\"breadcrumb\">\n          <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n          <li><a [routerLink]=\"[ '/dashboard/quotation/all' ]\"><i class=\"fa fa-dashboard\"></i> Quotation</a></li>\n          <li class=\"active\">All</li>\n        </ol>\n      </div>\n    </section>\n  \n    <section class=\"content\">\n      <!--  Page Content Here -->\n      <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n          <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n            <h3 class=\"box-title\">List Of All Quotation</h3>\n            <br>\n            <div class=\"box-tools\">\n              <div class=\"row\">\n                <!--<div class=\"col-md-offset-2 col-lg-4\">\n                  Filter : &nbsp;\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                     (change)=\"toggleSearchStatus($event)\">All</label>\n  \n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                     (change)=\"toggleSearchStatus($event)\">Paid</label>\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                     (change)=\"toggleSearchStatus($event)\">Due</label>\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                     (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n                </div>-->\n                <div class=\"col-lg-6\" style=\"float:right\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-btn\">\n                      <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                        <option value=\"username\">Username</option>\n                        <option value=\"mobile_number\">Mobile Number</option>\n                        <option value=\"area\">Area</option>\n                      </select>\n                    </div>\n                    <!-- /btn-group -->\n                    <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Quotations\"\n                           (input)=\"quickSearch($event.target.value)\">\n                  </div>\n                  <!-- /input-group -->\n                </div>\n              </div>\n              <br><br>\n              <!-- /.row -->\n              <!-- /.row -->\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body table-responsive no-padding\" *ngIf=\"quotationList\">\n            <table class=\"table table-hover\">\n              <tbody>\n              <tr>\n                <th>Username</th>\n                <th>Fullname</th>\n                <th>Customer ID</th>\n                <th>Mobile</th>\n                <th>Area</th>\n                <th>Product</th>\n                <!--<th>Due (INR)</th>\n                <th>Paid (INR)</th>-->\n                <th>Total (INR)</th>\n                <!--<th>Status</th>-->\n                <th>Quotation Generated On</th>\n                <!--<th>Last Transaction Date</th>-->\n                <!--<th>Change Status</th>-->\n                <th>Action</th>\n              </tr>\n              <tr\n                *ngFor=\"let quotation of quotationList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalQuotationCount }\">\n                <td>{{ quotation.customerData?.username }}</td>\n                <td>{{ quotation.customerData?.fullname }}</td>\n                <td>{{ quotation.customerData?.nid}}</td>\n                <td>{{ quotation.customerData?.mobile_primary }}</td>\n                <td>{{ quotation.customerData?.areaData?.name }}</td>\n                <td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                    <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\n                </td>\n                <!--<td>\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\n                </td>-->\n                <!--<td>{{ quotation?.amount_due }}</td>\n                <td>{{ quotation?.total - quotation?.amount_due }}</td>-->\n                <td>{{ quotation?.total }}</td>\n               <!-- <td>\n                  <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\n                  <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\n                  <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\n                    }} </label>\n                </td>-->\n                <td>\n                  {{ quotation?.created_on | date: 'yMMMd' }}\n                </td>\n               <!-- <td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\n                  {{ quotation?.payment_due_date | date }}\n                </td>-->\n                <td *ngIf=\"quotation?.status=='Paid'\">\n                  {{ quotation?.paid_date | date }}\n                </td>\n               <!-- <td>\n                  <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\n                  <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\n                          data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                  </button>\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\n                </td>-->\n                <td>\n                  <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                     [routerLink]=\"['/dashboard/quotation/view','all',quotation?._id]\">\n                    View</a>\n                </td>\n  \n                <!-- Modal for Partially payment -->\n                <!--<div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                     aria-labelledby=\"myModalLabel\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                          aria-hidden=\"true\">&times;</span></button>\n                        <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                      </div>\n                      <div class=\"modal-body\" *ngIf=\"partialQuotation\">\n                        <div class=\"col-md-12\">\n                          <div class=\"col-md-6\">\n                            <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} INR</h4>\n                            <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} INR</h4>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\n                              <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                              <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                              <br>\n                            </div>\n  \n                          </div>\n                        </div>\n                        <br>\n                        <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">-->\n                          <!--amoount partially paid-->\n                         <!--<div class=\"form-group\">\n                            <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                              (INR) </label>\n                            <div class=\"col-sm-10\">\n                              <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                     id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                            </div>\n                          </div>\n                        </form>\n                      </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                                data-dismiss=\"modal\">Save changes\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>-->\n              </tr>\n              </tbody>\n  \n            </table>\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <div class=\"col-md-offset-4\">\n          <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n        </div>\n      </div>\n    </section>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationAllComponent = (function () {
    function QuotationAllComponent(customerService, router, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.quotationList = [];
        this.totalQuotationCount = 0;
        this.paginator = 1;
    }
    QuotationAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quotationService.getAllQuotationCount()
            .subscribe(function (res) {
            _this.totalQuotationCount = res.count;
        });
        this.getAllQuotation();
    };
    QuotationAllComponent.prototype.getAllQuotation = function () {
        var _this = this;
        this.quotationList = [];
        this.quotationService.getAllQuotation(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.quotationList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (quotation) {
                    var customer;
                    _this.customerService.getCustomerDetails(quotation.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllQuotation');
        });
    };
    QuotationAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    QuotationAllComponent.prototype.filterChange = function (event) {
    };
    QuotationAllComponent.prototype.quickSearch = function (event) {
    };
    /*changeStatus(status: string, quotation: Quotation) {
      if (status == 'Paid') {
        this.setPaidDateCounter(quotation);
        quotation.status = 'Paid';
        //quotation.paid_date = Date.now();
        quotation.amount_due = 0;
      } else if (status == 'Due') {
        quotation.status = 'Due';
        //quotation.amount_due = quotation.total;
        //quotation.amount_partially_paid = [];
      } else if (status == 'Partially Paid') {
        this.partialQuotation = quotation;
      }
  
      quotation['type'] = 'all';
  
      this.quotationService.changeQuotationStatus(quotation)
        .subscribe(
          (res) => {
  
          }
        )
    }*/
    //  for pagination
    QuotationAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllQuotation();
    };
    QuotationAllComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    QuotationAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-all',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], QuotationAllComponent);
    return QuotationAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n    <section class=\" content-header \">\n      <div class=\"col-xs-12\">\n        <h1>\n          Create New Quotation\n        </h1>\n        <ol class=\"breadcrumb \">\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n          <li><a [routerLink]=\"[ '/dashboard/quotation/create' ] \"><i class=\"fa fa-dashboard \"></i> Quotations</a></li>\n          <li class=\"active \">Create</li>\n        </ol>\n      </div>\n    </section>\n    <section class=\"content \">\n      <div class=\"col-md-12\">\n        <div class=\"box box-primary\" style=\"height:2000px\">\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Quotation Created Successfully !!</div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n          <!--  Page Content Here -->\n          <br>\n          <!--customer list-->\n          <form class=\"form-horizontal \">\n            <div class=\"col-md-12\">\n              <div class=\" form-group \">\n                <label class=\"col-sm-2 control-label \">Choose Customer: </label>\n                <div class=\"col-sm-10 \">\n                  <div>\n                    <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\n                      <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\n                        <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <br><br>\n          </form>\n  \n  \n          <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"quotationCreateForm\"\n                (submit)=\"submitQuotationCreateForm()\">\n            <div class=\"col-md-12\" *ngIf=\"resCustomer\">\n              <!--username-->\n              <div class=\" form-group \">\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                         placeholder=\"Username \" readonly>\n                </div>\n              </div>\n\n              <div class=\" form-group \">\n                  <label for=\"nid \" class=\"col-sm-2 control-label \">Customer ID</label>\n                  <div class=\"col-sm-10 \">\n                    <input formControlName=\"nid\" type=\"text \" class=\"form-control \" id=\"nid \"\n                           placeholder=\"Customer ID \" readonly>\n                  </div>\n                </div>\n              <!--email-->\n              <div class=\"form-group \">\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                         readonly>\n                </div>\n              </div>\n              <!--fullname-->\n              <div class=\"form-group \">\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                         placeholder=\"Fullname \" readonly>\n                </div>\n              </div>\n  \n              <!--mobile_primary-->\n              <div class=\"form-group \">\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                         placeholder=\"Mobile primary \" readonly>\n                </div>\n              </div>\n  \n              <!--mobile_secondary-->\n              <div class=\"form-group \">\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                         placeholder=\"Mobile secondary \" readonly>\n                </div>\n              </div>\n  \n              <!--location-->\n              <div class=\"form-group \">\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                         placeholder=\"location \" readonly>\n                </div>\n              </div>\n  \n              <!--area-->\n              <div class=\"form-group \">\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                         readonly>\n                </div>\n              </div>\n  \n              <!--city-->\n              <div class=\"form-group \">\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                         readonly>\n                </div>\n              </div>\n  \n              <!--<div class=\"form-group \">\n                <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\n                <div class=\"col-sm-10\">\n                  <label class=\"label label-danger\">Due</label>\n                </div>\n              </div>-->\n              <br>\n  \n              <!--quotation_created_date-->\n              <div class=\"form-group\">\n                <label for=\"date\" class=\"col-sm-2 control-label\">Quotation Date</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"date\" formControlName=\"date\">\n                </div>\n              </div>\n  \n              <!--total amount-->\n              <div class=\"form-group \">\n                <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (INR)</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\n                         placeholder=\"total \"\n                         readonly>\n                </div>\n              </div>\n  \n              <!--discount-->\n              <!--<div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label \">Discount</label>\n              <div class=\"col-sm-10\">\n              <input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"\n              class=\"form-control \" id=\"discount \" placeholder=\"discount \" &gt;>\n              </div>\n              </div>-->\n\n              <!--description-->\n                <div class=\"form-group\">\n                    <label for=\"quotedesc\" class=\"col-sm-2 control-label \">Description</label>\n                    <div class=\"col-sm-10 \">\n                      <textarea formControlName=\"quotedesc\" class=\"form-control\" id=\"quotedesc \" placeholder=\"Enter Quotation Description\"></textarea>\n                    </div>\n                  </div>\n  \n              <!--product list-->\n              <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n                <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                      </option>\n                    </select>\n                    <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\n                      <i\n                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                                 aria-hidden=\"true\"></i>\n                &nbsp; Add Product\n              </button>\n  \n              <div class=\"form-group \">\n                <div class=\"col-md-offset-2 col-md-10\">\n                  <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\n                  <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\n  \n                </div>\n              </div>\n            </div>\n            <br>\n            <br>\n            <hr>\n            <div class=\"col-md-12\" *ngIf=\"isSaved\">\n              <div class=\"alert alert-success\" role=\"alert\">Quotation Created Successfully !!</div>\n              <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/quotation/display/all/',resultQuotation._id]\">Generate Quotation Now</a>\n            </div>\n  \n          </form>\n        </div>\n  \n      </div>\n    </section>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationCreateComponent = (function () {
    function QuotationCreateComponent(quotationService, fb, customerService, productService, areaService) {
        this.quotationService = quotationService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
    }
    QuotationCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    QuotationCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.quotationCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            nid: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            quotedesc: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            //amount_due: [''],
            total: [''],
            discount: [0],
            date: [date],
            // status: ['Due'],
            productList: []
        });
    };
    QuotationCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    QuotationCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.quotationCreateForm.patchValue({
            username: this.resCustomer.username,
            nid: this.resCustomer.nid,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.quotationCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    QuotationCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.quotationCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    QuotationCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    QuotationCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    QuotationCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    QuotationCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    QuotationCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            total += product['rate'];
        });
        this.quotationCreateForm.patchValue({
            total: total
        });
    };
    QuotationCreateComponent.prototype.submitQuotationCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.quotationCreateForm.patchValue({
            productList: product_list,
            quotedesc: this.quotationCreateForm.value.quotedesc,
            customer_id: this.resCustomer['_id']
        });
        this.quotationService.createNewQuotation(this.quotationCreateForm.value)
            .subscribe(function (res) {
            _this.resultQuotation = res;
            _this.isSaved = true;
        });
    };
    QuotationCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-create',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], QuotationCreateComponent);
    return QuotationCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\n    <section class=\" content-header \">\n      <div class=\"col-xs-12\">\n        <h1>\n          Quotation Details of <em>{{ quotation.customerData?.username }}</em>\n          <small>for the month of {{ quotation?.created_on | date:'MMMM'}}</small>\n        </h1>\n        <ol class=\"breadcrumb \">\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n          <li><a [routerLink]=\"[ '/dashboard/quotation/all' ] \"><i class=\"fa fa-dashboard \"></i> Quotation</a></li>\n          <li class=\"active \">Edit</li>\n        </ol>\n      </div>\n    </section>\n    <section class=\"content \">\n      <div class=\"col-md-12\">\n        <div class=\"box box-primary\" *ngIf=\"quotation\">\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Quotation Data Updated Successfully !!</div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n          <!--  Page Content Here -->\n          <form class=\"form-horizontal \" [formGroup]=\"quotationDetailForm\" *ngIf=\"quotation\"\n                (submit)=\"submitQuotationEditForm()\">\n            <div class=\"col-md-6\">\n              <!--username-->\n              <div class=\" form-group \">\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                         placeholder=\"Username \" readonly>\n                </div>\n              </div>\n\n              <div class=\" form-group \">\n                  <label for=\"nid \" class=\"col-sm-2 control-label \">Customer ID</label>\n                  <div class=\"col-sm-10 \">\n                    <input formControlName=\"nid\" type=\"text \" class=\"form-control \" id=\"nid \"\n                           placeholder=\"Customer ID \" readonly>\n                  </div>\n                </div>\n              <!--email-->\n              <div class=\"form-group \">\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                         readonly>\n                </div>\n              </div>\n              <!--fullname-->\n              <div class=\"form-group \">\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                         placeholder=\"Fullname \" readonly>\n                </div>\n              </div>\n  \n              <!--mobile_primary-->\n              <div class=\"form-group \">\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                         placeholder=\"Mobile primary \" readonly>\n                </div>\n              </div>\n  \n              <!--mobile_secondary-->\n              <div class=\"form-group \">\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n                <div class=\"col-sm-10 \">\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                         placeholder=\"Mobile secondary \" readonly>\n                </div>\n              </div>\n  \n              <!--location-->\n              <div class=\"form-group \">\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                         placeholder=\"location \" readonly>\n                </div>\n              </div>\n  \n              <!--area-->\n              <div class=\"form-group \">\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                         readonly>\n                </div>\n              </div>\n  \n              <!--city-->\n              <div class=\"form-group \">\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                         readonly>\n                </div>\n              </div>\n            </div>\n  \n            <div class=\"col-md-6\">\n              <!--choose status-->\n              <!--<div class=\"form-group \">\n                <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\n                <div class=\"col-sm-6\">\n                  <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\">{{ quotation.status }}</label>\n                  <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\">{{ quotation.status }}</label>\n                  <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\">{{ quotation.status }}</label>\n                </div>\n              </div>-->\n  \n              <!--invoice_created_date-->\n              <!--<div class=\"form-group \">-->\n              <!--<label for=\"invoice_created_date \" class=\"col-sm-2 control-label \">Invoice created on</label>-->\n              <!--<div class=\"col-sm-10\">-->\n              <!--<input type=\"date\" formControlName=\"invoice_created_date\">-->\n              <!--</div>-->\n              <!--</div>-->\n  \n              <!--payment_due_date-->\n              <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\n                  <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\n                  <div class=\"col-sm-10\">\n                      <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\n                  </div>\n              </div>-->\n  \n              <!--for partial payment only-->\n              <div class=\"form-group \" *ngIf=\"quotation.status=='Partially Paid' \">\n                <div *ngFor=\"let x of quotation?.amount_partially_paid;let i = index\">\n                  <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\n                  <div class=\"col-sm-6\">\n                    <h5 style=\"text-align: center\">Date: {{ x?.date | date }} BDT</h5>\n                    <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} BDT</h5>\n                    <br>\n                  </div>\n                </div>\n              </div>\n  \n              <!--payment paid / partially paid date-->\n              <div class=\"form-group \" *ngIf=\"quotation.status=='Paid' && paymentStatus!='Due'\">\n                <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"date\" formControlName=\"paid_date\">\n                </div>\n              </div>\n  \n              <!--amoount partially paid-->\n              <!--<div class=\"form-group \" *ngIf=\"quotation.status=='Partially Paid'\">-->\n              <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (BDT) </label>-->\n              <!--<div class=\"col-sm-10\">-->\n              <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\n              <!--</div>-->\n              <!--</div>-->\n  \n              <!--amount_due-->\n              <!--<div class=\"form-group \" *ngIf=\"quotation.status!='Paid'\">\n                <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (BDT) </label>\n                <div class=\"col-sm-10\">\n                  <input *ngIf=\"quotation.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\n                         id=\"amount_due \" placeholder=\"amount due\" readonly>\n                  <input *ngIf=\"quotation.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\n                         class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\n                </div>\n              </div>-->\n              \n              <div class=\"form-group\">\n                  <label for=\"quotedesc\" class=\"col-sm-2 control-label \">Description</label>\n                  <div class=\"col-sm-10 \">\n                    <textarea formControlName=\"quotedesc\" class=\"form-control\" id=\"quotedesc \" placeholder=\"Enter Quotation Description\"></textarea>\n                  </div>\n                </div>\n  \n              <!--discount-->\n              <div class=\"form-group \">\n                <label for=\"discount \" class=\"col-sm-2 control-label\">Discount (INR) </label>\n                <div class=\"col-sm-10\">\n                  <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\n                         id=\"discount \" placeholder=\"discount\">\n                </div>\n              </div>\n  \n              <!--total-->\n              <div class=\"form-group \">\n                <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\n                <div class=\"col-sm-10\">\n                  <input *ngIf=\"quotation.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                         id=\"total \" placeholder=\"total\">\n                  <input *ngIf=\"quotation.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                         id=\"total \" placeholder=\"total\" readonly>\n                </div>\n              </div>\n              <div>\n                <!--for products already list-->\n                <div class=\"form-group \" *ngFor=\"let myProduct of quotation.customerData?.productData;let i=index\">\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                  <div class=\"col-sm-10 \">\n                    <div class=\"productSelectBox\">\n                      <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\n                              style=\"margin-bottom:10px\">\n                        <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\n                                value=\"{{ product._id }}\">\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                        </option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n  \n                <!--for new additional products-->\n                <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+quotation.customerData?.productData.length+1\n                    }}]</label>\n                  <div class=\"col-sm-10 \">\n                    <div class=\"productSelectBox\">\n                      <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\n                              style=\"margin-bottom:10px\">\n                        <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\n                      </select>\n                      <button *ngIf=\"quotation.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\n                              (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                    </div>\n                  </div>\n                </div>\n                <button *ngIf=\"quotation.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\n                        class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\n                  Product\n                </button>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\n                <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\n                <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Quotation</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </section>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuotationEditComponent = (function () {
    function QuotationEditComponent(areaService, customerService, elementRef, productService, fb, quotationService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.quotationService = quotationService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    QuotationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.quotationService.getQuotationById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.quotation = res;
                    _this.allProductsAdd = _this.quotation.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    QuotationEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.quotation.customer_id)
            .subscribe(function (res) {
            _this.quotation.customerData = res;
            _this.quotation.customerData.productData = [];
            // let total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.quotation.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.quotation.customerData.productData.push(res);
                });
                //  total_partially_paid += item['amount'];
            });
            _this.quotationDetailForm = _this.fb.group({
                username: [res['username']],
                nid: [res['nid']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.quotation['payment_due_date']],
                amount_due: [_this.quotation['amount_due']],
                status: [_this.quotation['status']],
                total: [_this.quotation['total']],
                quotedesc: [_this.quotation['quotedesc']],
                discount: [_this.quotation['discount']],
                quotation_created_date: [_this.quotation['quotation_created_date']],
                paid_date: [_this.quotation['paid_date']],
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.quotationDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    QuotationEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    QuotationEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    QuotationEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    QuotationEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    QuotationEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.quotation.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    QuotationEditComponent.prototype.submitQuotationEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            amount_due: this.quotationDetailForm.value.amount_due,
            total: this.quotationDetailForm.value.total,
            quotedesc: this.quotationDetailForm.value.quotedesc,
            discount: this.quotationDetailForm.value.discount,
            productList: this.allProductsAdd,
            //amount_partially_paid: this.quotation.amount_partially_paid,
            type: this.type
        };
        this.quotationService.preGenerateQuotationUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/quotation/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    QuotationEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.quotationDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    QuotationEditComponent.prototype.getPartiallyPaid = function (event) {
        this.quotationDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.quotation.amount_due - event.target.value
        });
    };
    QuotationEditComponent.prototype.getDiscount = function (event) {
        this.quotationDetailForm.patchValue({
            total: this.quotationDetailForm.value.amount_due - event.target.value
        });
    };
    QuotationEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.quotationDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], QuotationEditComponent.prototype, "productSelectBox", void 0);
    QuotationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-quotation-edit',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], QuotationEditComponent);
    return QuotationEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#quotation_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#quotation_table {\n  background-color: #fff;\n  font-size:none;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#quotation_box {\n  font-weight: 550;\n}\n\n.footer {\n   \n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color:none;\n    color: rgb(245, 163, 10);\n    text-align:center;\n}\n\n.footer-header{\n  color: black;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Quotation Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/quotation/all' ] \"><i class=\"fa fa-dashboard \"></i> Quotation</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"quotation\">\n    <div class=\"col-xs-12\" id=\"quotation_main\">\n      <div id=\"quotation_body\">\n        <!--quotation display starts here-->\n        <div class=\"\" id=\"quotation_box\" style=\"margin-top:10px\" #quotationBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"../../../assets/dist/img/Sofkullogo.png\" style=\"width:40%; height:50%;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-6\" style=\"text-align: -webkit-left; margin-top:8px;\">\n                <h4 class=\"title font-bold\"><strong>Company Address comes here</strong></h4>\n                \n                <!--<p style=\"font-size: 15px;\"><i class=\"fa fa-home mr-3\"></i> <b># 8-1-284/OU/385/1&2 | 4th Floor Bait-ul-Rida | OU Colony Shaikpet, Lanco Hills Lane <br> Hyderabad, Telangana 500 008, India.</b></p>\n  \n                <p style=\"font-size: 15px;\"><i class=\"fa fa-envelope mr-3\"></i> <b><span>info@aquality.in | accounts@aquality.in</span>  <span style=\"margin-left:6px;\"> <i class=\"fa fa-phone mr-3\"></i> + 91 406 888 8486 | + 91 709 389 8486</span></b> </p>\n                <p><i class=\"fa fa-envelope mr-3\"></i> info@aquality.in | accounts@aquality.in</p>\n                <p style=\"margin-top: -5px;\"> <strong>GSTIN : 36AAMCA2366GIZM</strong></p>-->\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Quotation for: </span><br>\n                      <strong> {{ quotation.customerData?.fullname }} </strong><br>\n                      <span> {{ quotation.customerData?.location }} </span><br>\n                      <span> {{ quotation.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ quotation.customerData?.mobile_primary }} </span><br>\n                      <span> {{ quotation.customerData?.email }} </span><br>\n                      <!--<span> {{ quotation.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">QUOTATION</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Date: {{ quotation.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid upto: DD/MM/YYYY</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> Customer ID : {{ quotion?.customerData.nid}}</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Quotation Number: </strong> #001</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ quotation.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                      \n                </div>\n                <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:80px;  font-size:15px;\">\n                     <p> <b style=\"font-size: 20px;\">Quotation for : </b>{{ quotation?.quotedesc}}</p> \n                </div>\n\n              <!--table-->\n              <div id=\"quotation_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"quotation.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                      <th>S.No.</th>\n                      <th>ITEM DESCRIPTION</th>\n                      <th>GST</th>\n                      <th>UNIT PRICE</th>\n                      <th style=\"padding-left:200px;\">QUANTITY</th>\n                      <th style=\"padding-left:100px;\">AMOUNT</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of quotation.productData;let i=index\"\n                    [ngClass]=\"i==quotation.productData.length-1 ? 'row-divide' : '' \">\n                    <td>{{i + 1}}</td>\n                    <td>{{ product?.name }}</td>\n                    <td> {{ product?.vat }}%</td>\n                    <td>INR. {{ product?.rate }}</td>\n                      <td style=\"padding-left:200px; width:30%;\">1</td>\n                      <td style=\"padding-left:100px; background-color:#ffe6e6; width:20%;\">INR. {{ product?.amount_with_vat * 1 }}</td>\n                    </tr>\n                    <tr>\n                        \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td style=\"padding-left:200px;\">\n                          <strong>SUB TOTAL: </strong>\n                        </td>\n                        <td style=\"padding-left:100px; background-color:#ffe6e6;width:20%;\">\n                          INR. {{ quotation.total }}\n                        </td>\n                      </tr>\n\n                      <tr *ngFor=\"let x of quotation?.amount_partially_paid;let i = index\">\n                          <td></td>\n                          <td></td>\n                          \n                        \n                          <td>\n                            <strong>Payment On : {{ x.date | date }} </strong>\n                          </td>\n                          <td>\n                            INR. {{ x.amount }}\n                          </td>\n                        </tr>\n            \n                        \n                  \n                          <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td style=\"padding-left:200px;\">\n                                Transport\n                              </td>\n                              <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                                INR. {{ quotation.discount }}\n                              </td>\n    \n                            </tr>\n\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                                  GRAND TOTAL\n                                </td>\n                                <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px; \">\n                                  INR. {{ quotation.total }}\n                                </td>\n      \n                              </tr>\n                        <!--<tr *ngIf=\"quotation.status == 'Paid'\">\n                          <td></td>\n                          <td></td>-->\n                          <!--<td></td>-->\n                          <!--<td>\n                            <strong>Amount Paid (INR)</strong>\n                          </td>\n                          <td>\n                            <strong>INR. {{ quotation.total }}</strong>\n                          </td>-->\n                        <!--</tr>-->\n                        \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:darkslategray; color:#fff; padding-left:200px;\">\n                            <strong>TOTAL(in words)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                            <strong style=\"text-transform: capitalize;\"> {{ finalTotalWords }} INR only</strong>\n                          </td>\n                        </tr>\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        \n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\">Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                    <!-- <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>-->\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                      <p>Terms and Conditions: </p> \n                      <!--<p style=\"text-align: center;\"> Water | Air | Energy</p>-->\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ quotation.created_on | date }} </span><br>\n                    <span> <strong>Quotation ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ quotation.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>Quotation Number: </strong> #001</span><br>\n                  <span> <strong>Quotation Date: </strong> {{ quotation.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ quotation.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ quotation.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuotationHtmlComponent = (function () {
    function QuotationHtmlComponent(generalService, router, productService, customerService, quotationService, route) {
        this.generalService = generalService;
        this.router = router;
        this.productService = productService;
        this.customerService = customerService;
        this.quotationService = quotationService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoQuotation = false;
    }
    QuotationHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoQuotation']) {
            this.isAutoQuotation = true;
            this.tempQuotation = changes['autoQuotation'].currentValue;
        }
    };
    QuotationHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.generalService.displaySidebar(false);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoQuotation) {
                _this.getQuotationById(params['id']);
            }
            else {
                _this.quotation = _this.tempQuotation;
                _this.quotation['created_on'] = _this.currentDate;
                _this.subTotal = _this.quotation.total;
                _this.finalTotal = _this.quotation.amount_due - _this.quotation.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.quotation.total, '');
            }
        });
    };
    QuotationHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    QuotationHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoQuotation) {
        //   this.downloadPDF();
        //
        // }
    };
    QuotationHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoQuotation) {
            this.downloadPDF();
        }
    };
    QuotationHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('quotation_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoQuotation) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.quotation.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.quotationService.saveAutoQuotation(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.quotation.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    QuotationHtmlComponent.prototype.getQuotationById = function (id) {
        var _this = this;
        this.quotationService.getQuotationById(this.type, id)
            .subscribe(function (res) {
            _this.quotation = res;
            _this.quotation.total = 0;
            _this.quotation.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.quotation.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    //res['subtotal'] = res['rate'] ;
                    _this.quotation.productData.push(res);
                    _this.quotation.total = _this.quotation.total + res['amount_with_vat'];
                    _this.quotation.amount_due = _this.quotation.total;
                }, function (err) {
                }, function () {
                    // if (this.quotation.amount_partially_paid.length > 0) {
                    //  _.each(this.quotation.amount_partially_paid, (data) => {
                    //      this.quotation.amount_due = this.quotation.amount_due - data['amount'];
                    //   });
                    // }
                    if (_this.quotation.status == 'Paid') {
                        _this.quotation.amount_due = 0;
                    }
                    _this.finalTotal = _this.quotation.amount_due - _this.quotation.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.quotation.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.quotation.customer_id)
                .subscribe(function (res) {
                _this.quotation.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.quotation);
            });
        }, function (err) {
            console.log(err);
        });
    };
    QuotationHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quotationBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuotationHtmlComponent.prototype, "quotationBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotationHtmlComponent.prototype, "autoQuotation", void 0);
    QuotationHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-html',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], QuotationHtmlComponent);
    return QuotationHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isQuotationSaved\">Quotation Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isQuotationError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Quotations\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Quotation</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delQuotation\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the quotation for <em>{{ delQuotation.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Quotation List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Quotations\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"quotationList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (BDT)</th>\n              <th>Paid (BDT)</th>\n              <th>Total (BDT)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let quotation of quotationList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ quotation.customerData?.username }}</td>\n              <td>{{ quotation.customerData?.fullname }}</td>\n              <td>{{ quotation.customerData?.mobile_primary }}</td>\n              <td>{{ quotation.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} BDT/month</em> </span>\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ quotation?.amount_due }}</td>\n              <td>{{ quotation?.total - quotation?.amount_due }}</td>\n              <td>{{ quotation?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\n                {{ quotation?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"quotation?.status=='Paid'\">\n                {{ quotation?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','recent',quotation?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(quotation)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialQuotation\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} BDT</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} BDT</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} BDT</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} BDT</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (BDT) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationRecentComponent = (function () {
    function QuotationRecentComponent(customerService, router, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.quotationList = [];
        this.searchMode = 'username';
        this.isQuotationSaved = false;
        this.isQuotationError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    QuotationRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentQuotationDB();
        // this.wakeUpQuotationDemon();
    };
    //useless shitty method
    QuotationRecentComponent.prototype.wakeUpQuotationDemon = function () {
        var _this = this;
        this.quotationService.cleanQuotation()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewQuotation();
            }
            else {
                _this.getRecentQuotationDB();
            }
        });
    };
    //useless shitty method
    QuotationRecentComponent.prototype.generateNewQuotation = function () {
        var _this = this;
        this.quotationService.dropRecentQuotation()
            .subscribe(function (res) {
            _this.buildAndSaveRecentQuotation();
        });
    };
    QuotationRecentComponent.prototype.getRecentQuotationDB = function () {
        var _this = this;
        this.quotationList = [];
        this.quotationService.getRecentQuotationDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (quotation) {
                var customer;
                _this.customerService.getCustomerDetails(quotation.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.quotationList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    QuotationRecentComponent.prototype.buildAndSaveRecentQuotation = function () {
        var _this = this;
        this.quotationService.buildAndSaveRecentQuotation()
            .subscribe(function (res) {
            _this.getRecentQuotationDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    QuotationRecentComponent.prototype.saveRecentQuotation = function (quotation) {
        this.quotationService.saveRecentQuotation(quotation)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    QuotationRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    QuotationRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentQuotationDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
    };
    QuotationRecentComponent.prototype.changeStatus = function (status, quotation) {
        if (status == 'Paid') {
            this.setPaidDateCounter(quotation);
            quotation.status = 'Paid';
            // quotation.paid_date = Date.now();
            quotation.amount_due = 0;
        }
        else if (status == 'Due') {
            quotation.status = 'Due';
            quotation.amount_due = quotation.total;
            //quotation.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialQuotation = quotation;
        }
        quotation['type'] = 'recent';
        this.quotationService.changeQuotationStatus(quotation)
            .subscribe(function (res) {
        });
    };
    QuotationRecentComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    QuotationRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentQuotationDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.quotationList = resArray;
    };
    /*savePartialPay() {
      let data = {
        id: this.partialQuotation['_id'],
        amount_partially_paid: this.partialPay
      }
  
      this.quotationService.savePartialPay(data)
        .subscribe(
          (res) => {
            if (res['status']) {
              this.partialPay = 0;
              this.getRecentQuotationDB();
            }
          },
          (err) => {
  
          }
        )
    }*/
    QuotationRecentComponent.prototype.remove = function (delQuotation) {
        this.showRemoveConfirmation = true;
        this.delQuotation = delQuotation;
    };
    QuotationRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.quotationService.deleteQuotation(this.delQuotation)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.quotationList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.quotationList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.quotationList, {
                        _id: _this.delQuotation['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delQuotation = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    QuotationRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentQuotationDB();
    };
    QuotationRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-quotation-recent',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], QuotationRecentComponent);
    return QuotationRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var quotationRoutes = [];
var QuotationRoutingModule = (function () {
    function QuotationRoutingModule() {
    }
    QuotationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(quotationRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], QuotationRoutingModule);
    return QuotationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delQuotation\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the quotation for <em>{{ delQuotation.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Quotations of any customer</h2>\n        <hr>\n\n        <!--search results for quotations show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"quotationList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Customer ID</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <!--<th>Due (INR)</th>-->\n              <!--<th>Paid (INR)</th>-->\n              <th>Total (INR)</th>\n              <!--<th>Status</th>-->\n              <th>Quotation Generated On</th>\n              <!--<th>Last Transaction Date</th>-->\n              <!--<th>Change Status</th>-->\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let quotation of quotationList\">\n              <td>{{ quotation.customerData?.username }}</td>\n              <td>{{ quotation.customerData?.fullname }}</td>\n              <td>{{ quotation.customerData?.nid}}</td>\n              <td>{{ quotation.customerData?.mobile_primary }}</td>\n              <td>{{ quotation.customerData?.areaData?.name }}</td>\n              <td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\n              </td>\n              <!--<td>\n                <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\n              </td>-->\n              <!--<td>{{ quotation?.amount_due }}</td>-->\n              <!--<td>{{ quotation?.total - quotation?.amount_due }}</td>-->\n              <td>{{ quotation?.total }}</td>\n              <!--<td>\n                <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\n                  }} </label>\n              </td>-->\n              <td>\n                {{ quotation?.created_on | date: 'yMMMd' }}\n              </td>\n              <!--<td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\n                {{ quotation?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"quotation?.status=='Paid'\">\n                {{ quotation?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\n              </td>-->\n              <td>\n                <a type=\"button\" *ngIf=\"quotation?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','recent',quotation?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"quotation?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','all',quotation?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(quotation)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialQuotation\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialQuotation)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuotationSearchComponent = (function () {
    function QuotationSearchComponent(customerService, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.quotationList = [];
        this.showRemoveConfirmation = false;
    }
    QuotationSearchComponent.prototype.ngOnInit = function () {
    };
    QuotationSearchComponent.prototype.getSearchText = function (event) {
        this.quotationList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalQuotationSearchByCustomer();
    };
    QuotationSearchComponent.prototype.getGlobalQuotationSearchByCustomer = function () {
        var _this = this;
        this.quotationService.globalQuotationSearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    QuotationSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.quotationList = [];
        this.quotationService.getQuotationByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (quotation) {
                var customer;
                if (quotation['type'] == '') {
                    quotation['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(quotation.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    QuotationSearchComponent.prototype.changeStatus = function (status, quotation) {
        if (status == 'Paid') {
            this.setPaidDateCounter(quotation);
            quotation.status = 'Paid';
            //quotation.paid_date = Date.now();
            quotation.amount_due = 0;
        }
        else if (status == 'Due') {
            quotation.status = 'Due';
            quotation.amount_due = quotation.total;
            // quotation.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialQuotation = quotation;
        }
        if (quotation['type'] != 'recent') {
            quotation['type'] = 'all';
        }
        this.quotationService.changeQuotationStatus(quotation)
            .subscribe(function (res) {
        });
    };
    QuotationSearchComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    /* savePartialPay(quotation: Quotation) {
       let data = {
         id: this.partialQuotation['_id'],
         amount_partially_paid: this.partialPay
       }
   
       this.quotationService.savePartialPay(data)
         .subscribe(
           (res) => {
             if (res['status']) {
               this.partialPay = 0;
               this.getSearchDetails({_id: quotation.customer_id});
             }
           },
           (err) => {
   
           }
         )
     }*/
    QuotationSearchComponent.prototype.remove = function (quotation) {
        this.showRemoveConfirmation = true;
        this.delQuotation = quotation;
    };
    QuotationSearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.quotationService.deleteQuotation(this.delQuotation)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.quotationList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.quotationList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.quotationList, {
                        _id: _this.delQuotation['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delQuotation = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    QuotationSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-search',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], QuotationSearchComponent);
    return QuotationSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_routing_module__ = __webpack_require__("../../../../../src/app/quotation/quotation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotation_all_quotation_all_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotation_create_quotation_create_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quotation_recent_quotation_recent_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quotation_edit_quotation_edit_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quotation_search_quotation_search_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var QuotationModule = (function () {
    function QuotationModule() {
    }
    QuotationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__quotation_routing_module__["a" /* QuotationRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__quotation_all_quotation_all_component__["a" /* QuotationAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__quotation_create_quotation_create_component__["a" /* QuotationCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__quotation_recent_quotation_recent_component__["a" /* QuotationRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__quotation_edit_quotation_edit_component__["a" /* QuotationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__quotation_search_quotation_search_component__["a" /* QuotationSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__quotation_service__["a" /* QuotationService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], QuotationModule);
    return QuotationModule;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotationService = (function () {
    function QuotationService(http) {
        this.http = http;
        this.quotationUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'quotation/';
    }
    QuotationService.prototype.removeQuotation = function (quotation) {
        var url = this.quotationUrl + 'remove-quotation';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getQuotationByCustomerId = function (id) {
        var url = this.quotationUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.globalQuotationSearchByCustomer = function (query) {
        var url = this.quotationUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.saveAutoQuotation = function (data) {
        var url = this.quotationUrl + 'save-auto-quotation';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getAllQuotation = function (paginator) {
        var url = this.quotationUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getRecentQuotation = function () {
        var url = this.quotationUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.storeQuotation = function (data) {
        var url = this.quotationUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.downloadPDF = function (data) {
        var url = this.quotationUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getQuotationById = function (type, id) {
        var url = this.quotationUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.searchByUsername = function (data) {
        var url = this.quotationUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.saveRecentQuotation = function (data) {
        var url = this.quotationUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.dropRecentQuotation = function () {
        var url = this.quotationUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.checkIfRecentQuotationExists = function () {
        var url = this.quotationUrl + 'recent_quotation/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getRecentQuotationDB = function (paginator) {
        var url = this.quotationUrl + 'recent_quotation_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.cleanQuotation = function () {
        var url = this.quotationUrl + 'clean_quotation';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.changeQuotationStatus = function (data) {
        var url = this.quotationUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    QuotationService.prototype.getTotal = function (data) {
        var url = this.quotationUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.buildAndSaveRecentQuotation = function () {
        var url = this.quotationUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /* savePartialPay(data: any) {
       let url = this.quotationUrl + 'recent/partial_pay/save';
       return this.http.post(url, data).map((res) => res.json());
     }*/
    QuotationService.prototype.preGenerateQuotationUpdate = function (data) {
        var url = this.quotationUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.deleteQuotation = function (quotation) {
        var url = this.quotationUrl + 'delete';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.setPaidDateCounter = function (quotation) {
        var url = this.quotationUrl + 'set_paid_date_counter';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getPaidDateCounter = function () {
        var url = this.quotationUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getAllQuotationCount = function () {
        var url = this.quotationUrl + 'all_quotation_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.createNewQuotation = function (data) {
        var url = this.quotationUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], QuotationService);
    return QuotationService;
}());



/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 9000px\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Report\n        <small>Area based report</small>\n      </h1>\n\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Report</a></li>\n        <li class=\"active\">Area based report</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content\">\n    <div class=\"col-md-12\">\n      <div class=\"input-group\">\n        <select style=\"font-size: 15px;height: 34px,width: 500px;\" (change)=\"filterChange($event.target.value)\">\n          <option value=\"default\">Select Area</option>\n          <option *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\">\n\n        </div>\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"reportList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Mobile No.</th>\n              <th>Location</th>\n              <th>Current Due (INR)</th>\n              <th>Previous Due (INR)</th>\n              <th>Total Due (INR)</th>\n            </tr>\n            <tr *ngFor=\"let report of reportList\">\n              <td>{{ report.username }}</td>\n              <td>{{ report.mobile_no }}</td>\n              <td>{{ report.location }}</td>\n              <td>{{ report.current_due }}</td>\n              <td>{{ report.previous_due }}</td>\n              <td>{{ report.total_due }}</td>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDueReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report__ = __webpack_require__("../../../../../src/app/report/report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationDueReportComponent = (function () {
    function LocationDueReportComponent(areaService, reportService) {
        this.areaService = areaService;
        this.reportService = reportService;
        this.areaList = [];
        this.reportList = [];
    }
    LocationDueReportComponent.prototype.ngOnInit = function () {
        this.getAllAreaList();
    };
    LocationDueReportComponent.prototype.filterChange = function (id) {
        var _this = this;
        this.reportList = [];
        this.reportService.getCustomerByArea(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](res, function (customer) {
                var report = new __WEBPACK_IMPORTED_MODULE_3__report__["a" /* Report */]();
                report.username = customer['username'];
                report.mobile_no = customer['mobile_primary'];
                report.location = customer['location'];
                _this.reportService.getReport(customer['_id'])
                    .subscribe(function (res) {
                    report.current_due = res['current_due'];
                    report.previous_due = res['previous_due'];
                    report.total_due = res['total_due'];
                    if (res['total_due'] != 0) {
                        _this.reportList.push(report);
                    }
                }, function (err) {
                    console.log("Error in getReport");
                });
            });
        }, function (err) {
        }, function () {
            // console.log(this.reportList);
        });
    };
    LocationDueReportComponent.prototype.getAllAreaList = function () {
        var _this = this;
        this.areaService.getAllArea()
            .subscribe(function (res) {
            _this.areaList = res;
        });
    };
    LocationDueReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location-due-report',
            template: __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]])
    ], LocationDueReportComponent);
    return LocationDueReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_due_report_location_due_report_component__ = __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location_due_report_location_due_report_component__["a" /* LocationDueReportComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */],
                __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.reportUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'report/';
    }
    ReportService.prototype.buildAndShowAreaReport = function (id) {
        var url = this.reportUrl + 'build_show_area_report/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService.prototype.getCustomerByArea = function (id) {
        var url = this.reportUrl + 'customer_by_area/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService.prototype.getReport = function (id) {
        var url = this.reportUrl + 'report_for_customers/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
        this.current_due = 0;
        this.previous_due = 0;
        this.total_due = 0;
    }
    return Report;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            exports: [],
            providers: []
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var UploadService = (function () {
    function UploadService() {
        var _this = this;
        this.progress = 0;
        this.progress$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.progressObserver = observer;
        });
    }
    UploadService_1 = UploadService;
    UploadService.prototype.getFile = function (event) {
        var imageList = [];
        var FileList = event.target.files;
        for (var i = 0; i < FileList.length; i++) {
            imageList.push(FileList.item(i));
        }
        return imageList;
    };
    UploadService.prototype.uploadFile = function (uploadRoute, imageList) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!imageList.length) {
                            return [2 /*return*/];
                        }
                        this.getObserver()
                            .subscribe(function (progress) {
                            _this.uploadProgress = progress;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.upload(uploadRoute, imageList)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UploadService.prototype.getObserver = function () {
        return this.progress$;
    };
    UploadService.prototype.upload = function (url, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            UploadService_1.setUploadUpdateInterval(500);
            xhr.open('POST', url, true);
            xhr.send(formData);
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
        });
    };
    UploadService.setUploadUpdateInterval = function (interval) {
        setInterval(function () {
        }, interval);
    };
    UploadService = UploadService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
    var UploadService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    //need to place production server api here
    api_server: "http://13.127.206.246:8080/api/"
};
//http://sofkulaquality-1795250689.ap-south-1.elb.amazonaws.com
//http://13.127.181.211:8080/api/ 


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map