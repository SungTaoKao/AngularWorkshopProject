import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent{
    recipes: Recipe[] =[
        new Recipe('test', 'test des', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2016/11/one-pot-paneer-curry-pie.jpg')
    ];
}