package com.pageobjectmodel;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.LibGlobal;

public class SearchHotelPagePojoClass extends LibGlobal {

	public SearchHotelPagePojoClass() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "location")
	private List<WebElement> drpDownLocation;

	@FindBy(id = "hotels")
	private List<WebElement> drpDownHotel;

	@FindBy(id = "room_type")
	private List<WebElement> drpDownRoomType;

	@FindBy(id = "room_nos")
	private List<WebElement> drpDownRoomNo;

	@FindBy(id = "datepick_in")
	private List<WebElement> txtCheckInDate;

	@FindBy(id = "datepick_out")
	private List<WebElement> txtCheckOutDate;

	@FindBy(id = "adult_room")
	private List<WebElement> drpDownaAdultPerRoom;

	@FindBy(id = "child_room")
	private List<WebElement> drpDownaChildPerRoom;

	@FindBy(id = "Submit")
	private List<WebElement> btnSearch;

	@FindBy(id = "Reset")
	private List<WebElement> btnReset;

	public List<WebElement> getDrpDownLocation() {
		return drpDownLocation;
	}

	public List<WebElement> getDrpDownHotel() {
		return drpDownHotel;
	}

	public List<WebElement> getDrpDownRoomType() {
		return drpDownRoomType;
	}

	public List<WebElement> getDrpDownRoomNo() {
		return drpDownRoomNo;
	}

	public List<WebElement> getTxtCheckInDate() {
		return txtCheckInDate;
	}

	public List<WebElement> getTxtCheckOutDate() {
		return txtCheckOutDate;
	}

	public List<WebElement> getDrpDownaChildPerRoom() {
		return drpDownaChildPerRoom;
	}

	public List<WebElement> getBtnSearch() {
		return btnSearch;
	}

	public List<WebElement> getBtnReset() {
		return btnReset;
	}

	public List<WebElement> getDrpDownaAdultPerRoom() {
		return drpDownaAdultPerRoom;
	}

}
