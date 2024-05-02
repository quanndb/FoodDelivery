package com.fd.fooddelivery.controller;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.service.AccountService;
import com.fd.fooddelivery.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/v1/profile")
public class AccountController {

    @Autowired
    private AccountService accountService;
    @Autowired
    private CloudinaryService cloudinaryService;

    @GetMapping("")
    public ResponseEntity<Object> getUser(@RequestParam String un){
        try{
            Account foundAccount = accountService.getAccountByUsername(un);
            return ResponseEntity.status(HttpStatus.OK).body(foundAccount);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An exception occurred from server with exception = " + e);
        }
    }

    @PostMapping("")
    public ResponseEntity<Object> updateByUsername(@RequestParam("file") MultipartFile multipartFile, @RequestParam String username) throws IOException {
                Account foundAccount = accountService.getAccountByUsername(username);
        if (ImageIO.read(multipartFile.getInputStream()) == null) {
            return new ResponseEntity<>("Image non valid!", HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        foundAccount.setAvatar(result.get("url").toString());
        accountService.save(foundAccount);
        return new ResponseEntity<>(foundAccount, HttpStatus.OK);
    }
}
