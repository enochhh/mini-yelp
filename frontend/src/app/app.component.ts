import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from './food';
import { FoodService } from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public foods!: Food[];
  public editRestaurant!: Food;
  public deleteRestaurant!: Food;
  


  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.getFoods();
  }

  public getFoods(): void {
    this.foodService.getFoods().subscribe(
    (response: Food[]) => {
      this.foods = response;
      console.log(this.foods);
    }, 
    (error: HttpErrorResponse) => {
      alert(error.message);
      }
    );
  }


  public onAddRestaurant(addForm: NgForm): void {
    document.getElementById('add-restaurant-form')!.click();
    this.foodService.addFoods(addForm.value).subscribe(
      (response: Food) => {
        console.log(response);
        this.getFoods();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
  }

  public onUpdateRestaurant(food : Food): void {
    this.foodService.updateFoods(food).subscribe(
      (response: Food) => {
        console.log(response);
        this.getFoods();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteRestaurant(foodId : number): void {
    this.foodService.deleteFoods(foodId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFoods();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public onRandomRestaurant(): void {
      this.foodService.randomFoods().subscribe(
        (response: Food) => {
          const results : Food[] = [];
          results.push(response);
          this.foods = results;
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  public refreshPage(): void {
    window.location.reload();
  }


  public searchRestaurants(key: string): void {
    console.log(key);
    const results : Food[] = [];
    for (const restaurant of this.foods) {
      if (restaurant.name.toLowerCase().indexOf(key.toLowerCase())!== -1 
      || restaurant.address.toLowerCase().indexOf(key.toLowerCase())!== -1
      || restaurant.ethnicity.toLowerCase().indexOf(key.toLowerCase())!== -1
      || restaurant.phone.toLowerCase().indexOf(key.toLowerCase())!== -1) {
        results.push(restaurant);
      }
    }
    this.foods = results;
    if (results.length === 0 || !key) {
        this.getFoods();
    }
  }


  public onOpenModal(food: Food, mode: string): void {
    const container = document.getElementById('main-container');
    const button  = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRestaurantModal');
    }
    if (mode === 'delete') {
      this.deleteRestaurant = food;
      button.setAttribute('data-target', '#deleteRestaurantModal');
    }
    if (mode === 'edit') {
      this.editRestaurant = food; 
      button.setAttribute('data-target', '#updateRestaurantModal');
    }
    if (mode === 'random') {
      button.setAttribute('data-target', '#randomRestaurantModal')
    }
    container!.appendChild(button);
    button.click();
  }

}
