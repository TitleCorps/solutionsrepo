package com.novadit.smartpayservice;
import com.novadit.smartpayservice.Name;
public class User {

	private String id;
	private Name userName;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Name getUserName() {
		return userName;
	}
	public void setUserName(Name userName) {
		this.userName = userName;
	}

	public User(String id, Name userName) {
		super();
		this.id = id;
		this.userName = userName;
	}
	
	
	
}
