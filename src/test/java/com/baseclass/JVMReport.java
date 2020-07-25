package com.baseclass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {

	public static void genarateJVMReport(String jsonFile) {
		
		File loc = new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports");
		
		Configuration con = new Configuration(loc, "AcactinAutomation");
		con.addClassifications("Browser name", "Chrome");
		con.addClassifications("Browser version", "83");	
		con.addClassifications("os", "Windows 10 ");
		con.addClassifications("os type", "64");
		con.addClassifications("Testing", "Regression");
		
		List<String> jsonFiles = new ArrayList<String>();
		jsonFiles.add(jsonFile);
		ReportBuilder builder = new ReportBuilder(jsonFiles, con);
		builder.generateReports();
		
	}

}
