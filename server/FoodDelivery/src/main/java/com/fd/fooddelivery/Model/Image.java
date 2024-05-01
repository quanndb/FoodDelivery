package com.fd.fooddelivery.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String imageURL;

    private String type;

    private String imageID;

    private Integer accountID;

    public Image(String name, String imageURL, String publicId, Integer accountID) {
        this.name=name;
        this.imageURL=imageURL;
        this.imageID=publicId;
        this.type=image.getType();
    }



}
