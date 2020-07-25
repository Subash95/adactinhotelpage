package com.pageobjectmodel;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class RegistrationPagePojoClass extends LibGlobal {
	 public RegistrationPagePojoClass() {
	PageFactory.initElements(driver, this);
	}	

	@FindBy(id = "username")
	private List<WebElement> txtUserName;

	@FindBy(id = "password")
	private List<WebElement> txtPassword;
	
	@FindBy(id = "re_password")
	private List<WebElement> txtConfirmPassword;
	
	@FindBy(id = "email_add")
	private List<WebElement> txtEmailBox;
	
	@FindBy(id = "tnc_box")
	private List<WebElement> btnCheckBox;
	
	@FindBy(id = "Submit")
	private List<WebElement> btnSummit;
	
	@FindBy(id = "Reset")
	private List<WebElement> btnReset;
	
	@FindBy(xpath ="//a[text()='Go back to Login page']")
	private List<WebElement> linkGoToLoginPage;

	public List<WebElement> getTxtUserName() {
		return txtUserName;
	}

	public List<WebElement> getTxtPassword() {
		return txtPassword;
	}

	public List<WebElement> getTxtConfirmPassword() {
		return txtConfirmPassword;
	}

	public List<WebElement> getTxtEmailBox() {
		return txtEmailBox;
	}

	public List<WebElement> getBtnCheckBox() {
		return btnCheckBox;
	}

	public List<WebElement> getBtnSummit() {
		return btnSummit;
	}

	public List<WebElement> getBtnReset() {
		return btnReset;
	}

	public List<WebElement> getLinkGoToLoginPage() {
		return linkGoToLoginPage;
	}

	
	
	
	

}
