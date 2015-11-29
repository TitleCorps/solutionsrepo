package com.novadit.smartpayservice;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(value = "/users")
	public User getUser(){
    	
    	User u1 = new User("1", new Name("sd","dfa"));
		return u1;
	}
   
}
