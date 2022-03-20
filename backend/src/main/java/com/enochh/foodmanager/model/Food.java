package com.enochh.foodmanager.model;

import java.io.Serializable;
import javax.persistence.*;

@Entity
public class Food implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String address;
    private String ethnicity;
    private String phone;
    private String imageUrl;

    public Food() {
    }

    public Food(Long id, String name, String address, String ethnicity, String phone, String imageUrl) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.ethnicity = ethnicity;
        this.phone = phone;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEthnicity() {
        return ethnicity;
    }

    public void setEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Food{" +
                "id = " + id +
                ", name ='" + name + '\'' +
                ", address ='" + address + '\'' +
                ", ethnicity ='" + ethnicity + '\'' +
                ", phone ='" + phone + '\'' +
                ", imageUrl ='" + imageUrl + '\'' +
                '}';

    }
}
