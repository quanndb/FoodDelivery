package com.fd.fooddelivery.service;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountDetails implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<Account> users = accountRepository.findAccountByUsername(username);

        String password = null;

        List<GrantedAuthority> authorities = new ArrayList<>();

        if(users.isEmpty()){
            throw new UsernameNotFoundException("User not found");
        }

        username = users.get(0).getUsername();

        password = users.get(0).getPassword();

        authorities.add(new SimpleGrantedAuthority(users.get(0).getRole().toString()));

        return new User(username,password,authorities);
    }
}
