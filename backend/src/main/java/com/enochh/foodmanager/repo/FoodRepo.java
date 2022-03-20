package com.enochh.foodmanager.repo;

import com.enochh.foodmanager.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FoodRepo extends JpaRepository<Food, Long> {
    void deleteFoodById(Long id);

    Optional<Food> findFoodById(Long id);
}
