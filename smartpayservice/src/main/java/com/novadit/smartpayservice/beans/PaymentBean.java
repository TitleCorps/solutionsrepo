package com.novadit.smartpayservice.beans;

import java.util.Date;

public class PaymentBean {

	private String senderMobileNumber;
	
	private String receiverMobileNumber;
	
	private String amount;
	
	private Date transactionDate;

	private String senderAccountKey;
	
	private String receiverAccountKey;
	
	private String paymentDescription;
	
	public String getReceiverMobileNumber() {
		return receiverMobileNumber;
	}

	public void setReceiverMobileNumber(String receiverMobileNumber) {
		this.receiverMobileNumber = receiverMobileNumber;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public String getSenderMobileNumber() {
		return senderMobileNumber;
	}

	public void setSenderMobileNumber(String senderMobileNumber) {
		this.senderMobileNumber = senderMobileNumber;
	}

	public String getSenderAccountKey() {
		return senderAccountKey;
	}

	public void setSenderAccountKey(String senderAccountKey) {
		this.senderAccountKey = senderAccountKey;
	}

	public String getReceiverAccountKey() {
		return receiverAccountKey;
	}

	public void setReceiverAccountKey(String receiverAccountKey) {
		this.receiverAccountKey = receiverAccountKey;
	}

	public String getPaymentDescription() {
		return paymentDescription;
	}

	public void setPaymentDescription(String paymentDescription) {
		this.paymentDescription = paymentDescription;
	}
	
}
