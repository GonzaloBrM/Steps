package com.gbm.dev.steps.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.gbm.dev.steps.util.LevenshteinComparable;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
public class User implements LevenshteinComparable{

	@Id @GeneratedValue
	private Long id;
	private String userName;
	private String password;
	
	public User(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}
	
	public String getLevenshteinValue() {
		return getUserName();
	}
}
