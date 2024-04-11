package com.fd.fooddelivery.service;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public Account createAccount(Account account){
        return accountRepository.save(account);
    }
}
