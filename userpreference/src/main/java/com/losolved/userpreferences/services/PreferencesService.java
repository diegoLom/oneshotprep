package com.losolved.userpreferences.services;

import com.losolved.userpreferences.entities.Preferences;
import com.losolved.userpreferences.repositories.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PreferencesService {

    @Autowired
    private PreferenceRepository preferencesRepository;

    public List<Preferences> getAllPreferences() {
        return preferencesRepository.findAll();
    }

    public Optional<Preferences> getPreferencesById(Long id) {
        return preferencesRepository.findById(id);
    }

    public Preferences createPreferences(Preferences preferences) {
        return preferencesRepository.save(preferences);
    }

    public Optional<Preferences> updatePreferences(Long id, Preferences preferencesDetails) {
        return preferencesRepository.findById(id).map(preferences -> {
           
            preferences.setValue(preferencesDetails.getValue());
            // Update other fields as necessary
            return preferencesRepository.save(preferences);
        });
    }

    public boolean deletePreferences(Long id) {
        return preferencesRepository.findById(id).map(preferences -> {
            preferencesRepository.delete(preferences);
            return true;
        }).orElse(false);
    }
}
