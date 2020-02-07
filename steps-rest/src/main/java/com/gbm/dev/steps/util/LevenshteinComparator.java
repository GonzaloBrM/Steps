package com.gbm.dev.steps.util;

import java.util.Comparator;

public class LevenshteinComparator implements Comparator<LevenshteinComparable>{
    private static String compareBy = "";

    public LevenshteinComparator(String compareBy) {
        LevenshteinComparator.compareBy = compareBy;
    }



    public int compare(LevenshteinComparable a, LevenshteinComparable b) {
        return compareByLevenshtein(a, b, compareBy);
    }
    
    
	private static int compareByLevenshtein(LevenshteinComparable g1, LevenshteinComparable g2, String name) {
		Integer g1Dist = Levenshtein.calculate(g1.getLevenshteinValue(), name);
		Integer g2Dist = Levenshtein.calculate(g2.getLevenshteinValue(), name);
		return g1Dist.compareTo(g2Dist);
	}
	
	
}