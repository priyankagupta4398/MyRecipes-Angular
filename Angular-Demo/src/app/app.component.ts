import { Component, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular-Demo';

  recipes = [
    // {
    //   name: 'Burger',
    //   chef: 'Ranveer Brar',
    //   // tslint:disable-next-line: max-line-length
    //   description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    //   image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
    //   type: 'Non-Veg'
    // },
    // {
    //   name: 'Italian Pasta',
    //   chef: 'JM',
    //   // tslint:disable-next-line: max-line-length
    //   description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    //   image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
    //   type: 'Veg'
    // },
    // {
    //   name: 'Chicken Maggie',
    //   chef: 'Nisha Madhulika',
    //   image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
    //   type: 'Non-Veg'
    // },
    {
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'Veg'
    },
  ];

  AckFromForm(event) {
    // console.log(event.addedRecipes);
    this.recipes.push(event.addedRecipes[0]);
    console.log(this.recipes);
  }


}
