import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PageTransitionsService {

  constructor(public navCtrl: NavController) { }

  goBack() { this.navCtrl.pop(); }
}
