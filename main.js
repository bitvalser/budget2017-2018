(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" *ngFor=\"let n of [0, 1]\">\n    <table class=\"table table-striped\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\"><h3>{{ gosData2017[n].title}}</h3></th>\n        </tr>\n      </thead>\n\n      <ng-container *ngFor=\"let row of gosData2017[n].info;let i = index\">\n      <tr class=\"table-primary\">\n        <th style=\"text-align: left;\">\n          {{ row.title }}         \n          <a class=\"btn btn-primary\" style=\"float: right;\"  data-toggle=\"collapse\" [href]=\"'#table' + i\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n            Детали\n          </a>\n          <div \n            style=\"float: right; margin-right: 35px;\" \n            [ngStyle]=\"{ 'color':  (+getPercent(gosData2018[n].info[i].total, row.total) > 0 ? 'green' : 'red') }\"\n          >\n            <div style=\"right: 100px;\" [class]=\"'icon-svg ' +  (+getPercent(gosData2018[n].info[i].total, row.total) > 0 ? 'triangle-up' : 'triangle-down')\"></div>\n            {{ getPercent(gosData2018[n].info[i].total, row.total) }}%\n          </div>\n        </th> \n      </tr>\n      <div class=\"collapse\" [id]=\"'table' + i\">\n        <table style=\"width: 100%;\">\n          <thead class=\"table-primary\">\n            <tr>\n              <th scope=\"col\">{{ n == 0 ? 'Доход' : 'Расход'}}</th>\n              <th scope=\"col\">2017</th>\n              <th scope=\"col\">2018</th>\n              <th scope=\"col\">%</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let subrow of row.table; let j = index\">\n            <th style=\"width: 50%; text-align: left;\">{{ subrow.title }}</th>\n            <th>{{ subrow.price }}</th>\n            <th>{{ gosData2018[n].info[i].table[j].price }}</th>\n            <th [ngStyle]=\"{ 'color':  (+getPercent(gosData2018[n].info[i].table[j].price, subrow.price) > 0 ? 'green' : 'red') }\">\n              {{ getPercent(gosData2018[n].info[i].table[j].price, subrow.price) }}%\n              <div [class]=\"'icon-svg ' + (+getPercent(gosData2018[n].info[i].table[j].price, subrow.price) > 0 ? 'triangle-up' : 'triangle-down')\"></div>\n            </th>\n          </tr>\n          <tr class=\"table-success\">\n            <th style=\"width: 50%; text-align: left;\"><h5>Всего</h5></th>\n            <th>{{ row.total }}</th>\n            <th>{{ gosData2018[n].info[i].total }}</th>\n            <th [ngStyle]=\"{ 'color':  (+getPercent(gosData2018[n].info[i].total, row.total) > 0 ? 'green' : 'red') }\">\n              {{ getPercent(gosData2018[n].info[i].total, row.total) }}%\n              <div [class]=\"'icon-svg ' + (+getPercent(gosData2018[n].info[i].total, row.total) > 0 ? 'triangle-up' : 'triangle-down')\"></div>\n            </th>\n          </tr>\n        </table>\n      </div>\n    </ng-container>\n  </table>\n  <h3>Итог</h3>\n  <table class=\"table table-striped\">\n    <tr>\n      <th style=\"text-align: left;\">2017</th>\n      <th style=\"text-align: right;\">{{ gosData2017[n].total }}</th>\n    </tr>\n    <tr>\n      <th style=\"text-align: left;\">2018</th>\n      <th style=\"text-align: right;\" >{{ gosData2018[n].total }}</th>\n    </tr>\n    <tr class=\"table-success\">\n      <th style=\"text-align: left;\" colspan=\"2\">\n        <h5 style=\"display: inline-block;\">{{ n == 0 ? 'Доход' : 'Расход'}} %</h5>\n        <div style=\"float: right; margin-right: 35px\" [ngStyle]=\"{ 'color':  (+getPercent(gosData2018[n].total, gosData2017[n].total) > 0 ? 'green' : 'red') }\">\n          {{ getPercent(gosData2018[n].total, gosData2017[n].total) }}%\n        </div>\n        <div [class]=\"'icon-svg ' + (+getPercent(gosData2018[n].total, gosData2017[n].total) > 0 ? 'triangle-up' : 'triangle-down')\"></div>\n      </th> \n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-svg {\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  position: absolute;\n  right: 20px;\n  margin-top: 3px; }\n  .icon-svg.triangle-up {\n    -webkit-mask-image: url('si-glyph-triangle-up.svg');\n            mask-image: url('si-glyph-triangle-up.svg');\n    background-color: green; }\n  .icon-svg.triangle-down {\n    -webkit-mask-image: url('si-glyph-triangle-down.svg');\n            mask-image: url('si-glyph-triangle-down.svg');\n    background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdhbGVyYVxcZ29zLWJ1ZGdldC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZSxFQVNsQjtFQWZEO0lBUVEsb0RBQXlEO1lBQXpELDRDQUF5RDtJQUN6RCx3QkFBdUIsRUFDMUI7RUFWTDtJQVlRLHNEQUEyRDtZQUEzRCw4Q0FBMkQ7SUFDM0Qsc0JBQXFCLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICYudHJpYW5nbGUtdXAge1xyXG4gICAgICAgIG1hc2staW1hZ2U6IHVybCgnLi4vYXNzZXRzL3N2Zy9zaS1nbHlwaC10cmlhbmdsZS11cC5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuICAgICYudHJpYW5nbGUtZG93biB7XHJcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKCcuLi9hc3NldHMvc3ZnL3NpLWdseXBoLXRyaWFuZ2xlLWRvd24uc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_gos_data_2017__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/gos-data/2017 */ "./src/core/gos-data/2017.ts");
/* harmony import */ var _core_gos_data_2018__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/gos-data/2018 */ "./src/core/gos-data/2018.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.gosData2017 = _core_gos_data_2017__WEBPACK_IMPORTED_MODULE_1__["GOS_2017"];
        this.gosData2018 = _core_gos_data_2018__WEBPACK_IMPORTED_MODULE_2__["GOS_2018"];
    }
    AppComponent.prototype.getPercent = function (data2017, data2018) {
        var num2017 = parseInt(data2017.replace(new RegExp(' ', 'g'), ''));
        var num2018 = parseInt(data2018.replace(new RegExp(' ', 'g'), ''));
        return ((num2017 / num2018) * 100 - 100).toFixed(1);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/core/gos-data/2017.ts":
/*!***********************************!*\
  !*** ./src/core/gos-data/2017.ts ***!
  \***********************************/
/*! exports provided: GOS_2017 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOS_2017", function() { return GOS_2017; });
var GOS_2017 = [
    {
        title: "Доходы республиканского бюджета",
        total: "18 235 240 867",
        info: [
            {
                title: "Налоги на товары (работы, услуги)",
                total: "9 280 274 239",
                table: [
                    {
                        title: "налог на добавленную стоимость",
                        price: "6 507 430 641"
                    },
                    {
                        title: "акцизы",
                        price: "2 268 536 500"
                    },
                    {
                        title: "сбор за проезд автомобильных транспортных средств иностранных государств по автомобильным дорогам общего пользования Республики Беларусь",
                        price: "16 500 000"
                    },
                    {
                        title: "экологический налог",
                        price: "80 016 553"
                    },
                    {
                        title: "налог за добычу (изъятие) природных ресурсов",
                        price: "389 820 592"
                    }
                ]
            },
            {
                title: "Налоговые доходы от внешнеэкономической деятельности",
                total: "3 160 845 078",
                table: [
                    {
                        title: "таможенные сборы, ввозные таможенные пошлины (за исключением ввозных таможенных пошлин, уплаченных и зачисленных в рамках Договора о Евразийском экономическом союзе)",
                        price: "60 160 441"
                    },
                    {
                        title: "вывозные таможенные пошлины",
                        price: "2 161 172 564"
                    },
                    {
                        title: "прочие сборы и поступления от внешнеэкономической деятельности",
                        price: "67 505 335"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Республики Казахстан",
                        price: "48 487 402"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Российской Федерации",
                        price: "755 848 513"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Республики Армения",
                        price: "5 743 935"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Кыргызской Республики",
                        price: "15 802 798"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Республики Казахстан",
                        price: "779 800"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Российской Федерации",
                        price: "4 724 627"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Республики Армения",
                        price: "47 445"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Кыргызской Республики",
                        price: "124 004"
                    },
                    {
                        title: "ввозные таможенные пошлины, уплаченные на территории Республики Беларусь и зачисленные в бюджет Республики Беларусь в соответствии с Договором о Евразийском экономическом союзе",
                        price: "40 169 469"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, уплаченные на территории Республики Беларусь и зачисленные в бюджет Республики Беларусь в соответствии с Договором о Евразийском экономическом союзе",
                        price: "278 745"
                    }
                ]
            },
            {
                title: "Другие налоги, сборы (пошлины) и другие налоговые доходы",
                total: "619 958 858",
                table: [
                    {
                        title: "отчисления в фонды предупредительных (превентивных) мероприятий",
                        price: "27 257 672"
                    },
                    {
                        title: "государственная пошлина",
                        price: "500 221 880"
                    },
                    {
                        title: "иные налоги, сборы (пошлины) и другие налоговые доходы",
                        price: "92 479 306"
                    }
                ]
            },
            {
                title: "Неналоговые доходы",
                total: "2 699 912 656",
                table: [
                    {
                        title: "проценты за пользование денежными средствами бюджетов",
                        price: "305 664 000"
                    },
                    {
                        title: "дивиденды по акциям и доходы от других форм участия в капитале",
                        price: "825 274 684"
                    },
                    {
                        title: "Доходы от осуществления приносящей доходы деятельности",
                        price: "392 741 549"
                    },
                    {
                        title: "доходы от сдачи в аренду иного имущества",
                        price: "66 253 812"
                    },
                    {
                        title: "административные платежи",
                        price: "2 938 404"
                    },
                    {
                        title: "доходы от осуществления приносящей доходы деятельности",
                        price: "2 413 140"
                    },
                    {
                        title: "компенсации расходов государства",
                        price: "137 472 938"
                    },
                    {
                        title: "штрафы",
                        price: "134 271 694"
                    },
                    {
                        title: "Прочие неналоговые доходы",
                        price: "1 039 434 011"
                    },
                    {
                        title: "Безвозмездные поступления",
                        price: "1 554 514 630"
                    },
                    {
                        title: "Безвозмездные поступления от иностранных государств",
                        price: "322 883 895"
                    },
                    {
                        title: "текущие безвозмездные поступления от иностранных государств",
                        price: "322 883 895"
                    },
                    {
                        title: "Безвозмездные поступления от других бюджетов бюджетной системы Республики Беларусь",
                        price: "1 231 630 735"
                    },
                    {
                        title: "иные межбюджетные трансферты",
                        price: "1 231 630 735"
                    },
                    {
                        title: "республиканский централизованный инновационный фонд",
                        price: "93 146 698"
                    },
                    {
                        title: "фонд национального развития",
                        price: "101 233 584"
                    },
                    {
                        title: "республиканский дорожный фонд",
                        price: "528 964 000"
                    }
                ]
            }
        ]
    },
    {
        title: "Расходы республиканского бюджета по функциональной классификации расходов бюджета по разделам, подразделам и видам расходов",
        total: "16 739 090 345",
        info: [
            {
                title: "ОБЩЕГОСУДАРСТВЕННАЯ ДЕЯТЕЛЬНОСТЬ",
                total: "7 333 587 799",
                table: [
                    {
                        title: "Государственные органы общего назначения",
                        price: "530 738 541"
                    },
                    {
                        title: "представительный и законодательный орган Республики Беларусь",
                        price: "14 772 888"
                    },
                    {
                        title: "органы государственного управления и другие органы исполнительной власти общего назначения",
                        price: "101 435 515"
                    },
                    {
                        title: "финансовые и налоговые органы",
                        price: "246 666 209"
                    },
                    {
                        title: "органы государственной статистики",
                        price: "43 927 810"
                    },
                    {
                        title: "государственные архивы",
                        price: "5 052 808"
                    },
                    {
                        title: "иные государственные органы и организации",
                        price: "99 402 530"
                    },
                    {
                        title: "Международная деятельность",
                        price: "302 308 611"
                    },
                    {
                        title: "открытие и содержание дипломатических представительств и консульских учреждений Республики Беларусь за рубежом",
                        price: "165 999 520"
                    },
                    {
                        title: "международное сотрудничество",
                        price: "18 005 947"
                    },
                    {
                        title: "международные культурные и информационные связи",
                        price: "1 358 254"
                    },
                    {
                        title: "аппараты уставных органов межгосударственной интеграции",
                        price: "21 787 787"
                    },
                    {
                        title: "отчисления в бюджет Союзного государства",
                        price: "54 560 000"
                    },
                    {
                        title: "международное научно-техническое сотрудничество",
                        price: "20 802 064"
                    },
                    {
                        title: "Обеспечение проведения выборов и референдумов",
                        price: "807 814"
                    },
                    {
                        title: "Обслуживание государственного долга Республики Беларусь",
                        price: "2 496 289 165"
                    },
                    {
                        title: "обслуживание внутреннего государственного долга",
                        price: "773 936 416"
                    },
                    {
                        title: "обслуживание внешнего государственного долга",
                        price: "1 722 352 749"
                    },
                    {
                        title: "Государственный материальный резерв",
                        price: "100 141 648"
                    },
                    {
                        title: "Фундаментальные научные исследования",
                        price: "95 379 581"
                    },
                    {
                        title: "фундаментальные научные исследования",
                        price: "95 379 581"
                    },
                    {
                        title: "Прикладные исследования в области общегосударственной деятельности",
                        price: "71 905 348"
                    },
                    {
                        title: "Резервные фонды",
                        price: "161 147 814"
                    },
                    {
                        title: "резервный фонд Президента Республики Беларусь",
                        price: "126 360 000"
                    },
                    {
                        title: "финансовая помощь юридическим лицам и индивидуальным предпринимателям",
                        price: "19 787 814"
                    },
                    {
                        title: "Другая общегосударственная деятельность",
                        price: "–234 722 801"
                    },
                    {
                        title: "свободные экономические зоны",
                        price: "2 036 902"
                    },
                    {
                        title: "иные общегосударственные вопросы",
                        price: "588 979 261"
                    },
                    {
                        title: "государственная инвестиционная программа",
                        price: "220 569 541"
                    },
                    {
                        title: "республиканский централизованный инновационный фонд",
                        price: "93 146 698"
                    },
                    {
                        title: "Межбюджетные трансферты",
                        price: "3 809 592 078"
                    },
                    {
                        title: "трансферты бюджетам других уровней",
                        price: "3 111 745 478"
                    },
                    {
                        title: "трансферты государственным внебюджетным фондам",
                        price: "697 846 600"
                    }
                ]
            },
            {
                title: "НАЦИОНАЛЬНАЯ ОБОРОНА",
                total: "924 454 379",
                table: [
                    {
                        title: "Оборона и Вооруженные Силы Республики Беларусь",
                        price: "860 623 562"
                    },
                    {
                        title: "Обеспечение мобилизационной подготовки и мобилизации",
                        price: "50 546 316"
                    },
                    {
                        title: "Другие вопросы, связанные с национальной обороной",
                        price: "13 284 501"
                    }
                ]
            },
            {
                title: "СУДЕБНАЯ ВЛАСТЬ, ПРАВООХРАНИТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ И ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ",
                total: "1 773 621 437",
                table: [
                    {
                        title: "Органы внутренних дел",
                        price: "673 178 013"
                    },
                    {
                        title: "Органы прокуратуры",
                        price: "49 704 042"
                    },
                    {
                        title: "Органы пограничной службы",
                        price: "160 684 992"
                    },
                    {
                        title: "Органы и организации уголовно-исполнительной системы",
                        price: "167 923 798"
                    },
                    {
                        title: "Органы государственной безопасности",
                        price: "130 355 411"
                    },
                    {
                        title: "Органы судебной власти",
                        price: "93 835 635"
                    },
                    {
                        title: "Таможенные органы",
                        price: "100 496 940"
                    },
                    {
                        title: "Органы и подразделения по чрезвычайным ситуациям",
                        price: "195 066 169"
                    },
                    {
                        title: "Предупреждение и ликвидация последствий чрезвычайных ситуаций",
                        price: "1 529 474"
                    },
                    {
                        title: "Прикладные исследования в области правоохранительной деятельности и обеспечения безопасности",
                        price: "1 057 766"
                    },
                    {
                        title: "Другие вопросы в области правоохранительной деятельности и обеспечения безопасности",
                        price: "199 789 197"
                    }
                ]
            },
            {
                title: "НАЦИОНАЛЬНАЯ ЭКОНОМИКА",
                total: "2 730 409 671",
                table: [
                    {
                        title: "Общие экономические вопросы",
                        price: "2 784 940"
                    },
                    {
                        title: "регулирование экономической деятельности",
                        price: "416 147"
                    },
                    {
                        title: "развитие предпринимательской деятельности",
                        price: "2 368 793"
                    },
                    {
                        title: "сохранение и расширение сельскохозяйственных земель",
                        price: "73 409 920"
                    },
                    {
                        title: "государственная инвестиционная программа",
                        price: "41 700 000"
                    },
                    {
                        title: "прочие вопросы в области сельского хозяйства",
                        price: "471 810 189"
                    },
                    {
                        title: "Лесное хозяйство",
                        price: "168 423 626"
                    },
                    {
                        title: "ведение лесного хозяйства",
                        price: "167 269 667"
                    },
                    {
                        title: "строительство и архитектура",
                        price: "1 985 794"
                    },
                    {
                        title: "компенсация потерь открытому акционерному обществу «Банк развития Республики Беларусь» от предоставления экспортных кредитов",
                        price: "40 150 000"
                    },
                    {
                        title: "Транспорт",
                        price: "37 735 198"
                    },
                    {
                        title: "автомобильный транспорт",
                        price: "5 948 432"
                    },
                    {
                        title: "водный транспорт",
                        price: "6 715 707"
                    },
                    {
                        title: "железнодорожный транспорт",
                        price: "9 341 096"
                    },
                    {
                        title: "воздушный транспорт",
                        price: "371 164"
                    },
                    {
                        title: "иные вопросы в области транспорта",
                        price: "15 358 799"
                    },
                    {
                        title: "Дорожное хозяйство",
                        price: "608 427 178"
                    },
                    {
                        title: "республиканский дорожный фонд",
                        price: "606 038 406"
                    },
                    {
                        title: "прочие вопросы в области дорожного хозяйства",
                        price: "2 388 772"
                    },
                    {
                        title: "Связь",
                        price: "7 435 574"
                    },
                    {
                        title: "Топливо и энергетика",
                        price: "334 012 824"
                    },
                    {
                        title: "финансирование и строительство (реконструкция) объектов инженерной инфраструктуры для районов жилой застройки для энерго- и газоснабжающих организаций Министерства энергетики Республики Беларусь",
                        price: "137 400 000"
                    },
                    {
                        title: "Прикладные исследования в области национальной экономики",
                        price: "41 596 932"
                    },
                    {
                        title: "Другая деятельность в области национальной экономики",
                        price: "44 083 343"
                    },
                    {
                        title: "гидрометеорология",
                        price: "12 032 141"
                    },
                    {
                        title: "торговля",
                        price: "5 963 445"
                    },
                    {
                        title: "туризм",
                        price: "2 063 872"
                    },
                    {
                        title: "прочие отрасли национальной экономики",
                        price: "541 546"
                    }
                ]
            },
            {
                title: "ОХРАНА ОКРУЖАЮЩЕЙ СРЕДЫ",
                total: "75 227 524",
                table: [
                    {
                        title: "Природоохранная деятельность",
                        price: "3 470 462"
                    },
                    {
                        title: "Охрана природной среды",
                        price: "67 908 221"
                    },
                    {
                        title: "Прикладные исследования в области охраны окружающей среды",
                        price: "793 329"
                    },
                    {
                        title: "Другая деятельность в области охраны окружающей среды",
                        price: "3 055 512"
                    }
                ]
            },
            {
                title: "ЖИЛИЩНО-КОММУНАЛЬНЫЕ УСЛУГИ И ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО",
                total: "13 351 381",
                table: [
                    {
                        title: "Жилищно-коммунальное хозяйство",
                        price: "6 933 978"
                    },
                    {
                        title: "Благоустройство населенных пунктов",
                        price: "690 000"
                    },
                    {
                        title: "Другие вопросы в области жилищно-коммунальных услуг",
                        price: "5 727 403"
                    }
                ]
            },
            {
                title: "ЗДРАВООХРАНЕНИЕ",
                total: "878 781 020",
                table: [
                    {
                        title: "Медицинская помощь населению",
                        price: "424 242 713"
                    },
                    {
                        title: "Государственный санитарный надзор",
                        price: "4 801 116"
                    },
                    {
                        title: "Прикладные исследования в области здравоохранения",
                        price: "14 373 942"
                    },
                    {
                        title: "Другие вопросы в области здравоохранения",
                        price: "435 363 249"
                    }
                ]
            },
            {
                title: "ФИЗИЧЕСКАЯ КУЛЬТУРА, СПОРТ, КУЛЬТУРА И СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ",
                total: "376 155 277",
                table: [
                    {
                        title: "Физическая культура и спорт",
                        price: "186 236 676"
                    },
                    {
                        title: "физическая культура",
                        price: "111 421 027"
                    },
                    {
                        title: "спорт",
                        price: "68 113 293"
                    },
                    {
                        title: "прочие вопросы в области физической культуры и спорта",
                        price: "6 702 356"
                    },
                    {
                        title: "Культура",
                        price: "90 280 276"
                    },
                    {
                        title: "культура и искусство",
                        price: "76 261 974"
                    },
                    {
                        title: "кинематография",
                        price: "8 778 748"
                    },
                    {
                        title: "прочие вопросы в области культуры",
                        price: "5 239 554"
                    },
                    {
                        title: "Средства массовой информации",
                        price: "97 666 846"
                    },
                    {
                        title: "телевидение и радиовещание",
                        price: "80 531 381"
                    },
                    {
                        title: "периодическая печать и издательства",
                        price: "7 071 874"
                    },
                    {
                        title: "прочие вопросы в области средств массовой информации",
                        price: "10 063 591"
                    }
                ]
            },
            {
                title: "ОБРАЗОВАНИЕ",
                total: "808 064 199",
                table: [
                    {
                        title: "Дошкольное образование",
                        price: "4 469 113"
                    },
                    {
                        title: "Общее среднее образование",
                        price: "46 563 727"
                    },
                    {
                        title: "Профессионально-техническое образование",
                        price: "3 439 543"
                    },
                    {
                        title: "Среднее специальное образование",
                        price: "66 622 784"
                    },
                    {
                        title: "Высшее и послевузовское образование",
                        price: "611 739 659"
                    },
                    {
                        title: "Дополнительное образование взрослых",
                        price: "40 707 777"
                    },
                    {
                        title: "Дополнительное образование детей и молодежи",
                        price: "6 009 965"
                    },
                    {
                        title: "Прикладные исследования в области образования",
                        price: "4 099 171"
                    },
                    {
                        title: "Другие вопросы в области образования",
                        price: "24 412 460"
                    }
                ]
            },
            {
                title: "СОЦИАЛЬНАЯ ПОЛИТИКА",
                total: "1 825 437 658",
                table: [
                    {
                        title: "Социальная защита",
                        price: "4 579 944"
                    },
                    {
                        title: "Пенсионное обеспечение",
                        price: "765 762 768"
                    },
                    {
                        title: "Государственная молодежная политика",
                        price: "6 359 241"
                    },
                    {
                        title: "Помощь в обеспечении жильем",
                        price: "396 657 244"
                    },
                    {
                        title: "Другие вопросы в области социальной политики",
                        price: "194 278 461"
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/core/gos-data/2018.ts":
/*!***********************************!*\
  !*** ./src/core/gos-data/2018.ts ***!
  \***********************************/
/*! exports provided: GOS_2018 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOS_2018", function() { return GOS_2018; });
var GOS_2018 = [
    {
        title: "Доходы республиканского бюджета ",
        total: "20 485 376 244",
        info: [
            {
                title: "Налоги на товары (работы, услуги)",
                total: "10 549 860 298",
                table: [
                    {
                        title: "налог на добавленную стоимость",
                        price: "7 596 737 841"
                    },
                    {
                        title: "акцизы",
                        price: "2 465 553 100"
                    },
                    {
                        title: "сбор за проезд автомобильных транспортных средств иностранных государств по автомобильным дорогам общего пользования Республики Беларусь",
                        price: "9 372 000"
                    },
                    {
                        title: "экологический налог",
                        price: "81 942 510"
                    },
                    {
                        title: "налог за добычу (изъятие) природных ресурсов",
                        price: "377 130 782"
                    }
                ]
            },
            {
                title: "Налоговые доходы от внешнеэкономической деятельности",
                total: "3 568 626 406",
                table: [
                    {
                        title: "таможенные сборы, ввозные таможенные пошлины (за исключением ввозных таможенных пошлин, уплаченных и зачисленных в рамках Договора о Евразийском экономическом союзе)",
                        price: "93 098 438"
                    },
                    {
                        title: "вывозные таможенные пошлины",
                        price: "2 289 682 640"
                    },
                    {
                        title: "прочие сборы и поступления от внешнеэкономической деятельности",
                        price: "113 994 194"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Республики Казахстан",
                        price: "56 076 889"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Российской Федерации",
                        price: "927 153 162"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Республики Армения",
                        price: "7 832 076"
                    },
                    {
                        title: "ввозные таможенные пошлины, поступившие от Кыргызской Республики",
                        price: "16 245 637"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Республики Казахстан",
                        price: "1 176 990"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Российской Федерации",
                        price: "8 945 993"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Республики Армения",
                        price: "107 241"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, поступившие от Кыргызской Республики",
                        price: "192 355"
                    },
                    {
                        title: "ввозные таможенные пошлины, уплаченные на территории Республики Беларусь и зачисленные в бюджет Республики Беларусь в соответствии с Договором о Евразийском экономическом союзе",
                        price: "53 721 837"
                    },
                    {
                        title: "специальные, антидемпинговые, компенсационные пошлины, уплаченные на территории Республики Беларусь и зачисленные в бюджет Республики Беларусь в соответствии с Договором о Евразийском экономическом союзе",
                        price: "398 954"
                    }
                ]
            },
            {
                title: "Другие налоги, сборы (пошлины) и другие налоговые доходы",
                total: "630 357 977",
                table: [
                    {
                        title: "отчисления в фонды предупредительных (превентивных) мероприятий",
                        price: "30 754 483"
                    },
                    {
                        title: "государственная пошлина",
                        price: "487 413 728"
                    },
                    {
                        title: "иные налоги, сборы (пошлины) и другие налоговые доходы",
                        price: "112 189 766"
                    }
                ]
            },
            {
                title: "Неналоговые доходы",
                total: "2 340 361 116",
                table: [
                    {
                        title: "проценты за пользование денежными средствами бюджетов",
                        price: "254 116 000"
                    },
                    {
                        title: "дивиденды по акциям и доходы от других форм участия в капитале",
                        price: "1 058 823 255"
                    },
                    {
                        title: "Доходы от осуществления приносящей доходы деятельности",
                        price: "410 141 548"
                    },
                    {
                        title: "доходы от сдачи в аренду иного имущества",
                        price: "68 703 158"
                    },
                    {
                        title: "административные платежи",
                        price: "3 281 130"
                    },
                    {
                        title: "доходы от осуществления приносящей доходы деятельности",
                        price: "3 281 130"
                    },
                    {
                        title: "компенсации расходов государства",
                        price: "148 288 621"
                    },
                    {
                        title: "штрафы",
                        price: "131 057 356"
                    },
                    {
                        title: "Прочие неналоговые доходы",
                        price: "483 462 270"
                    },
                    {
                        title: "Безвозмездные поступления",
                        price: "1 898 526 576"
                    },
                    {
                        title: "Безвозмездные поступления от иностранных государств",
                        price: "1 192 619 872"
                    },
                    {
                        title: "текущие безвозмездные поступления от иностранных государств",
                        price: "1 192 619 872"
                    },
                    {
                        title: "Безвозмездные поступления от других бюджетов бюджетной системы Республики Беларусь",
                        price: "705 906 704"
                    },
                    {
                        title: "иные межбюджетные трансферты",
                        price: "705 906 704"
                    },
                    {
                        title: "республиканский централизованный инновационный фонд",
                        price: "120 964 232"
                    },
                    {
                        title: "фонд национального развития",
                        price: "101 631 205"
                    },
                    {
                        title: "республиканский дорожный фонд",
                        price: "561 928 000"
                    }
                ]
            }
        ]
    },
    {
        title: "Расходы республиканского бюджета по функциональной классификации расходов бюджета по разделам, подразделам и видам расходов",
        total: "19 751 495 082",
        info: [
            {
                title: "ОБЩЕГОСУДАРСТВЕННАЯ ДЕЯТЕЛЬНОСТЬ",
                total: "10 020 938 942",
                table: [
                    {
                        title: "Государственные органы общего назначения",
                        price: "605 635 393"
                    },
                    {
                        title: "представительный и законодательный орган Республики Беларусь",
                        price: "16 852 484"
                    },
                    {
                        title: "органы государственного управления и другие органы исполнительной власти общего назначения",
                        price: "117 739 597"
                    },
                    {
                        title: "финансовые и налоговые органы",
                        price: "277 819 184"
                    },
                    {
                        title: "органы государственной статистики",
                        price: "56 962 445"
                    },
                    {
                        title: "государственные архивы",
                        price: "6 139 301"
                    },
                    {
                        title: "иные государственные органы и организации",
                        price: "109 547 015"
                    },
                    {
                        title: "Международная деятельность",
                        price: "276 486 978"
                    },
                    {
                        title: "открытие и содержание дипломатических представительств и консульских учреждений Республики Беларусь за рубежом",
                        price: "142 258 136"
                    },
                    {
                        title: "международное сотрудничество",
                        price: "19 726 399"
                    },
                    {
                        title: "международные культурные и информационные связи",
                        price: "957 739"
                    },
                    {
                        title: "аппараты уставных органов межгосударственной интеграции",
                        price: "23 871 706"
                    },
                    {
                        title: "отчисления в бюджет Союзного государства",
                        price: "56 265 000"
                    },
                    {
                        title: "международное научно-техническое сотрудничество",
                        price: "15 585 521"
                    },
                    {
                        title: "Обеспечение проведения выборов и референдумов",
                        price: "19 443 961"
                    },
                    {
                        title: "Обслуживание государственного долга Республики Беларусь",
                        price: "2 536 582 011"
                    },
                    {
                        title: "обслуживание внутреннего государственного долга",
                        price: "589 677 788"
                    },
                    {
                        title: "обслуживание внешнего государственного долга",
                        price: "1 946 904 223"
                    },
                    {
                        title: "Государственный материальный резерв",
                        price: "98 081 835"
                    },
                    {
                        title: "Фундаментальные научные исследования",
                        price: "93 127 222"
                    },
                    {
                        title: "фундаментальные научные исследования",
                        price: "93 127 222"
                    },
                    {
                        title: "Прикладные исследования в области общегосударственной деятельности",
                        price: "71 233 047"
                    },
                    {
                        title: "Резервные фонды",
                        price: "1 220 412 473"
                    },
                    {
                        title: "резервный фонд Президента Республики Беларусь",
                        price: "1 201 100 000"
                    },
                    {
                        title: "финансовая помощь юридическим лицам и индивидуальным предпринимателям",
                        price: "4 786 473"
                    },
                    {
                        title: "Другая общегосударственная деятельность",
                        price: "518 764 649"
                    },
                    {
                        title: "свободные экономические зоны",
                        price: "2 200 811"
                    },
                    {
                        title: "иные общегосударственные вопросы",
                        price: "516 563 838"
                    },
                    {
                        title: "государственная инвестиционная программа",
                        price: "198 513 000"
                    },
                    {
                        title: "республиканский централизованный инновационный фонд",
                        price: "108 867 809"
                    },
                    {
                        title: "Межбюджетные трансферты",
                        price: "4 581 171 373"
                    },
                    {
                        title: "трансферты бюджетам других уровней",
                        price: "3 165 371 373"
                    },
                    {
                        title: "трансферты государственным внебюджетным фондам",
                        price: "1 415 800 000"
                    }
                ]
            },
            {
                title: "НАЦИОНАЛЬНАЯ ОБОРОНА",
                total: "1 104 673 454",
                table: [
                    {
                        title: "Оборона и Вооруженные Силы Республики Беларусь",
                        price: "1 032 792 922"
                    },
                    {
                        title: "Обеспечение мобилизационной подготовки и мобилизации",
                        price: "59 454 365"
                    },
                    {
                        title: "Другие вопросы, связанные с национальной обороной",
                        price: "Другие вопросы, связанные с национальной обороной"
                    }
                ]
            },
            {
                title: "СУДЕБНАЯ ВЛАСТЬ, ПРАВООХРАНИТЕЛЬНАЯ ДЕЯТЕЛЬНОСТЬ И ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ",
                total: "2 120 795 154",
                table: [
                    {
                        title: "Органы внутренних дел",
                        price: "791 019 132"
                    },
                    {
                        title: "Органы прокуратуры",
                        price: "60 886 599"
                    },
                    {
                        title: "Органы пограничной службы",
                        price: "197 458 569"
                    },
                    {
                        title: "Органы и организации уголовно-исполнительной системы",
                        price: "189 786 414"
                    },
                    {
                        title: "Органы государственной безопасности",
                        price: "163 507 816"
                    },
                    {
                        title: "Органы судебной власти",
                        price: "121 280 573"
                    },
                    {
                        title: "Таможенные органы",
                        price: "123 329 237"
                    },
                    {
                        title: "Органы и подразделения по чрезвычайным ситуациям",
                        price: "230 858 484"
                    },
                    {
                        title: "Предупреждение и ликвидация последствий чрезвычайных ситуаций",
                        price: "1 732 882"
                    },
                    {
                        title: "Прикладные исследования в области правоохранительной деятельности и обеспечения безопасности",
                        price: "1 065 150"
                    },
                    {
                        title: "Другие вопросы в области правоохранительной деятельности и обеспечения безопасности",
                        price: "239 870 298"
                    }
                ]
            },
            {
                title: "НАЦИОНАЛЬНАЯ ЭКОНОМИКА",
                total: "2 473 758 352",
                table: [
                    {
                        title: "Общие экономические вопросы",
                        price: "2 889 501"
                    },
                    {
                        title: "регулирование экономической деятельности",
                        price: "472 542"
                    },
                    {
                        title: "развитие предпринимательской деятельности",
                        price: "2 416 959"
                    },
                    {
                        title: "сохранение и расширение сельскохозяйственных земель",
                        price: "66 068 928"
                    },
                    {
                        title: "государственная инвестиционная программа",
                        price: "37 530 000"
                    },
                    {
                        title: "прочие вопросы в области сельского хозяйства",
                        price: "285 368 170"
                    },
                    {
                        title: "Лесное хозяйство",
                        price: "182 373 840"
                    },
                    {
                        title: "ведение лесного хозяйства",
                        price: "181 023 321"
                    },
                    {
                        title: "строительство и архитектура",
                        price: "1 730 747"
                    },
                    {
                        title: "компенсация потерь открытому акционерному обществу «Банк развития Республики Беларусь» от предоставления экспортных кредитов",
                        price: "27 000 000"
                    },
                    {
                        title: "Транспорт",
                        price: "56 177 282"
                    },
                    {
                        title: "автомобильный транспорт",
                        price: "6 167 908"
                    },
                    {
                        title: "водный транспорт",
                        price: "7 279 836"
                    },
                    {
                        title: "железнодорожный транспорт",
                        price: "7 336 359"
                    },
                    {
                        title: "воздушный транспорт",
                        price: "17 140 769"
                    },
                    {
                        title: "иные вопросы в области транспорта",
                        price: "18 252 410"
                    },
                    {
                        title: "Дорожное хозяйство",
                        price: "613 391 842"
                    },
                    {
                        title: "республиканский дорожный фонд",
                        price: "594 022 474"
                    },
                    {
                        title: "прочие вопросы в области дорожного хозяйства",
                        price: "19 369 368"
                    },
                    {
                        title: "Связь",
                        price: "7 063 787"
                    },
                    {
                        title: "Топливо и энергетика",
                        price: "287 782 269"
                    },
                    {
                        title: "финансирование и строительство (реконструкция) объектов инженерной инфраструктуры для районов жилой застройки для энерго- и газоснабжающих организаций Министерства энергетики Республики Беларусь",
                        price: "98 928 000"
                    },
                    {
                        title: "Прикладные исследования в области национальной экономики",
                        price: "38 136 976"
                    },
                    {
                        title: "Другая деятельность в области национальной экономики",
                        price: "49 589 463"
                    },
                    {
                        title: "гидрометеорология",
                        price: "11 960 031"
                    },
                    {
                        title: "торговля",
                        price: "6 997 683"
                    },
                    {
                        title: "туризм",
                        price: "1 759 078"
                    },
                    {
                        title: "прочие отрасли национальной экономики",
                        price: "1 488 989"
                    }
                ]
            },
            {
                title: "ОХРАНА ОКРУЖАЮЩЕЙ СРЕДЫ",
                total: "80 976 549",
                table: [
                    {
                        title: "Природоохранная деятельность",
                        price: "3 561 465"
                    },
                    {
                        title: "Охрана природной среды",
                        price: "73 584 205"
                    },
                    {
                        title: "Прикладные исследования в области охраны окружающей среды",
                        price: "798 980"
                    },
                    {
                        title: "Другая деятельность в области охраны окружающей среды",
                        price: "3 031 899"
                    }
                ]
            },
            {
                title: "ЖИЛИЩНО-КОММУНАЛЬНЫЕ УСЛУГИ И ЖИЛИЩНОЕ СТРОИТЕЛЬСТВО",
                total: "14 814 007",
                table: [
                    {
                        title: "Жилищно-коммунальное хозяйство",
                        price: "8 245 301"
                    },
                    {
                        title: "Благоустройство населенных пунктов",
                        price: "661 500"
                    },
                    {
                        title: "Другие вопросы в области жилищно-коммунальных услуг",
                        price: "5 907 206"
                    }
                ]
            },
            {
                title: "ЗДРАВООХРАНЕНИЕ",
                total: "894 986 604",
                table: [
                    {
                        title: "Медицинская помощь населению",
                        price: "448 022 775"
                    },
                    {
                        title: "Государственный санитарный надзор",
                        price: "5 256 285"
                    },
                    {
                        title: "Прикладные исследования в области здравоохранения",
                        price: "15 047 953"
                    },
                    {
                        title: "Другие вопросы в области здравоохранения",
                        price: "426 659 591"
                    }
                ]
            },
            {
                title: "ФИЗИЧЕСКАЯ КУЛЬТУРА, СПОРТ, КУЛЬТУРА И СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ",
                total: "388 993 102",
                table: [
                    {
                        title: "Физическая культура и спорт",
                        price: "173 681 011"
                    },
                    {
                        title: "физическая культура",
                        price: "67 140 219"
                    },
                    {
                        title: "спорт",
                        price: "75 002 245"
                    },
                    {
                        title: "прочие вопросы в области физической культуры и спорта",
                        price: "31 538 547"
                    },
                    {
                        title: "Культура",
                        price: "100 348 290"
                    },
                    {
                        title: "культура и искусство",
                        price: "84 957 900"
                    },
                    {
                        title: "кинематография",
                        price: "9 166 144"
                    },
                    {
                        title: "прочие вопросы в области культуры",
                        price: "6 224 246"
                    },
                    {
                        title: "Средства массовой информации",
                        price: "112 943 898"
                    },
                    {
                        title: "телевидение и радиовещание",
                        price: "95 718 033"
                    },
                    {
                        title: "периодическая печать и издательства",
                        price: "5 982 072"
                    },
                    {
                        title: "прочие вопросы в области средств массовой информации",
                        price: "11 243 793"
                    }
                ]
            },
            {
                title: "ОБРАЗОВАНИЕ",
                total: "877 408 777",
                table: [
                    {
                        title: "Дошкольное образование",
                        price: "5 190 375"
                    },
                    {
                        title: "Общее среднее образование",
                        price: "54 027 782"
                    },
                    {
                        title: "Профессионально-техническое образование",
                        price: "5 840 390"
                    },
                    {
                        title: "Среднее специальное образование",
                        price: "70 586 104"
                    },
                    {
                        title: "Высшее и послевузовское образование",
                        price: "659 164 298"
                    },
                    {
                        title: "Дополнительное образование взрослых",
                        price: "47 245 523"
                    },
                    {
                        title: "Дополнительное образование детей и молодежи",
                        price: "6 166 860"
                    },
                    {
                        title: "Прикладные исследования в области образования",
                        price: "4 670 648"
                    },
                    {
                        title: "Другие вопросы в области образования",
                        price: "24 516 797"
                    }
                ]
            },
            {
                title: "СОЦИАЛЬНАЯ ПОЛИТИКА",
                total: "1 774 150 141",
                table: [
                    {
                        title: "Социальная защита",
                        price: "4 718 014"
                    },
                    {
                        title: "Пенсионное обеспечение",
                        price: "888 787 370"
                    },
                    {
                        title: "Государственная молодежная политика",
                        price: "6 957 975"
                    },
                    {
                        title: "Помощь в обеспечении жильем",
                        price: "316 012 365"
                    },
                    {
                        title: "Другие вопросы в области социальной политики",
                        price: "209 193 517"
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Walera\gos-budget\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map