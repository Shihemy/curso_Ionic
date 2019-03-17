import { Component } from '@angular/core';
import { AnimalesService } from '../api/animales.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
		animales: any;

	constructor(private animales_service: AnimalesService ){

	}
	ngOnInit(){
		this.animales_service.getAnimals().subscribe(data=>{
			
			this.animales=data.toString;
});

	}

}
