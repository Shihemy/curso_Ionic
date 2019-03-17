import { Component } from '@angular/core';
import { AnimalesService } from '../api/animales.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	
	constructor(private animales: AnimalesService, 
				private navCtrl: NavController ){

	}

	medicos(){
		this.navCtrl.navigateForward('/medicos');
	}
}
