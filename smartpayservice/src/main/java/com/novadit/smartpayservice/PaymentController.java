package com.novadit.smartpayservice;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.novadit.smartpayservice.beans.PaymentBean;
import com.novadit.smartpayservice.beans.PaymentBeanList;

@RestController
public class PaymentController {

	private static List<PaymentBean> blockChain;


	@RequestMapping(value = "/makePayment", method=RequestMethod.POST)
	public List<PaymentBean> makePayment(@RequestBody PaymentBean paymentBean){

		updateBlockChain();
		return blockChain;
	}

	@RequestMapping(value = "/getHistory")
	public PaymentBeanList getBlockChain(){

		PaymentBeanList bean = new PaymentBeanList();
		
		bean.setPaymentBeanList(blockChain);
		
		return bean;
	}

	private void updateBlockChain(){


		if(blockChain == null){

			blockChain = new ArrayList<PaymentBean>();
		}


		PaymentBean paymentBean = new PaymentBean();
		String paymentDesc = "";
		for(int i=0; i<30; i++){

			Random randomGenerator = new Random();

			int index = randomGenerator.nextInt(256);

			paymentDesc = paymentDesc + ((char)index);

		}

		paymentBean.setPaymentDescription(paymentDesc);
		paymentBean.setAmount(Double.toString(Math.random()));
		paymentBean.setTransactionDate(new Date());
		blockChain.add(paymentBean);
	}
}
