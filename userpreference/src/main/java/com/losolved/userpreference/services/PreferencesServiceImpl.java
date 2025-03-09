package com.losolved.userpreference.services;

import com.losolved.userpreference.entities.Preferences;
import com.losolved.userpreference.repositories.PreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PreferencesServiceImpl implements PreferencesService {

    @Autowired
    private PreferencesRepository preferencesRepository;

    @Override
    public List<Preferences> getAllPreferences() {
        return preferencesRepository.findAll();
    }

    @Override
    public Optional<Preferences> getPreferencesById(Long id) {
        return preferencesRepository.findById(id);
    }

    @Override
    public Preferences createPreferences(Preferences preferences) {
        return preferencesRepository.save(preferences);
    }

    @Override
    public Optional<Preferences> updatePreferences(Long id, Preferences preferencesDetails) {
        return preferencesRepository.findById(id).map(preferences -> {
            preferences.setPreference(preferencesDetails.getPreference());
            preferences.setUser(preferencesDetails.getUser());
            return preferencesRepository.save(preferences);
        });
    }

    @Override
    public boolean deletePreferences(Long id) {
        return preferencesRepository.findById(id).map(preferences -> {
            preferencesRepository.delete(preferences);
            return true;
        }).orElse(false);
    }
}