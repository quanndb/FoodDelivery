package com.fd.fooddelivery.Model;

public class AuthenticationResponse {

    private String accessToken;

    public AuthenticationResponse(String token) {
        this.accessToken = token;
    }

    public String getAccessToken() {
        return accessToken;
    }
}
