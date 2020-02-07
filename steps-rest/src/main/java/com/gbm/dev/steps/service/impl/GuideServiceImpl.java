package com.gbm.dev.steps.service.impl;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gbm.dev.steps.model.Guide;
import com.gbm.dev.steps.model.Step;
import com.gbm.dev.steps.repository.GuideRepository;
import com.gbm.dev.steps.service.GuideService;
import com.gbm.dev.steps.service.StepService;
import com.gbm.dev.steps.util.Levenshtein;
import com.gbm.dev.steps.util.LevenshteinComparator;

@Service
public class GuideServiceImpl implements GuideService{

	@Autowired
	GuideRepository repository;
	
	@Autowired
	StepService stepService;

	
	private static int MAX_LEVENSHTEIN = 3;
	@Override
	public Guide save(String name, String description) {
		Guide guide = new Guide(name, description);
		
		return repository.save(guide);
	}

	@Override
	public void addStep(Long guideId, String text, String imgUrl) {
		Guide guide = repository.findById(guideId).get();
		
		if (guide != null) {
			
			Step step = stepService.save(text,imgUrl);
			
			guide.addStep(step);
			repository.save(guide);
		}
	}

	@Override
	public Guide findById(Long id) {
		return repository.findById(id).get();
	}
	
	@Override
	public List<Guide> findByName(String name) {
		List<Guide> guides = repository.findAll();
		List<Guide> result = null;

		if (guides != null) { 
			result = guides.stream()
				.filter(guide -> Levenshtein.calculate(guide.getName(), name) < MAX_LEVENSHTEIN)
				.collect(Collectors.toList());
			
			guides.sort(new LevenshteinComparator(name));
			
		}
		return result;
	}

	@Override
	public Collection<Guide> findAll() {
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
	public void update(Long id, String name, String description) {
		Guide guide = findById(id);
		if (guide == null) return;
		guide.setName(name);
		guide.setDescription(description);
		repository.save(guide);
	}
	
}
