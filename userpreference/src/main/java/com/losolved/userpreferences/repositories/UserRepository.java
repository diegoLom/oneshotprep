package com.losolved.userpreferences.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.losolved.userpreferences.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // You can define custom query methods here if needed
}