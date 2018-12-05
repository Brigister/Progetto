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

            module.exports = ""

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

            module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n        Welcome to {{ title }}! <br> Welcome to Favelas!\n    </h1>\n</div>\n<div style=\"text-align:center\">\n    <button *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</button>\n    <button *ngIf=\"!_authService.loggedIn()\" routerLink=\"/signup\" routerLinkActive=\"active\">Registrati</button>\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/game\" routerLinkActive=\"active\">Gioca al Gioco</button>\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/ranking\" routerLinkActive=\"active\">Classifica</button>\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/message\" routerLinkActive=\"active\">Messaggi</button>\n    <button *ngIf=\"_authService.loggedIn() && _authService.isAdmin()\" routerLink=\"/delete\" routerLinkActive=\"active\">Gestisci Profili</button>\n    <button *ngIf=\"_authService.loggedIn()\" routerLink=\"/\" routerLinkActive=\"active\" (click)=\"_authService.logoutUser()\">Logout</button>\n\n</div>\n\n<hr>\n\n<router-outlet></router-outlet>"

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
                function AppComponent(_authService) {
                    this._authService = _authService;
                    this.title = 'battleship';
                }
                AppComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-root',
                        template: __webpack_require__( /*! ./app.component.html */ "./src/app/app.component.html"),
                        styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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

            module.exports = ".content table td,\r\n.content table th {\r\n    border: 1px solid #dbdbdb;\r\n    padding: 0.5em 0.75em;\r\n    vertical-align: middle;\r\n    height: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.content table {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content table tr:hover {\r\n    background-color: transparent;\r\n}\r\n\r\n.battleship-tile:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.hit {\r\n    background-color: red !important;\r\n}\r\n\r\n.miss {\r\n    background-color: aqua !important;\r\n}"

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

            module.exports = "<div>\n    <button (click)=\"israel()\">cliccami per porre fine allo stato di Israele</button>\n</div>\n\n\n<!-- ./src/app/app.component.html -->\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"content\">\n            <h1 class=\"title\">Ready to sink some battleships?</h1>\n            <hr>\n\n            <!-- shows when a player has won the game -->\n            <section *ngIf=\"winner\" class=\"notification is-success has-text-centered\" style=\"color:white\">\n                <!--<h1>Player {{ winner.player.getUsername }} has won the game!</h1>-->\n            </section>\n\n            <!-- shows while waiting for 2nd user to join -->\n            <div *ngIf=\"players == false\">\n                <h2>Waiting for 2nd user to join...</h2>\n            </div>\n\n            <div *ngIf=\"players && !gamedata.sent\">\n                <h2>Fase di Posiziamento - Posiziona le tue barche</h2>\n                <p *ngIf=\"!submittable\">Stai posizionando la Barca da {{ship_try[0]}} unità</p>\n\n                <button id=\"cambio\" (click)=\"verPos($event)\">Posizionamento Verticale</button>\n            </div>\n\n            <div *ngIf=\"end\">\n                <h2>You win! congratulations! leave this tab to start another game.</h2>\n            </div>\n            <div *ngIf=\"gamedata.loses\">\n                <h2>You lose, leave this tab to start another game.</h2>\n            </div>\n\n            <div *ngIf=\"submittable\">\n                <button (click)=\"submitBoard()\">inizia l'intifada</button>\n            </div>\n            <div *ngIf=\"deletable\">\n                <button (click)=\"deleteShips()\">cancella israele</button>\n            </div>\n\n            <!-- loops through the boards array and displays the player and board tiles -->\n            <div *ngIf=\"gamedata.notOver\" class=\"columns\">\n                <div class=\"column has-text-centered\" *ngFor=\"let board of boards | slice:0:1; let i = index\">\n                    <table class=\"is-bordered\" [style.opacity]=\"i == player ? 0.5 : 1\">\n                        <tr *ngFor=\"let row of board.tiles; let j = index\">\n                            <td *ngFor=\"let col of row; let k = index\" (click)=\"shipPositioning($event)\" [style.background-color]=\"col.value == 1 ? 'black' : 'transparent'\" [class.miss]=\"col.status == 'miss'\" [class.hit]=\"col.status =='hit'\" [class.win]=\"col.status == 'win'\" [class.fail]=\"col.status !== 'win'\"\n                                class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\n                                {{ col.value == \"1\" ? (col.status == \"hit\" ? \"💀\" : \"X\") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? \"💀\" : \"🌊\")) }}\n                            </td>\n                        </tr>\n                    </table>\n                    <hr>\n\n                </div>\n                <div *ngIf=\"gamedata.received && gamedata.sent\">\n                    <div class=\"column has-text-centered\" *ngFor=\"let board of boards | slice:1:2; let i = index\">\n                        <table class=\"is-bordered\">\n                            <tr *ngFor=\"let row of board.tiles; let j = index\">\n                                <td *ngFor=\"let col of row; let k = index\" (click)=\"playerOneClick($event)\" [style.background-color]=\"col.used ? '' : 'transparent'\" [class.win]=\"col.status == 'win'\" [class.fail]=\"col.status !== 'win'\" class=\"battleship-tile\" id=\"t{{i}}{{j}}{{k}}\">\n                                    {{ col.value == \"1\" ? (col.status == \"hit\" ? \"💀\" : \"\") : (col.status == \"miss\" ? \"⛶\" : (col.status == \"hit\" ? \"💀\" : \"\")) }}\n                                </td>\n                            </tr>\n                        </table>\n                        <hr>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"has-text-centered\">\n                <span class=\"tag is-warning\" *ngIf=\"gamedata.turno == gamedata.numeroGiocatore\"> Your turn!</span>\n                <span class=\"tag is-danger\" *ngIf=\"gamedata.turno != gamedata.numeroGiocatore\"> Other player's turn.</span>\n                <h5 class=\"title\"><small>{{ players }} player(s) in game</small></h5>\n            </div>\n\n        </div>\n    </div>\n</div>"

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
            var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/board.service */ "./src/app/services/board.service.ts");
            /* harmony import */
            var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../board */ "./src/app/board.ts");
            /* harmony import */
            var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
            /* harmony import */
            var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */
            var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */
            var src_app_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/player */ "./src/app/player.ts");
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
                /*
                la roba che inizi le partite da solo
                login dello steso utente 2 volte
                */
                function GameComponent(boardService, authService, dataService) {
                    this.boardService = boardService;
                    this.authService = authService;
                    this.dataService = dataService;
                    this.players = false;
                    this.player = 0;
                    this.end = false;
                    this.loss = false;
                    this.ver = false;
                    //ship_try: any [] = [2, 2, 2, 2, 3, 3, 4, 4, 5];
                    this.ship_try = [2, 3, 4];
                    this.ship_test = this.ship_try.slice(0);
                    //metto nell'oggetto per fare il 1 livello di cheat del this
                    this.gamedata = {
                        socket: null,
                        gameId: '2',
                        numeroGiocatore: "",
                        turno: "",
                        score: 0,
                        loses: false,
                        notOver: true,
                        sent: false,
                        received: false
                    };
                    this.me = {
                        score: 0,
                        id: '',
                        username: ''
                    };
                    this.submittable = false;
                    this.deletable = false;
                    this.notOver = true;
                    this.score = 0;
                    this.username = this.authService.getUsername();
                    this.id = this.authService.getId();
                }
                GameComponent.prototype.ngOnInit = function() {
                    console.log(gameId);
                    this.me.username = this.authService.getUsername();
                    this.me.id = this.authService.getId();
                    //non puoi usare il this dentro la cosa perchè il contesto è un altro
                    //questo lo cheatta (livello2)
                    var self = this;
                    self.gamedata.turno = '1';
                    self.gamedata.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect('http://10.0.2.2:3000');
                    self.gamedata.socket.on('connect', function() {
                        // console.log(this.players);
                        console.log('utente connessionato');
                    });
                    self.gamedata.socket.on('new game', function(data) {
                        self.gamedata.gameId = data;
                        console.log("created game " + self.gamedata.gameId);
                        self.gamedata.numeroGiocatore = "1";
                    });
                    self.gamedata.socket.on('user joined', function(data) {
                        self.gamedata.gameId = data;
                        console.log("player joined game " + self.gamedata.gameId);
                        if (self.gamedata.numeroGiocatore == "") {
                            self.gamedata.numeroGiocatore = "2";
                            self.gamedata.socket.emit('start game');
                        }
                    });
                    //fa partire scambio
                    self.gamedata.socket.on('game started', function() {
                        //self.gamedata.gucci = true;
                        self.players = true;
                        console.log("game started!");
                        this.myBoard = self.boardService.createBoard();
                        console.log(this.myBoard);
                        //self.gamedata.socket.emit('scambio', this.myBoard)
                    });
                    //ricevo board
                    self.gamedata.socket.on('ack2', function(data) {
                        console.log('ricevo board');
                        var board = new _board__WEBPACK_IMPORTED_MODULE_2__["Board"]({
                            Player: new src_app_player__WEBPACK_IMPORTED_MODULE_6__["Player"]({ id: self.id, username: self.username }),
                            tiles: data
                        });
                        self.boardService.boards.push(board);
                        console.log(data);
                        self.gamedata.received = true;
                    });
                    /*self.gamedata.socket.on('ack2', function(data) {
                     console.log(data);
                    })*/
                    self.gamedata.socket.on('turn', function(nuovoTurno) {
                        //gestire colpo 
                        self.gamedata.turno = nuovoTurno;
                        console.log(self.gamedata.turno);
                    });
                    //viene eseguito quando perdo
                    self.gamedata.socket.on('loss', function(data) {
                        console.log('Your opponent ' + data + ' has won the game');
                        self.gamedata.loses = true;
                        self.gamedata.notOver = false;
                        self.authService.userLoss(self.me.id);
                    });
                    //cambio di posizionamento orizzontale/verticale
                    self.verPos = function(click) {
                        if (this.ver == false) {
                            this.ver = true;
                            console.log("stai mettendo le barche in verticale");
                            var cambio = document.getElementById("cambio");
                            cambio.innerText = "Posizionamento Orizzontale";
                        } else {
                            this.ver = false;
                            var cambio = document.getElementById("cambio");
                            cambio.innerText = "Posizionamento Verticale";
                        }
                    };
                    //manca da capire come controllare che non siano una attaccata all'altra
                    //c'è da cambiare che tiles[row-1][col] tiles[row+1][col] tiles[row][col-1] tiles[row][col+1]
                    //credo vada messa quando c'è il controllo che la ship è finita
                    //controllo diagonali???
                    //controlla che le barche siano messe correttamente
                    self.positionCheck = function(row, col, ship) {
                        var _row = row;
                        //var fif : number = row;
                        var _col = col;
                        var good = true;
                        //console.log(this.boards[0].tiles[row--][col].value)
                        if (this.ver) {
                            //controllo che le verticali non escano e che non ce ne siano adiacenti ai lati
                            for (var i = 0; i < ship; i++) {
                                if (_row > (board_size - 1)) {
                                    good = false;
                                }
                                console.log(_row + col);
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
                            //controlli
                        } else {
                            //controllo che le orizzontali non escano
                            for (var i = 0; i < ship; i++) {
                                if (_col > (board_size - 1)) {
                                    good = false;
                                }
                                console.log(_row + col);
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
                            //controlli
                        }
                        console.log(this.boards[0]);
                        return good;
                    };
                    //metto le caselle vicine settate a value = 2 e faccio il controllo se value =1 || value =2 non posso mettere la barca
                    // va messo una volta finito di applicare una barca, una nuova variabile true o false che abbiano tutte le caselle, 
                    //che diventa true in tutte le caselle intorno alla barca applicata e una volta che metti una nuova barca controlla 
                    //che non ci siano nella traiettoia +1 -1 row e +1 -1 col caselle che hanno quella variabile a true
                    self.shipPositioning = function(click) {
                        var id = click.target.id,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        if (this.ship_try.length == 0) {
                            console.log("non ci sono più barche");
                            return;
                        }
                        if (this.positionCheck(+row, +col, this.ship_try[0], tile)) {
                            for (var i = 0; i < this.ship_try[0]; i++) {
                                if (this.ver == true) {
                                    this.boards[boardId].tiles[row++][col].value = 1;
                                } else {
                                    this.boards[boardId].tiles[row][col++].value = 1;
                                }
                            }
                            this.ship_try.splice(0, 1);
                        } else {
                            alert("Nou");
                        }
                        if (this.ship_try.length == 0) {
                            this.submittable = true;
                        }
                        if (this.ship_try.length <= 8) {
                            this.deletable = true;
                        }
                    };
                    //MISSA WOWEI
                    self.playerOneClick = function(click) {
                        var id = click.target.id,
                            boardId = 1,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        console.log(tile);
                        this.gamedata.socket.emit('click', id);
                        if (!this.checkValidHit(boardId, tile)) {
                            console.log("no");
                            return;
                        }
                        if (self.gamedata.turno == self.gamedata.numeroGiocatore) {
                            console.log("TURNO DI " + self.gamedata.turno);
                            //per farlo server side devi mandargli l'evento dell'hit
                            //e l'info del giocatore del quale il turno è
                            self.gamedata.socket.emit('hit', self.gamedata.turno);
                            self.gamedata.turno = self.gamedata.turno == "1" ? "2" : "1";
                            if (tile.value == 1) {
                                //hit
                                this.boards[boardId].tiles[row][col].status = 'hit';
                                this.me.score++;
                                if (this.me.score == 1) { //da cambiare
                                    console.log(this.me.username + ', you win the game!');
                                    //viene eseguito quando vinco
                                    self.gamedata.socket.emit('victory', this.username);
                                    self.authService.userWin(this.me.id);
                                    this.gamedata.notOver = false;
                                    this.end = true;
                                }
                                console.log('hit, score: ' + this.me.score);
                            } else {
                                //miss
                                this.boards[boardId].tiles[row][col].status = 'miss';
                            }
                            this.boards[boardId].tiles[row][col].used = true;
                            this.boards[boardId].tiles[row][col].value = "X";
                            return this;
                        } else {
                            console.log("NON E' IL TUO TURNO CHEATER");
                        }
                    };
                    self.gamedata.socket.on('arrivoClick', function(data) {
                        //gestire colpo 
                        self.playerArrivoClick(data);
                        console.log(data);
                    });
                    self.playerArrivoClick = function(click) {
                        var id = click,
                            boardId = 0,
                            row = id.substring(2, 3),
                            col = id.substring(3, 4),
                            tile = this.boards[boardId].tiles[row][col];
                        console.log(click);
                        if (self.gamedata.turno != self.gamedata.numeroGiocatore) {
                            if (!this.checkValidHit(boardId, tile)) {
                                console.log("no");
                                return;
                            }
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
                    this.gamedata.socket.emit('ack1', this.boards[0].tiles);
                    this.gamedata.sent = true;
                    this.submittable = false;
                    this.deletable = false;
                    return;
                };
                GameComponent.prototype.deleteShips = function() {
                    this.boards.pop();
                    this.myBoard = this.boardService.createBoard();
                    var ship_testone = this.ship_test.slice(0);
                    this.ship_try = ship_testone;
                    this.deletable = false;
                    this.submittable = false;
                    console.log(this.ship_test);
                };
                //se premi sul bottone ti dice di chi è il turno
                GameComponent.prototype.israel = function() {
                    console.log("TURNO DI " + this.gamedata.turno + this.loss + this.end + this.gamedata.loses);
                };
                GameComponent.prototype.checkValidHit = function(tile) {
                    if (this.gamedata.loses == true) {
                        console.log('hai perso, la partita è finita');
                        return false;
                    }
                    if (this.end) {
                        return false;
                    }
                    if (tile.value == "X") {
                        return false;
                    }
                    return true;
                };
                Object.defineProperty(GameComponent.prototype, "winner", {
                    // winner property to determine if a user has won the game.
                    // once a user gets a score higher than the size of the game
                    // board, he has won.
                    get: function() {
                        return this.score >= 20;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameComponent.prototype, "boards", {
                    // get all boards and assign to boards property
                    get: function() {
                        return this.boardService.getBoards();
                    },
                    enumerable: true,
                    configurable: true
                });
                GameComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-game',
                        template: __webpack_require__( /*! ./game.component.html */ "./src/app/components/game/game.component.html"),
                        styles: [__webpack_require__( /*! ./game.component.css */ "./src/app/components/game/game.component.css")],
                        providers: [_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]]
                    }),
                    __metadata("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"],
                        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
                    ])
                ], GameComponent);
                return GameComponent;
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

            module.exports = "<div>\n    <div id=\"form\">\n        <form>\n            <label>Destinatario: </label>\n            <br>\n            <input value='' [value]=\"inputVar\" type=\"text\" placeholder=\"Inserisci Destinatio\" [(ngModel)]=\"messageData.recipient\" name=\"recipient\" required>\n            <br><br>\n            <label>Messaggio:</label>\n            <br>\n            <textarea rows=\"5\" cols=\"80\" placeholder=\"Inserisci il testo del messaggio\" [(ngModel)]=\"messageData.content\" name=\"content\" required></textarea>\n            <br>\n            <input type=\"submit\" (click)=\"postMessage()\">\n\n            <h2 id=\"error\" style=\"color:red\"></h2>\n        </form>\n    </div>\n</div>\n<hr>\n<div *ngFor=\"let message of messages\">\n    <h3>Da: {{message.author}}</h3>\n    <p>{{message.date}}</p>\n    <p style=\"text-indent:2em\"> <strong>Messaggio:</strong> {{message.content}}</p>\n    <button (click)='delete(message._id)'>Elimina</button>\n    <hr>\n</div>"

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
                function MessagesComponent(http, auth) {
                    this.http = http;
                    this.auth = auth;
                    this.utente = this.auth.getUsername();
                    this.messageData = {};
                    this.inputVar = '';
                    this.todayDate = new Date();
                    this.dateToday = (this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + ' ' +
                        this.todayDate.getDate() + '-' + ((this.todayDate.getMonth() + 1)) + '-' + this.todayDate.getFullYear());
                }
                MessagesComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    console.log(this.utente);
                    this.http.getMessages(this.utente).subscribe(function(data) {
                        console.log(data);
                        _this.messages = data.message;
                        console.log(_this.messages);
                    });
                };
                MessagesComponent.prototype.delete = function(id) {
                    console.log("succ");
                    this.http.deleteMessage(id);
                    location.reload();
                };
                MessagesComponent.prototype.postMessage = function() {
                    var _this = this;
                    this.auth.isValid(this.messageData.recipient, function(isValid) {
                        if (isValid) {
                            _this.messageData.date = _this.dateToday;
                            _this.messageData.author = _this.auth.getUsername();
                            _this.auth.postMessage(_this.messageData)
                                .subscribe(function(res) {
                                    console.log(_this.messageData);
                                    location.reload();
                                }, function(err) { return console.log(err); });
                        } else {
                            console.log("Destinatario inesistente");
                            // var p = document.createElement("div");
                            document.getElementById("error").innerHTML = "𝓓𝓮𝓼𝓽𝓲𝓷𝓪𝓽𝓪𝓻𝓲𝓸 𝓲𝓷𝓮𝓼𝓲𝓼𝓽𝓮𝓷𝓽𝓮";
                            //console.log(p);
                            // var addp = document.getElementById("error");
                            //document.body.insertBefore(p, addp.childNodes[0]);
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

            module.exports = ""

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

            module.exports = "<p>Users</p>\n<div *ngFor=\"let user of users\">\n    <h4>{{user.username}}</h4>\n    <p>{{user.email}}</p>\n    <p>{{user._id}}</p>\n    <button (click)='delete(user._id)'>Elimina</button>\n</div>"

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
                function UserDeleteComponent(http) {
                    this.http = http;
                }
                UserDeleteComponent.prototype.delete = function(id) {
                    this.http.userDelete(id);
                    location.reload();
                };
                UserDeleteComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.http.getUsers().subscribe(function(data) {
                        console.log(data);
                        _this.users = data.user;
                    });
                };
                UserDeleteComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user-delete',
                        template: __webpack_require__( /*! ./user-delete.component.html */ "./src/app/components/user-delete/user-delete.component.html"),
                        styles: [__webpack_require__( /*! ./user-delete.component.css */ "./src/app/components/user-delete/user-delete.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
                function UserLoginComponent(_auth, _router) {
                    this._auth = _auth;
                    this._router = _router;
                    this.loginUserData = {};
                }
                UserLoginComponent.prototype.ngOnInit = function() {};
                UserLoginComponent.prototype.loginUser = function() {
                    var _this = this;
                    this._auth.loginUser(this.loginUserData)
                        .subscribe(function(res) {
                            console.log(res);
                            localStorage.setItem('token', res.token);
                            _this._router.navigate(["/ranking"]);
                        }, function(err) { return console.log(err); });
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

            module.exports = "<div class=\"py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n            <span class=\"anchor\" id=\"formLogin\"></span>\n\n            <!-- form card login -->\n            <div class=\"card rounded-0\">\n                <div class=\"card-header\">\n                    <h3 class=\"mb-0\">Registrati Qui!</h3>\n                </div>\n                <div class=\"card-body\">\n                    <form class=\"form\">\n                        <div class=\"form-group\">\n                            <label for=\"uname1\">Email</label>\n                            <input type=\"text\" [(ngModel)]=\"registerUserData.email\" name=\"email\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"uname1\">Username</label>\n                            <input type=\"text\" [(ngModel)]=\"registerUserData.username\" name=\"username\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input type=\"password\" [(ngModel)]=\"registerUserData.password\" name=\"password\" class=\"form-control rounded-0\" required>\n                        </div>\n                        <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-primary float-right\">Register</button>\n                    </form>\n                </div>\n                <!--/card-block-->\n            </div>\n            <!-- /form card login -->\n\n        </div>\n\n\n    </div>\n</div>"

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
                function UserSignupComponent(_auth, _router) {
                    this._auth = _auth;
                    this._router = _router;
                    this.registerUserData = {};
                }
                UserSignupComponent.prototype.ngOnInit = function() {};
                UserSignupComponent.prototype.registerUser = function() {
                    var _this = this;
                    this._auth.registerUser(this.registerUserData)
                        .subscribe(function(res) {
                            //localStorage.setItem('token', res.token)
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

            module.exports = ""

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

            module.exports = "<div style=\"text-align:center\">\n    <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzOTcuNTAxIDM5Ny41MDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5Ny41MDEgMzk3LjUwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnIGlkPSJYTUxJRF8xNzE4XyI+Cgk8ZyBpZD0iWE1MSURfMTcxOV8iPgoJCTxwYXRoIGlkPSJYTUxJRF81MF8iIHN0eWxlPSJmaWxsOiNGNEIyQjA7IiBkPSJNMjYxLjY2NywzMTIuMjVIMTM1LjgzM1YxMTYuMjg4YzAtMTcuMTQyLDEzLjg5Ni0zMS4wMzgsMzEuMDM4LTMxLjAzOGg2My43NTggICAgYzE3LjE0MiwwLDMxLjAzOCwxMy44OTYsMzEuMDM4LDMxLjAzOFYzMTIuMjV6Ii8+CgkJPHBhdGggaWQ9IlhNTElEXzE3MjBfIiBzdHlsZT0iZmlsbDojQjM0MDRBOyIgZD0iTTI3MS42NjcsMzIyLjI1SDEyNS44MzNWMTE2LjI4OGMwLTIyLjYyOCwxOC40MDktNDEuMDM3LDQxLjAzOC00MS4wMzdoNjMuNzU4ICAgIGMyMi42MjgsMCw0MS4wMzgsMTguNDA5LDQxLjAzOCw0MS4wMzdWMzIyLjI1eiBNMTQ1LjgzMywzMDIuMjVoMTA1LjgzM1YxMTYuMjg4YzAtMTEuNi05LjQzOC0yMS4wMzctMjEuMDM4LTIxLjAzN0gxNjYuODcgICAgYy0xMS42LDAtMjEuMDM4LDkuNDM4LTIxLjAzOCwyMS4wMzdMMTQ1LjgzMywzMDIuMjVMMTQ1LjgzMywzMDIuMjV6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTcyM18iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzI0XyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik0zOTcuNSwzMjIuMjVIMjUxLjY2N3YtMTY4aDEwNC43OTZjMjIuNjI4LDAsNDEuMDM4LDE4LjQwOSw0MS4wMzgsNDEuMDM3aC0yMCAgICBjMC0xMS42LTkuNDM4LTIxLjAzNy0yMS4wMzgtMjEuMDM3aC04NC43OTZ2MTI4SDM3Ny41di01My43ODJoMjBWMzIyLjI1eiIvPgoJPC9nPgoJPGcgaWQ9IlhNTElEXzE3MjVfIj4KCQk8cGF0aCBpZD0iWE1MSURfMTcyNl8iIHN0eWxlPSJmaWxsOiNCMzQwNEE7IiBkPSJNMTQ1LjgzMywzMjIuMjVIMFYxNzUuMjg4YzAtMjIuNjI4LDE4LjQwOS00MS4wMzcsNDEuMDM4LTQxLjAzN2gxMDQuNzk2djE4OCAgICBIMTQ1LjgzM3ogTTIwLDMwMi4yNWgxMDUuODMzdi0xNDhINDEuMDM4Yy0xMS42LDAtMjEuMDM4LDkuNDM4LTIxLjAzOCwyMS4wMzdDMjAsMTc1LjI4OCwyMCwzMDIuMjUsMjAsMzAyLjI1eiIvPgoJPC9nPgoJPGcgaWQ9IlhNTElEXzE3MjlfIj4KCQk8cGF0aCBpZD0iWE1MSURfMTczMF8iIHN0eWxlPSJmaWxsOiNCMzQwNEE7IiBkPSJNMjIzLjE3MiwyMDcuNjk5djE1LjU2MWgtNDYuNjgzdi0xNS41NjFoMTUuMzQ1di0yNy41NTYgICAgYy0wLjY0OCwwLjg2NC0xLjY1OCwxLjc0OC0zLjAyNSwyLjY0N2MtMS4zNywwLjkwMi0yLjkwMSwxLjcyOS00LjU5MywyLjQ4NWMtMS42OTMsMC43NTYtMy40MjIsMS4zNy01LjE4NywxLjgzNyAgICBjLTEuNzY2LDAuNDY5LTMuMzMzLDAuNzAyLTQuNzAxLDAuNzAydi0xNS45OTNjMS4xNTEsMCwyLjY0Ny0wLjM5NSw0LjQ4NC0xLjE4OGMxLjgzNy0wLjc5MiwzLjY1Ni0xLjc0Niw1LjQ1OC0yLjg2NCAgICBjMS44LTEuMTE2LDMuNDIxLTIuMjUxLDQuODYzLTMuNDA0YzEuNDQtMS4xNTIsMi4zNC0yLjA4OSwyLjcwMS0yLjgxaDE3LjYxNHY0Ni4xNDJoMTMuNzI0VjIwNy42OTl6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTczMl8iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzMzXyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik00Ni4wMDksMjc1Ljc5OWMwLTMuMzg1LDAuMjUxLTYuNDExLDAuNzU2LTkuMDc3ICAgIGMwLjUwMy0yLjY2NSwxLjM2OC01LjA5NiwyLjU5NC03LjI5NGMxLjIyNC0yLjE5NiwyLjg4LTQuMjMxLDQuOTcxLTYuMTA1YzIuMDg5LTEuODczLDQuNzE4LTMuNzA5LDcuODg5LTUuNTExICAgIGMzLjM4NS0xLjg3Miw2LjIxMy0zLjQyLDguNDgzLTQuNjQ2YzIuMjY5LTEuMjI0LDQuMDY5LTIuMzA1LDUuNDAzLTMuMjQyYzEuMzMzLTAuOTM2LDIuMjg2LTEuNzgzLDIuODY0LTIuNTQgICAgYzAuNTc2LTAuNzU2LDAuODY0LTEuNjM4LDAuODY0LTIuNjQ3YzAtMi4wMTYtMC43MjEtMy42MzctMi4xNjEtNC44NjNjLTEuNDQyLTEuMjI0LTMuNDk1LTEuODM3LTYuMTYtMS44MzcgICAgYy0zLjAyNSwwLTUuNjU2LDAuNzM5LTcuODg4LDIuMjE1Yy0yLjIzNCwxLjQ3OC00LjM5NSwzLjQwNC02LjQ4NCw1Ljc4MmwtMTEuMDIyLTEyLjc1MWMxLjE1Mi0xLjI5NywyLjcwMi0yLjU1Niw0LjY0Ny0zLjc4MiAgICBjMS45NDUtMS4yMjQsNC4xNDItMi4zMjMsNi41OTItMy4yOTZjMi40NDgtMC45NzMsNS4xMzMtMS43NDYsOC4wNS0yLjMyM2MyLjkxOC0wLjU3Niw1Ljk2LTAuODY1LDkuMTMxLTAuODY1ICAgIGM3Ljc4MSwwLDEzLjc0MSwxLjY5NCwxNy44ODQsNS4wNzljNC4xNDIsMy4zODcsNi4yMTQsNy45NjEsNi4yMTQsMTMuNzI0YzAsMi4zNzctMC4zNzgsNC41MDMtMS4xMzUsNi4zNzYgICAgYy0wLjc1NiwxLjg3NC0xLjc0OCwzLjU0OS0yLjk3Miw1LjAyNWMtMS4yMjYsMS40NzgtMi41OTQsMi43NzQtNC4xMDYsMy44OWMtMS41MTMsMS4xMTgtMy4wNjMsMi4xNDUtNC42NDYsMy4wOCAgICBjLTEuMDgxLDAuNjQ4LTIuMzc3LDEuNDA1LTMuODkxLDIuMjdjLTEuNTEzLDAuODY0LTMuMDA5LDEuNzQ4LTQuNDg0LDIuNjQ3Yy0xLjQ3OCwwLjkwMi0yLjg0NywxLjgwMi00LjEwNiwyLjcwMiAgICBjLTEuMjYxLDAuOTAxLTIuMjE1LDEuNzEyLTIuODY0LDIuNDMxaDI5LjM5M3YxNS41NjFINDYuMDA5VjI3NS43OTl6Ii8+Cgk8L2c+Cgk8ZyBpZD0iWE1MSURfMTczNV8iPgoJCTxwYXRoIGlkPSJYTUxJRF8xNzM2XyIgc3R5bGU9ImZpbGw6I0IzNDA0QTsiIGQ9Ik0zMzUuNDYxLDI0Mi4yNzFjMS45NjIsMC4zOCwzLjc2OCwxLjA2Miw1LjQxNSwyLjA0MiAgICBjMS42NDYsMC45ODMsMy4wNTUsMi4yMTgsNC4yMjgsMy43MDVjMS4xNzEsMS40ODksMi4wNzQsMy4xOTksMi43MDgsNS4xM2MwLjYzMiwxLjkzMywwLjk1LDQuMDA2LDAuOTUsNi4yMjMgICAgYzAsMi45NzgtMC42MDMsNS42NTItMS44MDUsOC4wMjdjLTEuMjA0LDIuMzc1LTIuOTMsNC40MDEtNS4xNzgsNi4wOGMtMi4yNDksMS42NzctNC45NTYsMi45NzYtOC4xMjMsMy44OTUgICAgYy0zLjE2NywwLjkxNy02LjcxMywxLjM3Ny0xMC42NCwxLjM3N2MtOS42MjgsMC0xNy4xNjQtMi44MTktMjIuNjEtOC40NTVsOC4xNy0xMC44M2MxLjcxLDEuNzczLDMuNjU3LDMuMTIsNS44NDIsNC4wMzcgICAgYzIuMTg1LDAuOTE5LDQuNzk3LDEuMzc4LDcuODM3LDEuMzc4YzcuMTU2LDAsMTAuNzM1LTIuNjI3LDEwLjczNS03Ljg4NWMwLTIuODUtMS4wNjItNS4wMDItMy4xODMtNi40NiAgICBjLTIuMTIzLTEuNDU2LTUuNDYyLTIuMTg1LTEwLjAyMi0yLjE4NWgtMi44NXYtMTAuOTI1aDMuMTM1YzMuNTQ2LDAsNi4zMTgtMC43MjgsOC4zMTMtMi4xODUgICAgYzEuOTk1LTEuNDU2LDIuOTkzLTMuMzg3LDIuOTkzLTUuNzk1YzAtMi4wOS0wLjcyOS0zLjY3Mi0yLjE4NS00Ljc1Yy0xLjQ1OC0xLjA3Ni0zLjM4OS0xLjYxNS01Ljc5NS0xLjYxNSAgICBjLTIuNTk4LDAtNC45NTcsMC42MTgtNy4wNzgsMS44NTNjLTIuMTIzLDEuMjM1LTMuOTExLDIuOTkzLTUuMzY3LDUuMjcybC05LjU5NS0xMS4wMmMxLjAxMi0xLjMzLDIuMzQyLTIuNTY1LDMuOTktMy43MDUgICAgYzEuNjQ2LTEuMTQsMy41MTUtMi4xMDQsNS42MDUtMi44OTdjMi4wOS0wLjc5MSw0LjMzNy0xLjQwOSw2Ljc0NS0xLjg1M2MyLjQwNi0wLjQ0Miw0Ljg3Ni0wLjY2NSw3LjQxLTAuNjY1ICAgIGMzLjM1NiwwLDYuNDI3LDAuMzk2LDkuMjE1LDEuMTg4YzIuNzg2LDAuNzkzLDUuMTYxLDEuOTMzLDcuMTI1LDMuNDJjMS45NjIsMS40ODksMy40ODIsMy4yNjMsNC41Niw1LjMyICAgIGMxLjA3NiwyLjA1OSwxLjYxNSw0LjM1NSwxLjYxNSw2Ljg4OGMwLDEuOS0wLjMwMSwzLjcwNS0wLjkwMyw1LjQxNWMtMC42MDMsMS43MS0xLjQ0MSwzLjI2My0yLjUxNyw0LjY1NSAgICBjLTEuMDc4LDEuMzk0LTIuMzYsMi41NS0zLjg0OCwzLjQ2N0MzMzguODY1LDI0MS4zMzcsMzM3LjIzMywyNDEuOTU0LDMzNS40NjEsMjQyLjI3MXoiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\"\n    />\n</div>\n<hr>\n<div *ngFor=\"let user of users | slice:0:10\">\n    <h3>{{user.username}}</h3>\n    <p>Vinte:{{user.win}}</p>\n    <p>Perse:{{user.losses}}</p>\n    <P>Giocate:{{user.win+user.losses}}</P>\n    <hr>\n</div>"

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
                function UserComponent(http) {
                    this.http = http;
                }
                UserComponent.prototype.ngOnInit = function() {
                    var _this = this;
                    this.http.getUsers().subscribe(function(data) {
                        console.log(data);
                        _this.users = data.user;
                        //this.users.sort(data.user.win);
                    });
                };
                UserComponent = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                        selector: 'app-user',
                        template: __webpack_require__( /*! ./user.component.html */ "./src/app/components/user/user.component.html"),
                        styles: [__webpack_require__( /*! ./user.component.css */ "./src/app/components/user/user.component.css")]
                    }),
                    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
                    this._registerUrl = "http://10.0.2.2:3000/user/signup";
                    this._loginUrl = "http://10.0.2.2:3000/user/login";
                    this._messageUrl = "http://10.0.2.2:3000/messages";
                    this._checkUrl = "http://10.0.2.2:3000/user/";
                }
                AuthService.prototype.registerUser = function(user) {
                    return this.http.post(this._registerUrl, user);
                };
                AuthService.prototype.postMessage = function(message) {
                    return this.http.post(this._messageUrl, message);
                };
                AuthService.prototype.isValid = function(username, callback) {
                    this.http.get("http://10.0.2.2:3000/user/" + username + "/check").subscribe(function(data) {
                        callback(data);
                    });
                };
                AuthService.prototype.userWin = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/win", null).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                AuthService.prototype.userLoss = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/loss", null).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                AuthService.prototype.loginUser = function(user) {
                    return this.http.post(this._loginUrl, user);
                };
                AuthService.prototype.logoutUser = function() {
                    console.log(this.isAdmin());
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
        "./src/app/services/board.service.ts":
        /*!*******************************************!*\
          !*** ./src/app/services/board.service.ts ***!
          \*******************************************/
        /*! exports provided: BoardService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
            /* harmony import */
            var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../board */ "./src/app/board.ts");
            /* harmony import */
            var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../player */ "./src/app/player.ts");
            /* harmony import */
            var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./auth.service */ "./src/app/services/auth.service.ts");
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




            var BoardService = /** @class */ (function() {
                function BoardService(authService) {
                    this.authService = authService;
                    this.playerId = 1;
                    this.boards = [];
                }
                BoardService.prototype.createBoard = function(size) {
                    if (size === void 0) { size = 10; }
                    var tiles = [];
                    // create tiles for board
                    for (var i = 0; i < size; i++) {
                        tiles[i] = [];
                        for (var j = 0; j < size; j++) {
                            tiles[i][j] = { used: false, value: 0, status: '' };
                        }
                    }
                    var board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"]({
                        Player: new _player__WEBPACK_IMPORTED_MODULE_2__["Player"]({ id: this.authService.getId(), username: this.authService.getUsername() }),
                        tiles: tiles
                    });
                    this.boards.push(board);
                    console.log(this.boards);
                    return tiles;
                };
                BoardService.prototype.getRandomInt = function(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                };
                BoardService.prototype.getBoards = function() {
                    return this.boards;
                };
                BoardService = __decorate([
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
                ], BoardService);
                return BoardService;
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
                    //console.log('ciaociao');
                }
                DataService.prototype.deleteMessage = function(id) {
                    this.http.delete('http://10.0.2.2:3000/messages/' + id).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                DataService.prototype.getUsers = function() {
                    return this.http.get('http://10.0.2.2:3000/user');
                };;
                DataService.prototype.getAdmin = function() {
                    return this.http.get('http://10.0.2.2:3000/user');
                };
                DataService.prototype.userDelete = function(id) {
                    this.http.delete('http://10.0.2.2:3000/user/' + id).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                DataService.prototype.userWin = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/win", 0).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                DataService.prototype.userLoss = function(id) {
                    this.http.patch('http://10.0.2.2:3000/user/' + id + "/loss", 0).subscribe(function(data) {
                        return console.log('SUCC');
                    });
                };
                DataService.prototype.getMessages = function(username) {
                    return this.http.get('http://10.0.2.2:3000/messages/' + username);
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

            module.exports = __webpack_require__( /*! C:\Users\Byteman\Desktop\battleship\src\main.ts */ "./src/main.ts");


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