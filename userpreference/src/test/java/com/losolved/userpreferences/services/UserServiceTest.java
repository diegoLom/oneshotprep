package com.losolved.userpreferences.services;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.instancio.Instancio;
import org.instancio.Select;
import org.instancio.generator.GeneratorContext;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.losolved.userpreferences.entities.User;
import com.losolved.userpreferences.repositories.UserRepository;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    public void shouldVerifyIfExistAUserWithThisEmail() {
        User user = Instancio.of(User.class)
                .generate(Select.field("email"), gen -> gen.string().length(5, 10))
                .generate(Select.field("name"), gen -> gen.string().length(5, 10))
                .generate(Select.field("age"), gen -> gen.ints().range(18, 99))
                .create();

        System.out.println(user);

        // Mock the behavior of findByEmail
        when(userRepository.findByEmail(user.getEmail())).thenReturn(Optional.empty());

        userService.createUser(user);

        // Verify that findByEmail was called with the correct email
        verify(userRepository, times(1)).findByEmail(user.getEmail());
    }

    @Test
    public void shouldThrowEmailWhenExists() {
        User user = Instancio.of(User.class)
                .generate(Select.field("email"), gen -> gen.string().length(5, 10))
                .generate(Select.field("name"), gen -> gen.string().length(5, 10))
                .generate(Select.field("age"), gen -> gen.ints().range(18, 99))
                .create();

        System.out.println(user);

         when(userRepository.findByEmail(user.getEmail())).thenReturn(Optional.of(Instancio.of(User.class).create()));

           assertThrows(IllegalArgumentException.class, () -> {
            userService.createUser(user);
        });

         verify(userRepository, times(1)).findByEmail(user.getEmail());
        
    }

}
