package com.gbm.dev.steps;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.gbm.dev.steps.model.Guide;
import com.gbm.dev.steps.model.Step;
import com.gbm.dev.steps.repository.GuideRepository;
import com.gbm.dev.steps.repository.StepRepository;

@SpringBootApplication
public class StepsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StepsApplication.class, args);
	}
	
}
