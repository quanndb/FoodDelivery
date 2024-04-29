package com.fd.fooddelivery.service;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public Account createAccount(Account account){
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        return accountRepository.save(account);
    }

    public boolean accountExitst(String username) {
        return !accountRepository.findAccountByUsername(username).isEmpty();
    }
}
