webpackJsonp([29],{

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation
 */
var RegisterPage = RegisterPage_1 = (function () {
    function RegisterPage(fire, firedata, navCtrl, navParams, formBuilder, alertCtrl) {
        this.fire = fire;
        this.firedata = firedata;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.submitAttempt = false;
        this.registerForm = formBuilder.group({
            nama: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(15), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])],
            password1: ['']
        }, {
            validator: RegisterPage_1.MatchPassword // your validation method
        });
    }
    RegisterPage.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var password1 = AC.get('password1').value; // to get value in input tag
        if (password != password1) {
            console.log('false');
            AC.get('password1').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    /* daftar(){
   
     //this.navCtrl.setRoot(TabsPage);
       this.navCtrl.push(TabsPage);
   
     }*/
    RegisterPage.prototype.daftar = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (data) {
            var donatur = _this.firedata.object('/data_donatur/' + data.uid);
            donatur.set({ id: data.uid, name: _this.nama.value, email: _this.email.value });
            console.log('got data', data);
            _this.alert('Registered!');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would register user with ', this.email.value, this.password.value);
        //this.navCtrl.setRoot(TabsPage);
        //this.navCtrl.push(TabsYayasanPage);
    };
    return RegisterPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "email", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "password", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('nama'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "nama", void 0);
RegisterPage = RegisterPage_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\register\register.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n\n\n	<img img-center src="assets/img/logo-fix.png"/> <br><br>	\n\n\n\n	    <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n\n\n<ion-list>\n\n	<form [formGroup]="registerForm">\n\n\n\n		<ion-item>\n\n		    <ion-input formControlName="nama" type="text" value="" Placeholder="Nama" #nama></ion-input>\n\n		</ion-item>\n\n\n\n                <p *ngIf="!registerForm.controls.nama.valid  && (registerForm.controls.nama.dirty || submitAttempt)" style="color: red; font-size: 12px;">Please enter a valid name.</p>\n\n            \n\n          <br>\n\n		  <ion-item>\n\n		    <ion-input formControlName="email" type="text" value="" Placeholder="email" #email></ion-input>\n\n		  </ion-item>\n\n\n\n		  		<p *ngIf="!registerForm.controls.email.valid  && (registerForm.controls.email.dirty || submitAttempt)" style="color: red; font-size: 12px;">Please enter a valid email.</p>\n\n		  <br>\n\n\n\n		  <ion-item>\n\n		    <ion-input formControlName="password" type="password" Placeholder="Password" #password></ion-input>\n\n		  </ion-item>\n\n		  	<p *ngIf="!registerForm.controls.password.valid  && (registerForm.controls.password.dirty || submitAttempt)" style="color: red; font-size: 12px;">Please enter a valid password.</p>\n\n\n\n		  <br>\n\n\n\n		  <ion-item>\n\n		    <ion-input formControlName="password1" type="password" value="" Placeholder="Re-type Password"></ion-input>\n\n		  </ion-item>\n\n\n\n		  <p *ngIf="registerForm.controls.password1.errors?.MatchPassword" style="color: red; font-size: 12px;">Password not match</p>\n\n		  <br>\n\n\n\n		  	<div padding>\n\n    	<button ion-button color="secondary" type="submit" block (click)=\'daftar()\'>Daftar</button>\n\n  	</div>	\n\n\n\n	</form>\n\n</ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], RegisterPage);

var RegisterPage_1;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profil_profil__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cari_yayasan_cari_yayasan__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__cari_yayasan_cari_yayasan__["a" /* CariYayasanPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profil_profil__["a" /* ProfilPage */];
        this.email = fire.auth.currentUser.email;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({template:/*ion-inline-start:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Sumbang" tabIcon="logo-usd"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="History" tabIcon="list-box"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="md-settings"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { LoggedInPage } from '../logged-in/logged-in';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    /*login(){
    
        //this.navCtrl.setRoot(TabsPage);
            this.navCtrl.push(TabsPage);
    
        }*/
    LoginPage.prototype.daftar = function () {
        //this.navCtrl.setRoot(TabsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (data) {
            console.log('got some data', _this.fire.auth.currentUser);
            _this.alert('Success! You\'re logged in');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            // user is logged in
        })
            .catch(function (error) {
            console.log('got an error', error);
            _this.alert(error.message);
        });
        console.log('Would sign in with ', this.email.value, this.password.value);
    };
    return LoginPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], LoginPage.prototype, "email", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n\n\n	<img img-center src="assets/img/logo-fix.png"/> <br><br>\n\n	<ion-list>\n\n\n\n		  <ion-item>\n\n		    <ion-input type="text" value="" Placeholder="Email" #email></ion-input>\n\n		  </ion-item>\n\n		  <br>\n\n\n\n		  <ion-item>\n\n		    <ion-input type="password" Placeholder="Password" #password></ion-input>\n\n		  </ion-item>\n\n\n\n	</ion-list>\n\n	<div padding>\n\n    	<button type="submit" ion-button color="secondary" block (click)=\'login()\'>Sign In</button>\n\n  	</div>\n\n  	<ion-grid>\n\n  		<ion-row>\n\n  			<ion-col>\n\n 				<p text-center style="color: white;">Tidak Punya akun?</p>\n\n 			</ion-col>\n\n 			<ion-col>\n\n 				<p style="color:blue; font-weight:bold; "(click)=\'daftar()\'>Daftar</p>\n\n 			</ion-col>\n\n 		</ion-row>\n\n 	</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\PROJEK\Ionic\Gemastik10\Lawan-arus\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=29.main.js.map