package com.fd.fooddelivery.service;


import com.fd.fooddelivery.Model.Image;
import com.fd.fooddelivery.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ImageService {

    @Autowired
    ImageRepository imageRepository;

    public Optional<Image> getOne(int id){
        return imageRepository.findById(id);
    }

    public Image save(Image image){
        return imageRepository.save(image);
    }

    public void delete(int id){
        imageRepository.deleteById(id);
    }

    public boolean exists(int id){
        return imageRepository.existsById(id);
    }

    public Optional<Image> findById(int id) {
        return imageRepository.findById(id);
    }

}