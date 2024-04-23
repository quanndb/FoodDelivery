package com.fd.fooddelivery.service;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.Model.AuthenticationResponse;
import com.fd.fooddelivery.repository.AccountRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final AccountRepository accountRepository;

    private final PasswordEncoder passwordEncoder;

    private final JWTService jwtService;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AccountRepository accountRepository, PasswordEncoder passwordEncoder, JWTService jwtService, AuthenticationManager authenticationManager) {
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public String register(Account request){
        String res = "fail";
        Account newUser = new Account();
        if(accountRepository.findAccountByUsername(request.getUsername()).get(0).getId()>0){
            res = "username already exists";
        }
        else {
            newUser.setUsername(request.getUsername());
            newUser.setPassword(passwordEncoder.encode(request.getPassword()));
            newUser.setFirstName(request.getFirstName());
            newUser.setLastName(request.getLastName());
            newUser.setRole(request.getRole());
            newUser.setEmail(request.getEmail());
            newUser.setPhone(request.getPhone());
            newUser.setAvatar(request.getAvatar());
            newUser = accountRepository.save(newUser);
        }

        if(newUser.getId()>0)  res= "ok";

        return (res);
    }

    public AuthenticationResponse authenticate(Account request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        Account user = accountRepository.findAccountByUsername(request.getUsername()).get(0);
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }
}
