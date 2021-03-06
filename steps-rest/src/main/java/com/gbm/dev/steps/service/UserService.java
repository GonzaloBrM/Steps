package com.gbm.dev.steps.service;

import java.util.Collection;
import java.util.List;

import com.gbm.dev.steps.model.User;

public interface UserService {

	public User save(String name, String password);
	
	public User findById(Long id);
	
	public Collection<User> findAll();

	List<User> findByName(String name);

	void removeById(Long id);

	void clear();

	void update(Long id, String userName, String password);
}
