package com.enochh.foodmanager.service;

import com.enochh.foodmanager.exception.RestaurantNotFoundException;
import com.enochh.foodmanager.model.Food;
import com.enochh.foodmanager.repo.FoodRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    private final FoodRepo foodRepo;

    @Autowired
    public FoodService(FoodRepo foodRepo) {
        this.foodRepo = foodRepo;
    }
    public Food addFood(Food food) {
        return foodRepo.save(food);
    }

    public List<Food> findAllFood() {
        return foodRepo.findAll();
    }

    public Food updateFood(Food food){
        return foodRepo.save(food);
    }

    public Food findFoodById(Long id) {
        return foodRepo.findFoodById(id)
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant by ID " + id + " was not found"));
    }

    public void deleteFood(Long id){
        foodRepo.deleteFoodById(id);
    }

    public Food randomRestaurant() {
        long qty = foodRepo.count();
        int idx = (int)(Math.random() * qty);
        Page<Food> foodPage = foodRepo.findAll(PageRequest.of(idx,1));
        Food q = null;
        if (foodPage.hasContent()) {
            q = foodPage.getContent().get(0);
        }
        return q;
    }
}
