package com.novadit.smartpayservice;

import java.io.Serializable;

public class Contact implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String name;
	private String email;
	private String phone;
	private String subject;
	private String message;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return "Contact [name=" + name + ", email=" + email + ", phone=" + phone + ", subject=" + subject + ", message="
				+ message + "]";
	}

		
}
