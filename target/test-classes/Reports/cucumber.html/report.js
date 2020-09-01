$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Adactin.feature");
formatter.feature({
  "name": "verifying the adactin details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Func1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verifying  the login details with valid and invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user is on adactin",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "subashmuthukumar",
        "70C6R2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying  the login details with valid and invalid credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Func1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on adactin",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinStepDefinition.user_is_on_adactin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"subashmuthukumar\" and \"70C6R2\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verifying the  search hotel with given details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user should give the location\"\u003clocation\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user should give the hotel \"\u003chotel\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user should select the \"\u003croomtype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the no of \"\u003crooms\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the Checkin \"\u003ccheck in date\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user  should give the Checkout  \"\u003ccheck out date\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the no of adults \"\u003cadults\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the chidren\"\u003cchild\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the search button",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "location",
        "hotel",
        "roomtype",
        "rooms",
        "check in date",
        "check out date",
        "adults",
        "child",
        ""
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "09/07/2020",
        "10/07/2020",
        "1 - One",
        "1 - One",
        "1 - One"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying the  search hotel with given details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Func1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user should give the location\"Sydney\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_location(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the hotel \"Hotel Creek\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_hotel(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should select the \"Standard\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_select_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the no of \"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_no_of(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the Checkin \"09/07/2020\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_Checkin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  should give the Checkout  \"10/07/2020\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_Checkout(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the no of adults \"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_no_of_adults(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the chidren\"1 - One\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_chidren(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify  the hotel name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Func1"
    },
    {
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "name": "User is on SearchHotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinStepDefinition.user_is_on_SearchHotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  click the conntinue button",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_click_the_conntinue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    verify the book a hotel",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User is on book a hotel",
  "keyword": "Given "
});
formatter.step({
  "name": "user should  give the first \"\u003cfirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the last \"\u003clastaname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the billing \"\u003cAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the credit card \"\u003cnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the credit card type\"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the Expiry mon \"\u003cmon\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the Expiry Year \"\u003cyear\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should give the \"\u003ccvv number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "And "
});
formatter.step({
  "name": "verify the booking Order no",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "",
        "lastaname",
        "",
        "Address",
        "",
        "number",
        "",
        "cvv number",
        "",
        "type",
        "",
        "mon",
        "",
        "year"
      ]
    },
    {
      "cells": [
        "Subash",
        "",
        "Kumar",
        "",
        "Meenashipuram",
        "",
        "5846231578964582",
        "",
        "303",
        "",
        "VISA",
        "",
        "January",
        "",
        "2014"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    verify the book a hotel",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Func1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User is on book a hotel",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinStepDefinition.user_is_on_book_a_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should  give the first \"Subash\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_first(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the last \"Kumar\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_last(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the billing \"Meenashipuram\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_billing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the credit card \"5846231578964582\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_credit_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the credit card type\"VISA\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_credit_card_type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the Expiry mon \"January\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_Expiry_mon(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the Expiry Year \"2014\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the_Expiry_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should give the \"303\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_give_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.user_should_click_the_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the booking Order no",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_booking_Order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});at java.util.Collections$EmptyList.get(Unknown Source)\r\n\tat sun.reflect.GeneratedMethodAccessor3.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\r\n\tat com.sun.proxy.$Proxy17.get(Unknown Source)\r\n\tat com.stepdefn.AdactinStepDefinition.verify_the_booking_Order_no(AdactinStepDefinition.java:170)\r\n\tat ✽.verify the booking Order no(src/test/resources/Features/Adactin.feature:53)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-KIE8J4S\u0027, ip: \u0027192.168.0.131\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\LENOVO\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b993b008e23a6b378f4ba3b800d4667b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.baseclass.LibGlobal.takeScreenShot(LibGlobal.java:65)\r\n\tat com.stepdefn.HooksClass.afterScenario(HooksClass.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:48)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:124)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:133)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});