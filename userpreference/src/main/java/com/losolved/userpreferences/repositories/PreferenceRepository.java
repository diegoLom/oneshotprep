package com.losolved.userpreferences.repositories;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.losolved.userpreferences.entities.Preferences;


@Repository
public interface PreferenceRepository extends JpaRepository<Preferences, Long> {
    // You can define custom query methods here if needed
}