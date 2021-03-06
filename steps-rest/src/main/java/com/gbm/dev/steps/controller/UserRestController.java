package com.gbm.dev.steps.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gbm.dev.steps.controller.request.UserRequest;
import com.gbm.dev.steps.model.User;
import com.gbm.dev.steps.service.UserService;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserRestController {

	@Autowired
	private UserService service;

	@GetMapping("/all")
    public Collection<User> all() {
        return service.findAll();
    }
	
	@GetMapping("")
	public User userById(Long id) {
		return service.findById(id);
	}
	
	@GetMapping("/name")
	public List<User> userByName(String name) {
		return service.findByName(name);
	}
	
	
	@PostMapping("save")
	public void save(@RequestBody(required = false)UserRequest request) {
		service.save(request.getName(),request.getPassword());
	}
	
	@PostMapping("update")
	public void update(@RequestBody UserRequest request) {
		service.update(request.getId(),request.getName(),request.getPassword());
	}
	
	@GetMapping("remove")
	public void remove(Long id) {
		service.removeById(id);
	}
	
	
	
	
	
	
	
	
	
	

}
