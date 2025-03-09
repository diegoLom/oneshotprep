package com.losolved.userpreference.repositories;

import com.losolved.userpreference.entities.Preferences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreferencesRepository extends JpaRepository<Preferences, Long> {
    // You can define custom query methods here if needed
}