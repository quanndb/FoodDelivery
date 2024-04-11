package com.fd.fooddelivery.repository;


import com.fd.fooddelivery.Model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Long> {

    List<Account> findAccountByUsername(String userName);
}
