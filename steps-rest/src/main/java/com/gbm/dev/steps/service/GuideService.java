package com.gbm.dev.steps.service;

import java.util.Collection;
import java.util.List;

import com.gbm.dev.steps.model.Guide;

public interface GuideService {

	public Guide save(String name, String description);
	
	public void addStep(Long guideId, String text, String imgUrl);
	
	public Guide findById(Long id);
	
	public Collection<Guide> findAll();

	List<Guide> findByName(String name);

	void removeById(Long id);

	void clear();

	void update(Long id, String name, String description);
}
