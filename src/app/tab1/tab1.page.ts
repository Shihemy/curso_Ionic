import { Component } from '@angular/core';
import { AnimalesService } from '../api/animales.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	subs:any;
	id:any;
	list_mediocs:any;
	constructor(private animales: AnimalesService, 
				private navCtrl: NavController ){

	}

	medicos(id){
		console.log("Para moverme de pagina");
		let converToString=JSON.stringify(id);

		this.navCtrl.navigateForward(['/medicos',{queryParams:id}]);
	}
}
