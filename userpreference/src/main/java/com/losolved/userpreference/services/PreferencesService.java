package com.losolved.userpreference.services;

import com.losolved.userpreference.entities.Preferences;

import java.util.List;
import java.util.Optional;

public interface PreferencesService {
    List<Preferences> getAllPreferences();
    Optional<Preferences> getPreferencesById(Long id);
    Preferences createPreferences(Preferences preferences);
    Optional<Preferences> updatePreferences(Long id, Preferences preferencesDetails);
    boolean deletePreferences(Long id);
}