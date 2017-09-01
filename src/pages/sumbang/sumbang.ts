import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SumbangPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sumbang',
  templateUrl: 'sumbang.html',
})
export class SumbangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SumbangPage');
  }

    doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Terima Kasih',
      message: 'Terima kasih sudah menyumbangkan barang anda. Tunggu tunggu konfirmasi dari yayasan',
      buttons: ['Ok']
    });
    alert.present()
  }

}
