import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { SumbanganPage } from '../sumbangan/sumbangan';


>>>>>>> 26e964c4682bbc78873bd411de63cd94ae6c69a0

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
	item: any;
	donatur: string;
	penerima: string;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  public alerCtrl: AlertController,
  			  private fire: AngularFireAuth,
  			  private firedata: AngularFireDatabase
  			  ) {

  	            {
              this.item = this.navParams.data;
              console.log(this.item.$key);
            }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
      doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Terima Kasih',
      subTitle: 'Terima Kasih sudah menyumbang, Tunggu yayasan menghubungi anda',
      buttons: ['Ok']
    })
     .present()
  }

  sumbang(penerima){

  		this.navCtrl.push(SumbanganPage, {penerima: this.item.$key});
 	 	// var user = this.fire.auth.currentUser;
 	 	// this.firedata.object('/data_barang_yayasan/'+this.item.$key)
 	 	// .update({donatur:1})

 	 	// this.doAlert();
  }

  loadMap(){
    this.navCtrl.push(MapsPage);
  }

}
