package com.baseclass;

import org.omg.CORBA.PUBLIC_MEMBER;

import com.aventstack.extentreports.ExtentReports;

import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import cucumber.api.Result.Type;
import cucumber.api.Scenario;

public class GenarateExtendReport {

	public static ExtentHtmlReporter htmlReport;
	public static ExtentReports report;

	public static void startReport(String location) {
		htmlReport = new ExtentHtmlReporter(location);
		htmlReport.config().setDocumentTitle("Adactin Hotel Page");
		htmlReport.config().setReportName("Booking");
		htmlReport.config().setTheme(Theme.DARK);

		report = new ExtentReports();

		report.attachReporter(htmlReport);

		report.setSystemInfo("Browser Name", "Chrome");
		report.setSystemInfo("Os version", "83");
		report.setSystemInfo("Environment", "Testing");
		report.setSystemInfo("Sprint", "18");
	}

	public static void generateTest(Scenario s) {
		String scenarioName = s.getName();
		Type status = s.getStatus();

		switch (status) {
		case PASSED:
			report.createTest(scenarioName).pass("Scenario Passed");

			break;
		case FAILED:
			report.createTest(scenarioName).fail("Scenario Failed");

			break;

		default:
			report.createTest(scenarioName).skip("Scenario Skipped");
			break;
		}
	}



	public static void tearDown() {

		report.flush();
	}
}
