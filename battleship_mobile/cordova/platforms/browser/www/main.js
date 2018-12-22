(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./src/$$_lazy_route_resource lazy recursive":
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

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

            /***/
        }),

        /***/
        "./src/app/app.component.css":
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "button{\r\n    margin:1px\r\n}"

            /***/
        }),

        /***/
        "./src/app/app.component.html":
        /*!************************************!*\
          !*** ./src/app/app.component.html ***!
          \************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n        Welcome to {{ title }}! <br>\n    </h1>\n</div>\n<div style=\"text-align:center\">\n    <button *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</button>\n    <button *ngIf=\"!authService.loggedIn()\" routerLink=\"/signup\" routerLinkActive=\"active\">Sign Up</button>\n    <button *ngIf=\"authService.loggedIn() && !this.fun()\" routerLink=\"/home\" routerLinkActive=\"active\">Home</button>\n    <button *ngIf=\"authService.loggedIn() && !this.fun()\" routerLink=\"/ranking\" routerLinkActive=\"active\">Rankings</button>\n    <button *ngIf=\"authService.loggedIn() && !this.fun()\" routerLink=\"/message\" routerLinkActive=\"active\">Messagges</button>\n    <button *ngIf=\"authService.loggedIn() && authService.isAdmin() && !this.fun()\" routerLink=\"/delete\" routerLinkActive=\"active\">Manage users</button>\n    <button *ngIf=\"authService.loggedIn() && !this.fun()\" routerLink=\"/\" routerLinkActive=\"active\" (click)=\"authService.logoutUser()\">Logout</button>\n\n</div>\n\n<hr>\n\n<router-outlet></router-outlet>\n\n"

            /***/
        }),

        /***/
        "./src/app/app.component.ts":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var AppComponent = /** @class */ (function() {
                function AppComponent(authService, router) {
                    this.authService = authService;
                    this.router = router;
                    this.title = 'battleship';
                    this.inGame = false;
                }
                AppComponent.prototype.fun = function() {
                    if (window.location.href == 'http://10.0.2.2:4200/game') {
                        return true;
                    } else {
                        return false;
                    }
                };
                AppComponent.prototype.ngOnInit = function() {};
                AppComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-root',
                        template: __webpack_require__( /*! ./app.component.html */ "./src/app/app.component.html"),
                        styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
                ], AppComponent);
                return AppComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/app.module.ts":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
            /* harmony import */
            var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */
            var _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
            /* harmony import */
            var _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/user-login/user-login.component */ "./src/app/components/user-login/user-login.component.ts");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/user-signup/user-signup.component */ "./src/app/components/user-signup/user-signup.component.ts");
            /* harmony import */
            var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./auth.guard */ "./src/app/auth.guard.ts");
            /* harmony import */
            var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
            /* harmony import */
            var _components_user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/user-delete/user-delete.component */ "./src/app/components/user-delete/user-delete.component.ts");
            /* harmony import */
            var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
            /* harmony import */
            var _components_game_game_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
            /* harmony import */
            var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

















            var appRoutes = [
                { path: 'login', component: _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"] },
                { path: 'ranking', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'signup', component: _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__["UserSignupComponent"] },
                { path: 'delete', component: _components_user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_13__["UserDeleteComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'message', component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_15__["GameComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
            ];
            var AppModule = /** @class */ (function() {
                function AppModule() {}
                AppModule = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                            _components_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                            _components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
                            _components_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_10__["UserSignupComponent"],
                            _components_user_delete_user_delete_component__WEBPACK_IMPORTED_MODULE_13__["UserDeleteComponent"],
                            _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                            _components_game_game_component__WEBPACK_IMPORTED_MODULE_15__["GameComponent"],
                            _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                        ],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
                        ],
                        providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                            {
                                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                                useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
                                multi: true
                            }
                        ],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                    })
                ], AppModule);
                return AppModule;
            }());



            /***/
        }),

        /***/
        "./src/app/auth.guard.ts":
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var AuthGuard = /** @class */ (function() {
                function AuthGuard(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                AuthGuard.prototype.canActivate = function() {
                    if (this._authService.loggedIn()) {
                        return true;
                    } else {
                        this._router.navigate(['/login']);
                        return false;
                    }
                };
                AuthGuard = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
                    ])
                ], AuthGuard);
                return AuthGuard;
            }());



            /***/
        }),

        /***/
        "./src/app/board.ts":
        /*!**************************!*\
          !*** ./src/app/board.ts ***!
          \**************************/
        /*! exports provided: Board */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
            var Board = /** @class */ (function() {
                function Board(values) {
                    if (values === void 0) { values = {}; }
                    Object.assign(this, values);
                }
                return Board;
            }());



            /***/
        }),

        /***/
        "./src/app/components/game/game.component.css":
        /*!****************************************************!*\
          !*** ./src/app/components/game/game.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "table td,\r\ntable th {\r\n    border: 1px solid #dbdbdb;\r\n    padding: 0.5em 0.75em;\r\n    vertical-align: middle;\r\n    height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n table {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n table tr:hover {\r\n    background-color: transparent;\r\n}\r\n\r\n .battleship-tile:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n .hit {\r\n    background-color: red !important;\r\n}\r\n\r\n .miss {\r\n    background-color: aqua !important;\r\n}\r\n\r\n .hover {\r\n    background-color: green !important;\r\n}\r\n\r\n .hoverno {\r\n    background-color: red !important;\r\n}\r\n\r\n .ship{\r\n    background-color: black !important;\r\n}\r\n\r\n .sunk{\r\n    background-color: #75151e !important;\r\n}\r\n\r\n .game{\r\n    font-size: 1.2em;\r\n    margin: 5px;\r\n    border-radius: 10px\r\n}\r\n"

            /***/
        }),

        /***/
        "./src/app/components/game/game.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/components/game/game.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div style=\"text-align: center\" *ngIf=\"!queuing && !inGame\"> \n    <button (click)=\"beginGame()\" class=\"play\" style=\"margin-bottom:0.5em\">Create a game</button>\n  </div>\n  <div style=\"text-align: center\" *ngIf=\"!queuing && !browsing && !inGame\"> \n    <button (click)=\"browse()\" class=\"play\" >Join a game</button>\n  </div>\n\n  <div *ngIf=\"!queuing && !inGame\">\n        <button (click)=\"esc()\">Return to Home</button>\n    </div>\n\n    <div *ngIf=\"inGame\">\n        <button (click)=\"home()\">Return to Home</button>\n    </div>\n \n\n<div *ngIf=\"browsing\" > \n<div *ngFor=\"let game of games\">\n    <h4>{{game.owner}} 's game</h4>\n    <button (click)='join(game.code)'>Join</button>\n  </div>\n</div>\n\n\n<!-- solo quando sono in browsing -->\n<div *ngIf=\"!browsing\">\n<div *ngIf=\"concedable\">\n    <button (click)=\"concede()\" class=\"right play\">Concede</button>\n</div>\n<div *ngIf=\"escable\">\n    <button (click)=\"esc()\" class=\"right play\">Leave queue</button>\n</div>\n<div *ngIf=\"!notOver\">\n    <button (click)=\"return()\" class=\"right play\">Return to Home</button>\n</div>\n\n\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"content\">\n            <h1 class=\"title\" *ngIf=\"queuing && !players\">Ready to sink some battleships?</h1>\n            <hr *ngIf=\"!players\">\n\n\n            <div *ngIf=\"players == false && queuing\">\n                <h2>Waiting for 2nd user to join...</h2>\n            </div>\n\n            <div *ngIf=\"players && !sent && notOver\">\n                <h2>Ship placement phase</h2>\n                <p *ngIf=\"!submittable\">You're placing the {{ships[0]}} units ship</p>\n\n                <button id=\"changePositioning\" (click)=\"changePositioning()\" class=\"game\">Vertical Positioning</button>\n            </div>\n\n            <div *ngIf=\"end\">\n                <h2>You win! Congratulations!</h2>\n            </div>\n            <div *ngIf=\"loses\">\n                <h2>You lose, better luck next time!</h2>\n            </div>\n\n            <div *ngIf=\"deletable\">\n                <button (click)=\"deleteShips()\" class=\"game\">Repeat ship placement</button>\n            </div>\n\n            <div *ngIf=\"submittable\">\n                <button (click)=\"submitBoard()\" class=\"game\">Submit</button>\n            </div>\n            \n\n            <!-- loops through the boards array and displays the player and board tiles (mouseleave)='test($event)'-->\n            <div *ngIf=\"received && sent && notOver\">\n                <h4><span style=\"text-align: center\" class=\"tag is-warning\" *ngIf=\"turn == playerNum\"> Your turn!</span></h4>\n                <h4><span style=\"text-align: center\" class=\"tag is-danger\" *ngIf=\"turn != playerNum\"> Other player's turn.</span></h4>\n                <button (click)=\"changeBoard()\" class=\"game\">Submit</button>\n                <hr>\n            </div>\n\n        </div>\n            \n            <div *ngIf=\"notOver\">\n                <div  class=\"columns\" *ngFor=\"let board of boards | slice:0:1; let i = index\">\n                    <div *ngIf=\"switch\">\n                        <h3>My Board</h3>\n                        <table class=\"is-bordered\" [style.opacity]=\"i == player ? 0.5 : 1\">\n                            <tr *ngFor=\"let row of board.tiles; let j = index\">\n                                <td *ngFor=\"let col of row; let k = index\" \n                                (click)=\"shipPositioning($event)\" \n                                [class.ship]=\"col.value == 1 \" \n                                [class.miss]=\"col.status == 'miss'\"\n                                [class.hit]=\"col.status =='hit'\" \n                                [class.hover]=\"col.status == 'hover'\" \n                                [class.hoverno]=\"col.status == 'hoverno'\"\n                                (mouseover)='hover($event)' \n                                (mouseleave)='leave($event)'\n                                \n                                    class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\n                                    {{(col.value == \"1\" ? (col.status == \"hit\" ? \"💀\" : \"X\") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? \"💀\" : \"🌊\"))) }}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n\n                </div>\n                <div *ngIf=\"received && sent\" >\n                    <div  class=\"column2\" *ngFor=\"let board of boards | slice:1:2; let i = index\">\n                        <div *ngIf=\"!switch\">\n                            <table class=\"is-bordered\">\n                                <tr *ngFor=\"let row of board.tiles; let j = index\">\n                                    <td *ngFor=\"let col of row; let k = index\" \n                                    (click)=\"playerFire($event)\" \n                                    [style.background-color]=\"col.used ? '' : 'transparent'\" \n                                    [class.hit]=\"col.status == 'hit'\" \n                                    [class.fail]=\"col.status !== 'win'\" \n                                    class=\"battleship-tile\" \n                                    id=\"t{{i}}{{j}}{{k}}\"\n                                    [class.sunk]=\"col.lenght == 's'\">\n                                        {{ col.value == \"1\" ? (col.status == \"hit\" ? (col.lenght != 's'? \"💥\" : \"💀\"): \"❓\") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? (col.lenght != 's'? \"💥\" : \"💀\") : \"❓\")) }}\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/components/game/game.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/components/game/game.component.ts ***!
          \***************************************************/
        /*! exports provided: GameComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../board */ "./src/app/board.ts");
            /* harmony import */
            var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
            /* harmony import */
            var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var src_app_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/player */ "./src/app/player.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            // import needed classes and services






            var gameId = '2';
            var board_size = 10;
            var GameComponent = /** @class */ (function() {
                function GameComponent(authService, dataService, _router) {
                    this.authService = authService;
                    this.dataService = dataService;
                    this._router = _router;
                    this.players = false;
                    this.player = 0;
                    this.end = false;
                    this.loss = false;
                    this.ver = false;
                    this.ships = [2, 2, 2, 2, 3, 3, 4, 4, 5];
                    this.ship_names = ['dd1', 'dd2', 'dd3', 'dd4', 'cl1', 'cl2', 'bb1', 'bb2', 'cc'];
                    //ships: any [] = [2, 3, 4];
                    //ship_names: any [] = ['dd', 'cl', 'bb'];
                    this.ships_test = this.ships.slice(0);
                    this.socket = null;
                    this.playerNum = '';
                    this.turn = '';
                    this.loses = false;
                    this.sent = false;
                    this.isInGame = false;
                    this.received = false;
                    this.concedable = false;
                    this.escable = false;
                    this.conceded = false;
                    this.submittable = false;
                    this.deletable = false;
                    this.notOver = true;
                    this.switch = true;
                    this.gData = {};
                    this.browsing = false;
                    this.queuing = false;
                    this.inGame = false;
                    this.score = 0;
                    this.username = this.authService.getUsername();
                    this.id = this.authService.getId();
                    this.boards = [];
                }
                GameComponent.prototype.goToPage = function() {
                    if (this.escable || this.browsing) {
                        this.esc();
                    } else {
                        this.esc();
                        this.concedable = false;
                        console.log('You concede, your opponent has won the game');
                        this.dataService.userLoss(this.id);
                        this.socket.emit('concede', this.username);
                        this._router.navigate(["/home"]);
                    }
                    //this._router.navigate(['/home']);
                };
                GameComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.username = this.authService.getUsername();
                    this.id = this.authService.getId();
                    this.username = this.authService.getUsername();
                    this.dataService.getPlay(this.id).subscribe(function(data) {
                        _this.inGame = data.user.inGame;
                    });
                    this.dataService.userPlay(this.id, true);
                    var that = this;
                    that.turn = '1';
                    that.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default.a.connect('http://10.0.2.2:3000');
                    that.socket.on('connect', function() {
                        console.log('User connected');
                    });
                    that.socket.on('new game', function(data) {
                        that.gameId = data;
                        that.postGame(that.gameId);
                        console.log("created game " + that.gameId);
                        that.socket.emit('refreshOrder');
                        that.escable = true;
                    });
                    that.socket.on('user joined', function(data) {
                        that.gameId = data;
                        console.log("player joined game " + that.gameId);
                        if (that.playerNum == "") {
                            that.socket.emit('start game');
                        }
                    });
                    //fa partire scambio
                    that.socket.on('game started', function(data) {
                        //that.gucci = true;
                        that.players = true;
                        console.log("game started!");
                        this.myBoard = that.createBoard();
                        that.isInGame = true;
                        that.escable = false;
                        that.concedable = true;
                        that.playerNum = "" + data;
                    });
                    //ricevo board
                    that.socket.on('exchange2', function(data) {
                        console.log('Board info received');
                        var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"]({
                            Player: new src_app_player__WEBPACK_IMPORTED_MODULE_5__["Player"]({ id: that.id, username: that.username }),
                            tiles: data
                        });
                        that.boards.push(board);
                        that.received = true;
                    });
                    that.socket.on('turn', function(newturn) {
                        //gestire colpo 
                        that.turn = newturn;
                    });
                    //viene eseguito quando perdo
                    that.socket.on('loss', function(data) {
                        console.log('Your opponent ' + data + ' has won the game');
                        that.loses = true;
                        that.notOver = false;
                        that.dataService.userLoss(that.id);
                        that.concedable = false;
                    });
                    that.socket.on('winByConcede', function(data) {
                        console.log(data + ' has conceded, you win the game');
                        that.dataService.userWin(that.id);
                        that.notOver = false;
                        that.end = true;
                        that.concedable = false;
                    });
                    that.socket.on('refresh', function() {
                        setTimeout(function() {
                            that.browseData();
                        }, 50);
                    });
                    //cambio di posizionamento orizzontale/verticale
                    that.changePositioning = function() {
                        if (this.ver == false) {
                            this.ver = true;
                            var cambio = document.getElementById("changePositioning");
                            cambio.innerText = "Horizontal Positioning";
                        } else {
                            this.ver = false;
                            var cambio = document.getElementById("changePositioning");
                            cambio.innerText = "Vertical Positioning";
                        }
                    };
                    that.postGame = function(code) {
                        var _this = this;
                        this.gData.username = this.username;
                        this.gData.userId = this.id;
                        this.gData.code = code;
                        that.dataService.createGame(this.gData)
                            .subscribe(function(res) {
                                console.log(_this.gData);
                            });
                    };
                    //controlla che le barche siano messe correttamente
                    that.positionCheck = function(row, col, ship) {
                        var _row = row;
                        var _col = col;
                        var good = true;
                        if (this.ver) {
                            //controllo che le verticali non escano e che non ce ne siano adiacenti ai lati
                            for (var i = 0; i < ship; i++) {
                                if (_row > (board_size - 1)) {
                                    good = false;
                                }
                                if (col == 0 && good == true) {
                                    if (this.boards[0].tiles[_row][col + 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                                        good = false;
                                    }
                                } else {
                                    if (col == (board_size - 1) && good == true) {
                                        if (this.boards[0].tiles[_row][col - 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                                            good = false;
                                        }
                                    } else {
                                        if (good == true) {
                                            if (this.boards[0].tiles[_row][col - 1].value == 1 || this.boards[0].tiles[_row][col + 1].value == 1 || this.boards[0].tiles[_row][col].value == 1) {
                                                good = false;
                                            }
                                        }
                                    }
                                }
                                _row++;
                            }
                            if (row > 0 && good == true) {
                                //controllo che le verticali non abbiamo una barca sopra
                                if (this.boards[0].tiles[row - 1][col].value == 1) {
                                    good = false;
                                }
                            }
                            if (good == true && (row + ship) < board_size && this.boards[0].tiles[row + ship][col].value == 1) {
                                good = false;
                            }
                        } else {
                            //controllo che le orizzontali non escano
                            for (var i = 0; i < ship; i++) {
                                if (_col > (board_size - 1)) {
                                    good = false;
                                }
                                if (good == true && row == 0) {
                                    if (this.boards[0].tiles[row + 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                                        good = false;
                                    }
                                } else {
                                    if (good == true && row == (board_size - 1)) {
                                        if (this.boards[0].tiles[row - 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                                            good = false;
                                        }
                                    } else {
                                        if (good == true) {
                                            if (this.boards[0].tiles[row - 1][_col].value == 1 || this.boards[0].tiles[row + 1][_col].value == 1 || this.boards[0].tiles[row][_col].value == 1) {
                                                good = false;
                                            }
                                        }
                                    }
                                }
                                _col++;
                            }
                            if (good == true && col > 0) {
                                //controllo che le verticali non abbiamo una barca sopra
                                if (this.boards[0].tiles[row][col - 1].value == 1) {
                                    good = false;
                                }
                            }
                            if (good == true && (col + ship) < board_size && this.boards[0].tiles[row][col + ship].value == 1) {
                                good = false;
                            }
                        }
                        return good;
                    };
                    that.hover = function(click) {
                        var id = click.target.id,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        if (this.positionCheck(+row, +col, this.ships[0], tile)) {
                            if (this.ver == true) {
                                for (var i = 0; i < (this.ships[0]); i++) {
                                    this.boards[boardId].tiles[row++][col].status = 'hover';
                                }
                            } else {
                                for (var i = 0; i < (this.ships[0]); i++) {
                                    this.boards[boardId].tiles[row][col++].status = 'hover';
                                }
                            }
                        } else {
                            if (this.ver == true) {
                                for (var i = 0; i < (this.ships[0]); i++) {
                                    if (row < (board_size)) {
                                        this.boards[boardId].tiles[row++][col].status = 'hoverno';
                                    }
                                }
                            } else {
                                for (var i = 0; i < (this.ships[0]); i++) {
                                    if (col < (board_size)) {
                                        this.boards[boardId].tiles[row][col++].status = 'hoverno';
                                    }
                                }
                            }
                        }
                    };
                    that.leave = function(click) {
                        var id = click.target.id,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        if (this.ver == true) {
                            for (var i = 0; i < (this.ships[0]); i++) {
                                if (row < (board_size)) {
                                    this.boards[boardId].tiles[row++][col].status = '';
                                }
                            }
                        } else {
                            for (var i = 0; i < (this.ships[0]); i++) {
                                if (col < (board_size)) {
                                    this.boards[boardId].tiles[row][col++].status = '';
                                }
                            }
                        }
                    };
                    that.shipPositioning = function(click) {
                        var id = click.target.id,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        if (this.ships.length == 0) {
                            console.log("No more ships to place");
                            return;
                        }
                        if (this.positionCheck(+row, +col, this.ships[0], tile)) {
                            for (var i = 0; i < this.ships[0]; i++) {
                                if (this.ver == true) {
                                    this.boards[boardId].tiles[row][col].lenght = this.ships[0];
                                    this.boards[boardId].tiles[row][col].name = this.ship_names[0];
                                    this.boards[boardId].tiles[row++][col].value = 1;
                                } else {
                                    this.boards[boardId].tiles[row][col].lenght = this.ships[0];
                                    this.boards[boardId].tiles[row][col].name = this.ship_names[0];
                                    this.boards[boardId].tiles[row][col++].value = 1;
                                }
                            }
                            this.ships.splice(0, 1);
                            this.ship_names.splice(0, 1);
                        } else {
                            alert("Invalid ship position");
                        }
                        if (this.ships.length == 0) {
                            this.submittable = true;
                        }
                        if (this.ships.length <= 8) {
                            this.deletable = true;
                        }
                    };
                    that.playerFire = function(click) {
                        var id = click.target.id,
                            boardId = 1,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        this.socket.emit('click', id);
                        if (tile.value == "X") {
                            console.log("Invalid selection");
                            return;
                        }
                        if (that.turn == that.playerNum) {
                            that.socket.emit('hit', that.turn);
                            that.turn = that.turn == "1" ? "2" : "1";
                            if (tile.value == 1) {
                                //hit
                                this.checkAdj(+row, +col);
                                this.boards[boardId].tiles[row][col].status = 'hit';
                                this.score++;
                                if (this.score == 27) {
                                    console.log(this.username + ', you win the game!');
                                    //viene eseguito quando vinco
                                    that.socket.emit('victory', this.username);
                                    that.dataService.userWin(this.id);
                                    that.concedable = false;
                                    this.notOver = false;
                                    this.end = true;
                                }
                                console.log('hit, score: ' + this.score);
                            } else {
                                //miss
                                this.boards[boardId].tiles[row][col].status = 'miss';
                            }
                            this.boards[boardId].tiles[row][col].used = true;
                            this.boards[boardId].tiles[row][col].value = "X";
                            return this;
                        } else {
                            console.log("This isn't your turn!");
                        }
                    };
                    that.socket.on('opponentClick', function(data) {
                        that.playerReceiveClick(data);
                    });
                    that.playerReceiveClick = function(click) {
                        var id = click,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        console.log(this.boards[0]);
                        if (that.turn != that.playerNum) {
                            if (tile.value == 1) {
                                //hit
                                this.boards[boardId].tiles[row][col].status = 'hit';
                            } else {
                                //miss
                                this.boards[boardId].tiles[row][col].status = 'miss';
                            }
                            this.boards[boardId].tiles[row][col].used = true;
                            this.boards[boardId].tiles[row][col].value = "X";
                            return this;
                        }
                    };
                };
                GameComponent.prototype.submitBoard = function() {
                    this.myBoard = this.boards[0].tiles;
                    this.socket.emit('exchange1', this.boards[0].tiles);
                    this.sent = true;
                    this.submittable = false;
                    this.deletable = false;
                    return;
                };
                GameComponent.prototype.deleteShips = function() {
                    this.boards.shift();
                    this.myBoard = this.createBoard();
                    var ship_test2 = this.ships_test.slice(0);
                    this.ships = ship_test2;
                    this.deletable = false;
                    this.submittable = false;
                };
                GameComponent.prototype.checkAdj = function(row, col) {
                    var count = 0;
                    var boardId = 1;
                    var len = this.boards[boardId].tiles[row][col].lenght;
                    var name = this.boards[boardId].tiles[row][col].name;
                    var _row = row;
                    var _col = col;
                    for (var i = 1; i < len; i++) {
                        if (_row + i < 10 && this.boards[boardId].tiles[_row + i][_col].status == 'hit' && this.boards[boardId].tiles[_row + i][_col].name == name) {
                            count = count + 1;
                        }
                        if (_col + i < 10 && this.boards[boardId].tiles[_row][_col + i].status == 'hit' && this.boards[boardId].tiles[_row][_col + i].name == name) {
                            count = count + 1;
                        }
                        if (_row - i >= 0 && this.boards[boardId].tiles[_row - i][_col].status == 'hit' && this.boards[boardId].tiles[_row - i][_col].name == name) {
                            count = count + 1;
                        }
                        if (_col - i >= 0 && this.boards[boardId].tiles[_row][_col - i].status == 'hit' && this.boards[boardId].tiles[_row][_col - 1].name == name) {
                            count = count + 1;
                        }
                    }
                    if (count + 1 == len) {
                        console.log('sunk');
                        this.sink(+row, +col);
                        return;
                    } else {
                        return;
                    }
                };
                GameComponent.prototype.sink = function(row, col) {
                    var boardId = 1;
                    var len = this.boards[boardId].tiles[row][col].lenght,
                        name = this.boards[boardId].tiles[row][col].name;
                    var _row = row;
                    var _col = col;
                    this.boards[boardId].tiles[row][col].lenght = 's';
                    for (var i = 1; i < len; i++) {
                        if (_row + i < 10 && this.boards[boardId].tiles[_row + i][_col].status == 'hit' && this.boards[boardId].tiles[_row + i][_col].name == name) {
                            this.boards[boardId].tiles[row + i][col].lenght = 's';
                        }
                        if (_col + i < 10 && this.boards[boardId].tiles[_row][_col + i].status == 'hit' && this.boards[boardId].tiles[_row][_col + i].name == name) {
                            this.boards[boardId].tiles[row][col + i].lenght = 's';
                        }
                        if (_row - i >= 0 && this.boards[boardId].tiles[_row - i][_col].status == 'hit' && this.boards[boardId].tiles[_row - i][_col].name == name) {
                            this.boards[boardId].tiles[row - i][col].lenght = 's';
                        }
                        if (_col - i >= 0 && this.boards[boardId].tiles[_row][_col - i].status == 'hit' && this.boards[boardId].tiles[_row][_col - i].name == name) {
                            this.boards[boardId].tiles[row][col - i].lenght = 's';
                        }
                    }
                };
                GameComponent.prototype.esc = function() {
                    this.escable = false;
                    this._router.navigate(["/home"]);
                    this.dataService.gameDelete(this.gameId);
                    this.socket.emit('refreshOrder');
                    this.socket.emit('esc');
                    this.dataService.userPlay(this.id, false);
                };
                GameComponent.prototype.home = function() {
                    this._router.navigate(["/home"]);
                };
                GameComponent.prototype.browse = function() {
                    this.browsing = !this.browsing;
                    this.browseData();
                };
                GameComponent.prototype.changeBoard = function() {
                    this.switch = !this.switch;
                };
                GameComponent.prototype.return = function() {
                    this.escable = false;
                    this.dataService.gameDelete(this.gameId);
                    this.socket.emit('refreshOrder');
                    this._router.navigate(["/home"]);
                    this.dataService.userPlay(this.id, false);
                };
                GameComponent.prototype.concede = function() {
                    if (confirm('If you concede, you will leave the game and be given a loss, continue?')) {
                        this.concedable = false;
                        console.log('You concede, your opponent has won the game');
                        this.dataService.userLoss(this.id);
                        this.conceded = true;
                        this.socket.emit('concede', this.username);
                        this.dataService.gameDelete(this.gameId);
                        this._router.navigate(["/home"]);
                    }
                    this.dataService.userPlay(this.id, false);
                };
                GameComponent.prototype.postGame = function(code) {
                    var _this = this;
                    this.gData.username = this.username;
                    this.gData.userId = code;
                    this.dataService.createGame(this.gData)
                        .subscribe(function(res) {
                            console.log(_this.gData);
                        }, function(err) { return console.log(err); });
                };
                GameComponent.prototype.beginGame = function() {
                    this.queuing = true;
                    this.browsing = false;
                    this.socket.emit('begin');
                };
                GameComponent.prototype.join = function(code) {
                    this.queuing = true;
                    this.browsing = false;
                    this.socket.emit('join', code);
                    this.dataService.gameDelete(code);
                    this.socket.emit('refreshOrder');
                };
                GameComponent.prototype.browseData = function() {
                    var _this = this;
                    this.dataService.getGames().subscribe(function(data) {
                        _this.games = data.games;
                    });
                };
                GameComponent.prototype.createBoard = function(size) {
                    if (size === void 0) { size = 10; }
                    var tiles = [];
                    for (var i = 0; i < size; i++) {
                        tiles[i] = [];
                        for (var j = 0; j < size; j++) {
                            tiles[i][j] = { used: false, value: 0, status: '', lenght: 0, name: '' };
                        }
                    }
                    var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"]({
                        Player: new src_app_player__WEBPACK_IMPORTED_MODULE_5__["Player"]({ id: this.authService.getId(), username: this.authService.getUsername() }),
                        tiles: tiles
                    });
                    this.boards.unshift(board);
                    return tiles;
                };
                __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
                    __metadata("design:type", Function),
                    __metadata("design:paramtypes", []),
                    __metadata("design:returntype", void 0)
                ], GameComponent.prototype, "goToPage", null);
                GameComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-game',
                        template: __webpack_require__( /*! ./game.component.html */ "./src/app/components/game/game.component.html"),
                        styles: [__webpack_require__( /*! ./game.component.css */ "./src/app/components/game/game.component.css")],
                        providers: []
                    }),
                    __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
                    ])
                ], GameComponent);
                return GameComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/home/home.component.css":
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/components/home/home.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/components/home/home.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div style=\"text-align: center\" *ngIf=\"!this.test\"> \n  <button class=\"play\" routerLink=\"/game\" routerLinkActive=\"active\">Play</button>\n</div>\n<div>\n  <h3 style=\"text-align:center; width: 50%; margin-left:25%\">Welcome {{this.me.username}}, click the button above to start playing but be warned, if you refresh or leave the page while in game with another player you will automatically concede.</h3>\n</div>\n<div *ngIf=\"this.test\" style=\"text-align:center; width: 50%\">\n  <p>It appears you are already in game, feel free to use this tab to check the rankings or use the messaging system, however you cannot play more than one game at a time</p>\n</div>"

            /***/
        }),

        /***/
        "./src/app/components/home/home.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var HomeComponent = /** @class */ (function() {
                function HomeComponent(authService, dataService) {
                    this.authService = authService;
                    this.dataService = dataService;
                    this.me = {
                        score: 0,
                        id: '',
                        username: ''
                    };
                }
                HomeComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.me.username = this.authService.getUsername();
                    this.me.id = this.authService.getId();
                    this.dataService.userPlay(this.me.id, false);
                    setTimeout(function() {
                        _this.dataService.getPlay(_this.me.id).subscribe(function(data) {
                            _this.test = data.user.inGame;
                        });
                    }, 50);
                };
                HomeComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-home',
                        template: __webpack_require__( /*! ./home.component.html */ "./src/app/components/home/home.component.html"),
                        styles: [__webpack_require__( /*! ./home.component.css */ "./src/app/components/home/home.component.css")]
                    }),
                    __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
                    ])
                ], HomeComponent);
                return HomeComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/messages/messages.component.css":
        /*!************************************************************!*\
          !*** ./src/app/components/messages/messages.component.css ***!
          \************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/components/messages/messages.component.html":
        /*!*************************************************************!*\
          !*** ./src/app/components/messages/messages.component.html ***!
          \*************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div>\n    <div id=\"form\">\n        <form>\n            <label>To: </label>\n            <br>\n            <input value='' [value]=\"inputVar\" type=\"text\" placeholder=\"Insert Recipient Username\" [(ngModel)]=\"messageData.recipient\" name=\"recipient\" required>\n            <br><br>\n            <label>Message:</label>\n            <br>\n            <textarea rows=\"5\" cols=\"80\" placeholder=\"Insert the message\" [(ngModel)]=\"messageData.content\" name=\"content\" required></textarea>\n            <br>\n            <button type=\"button\" (click)=\"postMessage()\">Send</button>\n\n            <h2 id=\"error\" style=\"color:red\"></h2>\n        </form>\n    </div>\n</div>\n<hr>\n<div *ngFor=\"let message of messages\">\n    <h3>From: {{message.author}}</h3>\n    <p>{{message.date}}</p>\n    <p style=\"text-indent:2em\"> <strong>Message:</strong> {{message.content}}</p>\n    <button (click)='delete(message._id)'>Delete</button>\n    <hr>\n</div>"

            /***/
        }),

        /***/
        "./src/app/components/messages/messages.component.ts":
        /*!***********************************************************!*\
          !*** ./src/app/components/messages/messages.component.ts ***!
          \***********************************************************/
        /*! exports provided: MessagesComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var MessagesComponent = /** @class */ (function() {
                function MessagesComponent(dataService, authService) {
                    this.dataService = dataService;
                    this.authService = authService;
                    this.user = this.authService.getUsername();
                    this.messageData = {};
                    this.inputVar = '';
                    this.todayDate = new Date();
                    this.dateToday = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' ' +
                        this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
                }
                MessagesComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.dataService.getMessages(this.user).subscribe(function(data) {
                        _this.messages = data.message;
                    });
                };
                MessagesComponent.prototype.delete = function(id) {
                    console.log("message deleted");
                    this.dataService.deleteMessage(id);
                    location.reload();
                };
                MessagesComponent.prototype.postMessage = function() {
                    var _this = this;
                    this.dataService.isValid(this.messageData.recipient, function(isValid) {
                        if (isValid) {
                            _this.messageData.date = _this.dateToday;
                            _this.messageData.author = _this.authService.getUsername();
                            _this.authService.postMessage(_this.messageData)
                                .subscribe(function(res) {
                                    console.log(_this.messageData);
                                    location.reload();
                                }, function(err) { return console.log(err); });
                        } else {
                            console.log("Recipient not found");
                            alert('User does not exist');
                        }
                    });
                };
                MessagesComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-messages',
                        template: __webpack_require__( /*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
                        styles: [__webpack_require__( /*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
                ], MessagesComponent);
                return MessagesComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/user-delete/user-delete.component.css":
        /*!******************************************************************!*\
          !*** ./src/app/components/user-delete/user-delete.component.css ***!
          \******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "table, th, td{\r\n    border: 1px solid #000000;\r\n    padding: 0.5em 0.5em;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n}\r\n\r\ntable{\r\n    width: 100%\r\n}"

            /***/
        }),

        /***/
        "./src/app/components/user-delete/user-delete.component.html":
        /*!*******************************************************************!*\
          !*** ./src/app/components/user-delete/user-delete.component.html ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div style=\"text-align:center\">\n    <button (click)=\"refresh()\">Refresh data</button>\n\n<h1>Users</h1>\n\n<table>\n    <tr>\n        <th>Username</th>\n        <th>Email</th>\n        <th>Id</th>\n        <th>Admin</th>\n        <th>In game</th>\n        <th>Delete</th>\n        <th>Make admin</th>\n    </tr>\n    <tr *ngFor=\"let user of users\">\n        <td>{{user.username}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user._id}}</td>\n        <td>{{user.isAdmin}}</td>\n        <td>{{user.inGame}}</td>\n        <td><button *ngIf=\"!user.isAdmin\" (click)='delete(user._id)'>Delete</button></td>\n        <td><button *ngIf=\"!user.isAdmin\" (click)='makeAdmin(user._id)'>Make Admin</button>\n            <button *ngIf=\"user.isAdmin && user._id != myid\" (click)='unmakeAdmin(user._id)'>Remove Admin</button>\n        </td>\n    </tr>\n</table>\n</div>\n"

            /***/
        }),

        /***/
        "./src/app/components/user-delete/user-delete.component.ts":
        /*!*****************************************************************!*\
          !*** ./src/app/components/user-delete/user-delete.component.ts ***!
          \*****************************************************************/
        /*! exports provided: UserDeleteComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function() { return UserDeleteComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var UserDeleteComponent = /** @class */ (function() {
                function UserDeleteComponent(dataService, authService) {
                    this.dataService = dataService;
                    this.authService = authService;
                }
                UserDeleteComponent.prototype.delete = function(id) {
                    this.dataService.userDelete(id);
                    location.reload();
                };
                UserDeleteComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.dataService.getUsers().subscribe(function(data) {
                        _this.users = data.user;
                    });
                    this.myid = this.authService.getId();
                };
                UserDeleteComponent.prototype.refresh = function() {
                    var _this = this;
                    this.dataService.getUsers().subscribe(function(data) {
                        _this.users = data.user;
                    });
                };
                UserDeleteComponent.prototype.makeAdmin = function(id) {
                    var _this = this;
                    this.dataService.makeAdmin(id);
                    setTimeout(function() {
                        _this.refresh();
                    }, 50);
                };
                UserDeleteComponent.prototype.unmakeAdmin = function(id) {
                    var _this = this;
                    this.dataService.unmakeAdmin(id);
                    setTimeout(function() {
                        _this.refresh();
                    }, 50);
                };
                UserDeleteComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user-delete',
                        template: __webpack_require__( /*! ./user-delete.component.html */ "./src/app/components/user-delete/user-delete.component.html"),
                        styles: [__webpack_require__( /*! ./user-delete.component.css */ "./src/app/components/user-delete/user-delete.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
                        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
                    ])
                ], UserDeleteComponent);
                return UserDeleteComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/user-login/user-login.component.css":
        /*!****************************************************************!*\
          !*** ./src/app/components/user-login/user-login.component.css ***!
          \****************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/components/user-login/user-login.component.html":
        /*!*****************************************************************!*\
          !*** ./src/app/components/user-login/user-login.component.html ***!
          \*****************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n            <span class=\"anchor\" id=\"formLogin\"></span>\n\n            <!-- form card login -->\n            <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                    <h3 class=\"mb-0\">Login</h3>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form\">\n                        <div class=\"form-group\">\n                            <label for=\"uname1\">Email</label>\n                            <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.email\" name=\"email\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.password\" name=\"password\" required>\n                        </div>\n                        <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-success float-right\">Login</button>\n                    </form>\n                </div>\n                <!--/card-block-->\n            </div>\n            <!-- /form card login -->\n\n        </div>\n\n\n    </div>\n</div>"

            /***/
        }),

        /***/
        "./src/app/components/user-login/user-login.component.ts":
        /*!***************************************************************!*\
          !*** ./src/app/components/user-login/user-login.component.ts ***!
          \***************************************************************/
        /*! exports provided: UserLoginComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var UserLoginComponent = /** @class */ (function() {
                function UserLoginComponent(authService, _router) {
                    this.authService = authService;
                    this._router = _router;
                    this.loginUserData = {};
                }
                UserLoginComponent.prototype.ngOnInit = function() {};
                UserLoginComponent.prototype.loginUser = function() {
                    var _this = this;
                    this.authService.loginUser(this.loginUserData)
                        .subscribe(function(res) {
                            console.log(res);
                            localStorage.setItem('token', res.token);
                            _this._router.navigate(["/home"]);
                        }, function(err) { return alert('Wrong login credentials'); });
                };
                UserLoginComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user-login',
                        template: __webpack_require__( /*! ./user-login.component.html */ "./src/app/components/user-login/user-login.component.html"),
                        styles: [__webpack_require__( /*! ./user-login.component.css */ "./src/app/components/user-login/user-login.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
                ], UserLoginComponent);
                return UserLoginComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/user-signup/user-signup.component.css":
        /*!******************************************************************!*\
          !*** ./src/app/components/user-signup/user-signup.component.css ***!
          \******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = ""

            /***/
        }),

        /***/
        "./src/app/components/user-signup/user-signup.component.html":
        /*!*******************************************************************!*\
          !*** ./src/app/components/user-signup/user-signup.component.html ***!
          \*******************************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div class=\"py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n            <span class=\"anchor\" id=\"formLogin\"></span>\n\n            <!-- form card login -->\n            <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                    <h3 class=\"mb-0\">Sign up here!</h3>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form\">\n                        <div class=\"form-group\">\n                            <label for=\"uname1\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"registerUserData.email\" name=\"email\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"uname1\">Username</label>\n                            <input type=\"text\" [(ngModel)]=\"registerUserData.username\" name=\"username\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input type=\"password\" [(ngModel)]=\"registerUserData.password\" name=\"password\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-primary float-right\">Register</button>\n                    </form>\n                </div>\n                <!--/card-block-->\n            </div>\n            <!-- /form card login -->\n\n        </div>\n\n\n    </div>\n</div>"

            /***/
        }),

        /***/
        "./src/app/components/user-signup/user-signup.component.ts":
        /*!*****************************************************************!*\
          !*** ./src/app/components/user-signup/user-signup.component.ts ***!
          \*****************************************************************/
        /*! exports provided: UserSignupComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function() { return UserSignupComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var UserSignupComponent = /** @class */ (function() {
                function UserSignupComponent(authService, _router) {
                    this.authService = authService;
                    this._router = _router;
                    this.registerUserData = {};
                }
                UserSignupComponent.prototype.ngOnInit = function() {};
                UserSignupComponent.prototype.registerUser = function() {
                    var _this = this;
                    this.authService.registerUser(this.registerUserData)
                        .subscribe(function(res) {
                            //localStorage.setItem('token', res.token)
                            alert('Signup succesfully completed');
                            _this._router.navigate(['/login']);
                        }, function(err) { return console.log(err); });
                };
                UserSignupComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user-signup',
                        template: __webpack_require__( /*! ./user-signup.component.html */ "./src/app/components/user-signup/user-signup.component.html"),
                        styles: [__webpack_require__( /*! ./user-signup.component.css */ "./src/app/components/user-signup/user-signup.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
                    ])
                ], UserSignupComponent);
                return UserSignupComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/components/user/user.component.css":
        /*!****************************************************!*\
          !*** ./src/app/components/user/user.component.css ***!
          \****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "table, th, td{\r\n    border: 1px solid #000000;\r\n    padding: 0.5em 0.75em;\r\n    vertical-align: middle;\r\n    height: 50px;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n}\r\ntable{\r\n    width: 100%\r\n}\r\n.clickable{\r\n    cursor: pointer\r\n}\r\n.play{\r\n    font-size: 1.5em;\r\n}\r\nh3{\r\n    font-size: 1.5em\r\n}\r\np{\r\n    font-size:1.25em\r\n}\r\n"

            /***/
        }),

        /***/
        "./src/app/components/user/user.component.html":
        /*!*****************************************************!*\
          !*** ./src/app/components/user/user.component.html ***!
          \*****************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            module.exports = "<div style=\"text-align:center\">\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzOTcuNTAxIDM5Ny41MDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5Ny41MDEgMzk3LjUwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnIGlkPSJYTUxJRF8xNzE4XyI+Cgk8ZyBpZD0iWE1MSURfMTcxOV8iPgoJCTxwYXRoIGlkPSJYTUxJRF81MF8iIHN0eWxlPSJmaWxsOiNGNEIyQjA7IiBkPSJNMjYxLjY2NywzMTIuMjVIMTM1LjgzM1YxMTYuMjg4YzAtMTcuMTQyLDEzLjg5Ni0zMS4wMzgsMzEuMDM4LTMxLjAzOGg2My43NTggICAgYzE3LjE0MiwwLDMxLjAzOCwxMy44OTYsMzEuMDM4LDMxLjAzOFYzMTIuMjV6Ii8+CgkJPHBhdGggaWQ9IlhNTElEXzE3MjBfIiBzdHlsZT0iZmlsbDojQjM0MDRBOyIgZD0iTTI3MS42NjcsMzIyLjI1SDEyNS44MzNWMTE2LjI4OGMwLTIyLjYyOCwxOC40MDktNDEuMDM3LDQxLjAzOC00MS4wMzdoNjMuNzU4ICAgIGMyMi42MjgsMCw0MS4wMzgsMTguNDA5LDQxLjAzOCw0MS4wMzdWMzIyLjI1eiBNMTQ1LjgzMywzMDIuMjVoMTA1LjgzM1YxMTYuMjg4YzAtMTEuNi05LjQzOC0yMS4wMzctMjEuMDM4LTIxLjAzN0gxNjYuODcgICAgYy0xMS42LDAtMjEuMDM4LDkuNDM4LTIxLjAzOCwyMS4wMzdMMTQ1LjgzMywzMDIuMjVMMTQ1LjgzMywzMDIuMjV6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTcyM18iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzI0XyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik0zOTcuNSwzMjIuMjVIMjUxLjY2N3YtMTY4aDEwNC43OTZjMjIuNjI4LDAsNDEuMDM4LDE4LjQwOSw0MS4wMzgsNDEuMDM3aC0yMCAgICBjMC0xMS42LTkuNDM4LTIxLjAzNy0yMS4wMzgtMjEuMDM3aC04NC43OTZ2MTI4SDM3Ny41di01My43ODJoMjBWMzIyLjI1eiIvPgoJPC9nPgoJPGcgaWQ9IlhNTElEXzE3MjVfIj4KCQk8cGF0aCBpZD0iWE1MSURfMTcyNl8iIHN0eWxlPSJmaWxsOiNCMzQwNEE7IiBkPSJNMTQ1LjgzMywzMjIuMjVIMFYxNzUuMjg4YzAtMjIuNjI4LDE4LjQwOS00MS4wMzcsNDEuMDM4LTQxLjAzN2gxMDQuNzk2djE4OCAgICBIMTQ1LjgzM3ogTTIwLDMwMi4yNWgxMDUuODMzdi0xNDhINDEuMDM4Yy0xMS42LDAtMjEuMDM4LDkuNDM4LTIxLjAzOCwyMS4wMzdDMjAsMTc1LjI4OCwyMCwzMDIuMjUsMjAsMzAyLjI1eiIvPgoJPC9nPgoJPGcgaWQ9IlhNTElEXzE3MjlfIj4KCQk8cGF0aCBpZD0iWE1MSURfMTczMF8iIHN0eWxlPSJmaWxsOiNCMzQwNEE7IiBkPSJNMjIzLjE3MiwyMDcuNjk5djE1LjU2MWgtNDYuNjgzdi0xNS41NjFoMTUuMzQ1di0yNy41NTYgICAgYy0wLjY0OCwwLjg2NC0xLjY1OCwxLjc0OC0zLjAyNSwyLjY0N2MtMS4zNywwLjkwMi0yLjkwMSwxLjcyOS00LjU5MywyLjQ4NWMtMS42OTMsMC43NTYtMy40MjIsMS4zNy01LjE4NywxLjgzNyAgICBjLTEuNzY2LDAuNDY5LTMuMzMzLDAuNzAyLTQuNzAxLDAuNzAydi0xNS45OTNjMS4xNTEsMCwyLjY0Ny0wLjM5NSw0LjQ4NC0xLjE4OGMxLjgzNy0wLjc5MiwzLjY1Ni0xLjc0Niw1LjQ1OC0yLjg2NCAgICBjMS44LTEuMTE2LDMuNDIxLTIuMjUxLDQuODYzLTMuNDA0YzEuNDQtMS4xNTIsMi4zNC0yLjA4OSwyLjcwMS0yLjgxaDE3LjYxNHY0Ni4xNDJoMTMuNzI0VjIwNy42OTl6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTczMl8iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzMzXyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik00Ni4wMDksMjc1Ljc5OWMwLTMuMzg1LDAuMjUxLTYuNDExLDAuNzU2LTkuMDc3ICAgIGMwLjUwMy0yLjY2NSwxLjM2OC01LjA5NiwyLjU5NC03LjI5NGMxLjIyNC0yLjE5NiwyLjg4LTQuMjMxLDQuOTcxLTYuMTA1YzIuMDg5LTEuODczLDQuNzE4LTMuNzA5LDcuODg5LTUuNTExICAgIGMzLjM4NS0xLjg3Miw2LjIxMy0zLjQyLDguNDgzLTQuNjQ2YzIuMjY5LTEuMjI0LDQuMDY5LTIuMzA1LDUuNDAzLTMuMjQyYzEuMzMzLTAuOTM2LDIuMjg2LTEuNzgzLDIuODY0LTIuNTQgICAgYzAuNTc2LTAuNzU2LDAuODY0LTEuNjM4LDAuODY0LTIuNjQ3YzAtMi4wMTYtMC43MjEtMy42MzctMi4xNjEtNC44NjNjLTEuNDQyLTEuMjI0LTMuNDk1LTEuODM3LTYuMTYtMS44MzcgICAgYy0zLjAyNSwwLTUuNjU2LDAuNzM5LTcuODg4LDIuMjE1Yy0yLjIzNCwxLjQ3OC00LjM5NSwzLjQwNC02LjQ4NCw1Ljc4MmwtMTEuMDIyLTEyLjc1MWMxLjE1Mi0xLjI5NywyLjcwMi0yLjU1Niw0LjY0Ny0zLjc4MiAgICBjMS45NDUtMS4yMjQsNC4xNDItMi4zMjMsNi41OTItMy4yOTZjMi40NDgtMC45NzMsNS4xMzMtMS43NDYsOC4wNS0yLjMyM2MyLjkxOC0wLjU3Niw1Ljk2LTAuODY1LDkuMTMxLTAuODY1ICAgIGM3Ljc4MSwwLDEzLjc0MSwxLjY5NCwxNy44ODQsNS4wNzljNC4xNDIsMy4zODcsNi4yMTQsNy45NjEsNi4yMTQsMTMuNzI0YzAsMi4zNzctMC4zNzgsNC41MDMtMS4xMzUsNi4zNzYgICAgYy0wLjc1NiwxLjg3NC0xLjc0OCwzLjU0OS0yLjk3Miw1LjAyNWMtMS4yMjYsMS40NzgtMi41OTQsMi43NzQtNC4xMDYsMy44OWMtMS41MTMsMS4xMTgtMy4wNjMsMi4xNDUtNC42NDYsMy4wOCAgICBjLTEuMDgxLDAuNjQ4LTIuMzc3LDEuNDA1LTMuODkxLDIuMjdjLTEuNTEzLDAuODY0LTMuMDA5LDEuNzQ4LTQuNDg0LDIuNjQ3Yy0xLjQ3OCwwLjkwMi0yLjg0NywxLjgwMi00LjEwNiwyLjcwMiAgICBjLTEuMjYxLDAuOTAxLTIuMjE1LDEuNzEyLTIuODY0LDIuNDMxaDI5LjM5M3YxNS41NjFINDYuMDA5VjI3NS43OTl6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTczNV8iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzM2XyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik0zMzUuNDYxLDI0Mi4yNzFjMS45NjIsMC4zOCwzLjc2OCwxLjA2Miw1LjQxNSwyLjA0MiAgICBjMS42NDYsMC45ODMsMy4wNTUsMi4yMTgsNC4yMjgsMy43MDVjMS4xNzEsMS40ODksMi4wNzQsMy4xOTksMi43MDgsNS4xM2MwLjYzMiwxLjkzMywwLjk1LDQuMDA2LDAuOTUsNi4yMjMgICAgYzAsMi45NzgtMC42MDMsNS42NTItMS44MDUsOC4wMjdjLTEuMjA0LDIuMzc1LTIuOTMsNC40MDEtNS4xNzgsNi4wOGMtMi4yNDksMS42NzctNC45NTYsMi45NzYtOC4xMjMsMy44OTUgICAgYy0zLjE2NywwLjkxNy02LjcxMywxLjM3Ny0xMC42NCwxLjM3N2MtOS42MjgsMC0xNy4xNjQtMi44MTktMjIuNjEtOC40NTVsOC4xNy0xMC44M2MxLjcxLDEuNzczLDMuNjU3LDMuMTIsNS44NDIsNC4wMzcgICAgYzIuMTg1LDAuOTE5LDQuNzk3LDEuMzc4LDcuODM3LDEuMzc4YzcuMTU2LDAsMTAuNzM1LTIuNjI3LDEwLjczNS03Ljg4NWMwLTIuODUtMS4wNjItNS4wMDItMy4xODMtNi40NiAgICBjLTIuMTIzLTEuNDU2LTUuNDYyLTIuMTg1LTEwLjAyMi0yLjE4NWgtMi44NXYtMTAuOTI1aDMuMTM1YzMuNTQ2LDAsNi4zMTgtMC43MjgsOC4zMTMtMi4xODUgICAgYzEuOTk1LTEuNDU2LDIuOTkzLTMuMzg3LDIuOTkzLTUuNzk1YzAtMi4wOS0wLjcyOS0zLjY3Mi0yLjE4NS00Ljc1Yy0xLjQ1OC0xLjA3Ni0zLjM4OS0xLjYxNS01Ljc5NS0xLjYxNSAgICBjLTIuNTk4LDAtNC45NTcsMC42MTgtNy4wNzgsMS44NTNjLTIuMTIzLDEuMjM1LTMuOTExLDIuOTkzLTUuMzY3LDUuMjcybC05LjU5NS0xMS4wMmMxLjAxMi0xLjMzLDIuMzQyLTIuNTY1LDMuOTktMy43MDUgICAgYzEuNjQ2LTEuMTQsMy41MTUtMi4xMDQsNS42MDUtMi44OTdjMi4wOS0wLjc5MSw0LjMzNy0xLjQwOSw2Ljc0NS0xLjg1M2MyLjQwNi0wLjQ0Miw0Ljg3Ni0wLjY2NSw3LjQxLTAuNjY1ICAgIGMzLjM1NiwwLDYuNDI3LDAuMzk2LDkuMjE1LDEuMTg4YzIuNzg2LDAuNzkzLDUuMTYxLDEuOTMzLDcuMTI1LDMuNDJjMS45NjIsMS40ODksMy40ODIsMy4yNjMsNC41Niw1LjMyICAgIGMxLjA3NiwyLjA1OSwxLjYxNSw0LjM1NSwxLjYxNSw2Ljg4OGMwLDEuOS0wLjMwMSwzLjcwNS0wLjkwMyw1LjQxNWMtMC42MDMsMS43MS0xLjQ0MSwzLjI2My0yLjUxNyw0LjY1NSAgICBjLTEuMDc4LDEuMzk0LTIuMzYsMi41NS0zLjg0OCwzLjQ2N0MzMzguODY1LDI0MS4zMzcsMzM3LjIzMywyNDEuOTU0LDMzNS40NjEsMjQyLjI3MXoiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\"\n    />\n</div>\n\n<hr>\n<div style=\"margin-bottom:2em\">\n    <h2>Search</h2> \n    <form class=\"form\" style=\"margin-bottom:2em\">\n            <div class=\"form-group\" >\n                <label for=\"uname1\">Username</label>\n                <input type=\"text\" [(ngModel)]=\"searchUsername\" name=\"username\" required>\n                <button type=\"button\" (click)=\"search(searchUsername)\" >Search</button>\n            </div>\n            \n    </form>\n\n    <button class=\"play\" type=\"button\" (click)=\"myRank()\" >My stats</button>\n\n    <div *ngIf=\"searched\">\n        <h3>{{searchedUsername}} {{ me == true ? \"(Me)\" : \"\"}}</h3>\n        <p>W/L ratio: {{searched.win/searched.losses | number: '1.2-2' }}</p>\n        <p>Wins: {{searched.win}}</p>\n        <p>Losses: {{searched.losses}}</p>\n        <p>Played: {{searched.win+searched.losses}}</p>\n    </div>\n</div>\n<hr>\n\n<table id=\"myTable\">\n    <tr>\n        <th>#</th>\n        <th>User</th>\n        <th class=\"clickable\" (click)=\"sortTable(2)\">W/L ratio</th>\n        <th class=\"clickable\" (click)=\"sortTable(3)\">Wins</th>\n        <th class=\"clickable\" (click)=\"sortTable(4)\">Losses</th>\n        <th class=\"clickable\" (click)=\"sortTable(5)\">Played</th>\n    </tr>\n    <tr *ngFor=\"let user of users | slice:0:10; let i = index\">\n            <td *ngIf=\"i > 2\"> # {{i +1}} </td>\n            <td *ngIf=\"i == 0\"> <img src=\"../../../assets/gold-medal.png\" width=\"64px\"> </td>\n            <td *ngIf=\"i == 1\"> <img src=\"../../../assets/silver-medal.png\" width=\"64px\"> </td>\n            <td *ngIf=\"i == 2\"> <img src=\"../../../assets/bronze-medal.png\" width=\"64px\"> </td>\n            <td>{{user.username}}</td>\n            <td>{{user.win/user.losses | number: '1.2-2' }}</td>\n            <td>{{user.win}}</td>\n            <td>{{user.losses}}</td>\n            <td>{{user.win+user.losses}}</td>\n    </tr>\n</table>\n<div *ngFor=\"let user of users | slice:10:end ; let i = index\">\n        <p> # {{i +11}} <strong>{{user.username  }}</strong></p> \n</div>\n\n"

            /***/
        }),

        /***/
        "./src/app/components/user/user.component.ts":
        /*!***************************************************!*\
          !*** ./src/app/components/user/user.component.ts ***!
          \***************************************************/
        /*! exports provided: UserComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var UserComponent = /** @class */ (function() {
                function UserComponent(dataService, authService) {
                    this.dataService = dataService;
                    this.authService = authService;
                    this.done = false;
                    this.searchUsername = "";
                    this.searchedUsername = "";
                    this.me = false;
                }
                UserComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.dataService.getUsers().subscribe(function(data) {
                        _this.users = data.user;
                    });
                };
                UserComponent.prototype.search = function(username) {
                    var _this = this;
                    this.dataService.ranking(username).subscribe(function(data) {
                        _this.searchedUsername = username;
                        _this.searched = data.user;
                        if (_this.authService.getUsername() == username) {
                            _this.me = true;
                        } else {
                            _this.me = false;
                        }
                    });
                    return;
                };
                UserComponent.prototype.myRank = function() {
                    this.search(this.authService.getUsername());
                };
                UserComponent.prototype.sortTable = function(n) {
                    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
                    table = document.getElementById("myTable");
                    switching = true;
                    dir = "asc";
                    while (switching) {
                        switching = false;
                        rows = table.rows;
                        for (i = 1; i < (rows.length - 1); i++) {
                            shouldSwitch = false;
                            x = rows[i].getElementsByTagName("TD")[n];
                            y = rows[i + 1].getElementsByTagName("TD")[n];
                            if (dir == "desc") {
                                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                                    shouldSwitch = true;
                                    break;
                                }
                            }
                        }
                        if (shouldSwitch) {
                            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                            switching = true;
                            switchcount++;
                        } else {
                            if (switchcount == 0 && dir == "asc") {
                                dir = "desc";
                                switching = true;
                            }
                        }
                    }
                };
                UserComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user',
                        template: __webpack_require__( /*! ./user.component.html */ "./src/app/components/user/user.component.html"),
                        styles: [__webpack_require__( /*! ./user.component.css */ "./src/app/components/user/user.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
                ], UserComponent);
                return UserComponent;
            }());



            /***/
        }),

        /***/
        "./src/app/player.ts":
        /*!***************************!*\
          !*** ./src/app/player.ts ***!
          \***************************/
        /*! exports provided: Player */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
            var Player = /** @class */ (function() {
                function Player(values) {
                    if (values === void 0) { values = {}; }
                    Object.assign(this, values);
                }
                return Player;
            }());



            /***/
        }),

        /***/
        "./src/app/services/auth.service.ts":
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            /* harmony import */
            var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
            /* harmony import */
            var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };




            var AuthService = /** @class */ (function() {
                function AuthService(http, _router) {
                    this.http = http;
                    this._router = _router;
                }
                AuthService.prototype.registerUser = function(user) {
                    return this.http.post("http://10.0.2.2:3000/user/signup", user);
                };
                AuthService.prototype.postMessage = function(message) {
                    return this.http.post("http://10.0.2.2:3000/messages", message);
                };
                AuthService.prototype.loginUser = function(user) {
                    return this.http.post("http://10.0.2.2:3000/user/login", user);
                };
                AuthService.prototype.logoutUser = function() {
                    localStorage.removeItem('token');
                    this._router.navigate(['/']);
                };
                AuthService.prototype.getToken = function() {
                    return localStorage.getItem('token');
                };
                AuthService.prototype.loggedIn = function() {
                    return !!localStorage.getItem('token');
                };
                AuthService.prototype.getId = function() {
                    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
                    return token.userId;
                };
                AuthService.prototype.getUsername = function() {
                    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
                    return token.username;
                };
                AuthService.prototype.getEmail = function() {
                    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
                    return token.email;
                };
                AuthService.prototype.isAdmin = function() {
                    var token = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(this.getToken());
                    if (token.isAdmin == true) {
                        return true;
                    } else {
                        return false;
                    }
                };
                AuthService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
                    ])
                ], AuthService);
                return AuthService;
            }());



            /***/
        }),

        /***/
        "./src/app/services/data.service.ts":
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            //import { Observable } from 'rxjs/Observable';

            var DataService = /** @class */ (function() {
                function DataService(http, _router) {
                    this.http = http;
                    this._router = _router;
                }
                DataService.prototype.deleteMessage = function(id) {
                    this.http.delete('http://10.0.2.2:3000/messages/' + id).subscribe(function(data) {
                        return console.log('Message deleted');
                    });
                };
                DataService.prototype.getUsers = function() {
                    return this.http.get('http://10.0.2.2:3000/user');
                };;
                DataService.prototype.getGames = function() {
                    return this.http.get('http://10.0.2.2:3000/games');
                };;
                DataService.prototype.getAdmin = function() {
                    return this.http.get('http://10.0.2.2:3000/user');
                };
                DataService.prototype.ranking = function(username) {
                    return this.http.get('http://10.0.2.2:3000/user/' + username);
                };
                DataService.prototype.userDelete = function(id) {
                    this.http.delete('http://10.0.2.2:3000/user/' + id).subscribe(function(data) {
                        return console.log('User deleted');
                    });
                };
                DataService.prototype.userWin = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/win", true).subscribe(function(data) {
                        return console.log('Win added');
                    });
                };
                DataService.prototype.userLoss = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/loss", true).subscribe(function(data) {
                        return console.log('Loss added');
                    });
                };
                DataService.prototype.userPlay = function(id, check) {
                    if (check) {
                        this.http.patch('http://10.0.2.2:3000/user/' + id + "/playing", true).subscribe(function(data) {
                            return console.log('user in game');
                        });
                    } else {
                        this.http.patch('http://10.0.2.2:3000/user/' + id + "/notPlaying", true).subscribe(function(data) {
                            return console.log('user not in game');
                        });
                    }
                };
                DataService.prototype.makeAdmin = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/makeAdmin", false).subscribe(function(data) {
                        return console.log('admin added');
                    });
                };
                DataService.prototype.unmakeAdmin = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/unmakeAdmin", true).subscribe(function(data) {
                        return console.log('admin removed');
                    });
                };
                DataService.prototype.createGame = function(game) {
                    return this.http.post("http://10.0.2.2:3000/games", game);
                };
                DataService.prototype.gameDelete = function(code) {
                    return this.http.delete('http://10.0.2.2:3000/games/' + code).subscribe(function(data) {
                        return console.log('Game removed from list');
                    });
                };
                DataService.prototype.getPlay = function(id) {
                    return this.http.get('http://10.0.2.2:3000/user/' + id + '/status');
                };
                DataService.prototype.getMessages = function(username) {
                    return this.http.get('http://10.0.2.2:3000/messages/' + username);
                };
                DataService.prototype.isValid = function(username, callback) {
                    this.http.get("http://10.0.2.2:3000/user/" + username + "/check").subscribe(function(data) {
                        callback(data);
                    });
                };
                DataService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
                ], DataService);
                return DataService;
            }());



            /***/
        }),

        /***/
        "./src/app/services/token-interceptor.service.ts":
        /*!*******************************************************!*\
          !*** ./src/app/services/token-interceptor.service.ts ***!
          \*******************************************************/
        /*! exports provided: TokenInterceptorService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./data.service */ "./src/app/services/data.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function(decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function(k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };



            var TokenInterceptorService = /** @class */ (function() {
                function TokenInterceptorService(injector) {
                    this.injector = injector;
                }
                TokenInterceptorService.prototype.intercept = function(req, next) {
                    var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
                    var dataService = this.injector.get(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);
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



            /***/
        }),

        /***/
        "./src/environments/environment.ts":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


            /***/
        }),

        /***/
        "./src/main.ts":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(function(err) { return console.error(err); });


            /***/
        }),

        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! C:\Users\Manuel\Desktop\WAT\Battleship-master\Battleship-master\Battleship-master\battleship-mobile\src\main.ts */ "./src/main.ts");


            /***/
        }),

        /***/
        1:
        /*!********************!*\
          !*** ws (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

            /* (ignored) */

            /***/
        })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main.js.map