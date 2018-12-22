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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    min-width: 200px;\r\n    border-radius: 10px;\r\n    background-color: gainsboro;\r\n    margin: 5px;\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <h1>Benvenuto nel gioco di Battaglia Navale!</h1>\r\n</div>\r\n\r\n<div style=\"text-align:center\">\r\n    <button *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</button>\r\n    <button *ngIf=\"!_authService.loggedIn()\" routerLink=\"/signup\" routerLinkActive=\"active\">Registrati</button>\r\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/game\" routerLinkActive=\"active\">Gioca!</button>\r\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/leaderboard\" routerLinkActive=\"active\">Classifiche</button>\r\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/search\" routerLinkActive=\"active\">Ricerca Utente</button>\r\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/chat\" routerLinkActive=\"active\">Chat</button>\r\n    <button *ngIf=\"_authService.loggedIn() && _authService.isAdmin()\" routerLink=\"/administration\" routerLinkActive=\"active\">Gestione Profili</button>\r\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/\" routerLinkActive=\"active\" (click)=\"_authService.logoutUser()\">Logout</button>\r\n</div>\r\n\r\n<hr>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
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
    function AppComponent(_authService) {
        this._authService = _authService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-login/user-login.component */ "./src/app/components/user-login/user-login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-signup/user-signup.component */ "./src/app/components/user-signup/user-signup.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/can-deactivate.guard */ "./src/app/guards/can-deactivate.guard.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/administration/administration.component */ "./src/app/components/administration/administration.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'login', component: _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"] },
    { path: 'leaderboard', component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_7__["LeaderboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'signup', component: _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__["UserSignupComponent"] },
    { path: 'administration', component: _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__["AdministrationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'chat', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], canDeactivate: [_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateGuard"]] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_7__["LeaderboardComponent"],
                _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
                _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__["UserSignupComponent"],
                _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_14__["AdministrationComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_16__["GameComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_12__["CanDeactivateGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board.ts":
/*!**************************!*\
  !*** ./src/app/board.ts ***!
  \**************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
var Board = /** @class */ (function () {
    function Board(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Board;
}());



/***/ }),

/***/ "./src/app/components/administration/administration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    min-width: 100px;\r\n    border-radius: 10px;\r\n    background-color: gainsboro;\r\n    margin-right: 10px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n}\r\n\r\nh3 {\r\n    margin-left: 10px;\r\n    font-size: 25px;\r\n}\r\n\r\n.statistiche {\r\n    display: inline-block;\r\n    text-align: center;\r\n    min-width: 20%\r\n}\r\n\r\n.status {\r\n    display: inline-block;\r\n    text-align: center;\r\n    min-width: 8% !important;\r\n}\r\n\r\n#username {\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/administration/administration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Lista Utenti</h2>\r\n\r\n<hr>\r\n\r\n<div class=\"statistiche\">\r\n    <h3>Username</h3>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h3>Email</h3>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h3>User Id</h3>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h3>Status</h3>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div class=\"info\" *ngFor=\"let user of users\">\r\n\r\n\r\n    <div class=\"statistiche\">\r\n        <p id=\"username\"><strong>{{user.username}}</strong></p>\r\n    </div>\r\n    <div class=\"statistiche\">\r\n        <p>{{user.email}} </p>\r\n    </div>\r\n    <div class=\"statistiche\">\r\n        <p>{{user._id}} </p>\r\n    </div>\r\n    <div class=\"statistiche\" *ngIf=\"user.isAdmin\">\r\n        <p>Admin</p>\r\n    </div>\r\n    <div class=\"statistiche\" *ngIf=\"!user.isAdmin\">\r\n        <p>Utente</p>\r\n    </div>\r\n    <button class=\"status\" (click)='delete(user._id)'>Elimina</button>\r\n    <button class=\"status\" *ngIf=\"!user.isAdmin\" (click)='upgrade(user.username)'>Upgrade</button>\r\n    <button class=\"status\" *ngIf=\"user.isAdmin\" (click)='downgrade(user.username)'>Downgrade</button>\r\n\r\n    <hr>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/administration/administration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/administration/administration.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(data) {
        this.data = data;
    }
    // Cancella Utente
    AdministrationComponent.prototype.delete = function (id) {
        this.data.userDelete(id);
        location.reload();
    };
    // Setta isAdmin a true
    AdministrationComponent.prototype.upgrade = function (username) {
        this.data.upgradeUser(username);
        location.reload();
    };
    // Setta isAdmin a false
    AdministrationComponent.prototype.downgrade = function (username) {
        this.data.downgradeUser(username);
        location.reload();
    };
    AdministrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Restituisce la lista Utenti
        this.data.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data.user;
        });
    };
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/components/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/components/administration/administration.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*  FORM  */\r\n\r\ntextarea {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    display: block;\r\n    padding: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n    min-width: 200px;\r\n    border: none;\r\n    resize: none;\r\n}\r\n\r\ninput[type=submit] {\r\n    border-radius: 38px;\r\n    background-color: gainsboro;\r\n    min-width: 200px;\r\n    padding: 10px;\r\n    border: 1px solid #bbb;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#form {\r\n    background-color: #f3f3f3;\r\n    padding: 50px;\r\n}\r\n\r\n#form .flex {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#form label {\r\n    min-width: 150px;\r\n}\r\n\r\n.recipient {\r\n    display: block;\r\n    padding: 10px;\r\n    min-width: 200px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n    border: none;\r\n}\r\n\r\n/*  CHATSSS  */\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.chats {\r\n    flex: 0;\r\n}\r\n\r\n.chats .button {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    padding: 10px;\r\n    min-width: 200px;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.chats .button:first-child {\r\n    border-top: 1px solid gainsboro;\r\n}\r\n\r\n.chats .button:hover {\r\n    background-color: #eee;\r\n}\r\n\r\n.chats .button.selected {\r\n    background-color: #e0e0e0;\r\n}\r\n\r\n.messages {\r\n    flex: 1;\r\n}\r\n\r\n.message {\r\n    position: relative;\r\n    border-bottom: 1px solid gainsboro;\r\n    border-left: 1px solid gainsboro;\r\n    padding: 10px;\r\n    word-wrap: break-word;\r\n    max-width: 1670px;\r\n}\r\n\r\n.message:first-child {\r\n    border-top: 1px solid gainsboro;\r\n}\r\n\r\n.message .author {\r\n    font-weight: bold;\r\n    text-transform: capitalize;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.message .content {\r\n    color: #333;\r\n}\r\n\r\n.message .date {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    font-size: 80%;\r\n    color: #999;\r\n}"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"form\">\r\n    <form>\r\n\r\n        <div class=\"flex\">\r\n            <label class=\"lbl-recipient\">Destinatario</label>\r\n\r\n            <input type=\"text\" class=\"recipient\" placeholder=\"Inserisci Destinatario\" [(ngModel)]=\"messageData.recipient\" name=\"recipient\" required>\r\n        </div>\r\n\r\n        <div class=\"flex\">\r\n            <label class=\"lbl-message\">Messaggio</label>\r\n\r\n            <textarea type=\"text\" rows=\"5\" cols=\"80\" [(ngModel)]=\"messageData.payload\" name=\"payload\" required></textarea>\r\n        </div>\r\n\r\n        <div class=\"flex\">\r\n            <label> </label>\r\n\r\n            <input type=\"submit\" (click)=\"postMessage()\">\r\n        </div>\r\n\r\n        <h2 id=\"error\" style=\"color:red\"></h2>\r\n    </form>\r\n</div>\r\n\r\n<h2>Ecco le tue Chat</h2>\r\n\r\n<div class=\"flex \">\r\n    <div class=\"chats\">\r\n        <div class=\"button\" [ngClass]=\"{'selected': chat == active}\" (click)=\"showMessages(chat)\" *ngFor=\"let chat of chats\">\r\n            <div *ngIf=\"\"></div>\r\n            {{chat}}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"messages\">\r\n        <div class=\"message\" *ngFor=\"let message of messages\">\r\n            <div class=\"author\">{{message.sender}}</div>\r\n            <div class=\"date\">{{message.date}}</div>\r\n            <div class=\"content\">{{message.payload}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(data, auth) {
        this.data = data;
        this.auth = auth;
        this.username = this.auth.getUsername();
        this.messageData = {};
        this.todayDate = new Date();
        this.now = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' '
            + this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.username);
        this.data.getChats(this.username).subscribe(function (data) {
            _this.chats = data.message;
            console.log(_this.chats);
        });
    };
    // Controlla se il destinatario è valido > mette dentro messageData le info che vanno mandate al server per creare un messaggio
    ChatComponent.prototype.postMessage = function () {
        var _this = this;
        this.data.validRecipient(this.messageData.recipient, function (isValid) {
            if (isValid) {
                _this.messageData.date = _this.now;
                _this.messageData.sender = _this.username;
                _this.data.sendMessage(_this.messageData)
                    .subscribe(function (res) {
                    console.log(_this.messageData);
                    _this.messageData.payload = "";
                }, function (err) {
                    console.log(err);
                    document.getElementById("error").innerText = "Messaggio vuoto, prego inserire un messaggio";
                });
            }
            else {
                document.getElementById("error").innerText = "Destinatario inesistente";
            }
        });
    };
    // Restituisce i messaggi tra i 2 utenti
    ChatComponent.prototype.showMessages = function (username) {
        var _this = this;
        this.active = username;
        this.data.getChatsMessages(this.username, username).subscribe(function (data) {
            _this.messages = data.message;
            console.log(_this.messages);
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    border-radius: 10px;\r\n    background-color: gainsboro;\r\n    min-width: 250px;\r\n    margin: 5px;\r\n}\r\n\r\n.tabella table td,\r\n.tabella table th {\r\n    border: 1px solid black;\r\n    height: 50px;\r\n    min-width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.tabella table {\r\n    margin: auto;\r\n}\r\n\r\n.battleship-tile:hover {\r\n    cursor: crosshair;\r\n}\r\n\r\n.hit {\r\n    background-color: red !important;\r\n}\r\n\r\n.miss {\r\n    background-color: aqua !important;\r\n}\r\n\r\n.posizionamento {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.spinner {\r\n    margin: 50px auto 50px;\r\n    min-width: 70px;\r\n    text-align: center;\r\n}\r\n\r\n.spinner>div {\r\n    min-width: 18px;\r\n    height: 18px;\r\n    background-color: #333;\r\n    border-radius: 100%;\r\n    display: inline-block;\r\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-transform: scale(0)\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1.0)\r\n    }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: scale(1.0);\r\n        transform: scale(1.0);\r\n    }\r\n}\r\n\r\n.end-game {\r\n    display: inline-block;\r\n    min-width: 100%;\r\n    margin-top: 10%;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <!-- Se c'è un solo giocatore nella room -->\r\n    <div style=\"text-align:center\" *ngIf=\"players == false\">\r\n        <h2>Lobby creata, attendi un avversario...</h2>\r\n        <div class=\"spinner\">\r\n            <div class=\"bounce1\"></div>\r\n            <div class=\"bounce2\"></div>\r\n            <div class=\"bounce3\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 1 Fase del gioco: Posizionamento navi -->\r\n    <div class=\"posizionamento\" *ngIf=\"!end && players && !gamedata.sent\">\r\n        <h2>Fase di Posiziamento - Posiziona le tue barche</h2>\r\n\r\n        <p *ngIf=\"ship_array.length > 0\">Stai posizionando la nave lunga <strong>{{ship_array[0]}}</strong></p>\r\n        <p *ngIf=\"ship_array.length == 0\">Hai terminato le tue barche da posizionare, <strong>completa la fase di posizionamento</strong> per proseguire</p>\r\n\r\n        <button *ngIf=\"players != false && !gamedata.sent\" id=\"cambio\" (click)=\"verPos($event)\">Stai posizionando in: Orizzontale</button>\r\n        <button *ngIf=\"ship_array.length < 9\" (click)=\"deleteShips()\">Rimuovi barche</button>\r\n        <button *ngIf=\"ship_array.length == 0\" (click)=\"submitBoard()\">Completa la fase di posizionamento</button>\r\n    </div>\r\n\r\n    <!-- Operazioni sulle barche -->\r\n    <div class=\"posizionamento\">\r\n        <h2 *ngIf=\"gamedata.sent && !gamedata.received\">Il tuo campo è stato inviato correttamente all'avversario! <br> Il gioco partirà non appena il tuo avversario finirà di posizionare le sue barche.</h2>\r\n\r\n        <div *ngIf=\"gamedata.sent && !gamedata.received\" class=\"spinner\">\r\n            <div class=\"bounce1\"></div>\r\n            <div class=\"bounce2\"></div>\r\n            <div class=\"bounce3\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!end\" class=\"tabella\">\r\n\r\n        <!-- Turni -->\r\n        <div class=\"posizionamento\" *ngIf=\"gamedata.received && gamedata.sent\">\r\n            <h3 *ngIf=\"gamedata.turno == gamedata.numeroGiocatore\"> E' il tuo turno! Fai la tua mossa</h3>\r\n            <h3 *ngIf=\"gamedata.turno != gamedata.numeroGiocatore\"> E' il turno dell'avversario</h3>\r\n        </div>\r\n\r\n        <!-- Campo Giocatore -->\r\n        <div *ngFor=\"let board of boards | slice:0:1; let i = index\">\r\n            <table>\r\n                <tr *ngFor=\"let row of board.tiles; let j = index\">\r\n                    <td *ngFor=\"let col of row; let k = index\" (click)=\"shipPositioning($event)\" [style.background-color]=\"col.value == 1 ? 'green' : 'transparent'\" [class.miss]=\"col.status == 'miss'\" [class.hit]=\"col.status =='hit'\" class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\r\n                        {{ col.value == \"1\" ? (col.status == \"hit\" ? \"💀\" : \"🚢\") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? \"💀\" : \"🌊\")) }}\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <!-- Campo Avversario -->\r\n        <div *ngIf=\"gamedata.received && gamedata.sent\">\r\n            <div *ngFor=\"let board of boards | slice:1:2; let i = index\">\r\n                <table>\r\n                    <tr *ngFor=\"let row of board.tiles; let j = index\">\r\n                        <td *ngFor=\"let col of row; let k = index\" (click)=\"onPlayerClick($event)\" [style.background-color]=\"col.used ? '' : 'transparent'\" class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\r\n                            {{ col.value == \"1\" ? (col.status == \"hit\" ? \"💀\" : \" \") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? \"💀\" : \" \")) }}\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Vittoria/Sconfitta -->\r\n    <div class=\"end-game\">\r\n        <h1 *ngIf=\"end && score == 27 \">Hai Vinto! Complimenti! <br> Per concludere la partita lascia questa pagina, grazie.</h1>\r\n        <h1 *ngIf=\"end && score < 27\">Mi spiace, hai perso! <br> Per concludere la partita lascia questa pagina, grazie.</h1>\r\n        <h1 *ngIf=\"end && score == 1000 \">Hai Vinto! Il tuo Avverario si è ritirato! <br> Per concludere la partita lascia questa pagina, grazie.</h1>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../player */ "./src/app/player.ts");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../board */ "./src/app/board.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var board_size = 10;
var GameComponent = /** @class */ (function () {
    function GameComponent(boardService, authService, dataService) {
        this.boardService = boardService;
        this.authService = authService;
        this.dataService = dataService;
        this.players = false;
        this.end = false;
        this.ver = false;
        this.score = 0;
        // Array delle barche
        this.ship_array = [2, 2, 2, 2, 3, 3, 4, 4, 5];
        //ship_array: any [] = [2, 3, 4];
        this.ship_duplicate = this.ship_array.slice(0);
        this.gamedata = {
            socket: null,
            numeroGiocatore: "",
            turno: "",
            sent: false,
            received: false,
            alone: false
        };
        this.username = this.authService.getUsername();
        this.id = this.authService.getId();
    }
    GameComponent.prototype.ngOnInit = function () {
        var self = this;
        self.gamedata.turno = '1';
        self.gamedata.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default.a.connect('http://10.0.2.2:3000');
        self.gamedata.socket.on('connect', function () {
            console.log('loggato');
        });
        // Crea la lobby > il primo giocatore è il numero 1 
        self.gamedata.socket.on('create lobby', function (data) {
            self.gamedata.gameId = data;
            console.log("Lobby creata, gameId: " + self.gamedata.gameId);
            self.gamedata.numeroGiocatore = "1";
            console.log(self.gamedata.numeroGiocatore);
            self.gamedata.alone = true;
            console.log(self.gamedata.alone);
        });
        // Joina una lobby esistente > ha numero giocatore =2
        self.gamedata.socket.on('entering lobby', function (data) {
            self.gamedata.gameId = data;
            console.log("Lobby trovata, connessione alla partita: " + self.gamedata.gameId);
            if (self.gamedata.numeroGiocatore == "") {
                self.gamedata.numeroGiocatore = "2";
                console.log(self.gamedata.numeroGiocatore);
                self.gamedata.socket.emit('on start');
            }
        });
        // Creazione boards
        self.gamedata.socket.on('on game start', function () {
            self.players = true;
            self.gamedata.alone = false;
            console.log("La partita è cominciata!");
            this.myBoard = self.boardService.createBoard();
            console.log(this.myBoard);
        });
        // Ricezione board Avversario > aggiunta alla fine di Boards[]
        self.gamedata.socket.on('receive board', function (data) {
            console.log('ricevo board');
            var board = new _board__WEBPACK_IMPORTED_MODULE_6__["Board"]({
                Player: new _player__WEBPACK_IMPORTED_MODULE_5__["Player"]({ id: self.id, username: self.username }),
                tiles: data
            });
            self.boardService.boards.push(board);
            console.log(data);
            self.gamedata.received = true;
        });
        // Cambio turno da ricezione evento server
        self.gamedata.socket.on('change turn', function (newTurn) {
            self.gamedata.turno = newTurn;
            console.log('Turno' + self.gamedata.turno);
        });
        // Partita persa
        self.gamedata.socket.on('on loss', function (data) {
            console.log(data + ' ha vinto la partita');
            self.end = true;
            self.dataService.patchDefeat(self.username);
        });
        // Partita vinta per resa
        self.gamedata.socket.on('win by quit', function (data) {
            console.log('Il tuo avversario ha abbandonato la partita');
            self.end = true;
            self.score = 1000;
            self.dataService.patchVictory(self.username);
        });
        // Cambio posizionamento navi
        self.verPos = function (click) {
            if (this.ver == false) {
                this.ver = true;
                document.getElementById("cambio").innerText = "Stai posizionando in: Verticale";
            }
            else {
                this.ver = false;
                document.getElementById("cambio").innerText = "Stai posizionando in: Orizzontale";
            }
        };
        // Controlla che le navi vengano inserite secondo le regole
        self.positionCheck = function (row, col, ship) {
            var _row = row;
            var _col = col;
            var rules = true;
            if (this.ver) {
                // Posizionamenti verticali all'interno del reticolo ed adiacenza ai lati
                for (var i = 0; i < ship; i++) {
                    if (_row > (board_size - 1)) {
                        rules = false;
                    }
                    console.log(_row + col);
                    if (col == 0 && rules == true) {
                        if (this.boards[0].tiles[_row][col + 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                            rules = false;
                        }
                    }
                    else {
                        if (col == (board_size - 1) && rules == true) {
                            if (this.boards[0].tiles[_row][col - 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                                rules = false;
                            }
                        }
                        else {
                            if (rules == true) {
                                if (this.boards[0].tiles[_row][col - 1].value == 1 || this.boards[0].tiles[_row][col + 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                                    rules = false;
                                }
                            }
                        }
                    }
                    _row++;
                }
                if (row > 0 && rules == true) {
                    //controllo posizionamento verticale : barche sopra e sotto
                    if (this.boards[0].tiles[row - 1][col].value == 1) {
                        rules = false;
                    }
                }
                if (rules == true && (row + ship) < board_size && this.boards[0].tiles[row + ship][col].value == 1) {
                    rules = false;
                }
            }
            else {
                // Controllo posizionamento orizzontale : rimanere all'interno del reticolo
                for (var i = 0; i < ship; i++) {
                    if (_col > (board_size - 1)) {
                        rules = false;
                    }
                    console.log(_row + col);
                    if (rules == true && row == 0) {
                        if (this.boards[0].tiles[row + 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                            rules = false;
                        }
                    }
                    else {
                        if (rules == true && row == (board_size - 1)) {
                            if (this.boards[0].tiles[row - 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                                rules = false;
                            }
                        }
                        else {
                            if (rules == true) {
                                if (this.boards[0].tiles[row - 1][_col].value == 1 || this.boards[0].tiles[row + 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                                    rules = false;
                                }
                            }
                        }
                    }
                    _col++;
                }
                if (rules == true && col > 0) {
                    // Controllo posizionamento verticale : barche sopra e sotto
                    if (this.boards[0].tiles[row][col - 1].value == 1) {
                        rules = false;
                    }
                }
                if (rules == true && (col + ship) < board_size && this.boards[0].tiles[row][col + ship].value == 1) {
                    rules = false;
                }
            }
            console.log(this.boards[0]);
            return rules;
        };
        // Posiziona le barche nella board del Giocatore
        self.shipPositioning = function (click) {
            var id = click.target.id, boardId = 0, row = id.substring(2, 3), col = id.substring(3, 4), tile = this.boards[boardId].tiles[row][col];
            if (this.ship_array.length == 0) {
                console.log("barche esaurite");
                return;
            }
            if (this.positionCheck(+row, +col, this.ship_array[0], tile)) {
                for (var i = 0; i < this.ship_array[0]; i++) {
                    if (this.ver == true) {
                        this.boards[boardId].tiles[row++][col].value = 1;
                    }
                    else {
                        this.boards[boardId].tiles[row][col++].value = 1;
                    }
                }
                this.ship_array.splice(0, 1);
            }
            else {
                alert("Non ti è consentito mettere una barca qui");
            }
        };
        // Gestisce il click del Giocatore sulla board Avversaria
        self.onPlayerClick = function (click) {
            var id = click.target.id, row = id.substring(2, 3), col = id.substring(3, 4), tile = this.boards[1].tiles[row][col];
            console.log(tile);
            this.gamedata.socket.emit('on fire', id);
            if (this.checkValidHit(tile)) {
                if (self.gamedata.turno == self.gamedata.numeroGiocatore) {
                    self.gamedata.socket.emit('click tile', self.gamedata.turno);
                    // Cambia il turno di colui che ha cliccato e manda l'evento all'altro
                    self.gamedata.turno = self.gamedata.turno == "1" ? "2" : "1";
                    console.log("Turno di " + self.gamedata.turno);
                    // Nave Colpita
                    if (tile.value == 1) {
                        this.boards[1].tiles[row][col].status = 'hit';
                        this.boards[1].tiles[row][col].value = 2;
                        this.score++;
                        // Controlla se il giocatore ha vinto
                        if (this.score == 27) {
                            self.gamedata.socket.emit('on victory', this.username);
                            self.dataService.patchVictory(this.username);
                            this.end = true;
                        }
                        // Nave non Colpita
                    }
                    else {
                        this.boards[1].tiles[row][col].status = 'miss';
                        this.boards[1].tiles[row][col].value = 2;
                    }
                    return this;
                }
                else {
                    alert("Non è il tuo turno.");
                }
            }
            else {
                alert("Stai cliccando su una casella che hai già cliccato, riprova");
            }
        };
        // Visualizza il colpo sulla board dell'avversario
        self.gamedata.socket.on('fire in the hole', function (data) {
            self.submitPlayerClick(data);
            console.log(data);
        });
        self.submitPlayerClick = function (click) {
            var id = click, row = id.substring(2, 3), col = id.substring(3, 4), tile = this.boards[0].tiles[row][col];
            console.log(click);
            if (self.gamedata.turno != self.gamedata.numeroGiocatore) {
                if (!this.checkValidHit(tile)) {
                    return;
                }
                // Nave Colpita
                if (tile.value == 1) {
                    this.boards[0].tiles[row][col].status = 'hit';
                    // Nave mancata
                }
                else {
                    this.boards[0].tiles[row][col].status = 'miss';
                }
                return this;
            }
        };
    };
    // Invio board all'avversario
    GameComponent.prototype.submitBoard = function () {
        this.myBoard = this.boards[0].tiles;
        this.gamedata.socket.emit('submit board', this.boards[0].tiles);
        this.gamedata.sent = true;
        console.log(this.boards);
        return;
    };
    // Resetta la board in Fase di Posizionamento
    GameComponent.prototype.deleteShips = function () {
        this.boards.shift();
        this.myBoard = this.boardService.createBoard();
        var fleet = this.ship_duplicate.slice(0);
        this.ship_array = fleet;
        console.log(this.ship_duplicate);
    };
    // Controlla se una tile è già stata cliccata
    GameComponent.prototype.checkValidHit = function (tile) {
        var clickable = true;
        if (tile.value == 2) {
            clickable = false;
        }
        return clickable;
    };
    Object.defineProperty(GameComponent.prototype, "boards", {
        // Ritorna Boards[]
        get: function () {
            return this.boardService.getBoards();
        },
        enumerable: true,
        configurable: true
    });
    // Gestione dell'uscita dal Game Component
    GameComponent.prototype.canDeactivate = function () {
        console.log(this.gamedata.alone);
        if (this.gamedata.alone) {
            if (window.confirm('Stai abbandonando la coda, sei sicuro? La tua room verrà distrutta.')) {
                this.gamedata.socket.emit('on leaving queue');
                return true;
            }
        }
        if (!this.end) {
            console.log(this.gamedata.gameId);
            if (window.confirm('Stai abbandonando la partita, sei sicuro? Ciò porterà ad una sconfitta.')) {
                console.log(this.gamedata.gameId);
                this.gamedata.socket.emit('on leaving');
                //this.gamedata.socket.to('' + this.gamedata.gameId).broadcast.emit('on leaving');
                //non posso fare il to('' + gameId perchè mi dice che non è una funzione???????????)
                this.dataService.patchVictory(this.username);
                return true;
            }
        }
        else
            return true;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")],
            providers: [_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]]
        }),
        __metadata("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n}\r\n\r\n.statistiche {\r\n    display: inline-block;\r\n    text-align: center;\r\n    min-width: 20%\r\n}\r\n\r\n#podio {\r\n    margin-bottom: 100px;\r\n}"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistiche\">\r\n    <h1>Posizione</h1>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h1>Username</h1>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h1>Vittorie</h1>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h1>Sconfitte</h1>\r\n</div>\r\n<div class=\"statistiche\">\r\n    <h1>Giocate</h1>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div id=\"podio\">\r\n    <div *ngFor=\"let user of users | slice:0:3; index as i \">\r\n        <h1 class=\"statistiche\">{{(i+1 == 1) ? \"🥇\": ((i+1 == 2) ?\"🥈\" : \"🥉\")}}</h1>\r\n        <h2 class=\"statistiche\">{{user.username}}</h2>\r\n        <p class=\"statistiche\">{{user.victories}} </p>\r\n        <p class=\"statistiche\">{{user.defeats}} </p>\r\n        <p class=\"statistiche\">{{user.victories+user.defeats}}</p>\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div *ngFor=\"let user of users | slice:3:10; index as i\">\r\n    <h1 class=\"statistiche \">{{i+4}}°</h1>\r\n    <h2 class=\"statistiche \">{{user.username}}</h2>\r\n    <p class=\"statistiche \">{{user.victories}} </p>\r\n    <p class=\"statistiche \">{{user.defeats}} </p>\r\n    <p class=\"statistiche \">{{user.victories+user.defeats}}</p>\r\n    <hr>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(http) {
        this.http = http;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Lista utenti in base al numero di vittorie
        this.http.getLeaderboard().subscribe(function (data) {
            console.log(data);
            _this.users = data.user;
            console.table(_this.users);
        });
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form */\r\n\r\ninput[type=submit] {\r\n    border-radius: 38px;\r\n    background-color: gainsboro;\r\n    min-width: 200px;\r\n    padding: 10px;\r\n    border: 1px solid #bbb;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n#form {\r\n    background-color: #f3f3f3;\r\n    padding: 50px;\r\n}\r\n\r\n#form .flex {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#form label {\r\n    min-width: 150px;\r\n}\r\n\r\n.searched {\r\n    display: block;\r\n    padding: 10px;\r\n    /* border-radius: 100px; */\r\n    min-width: 200px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n    border: none;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n#fail {\r\n    color: red;\r\n}\r\n\r\n.statistiche {\r\n    display: inline-block;\r\n    text-align: center;\r\n    min-width: 25%\r\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div id=\"form\">\n        <form>\n            <div class=\"flex\">\n                <label class=\"lbl-searched\">Utente da cercare</label>\n                <input type=\"text\" class=\"searched\" [(ngModel)]=\"searched\" name=\"searched\" required>\n            </div>\n\n            <div class=\"flex\">\n                <label> </label>\n                <input type=\"submit\" (click)=\"userStatistics(searched)\">\n            </div>\n\n            <h2 id=\"fail\"></h2>\n        </form>\n    </div>\n</div>\n\n<div class=\"info\" *ngIf=\"statistics\">\n    <hr>\n\n    <div class=\"statistiche\">\n        <h3>Username</h3>\n    </div>\n    <div class=\"statistiche\">\n        <h3>Vittorie</h3>\n    </div>\n    <div class=\"statistiche\">\n        <h3>Sconfitte</h3>\n    </div>\n    <div class=\"statistiche\">\n        <h3>Giocate</h3>\n    </div>\n\n    <hr>\n\n    <div class=\"statistiche\">\n        <p id=\"username\"><strong>{{statistics.username}}</strong></p>\n    </div>\n    <div class=\"statistiche\">\n        <p>{{statistics.victories}} </p>\n    </div>\n    <div class=\"statistiche\">\n        <p>{{statistics.defeats}} </p>\n    </div>\n    <div class=\"statistiche\">\n        <p>{{statistics.victories+statistics.defeats}} </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(dataService) {
        this.dataService = dataService;
        this.searched = "";
    }
    SearchComponent.prototype.ngOnInit = function () { };
    //Statistiche utente cercato
    SearchComponent.prototype.userStatistics = function (searched) {
        var _this = this;
        return this.dataService.getStatistics(searched).subscribe(function (data) {
            console.log(data);
            _this.statistics = data.user;
            document.getElementById("fail").style.display = "none";
        }, function (err) {
            console.log(err);
            document.getElementById("fail").style.display = "initial";
            document.getElementById("fail").innerText = "I dati inseriti non sono corretti";
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/user-login/user-login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/user-login/user-login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    display: inline-block;\r\n    min-width: 100px !important;\r\n    text-align: left;\r\n}\r\n\r\ninput {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    margin-bottom: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    min-width: 100px;\r\n    border-radius: 10px;\r\n    background-color: gainsboro;\r\n    margin-left: 15px;\r\n}\r\n\r\n#login {\r\n    text-align: center;\r\n}\r\n\r\n#fail {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-login/user-login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\r\n    <h2>Login</h2>\r\n    <h3 id=\"fail\"></h3>\r\n    <form class=\"form\">\r\n        <div>\r\n            <label>Email</label>\r\n            <input type=\"text\" [(ngModel)]=\"loginUserData.email\" name=\"email\" required>\r\n        </div>\r\n        <div>\r\n            <label>Password</label>\r\n            <input type=\"password\" [(ngModel)]=\"loginUserData.password\" name=\"password\" required>\r\n        </div>\r\n\r\n        <button type=\"button\" (click)=\"loginUser()\">Login</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-login/user-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-login/user-login.component.ts ***!
  \***************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    // Esegue il login dell'utente
    UserLoginComponent.prototype.loginUser = function () {
        var _this = this;
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            sessionStorage.setItem('token', res.token);
            _this._router.navigate(["/leaderboard"]);
        }, function (err) {
            console.log(err);
            document.getElementById("fail").innerText = "I dati inseriti non sono corretti";
        });
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/components/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/components/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user-signup/user-signup.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/user-signup/user-signup.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    display: inline-block;\r\n    min-width: 100px !important;\r\n    text-align: left;\r\n}\r\n\r\ninput {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    margin-bottom: 5px;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton {\r\n    min-width: 100px;\r\n    border-radius: 10px;\r\n    background-color: gainsboro;\r\n    margin-left: 15px;\r\n}\r\n\r\n#registrazione {\r\n    text-align: center;\r\n}\r\n\r\n#fail {\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/user-signup/user-signup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-signup/user-signup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"registrazione\">\r\n    <h2>Registrati Qui!</h2>\r\n    <h3 id=\"fail\"></h3>\r\n\r\n    <form class=\"form \">\r\n        <div>\r\n            <label>Email</label>\r\n            <input type=\"email\" [(ngModel)]=\"signupData.email\" name=\"email\" required>\r\n        </div>\r\n        <div>\r\n            <label>Username</label>\r\n            <input type=\"text\" [(ngModel)]=\"signupData.username\" name=\"username\" required>\r\n        </div>\r\n        <div>\r\n            <label>Password</label>\r\n            <input type=\"password\" [(ngModel)]=\"signupData.password\" name=\"password\" required>\r\n        </div>\r\n\r\n        <button type=\"button\" (click)=\"registerUser()\">Registrati</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user-signup/user-signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-signup/user-signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function() { return UserSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSignupComponent = /** @class */ (function () {
    function UserSignupComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.signupData = {};
    }
    UserSignupComponent.prototype.ngOnInit = function () {
    };
    // Esegue la registrazione dell'utente
    UserSignupComponent.prototype.registerUser = function () {
        var _this = this;
        this._auth.registerUser(this.signupData)
            .subscribe(function (res) {
            _this._router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            document.getElementById("fail").innerText = "I dati inseriti non sono corretti";
        });
    };
    UserSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-signup',
            template: __webpack_require__(/*! ./user-signup.component.html */ "./src/app/components/user-signup/user-signup.component.html"),
            styles: [__webpack_require__(/*! ./user-signup.component.css */ "./src/app/components/user-signup/user-signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserSignupComponent);
    return UserSignupComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/can-deactivate.guard.ts":
/*!************************************************!*\
  !*** ./src/app/guards/can-deactivate.guard.ts ***!
  \************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/player.ts":
/*!***************************!*\
  !*** ./src/app/player.ts ***!
  \***************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "http://10.0.2.2:3000/user/signup";
        this._loginUrl = "http://10.0.2.2:3000/user/login";
        this._userUrl = "http://10.0.2.2:3000/user/";
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._registerUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.logoutUser = function () {
        sessionStorage.removeItem('token');
        this._router.navigate(['/']);
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        return !!sessionStorage.getItem('token');
    };
    AuthService.prototype.getId = function () {
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
        return token.userId;
    };
    AuthService.prototype.getUsername = function () {
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
        return token.username;
    };
    AuthService.prototype.getEmail = function () {
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
        return token.email;
    };
    AuthService.prototype.isAdmin = function () {
        var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
        return token.isAdmin;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board */ "./src/app/board.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/app/player.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardService = /** @class */ (function () {
    function BoardService(authService) {
        this.authService = authService;
        this.boards = [];
    }
    // Costruisce la board 
    BoardService.prototype.createBoard = function (size) {
        if (size === void 0) { size = 10; }
        var tiles = [];
        for (var i = 0; i < size; i++) {
            tiles[i] = [];
            for (var j = 0; j < size; j++) {
                tiles[i][j] = { value: 0, status: '' };
            }
        }
        var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"]({
            Player: new _player__WEBPACK_IMPORTED_MODULE_2__["Player"]({ id: this.authService.getId(), username: this.authService.getUsername() }),
            tiles: tiles
        });
        this.boards.unshift(board);
        console.log(this.boards);
        return tiles;
    };
    // Ritorna le board
    BoardService.prototype.getBoards = function () {
        return this.boards;
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this._userUrl = 'http://10.0.2.2:3000/user/';
        this._messagesUrl = 'http://10.0.2.2:3000/messages/';
    }
    //Administration Component
    DataService.prototype.getUsers = function () {
        return this.http.get(this._userUrl);
    };
    ;
    //Leaderboard Component
    DataService.prototype.getLeaderboard = function () {
        return this.http.get(this._userUrl + 'leaderboard');
    };
    ;
    //Search Component
    DataService.prototype.getStatistics = function (username) {
        return this.http.get(this._userUrl + username + "/statistics");
    };
    ;
    //Game Component
    DataService.prototype.patchVictory = function (username) {
        this.http.patch(this._userUrl + username + "/victory", null).subscribe(function (data) {
            return console.log('SUCC');
        });
    };
    DataService.prototype.patchDefeat = function (username) {
        this.http.patch(this._userUrl + username + "/defeat", null).subscribe(function (data) {
            return console.log('SUCC');
        });
    };
    //Administration Component
    DataService.prototype.upgradeUser = function (username) {
        return this.http.patch(this._userUrl + username + '/upgrade', null).subscribe();
    };
    DataService.prototype.downgradeUser = function (username) {
        return this.http.patch(this._userUrl + username + '/downgrade', null).subscribe();
    };
    DataService.prototype.userDelete = function (id) {
        this.http.delete(this._userUrl + id).subscribe();
    };
    //Chat Component
    DataService.prototype.getChats = function (username) {
        return this.http.get(this._messagesUrl + username + '/conversations');
    };
    DataService.prototype.getChatsMessages = function (user1, user2) {
        return this.http.get(this._messagesUrl + user1 + '/' + user2 + '/payload');
    };
    DataService.prototype.validRecipient = function (username, callback) {
        this.http.get(this._userUrl + username + "/check").subscribe(function (data) {
            callback(data);
        });
    };
    DataService.prototype.sendMessage = function (message) {
        return this.http.post(this._messagesUrl, message);
    };
    DataService.prototype.deleteMessage = function (id) {
        this.http.delete(this._messagesUrl + id).subscribe();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Byteman\Desktop\mobilebyu\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map