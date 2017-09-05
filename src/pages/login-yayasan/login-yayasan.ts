import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsYayasanPage } from '../tabs-yayasan/tabs-yayasan';
import { RegisterYayasanPage } from '../register-yayasan/register-yayasan';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginYayasanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-yayasan',
  templateUrl: 'login-yayasan.html',
})
export class LoginYayasanPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fire:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginYayasanPage');
  }

    alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  login(){

	//this.navCtrl.setRoot(TabsPage);
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {
      this.alert('Success! you\'re logged in');
      this.navCtrl.setRoot(TabsYayasanPage);
    })
    .catch( error => {
      console.log('got an error in login-yayasan page', error);
      this.alert(error.message);
    })
    console.log('Would sign in with', this.email.email, this.password.value);
	}

daftar(){

  //this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push(RegisterYayasanPage);

  }

}
