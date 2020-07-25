package com.baseclass;

import java.awt.AWTException;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.DoubleClickAction;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;

public class LibGlobal {

	public static WebDriver driver;
	public static Select s;
	public static Actions a;
	public static Robot r;
	public static Alert al;
	public static final String USERNAME = "subashkumar1";
	public static final String AUTOMATE_KEY = "VTRuLsQPCCSzR869vGLo";
	public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

	public void getDriverCloud() {
		DesiredCapabilities caps = new DesiredCapabilities();

		caps.setCapability("os", "Windows");
		caps.setCapability("os_version", "10");
		caps.setCapability("browser", "Chrome");
		caps.setCapability("browser_version", "83");

		caps.setCapability("name", "subashkumar1's First Test");

		try {
			driver = new RemoteWebDriver(new URL(URL), caps);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

	}

	public static WebDriver getDriver() {

		System.setProperty("webdriver.chrome.driver",

				System.getProperty("user.dir") + "\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		return driver;

	}

	public byte[] takeScreenShot() {
		TakesScreenshot tk = (TakesScreenshot) driver;
		byte[] b = tk.getScreenshotAs(OutputType.BYTES);
		return b;

	}

	public static void maximize() {
		driver.manage().window().maximize();

	}

	public static void loadUrl(String url) {
		driver.get(url);
	}

	public static String type(WebElement element, String data) {
		element.sendKeys(data);
		return data;

	}

	public static void btnClick(WebElement element) {
		element.click();

	}

	public static void quit() {
		driver.quit();

	}

	public static void getAttributesJs(WebElement element, String data) {
		JavascriptExecutor jk = (JavascriptExecutor) driver;

		Object obj = jk.executeScript("return argument [0].setAttributes('value'," + data + "", element);
		String txt = (String) obj;
		System.out.println(txt);

	}

	public static void typeJs(WebElement element, String data) {
		((JavascriptExecutor) driver).executeScript("argument [0].setAttributes('value'," + data + "", element);

	}

	public static void btnClickJs(WebElement element) {
		((JavascriptExecutor) driver).executeScript("argument [0].click()", element);
	}

	public static String getValueByText(WebElement element) {
		return element.getText();

	}

	public static String getAttributeValue(WebElement element, String value) {
		String att = element.getAttribute(value);
		return att;

	}

	public static String getUrl() {
		return driver.getCurrentUrl();

	}

	public static String pageTitle() {
		return driver.getTitle();

	}

	public static void selectByVisibleText(WebElement element, String data) {
		s = new Select(element);
		s.selectByVisibleText(data);

	}

	public static void selectByIndex(WebElement element, int no) {
		s = new Select(element);
		s.selectByIndex(no);

	}

	public static void selectByValue(WebElement element, String data) {
		s = new Select(element);
		s.selectByValue(data);
	}

	public static void deSelect(WebElement element) {
		s = new Select(element);
	}

	public static void getOption() {

	}

	public static void dragAndDrop(WebElement src, WebElement des) {
		a = (Actions) driver;
		a.dragAndDrop(src, des);

	}

	public static void moveToElement(WebElement element) {
		a = (Actions) driver;
		a.moveToElement(element);

	}

	public static void manage() {
		driver.manage();
	}

	public static void rightClick(WebElement element) {
		a = (Actions) driver;
		a.contextClick();
	}

	public static void btnDoubleClick(WebElement element) {
		a = (Actions) driver;
		a.doubleClick();
	}

	public static void pressKey(KeyEvent keyEvent, int value) throws AWTException {
		r = new Robot();
		r.keyPress(value);

	}
	


}
