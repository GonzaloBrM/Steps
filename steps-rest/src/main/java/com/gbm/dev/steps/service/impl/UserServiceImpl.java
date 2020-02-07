package com.gbm.dev.steps.service.impl;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gbm.dev.steps.model.User;
import com.gbm.dev.steps.repository.UserRepository;
import com.gbm.dev.steps.service.UserService;
import com.gbm.dev.steps.util.Levenshtein;
import com.gbm.dev.steps.util.LevenshteinComparator;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository repository;
	
	private static int MAX_LEVENSHTEIN = 3;

	
	@Override
	public User save(String name, String password) {
		User User = new User(name, password);
		
		return repository.save(User);
	}

	@Override
	public User findById(Long id) {
		return repository.findById(id).get();
	}
	
	@Override
	public List<User> findByName(String name) {
		List<User> users = repository.findAll();
		List<User> result = null;

		if (users != null) { 
			result = users.stream()
				.filter(user -> Levenshtein.calculate(user.getUserName(), name) < MAX_LEVENSHTEIN)
				.collect(Collectors.toList());
			
			users.sort(new LevenshteinComparator(name));
			
		}
		return result;
	}

	@Override
	public Collection<User> findAll() {
		return repository.findAll();
	}
	
	@Override
	public void removeById(Long id) {
		repository.deleteById(id);
	}
	
	@Override
	public void clear() {
		repository.deleteAll();
	}
	
	@Override
	public void update(Long id, String name, String password) {
		User User = findById(id);
		if (User == null) return;
		User.setUserName(name);
		User.setPassword(password);
		repository.save(User);
	}
	
}
