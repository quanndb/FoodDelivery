package com.fd.fooddelivery.controller;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.Model.AuthenticationResponse;
import com.fd.fooddelivery.Model.Role;
import com.fd.fooddelivery.service.AccountService;
import com.fd.fooddelivery.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private AuthenticationService authenticationService;


    @PostMapping("/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Account account) {

        ResponseEntity<String> response = null;
        account.setRole(Role.USER);
        if(accountService.accountExitst(account.getUsername())) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        try {
            Account newAccount = accountService.createAccount(account);
            if (newAccount.getId() > 0) {
                return ResponseEntity.status(HttpStatus.CREATED)
                        .body("Customer is created successfully for username = " + account.getUsername());
            }
        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred from server with exception = " + exception);
        }
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Account request) {
        AuthenticationResponse response = authenticationService.authenticate(request);
        if(response.getAccessToken()!=null){
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Username or password is invalid");
        }
    }
}
