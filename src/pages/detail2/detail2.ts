import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Detail2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html',
})
export class Detail2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail2Page');
  }

     doRadio() {
    let alert = this.alerCtrl.create({
      title: 'Terima Kasih',
      message: 'Yayasan Akan segera menghubungi anda',
      buttons: ['Ok']
    });
    alert.present()
  }

}
