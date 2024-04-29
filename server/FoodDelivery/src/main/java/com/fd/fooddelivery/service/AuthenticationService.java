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
        Account newAccount = request;
        if(accountRepository.existsAccountByUsername(request.getUsername())){
            res = "username already exists";
        }
        else {
            newAccount.setPassword(passwordEncoder.encode(request.getPassword()));
            accountRepository.save(newAccount);
            res= "ok";
        }
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
