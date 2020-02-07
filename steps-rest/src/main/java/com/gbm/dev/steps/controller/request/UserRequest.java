package com.gbm.dev.steps.controller.request;

import lombok.Data;

@Data
public class UserRequest {
	private Long id;
	private String name;
	private String password;
}
