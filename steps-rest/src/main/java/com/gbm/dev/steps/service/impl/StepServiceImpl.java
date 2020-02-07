package com.gbm.dev.steps.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gbm.dev.steps.model.Step;
import com.gbm.dev.steps.repository.StepRepository;
import com.gbm.dev.steps.service.StepService;

@Service
public class StepServiceImpl implements StepService{

	@Autowired
	StepRepository repository;
	
	
	@Override
	public Step save(String text, String imgUrl) {
		Step step = new Step(text, imgUrl);
		return repository.save(step);
	}

}
