package com.gbm.dev.steps.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.gbm.dev.steps.model.Step;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface StepRepository extends JpaRepository<Step, Long>{

}
