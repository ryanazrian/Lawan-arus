import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  //nama: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App, public alertCtrl: AlertController, private fire:AngularFireAuth) {
    //this.nama = fire.auth.currentUser.nama;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  keluar(){

	this.app.getRootNav().setRoot(LoginPage);
		//this.navCtrl.push(LoginPage);

	}

     edit() {
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],


      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
