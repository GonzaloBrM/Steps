package com.gbm.dev.steps.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.gbm.dev.steps.util.LevenshteinComparable;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@JsonInclude(Include.NON_NULL)
public class Guide implements LevenshteinComparable{

	@Id @GeneratedValue
	private Long id;
	private Long ownerId;
	private Long views;
	private String name;
	private String description;
	
	
	@OneToMany(fetch = FetchType.EAGER)
	private Collection<Step> steps;
	
	public Guide(String name, String description) {
		this.name = name;
		this.description = description;
		this.steps = new ArrayList<Step>();
	}

	public void addStep(Step step) {	
		steps.add(step);
	}
	
	public List<Step> getSteps(){

		Collections.sort((List<Step>) steps);
		return (List<Step>) steps;
	}
	
	public Integer getNumSteps() {
		return (steps == null) ? 0 : steps.size();
	}

	@Override
	public String getLevenshteinValue() {
		return getName();
	}
}
