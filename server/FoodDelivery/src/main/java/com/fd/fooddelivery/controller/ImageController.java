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
