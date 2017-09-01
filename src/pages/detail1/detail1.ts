import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Detail1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail1',
  templateUrl: 'detail1.html',
})
export class Detail1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail1Page');
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
