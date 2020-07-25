package com.pageobjectmodel;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class SelectHotelPojoClass extends LibGlobal {
	public SelectHotelPojoClass() {
		PageFactory.initElements(driver, this);
		}	

		@FindBy(id = "radiobutton_0")
		private List<WebElement> btnCheckBox;

		@FindBy(id = "continue")
		private List<WebElement> btnContinue;
		
		@FindBy(id = "cancel")
		private List<WebElement> btnCancel;

		public List<WebElement> getBtnCheckBox() {
			return btnCheckBox;
		}

		public List<WebElement> getBtnContinue() {
			return btnContinue;
		}

		public List<WebElement> getBtnCancel() {
			return btnCancel;
		}

		

}