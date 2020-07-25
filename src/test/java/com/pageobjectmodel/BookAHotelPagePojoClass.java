package com.pageobjectmodel;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class BookAHotelPagePojoClass extends LibGlobal {
	public BookAHotelPagePojoClass() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "hotel_name_dis")
	private List<WebElement> txtHotelName;
	@FindBy(id = "location_dis")
	private List<WebElement> txtLocation;

	@FindBy(id = "room_type_dis")
	private List<WebElement> txtRoomtype;

	@FindBy(id = "total_days_dis")
	private List<WebElement> txtNoTotalDays;

	@FindBy(id = "price_night_dis")
	private List<WebElement> txtPricePerDay;

	@FindBy(id = "address")
	private List<WebElement> txtAddress;

	@FindBy(id = "first_name")
	private List<WebElement> txtUserNamee;

	@FindBy(id = "last_name")
	private List<WebElement> txtLastName;

	@FindBy(id = "cc_num")
	private List<WebElement> txtCreditCardNo;

	@FindBy(id = "cc_type")
	private List<WebElement> drpDownCreditCardType;

	@FindBy(id = "cc_exp_month")
	private List<WebElement> drpDownSelectMon;

	@FindBy(id = "cc_exp_year")
	private List<WebElement> drpDownSelectYear;

	@FindBy(id = "cc_cvv")
	private List<WebElement> txtCvvNo;

	@FindBy(id = "book_now")
	private List<WebElement> btnBookNow;

	@FindBy(id = "cancel")
	private List<WebElement> btnCancel;

	@FindBy(id = "order_no")
	private List<WebElement> txtOrderNo;

	public List<WebElement> getTxtHotelName() {
		return txtHotelName;
	}

	public List<WebElement> getTxtLocation() {
		return txtLocation;
	}

	public List<WebElement> getTxtRoomtype() {
		return txtRoomtype;
	}

	public List<WebElement> getTxtNoTotalDays() {
		return txtNoTotalDays;
	}

	public List<WebElement> getTxtPricePerDay() {
		return txtPricePerDay;
	}

	public List<WebElement> getTxtAddress() {
		return txtAddress;
	}

	public List<WebElement> getTxtUserNamee() {
		return txtUserNamee;
	}

	public List<WebElement> getTxtLastName() {
		return txtLastName;
	}

	public List<WebElement> getTxtCreditCardNo() {
		return txtCreditCardNo;
	}

	public List<WebElement> getDrpDownCreditCardType() {
		return drpDownCreditCardType;
	}

	public List<WebElement> getDrpDownSelectMon() {
		return drpDownSelectMon;
	}

	public List<WebElement> getDrpDownSelectYear() {
		return drpDownSelectYear;
	}

	public List<WebElement> getTxtCvvNo() {
		return txtCvvNo;
	}

	public List<WebElement> getBtnBookNow() {
		return btnBookNow;
	}

	public List<WebElement> getBtnCancel() {
		return btnCancel;
	}

	public List<WebElement> getTxtOrderNo() {
		return txtOrderNo;
	}

	
}
