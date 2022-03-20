import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class FoodService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getFoods(): Observable<Food[]> {
        return this.http.get<Food[]>(`${this.apiServerUrl}/food/all`);
    }

    public addFoods(food: Food): Observable<Food> {
        return this.http.post<Food>(`${this.apiServerUrl}/food/add`, food);
    }

    public updateFoods(food: Food): Observable<Food> {
        return this.http.put<Food>(`${this.apiServerUrl}/food/update`, food);
    }

    public deleteFoods(foodId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/food/delete/${foodId}`);
    }

    public randomFoods(): Observable<Food> {
        return this.http.get<Food>(`${this.apiServerUrl}/food/random`);
    }
}