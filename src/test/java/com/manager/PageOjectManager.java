package com.manager;

import org.openqa.selenium.support.ui.Select;

import com.pageobjectmodel.BookAHotelPagePojoClass;
import com.pageobjectmodel.LoginPagePojo;
import com.pageobjectmodel.RegistrationPagePojoClass;
import com.pageobjectmodel.SearchHotelPagePojoClass;
import com.pageobjectmodel.SelectHotelPojoClass;

public class PageOjectManager {

	private LoginPagePojo loginPagePojo;
	private RegistrationPagePojoClass registrationPagePojoClass;
	private SearchHotelPagePojoClass searchHotelPagePojoClass;
	private SelectHotelPojoClass selectHotelPojoClass;
	private BookAHotelPagePojoClass bookAHotelPagePojoClass;

	public LoginPagePojo getLoginPagePojo() {
		return (loginPagePojo == null) ? loginPagePojo = new LoginPagePojo() : loginPagePojo;
	}

	public RegistrationPagePojoClass getRegistrationPagePojoClass() {
		return (registrationPagePojoClass == null) ? registrationPagePojoClass = new RegistrationPagePojoClass()
				: registrationPagePojoClass;
	}

	public SearchHotelPagePojoClass getSearchHotelPagePojoClass() {
		return (searchHotelPagePojoClass == null) ? searchHotelPagePojoClass = new SearchHotelPagePojoClass()
				: searchHotelPagePojoClass;
	}

	public SelectHotelPojoClass getSelectHotelPojoClass() {
		return (selectHotelPojoClass == null) ? selectHotelPojoClass = new SelectHotelPojoClass()
				: selectHotelPojoClass;
	}

	public BookAHotelPagePojoClass getBookAHotelPagePojoClass() {
		return (bookAHotelPagePojoClass == null) ? bookAHotelPagePojoClass = new BookAHotelPagePojoClass()
				: bookAHotelPagePojoClass;
	}

}
