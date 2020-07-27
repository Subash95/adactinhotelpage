package com.stepdefn;

import java.util.Date;

import com.baseclass.LibGlobal;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends LibGlobal {

	@Before(value = "@Regression")
	public void beforeScenario() {
		Date d = new Date();

		System.out.println("Execution Starts :" + d);
		getDriver();
		loadUrl("http://adactinhotelapp.com/index.php");


	}

	@After("@Smoke")
	public void afterScenario(Scenario sc) {

		if (sc.isFailed()) {
			sc.embed(takeScreenShot(), "image/png");
		}
		Date d = new Date();
		System.out.println(d);
		System.out.println("Execution Ends :" + d);
		quit();
	}

}
