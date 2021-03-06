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

import com.gbm.dev.steps.controller.request.GuideRequest;
import com.gbm.dev.steps.controller.request.GuideStepRequest;
import com.gbm.dev.steps.model.Guide;
import com.gbm.dev.steps.service.GuideService;

@RestController
@RequestMapping("guide")
@CrossOrigin(origins = "http://localhost:4200")
public class GuideRestController {

	@Autowired
	private GuideService service;

	@GetMapping("/all")
    public Collection<Guide> all() {
        return service.findAll();
    }
	
	@GetMapping("")
	public Guide guideById(Long id) {
		return service.findById(id);
	}
	
	@GetMapping("/name")
	public List<Guide> guideByName(String name) {
		return service.findByName(name);
	}
	
	
	@PostMapping("save")
	public void save(@RequestBody(required = false)GuideRequest request) {
		service.save(request.getName(),request.getDescription());
	}
	
	@PostMapping("update")
	public void update(@RequestBody GuideRequest request) {
		service.update(request.getId(),request.getName(),request.getDescription());
	}
	
	@GetMapping("remove")
	public void remove(Long id) {
		service.removeById(id);
	}
	
	@PostMapping("addStep")
	public void addStep(@RequestBody GuideStepRequest request) {
		service.addStep(request.getId(), request.getStep().getText(), request.getStep().getImgUrl());
	}
	
	
	
	
	
	
	
	
	

}
