package com.losolved.userpreferences.controllers;

import com.losolved.userpreferences.entities.Preferences;
import com.losolved.userpreferences.services.PreferencesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/preferences")
public class PreferencesController {

    @Autowired
    private PreferencesService preferencesService;

    @GetMapping
    public List<Preferences> getAllPreferences() {
        return preferencesService.getAllPreferences();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Preferences> getPreferencesById(@PathVariable Long id) {
        Optional<Preferences> preferences = preferencesService.getPreferencesById(id);
        return preferences.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Preferences createPreferences(@RequestBody Preferences preferences) {
        return preferencesService.createPreferences(preferences);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Preferences> updatePreferences(@PathVariable Long id, @RequestBody Preferences preferencesDetails) {
        Optional<Preferences> updatedPreferences = preferencesService.updatePreferences(id, preferencesDetails);
        return updatedPreferences.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePreferences(@PathVariable Long id) {
        boolean isDeleted = preferencesService.deletePreferences(id);
        return isDeleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}