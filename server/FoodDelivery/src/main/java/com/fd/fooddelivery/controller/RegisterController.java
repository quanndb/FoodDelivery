package com.fd.fooddelivery.controller;


import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
public class RegisterController {

    @Autowired
    AccountService accountService;

    @PostMapping("/register")
    public ResponseEntity<String> registerCustomer(@RequestBody Account account){

        ResponseEntity<String> response = null;

        try{
            Account newAccount = accountService.createAccount(account);
            if(newAccount.getId()>0){
                response = ResponseEntity.status(HttpStatus.CREATED)
                        .body("Customer is created successfully for username = "+account.getUsername());
            }
        }
        catch (Exception exception){
                response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("An exception occurred from server with exception = " +exception);
        }

        return response;
    }
}
