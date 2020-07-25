package com.pageobjectmodel;


import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class LoginPagePojo extends LibGlobal {
	public LoginPagePojo() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "username")
	private List<WebElement> txtUserName;

	@FindBy(id = "password")
	private List<WebElement> txtPassword;

	@FindBy(id = "login")
	private List<WebElement> btnLogin;

	@FindBy(xpath = "//a[text()='New User Register Here']")
	private List<WebElement> linkRegister;

	public List<WebElement> getTxtUserName() {
		return txtUserName;
	}

	public List<WebElement> getTxtPassword() {
		return txtPassword;
	}

	public List<WebElement> getBtnLogin() {
		return btnLogin;
	}

	public List<WebElement> getLinkRegister() {
		return linkRegister;
	}

	
}