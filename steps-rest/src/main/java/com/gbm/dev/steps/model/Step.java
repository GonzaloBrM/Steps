
package com.gbm.dev.steps.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@JsonInclude(Include.NON_NULL)
public class Step implements Comparable<Step>{
	@Id @GeneratedValue @JsonIgnore
	private Long id;
	private String text;
	private String imgUrl;
	
	public Step (String text, String imgUrl) {
		this.text = text;
		this.imgUrl = imgUrl;
	}

	@Override
	public int compareTo(Step o) {
		return id.compareTo(o.id);
	}
}
