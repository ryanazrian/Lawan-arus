import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps/maps';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	            {
              this.item = this.navParams.data;
              console.log(this.item);
            }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  loadMap(){
    this.navCtrl.push(MapsPage);
  }

}
