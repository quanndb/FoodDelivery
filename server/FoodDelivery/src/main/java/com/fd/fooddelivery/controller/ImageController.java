package com.fd.fooddelivery.controller;

import com.fd.fooddelivery.Model.Account;
import com.fd.fooddelivery.Model.Image;
import com.fd.fooddelivery.service.AccountService;
import com.fd.fooddelivery.service.CloudinaryService;
import com.fd.fooddelivery.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping ("/v1/profile")
public class ImageController {
    @Autowired
    private ImageService imageService;
    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private AccountService accountService;

    @PostMapping("/update")
    @ResponseBody
    public ResponseEntity<Object> updateByUsername(@RequestParam("file") MultipartFile multipartFile,@RequestParam String username) throws IOException {
        Account foundAccount = accountService.getAccountByUsername(username);
        if (ImageIO.read(multipartFile.getInputStream()) == null) {
            return new ResponseEntity<>("Image non valid!", HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        Image image = new Image(
                (String) result.get("original_filename"),
                (String) result.get("url"),
                (String) result.get("public_id"),
                type,
                productID==0?null:productID,blogID==0?null:blogID
                );
        imageService.save(image);
        return new ResponseEntity<>("image saved ! ", HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteImageById (@PathVariable int id)
    {
        Optional<Image> optionalImage = imageService.findById(id);
        if (optionalImage.isPresent()) {
            try {
                cloudinaryService.delete(optionalImage.get().getImageID());
                imageService.delete(id);
                return ResponseEntity.status(HttpStatus.OK).body(
                         "Deleted image successfully"
                );
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                       "Failed to delete image"
                );
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    "Cannot find image with id=" + id
            );
        }
    }
}
