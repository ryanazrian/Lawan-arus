import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { EditDonaturPage } from '../edit-donatur/edit-donatur';

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
  nama: string;
  email: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public app:App, 
              public alertCtrl: AlertController, 
              private fire:AngularFireAuth, 
              private firedata: AngularFireDatabase,

              ) {
                var user = this.fire.auth.currentUser;
                const donatur = this.firedata.object('/data_donatur/'+user.uid).subscribe(data =>{
                   this.nama = data.name;
                   this.email = data.email;
                 }
                  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  keluar(){

	this.app.getRootNav().setRoot(LoginPage);
		//this.navCtrl.push(LoginPage);

	}

     edit() {
       //this.app.getRootNav().setRoot(LoginPage);
    this.navCtrl.push(EditDonaturPage);
  }

}
