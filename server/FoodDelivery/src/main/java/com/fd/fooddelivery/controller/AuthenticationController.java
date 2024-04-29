package com.fd.fooddelivery.controller;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.Model.AuthenticationResponse;
import com.fd.fooddelivery.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/v1/admin")
@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Account request){
        try{
            authenticationService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Account created successfully");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An exception occurred from server with exception " + e);
        }
    }
}
