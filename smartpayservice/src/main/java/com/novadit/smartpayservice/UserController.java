package com.novadit.smartpayservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.novadit.smartpayservice.Name;

@RestController
public class UserController {

    @RequestMapping(value = "/users")
	public User getUser(){
    	
    	User u1 = new User("1", new Name("sd","dfa"));
		return u1;
	}
    
    @RequestMapping(value = "/contact", method=RequestMethod.POST)
	public User saveContact(@RequestBody Contact contact){
    	
    	System.out.println(contact.toString());
    	
    	User u1 = new User("1", new Name("sd","dfa"));
		return u1;
	}
   
}
