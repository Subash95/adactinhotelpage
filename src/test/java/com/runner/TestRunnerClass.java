package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.baseclass.JVMReport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources" }, glue = {
		"com.stepdefn" }, monochrome = true, dryRun = false,strict =true, 
				plugin = {"json:src\\test\\resources\\Reports\\cucumber1.json",
						"html:src\\test\\resources\\Reports\\cucumber.html"} )
 
				

public class TestRunnerClass {

	@AfterClass
	public static void afterClass() {
		JVMReport.genarateJVMReport(System.getProperty("user.dir") + 
				"\\src\\test\\resources\\Reports\\cucumber.json");
	}

}
