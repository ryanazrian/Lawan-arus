import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Home1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }

      doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Terima Kasih',
      message: 'Tunggu donatur untuk menyumbang ke anda',
      buttons: ['Ok']
    });
    alert.present()
  }

}
