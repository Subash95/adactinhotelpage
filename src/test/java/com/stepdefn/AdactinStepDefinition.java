package com.stepdefn;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.baseclass.LibGlobal;
import com.manager.PageOjectManager;
import com.pageobjectmodel.BookAHotelPagePojoClass;
import com.pageobjectmodel.LoginPagePojo;
import com.pageobjectmodel.RegistrationPagePojoClass;
import com.pageobjectmodel.SearchHotelPagePojoClass;
import com.pageobjectmodel.SelectHotelPojoClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.description.annotation.AnnotationDescription.Loadable;

public class AdactinStepDefinition extends LibGlobal {
	PageOjectManager page = new PageOjectManager();

	@Given("user is on adactin")
	public void user_is_on_adactin() {

		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		maximize();
		String pageTitle = pageTitle();
		Assert.assertTrue("check the title", pageTitle.contains("Reservation"));

	}

	@When("user enter {string} and {string}")
	public void user_enter_and(String username, String password) {

		type(page.getLoginPagePojo().getTxtUserName().get(0), username);
		type(page.getLoginPagePojo().getTxtPassword().get(0), password);
	}

	@When("User should click the login button")
	public void user_should_click_the_login_button() {

		btnClick(page.getLoginPagePojo().getBtnLogin().get(0));
	}

	@Given("user should give the location{string}")
	public void user_should_give_the_location(String location) {

		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownLocation().get(0), location);
	}

	@Given("user should give the hotel {string}")
	public void user_should_give_the_hotel(String hotel) {

		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownHotel().get(0), hotel);
	}

	@When("user should select the {string}")
	public void user_should_select_the(String roomType) {

		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownRoomType().get(0), roomType);
	}

	@When("user should give the no of {string}")
	public void user_should_give_the_no_of(String roomNo) {
		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownRoomNo().get(0), roomNo);

	}

	@When("user should give the Checkin {string}")
	public void user_should_give_the_Checkin(String checkInDate) {
		type(page.getSearchHotelPagePojoClass().getTxtCheckInDate().get(0), checkInDate);
	}

	@When("user  should give the Checkout  {string}")
	public void user_should_give_the_Checkout(String checkOutDate) {

		type(page.getSearchHotelPagePojoClass().getTxtCheckInDate().get(0), checkOutDate);
	}

	@When("user should give the no of adults {string}")
	public void user_should_give_the_no_of_adults(String noOfAdults) {

		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownaAdultPerRoom().get(0), noOfAdults);

	}

	@When("user should give the chidren{string}")
	public void user_should_give_the_chidren(String noOfChild) {
		selectByVisibleText(page.getSearchHotelPagePojoClass().getDrpDownaChildPerRoom().get(0), noOfChild);
	}

	@When("user click the search button")
	public void user_click_the_search_button() {
		btnClick(page.getSearchHotelPagePojoClass().getBtnSearch().get(0));
	}

	@Given("User is on SearchHotel page")
	public void user_is_on_SearchHotel_page() {
		btnClick(page.getSelectHotelPojoClass().getBtnCheckBox().get(0));
	}

	@When("user should  click the conntinue button")
	public void user_should_click_the_conntinue_button() {

		btnClick(page.getSelectHotelPojoClass().getBtnContinue().get(0));
	}

	@Given("User is on book a hotel")
	public void user_is_on_book_a_hotel() {

	}

	@When("user should  give the first {string}")
	public void user_should_give_the_first(String firstName) {
		type(page.getBookAHotelPagePojoClass().getTxtUserNamee().get(0), firstName);
	}

	@When("user should give the last {string}")
	public void user_should_give_the_last(String lastName) {
		type(page.getBookAHotelPagePojoClass().getTxtLastName().get(0), lastName);
	}

	@When("user should give the billing {string}")
	public void user_should_give_the_billing(String address) {
		type(page.getBookAHotelPagePojoClass().getTxtAddress().get(0), address);
	}

	@When("user should give the credit card {string}")
	public void user_should_give_the_credit_card(String address) {
		type(page.getBookAHotelPagePojoClass().getTxtCreditCardNo().get(0), address);
	}

	@When("user should give the credit card type{string}")
	public void user_should_give_the_credit_card_type(String cardType) {
		selectByVisibleText(page.getBookAHotelPagePojoClass().getDrpDownCreditCardType().get(0), cardType);

	}

	@When("user should give the Expiry mon {string}")
	public void user_should_give_the_Expiry_mon(String cardMon) {
		selectByVisibleText(page.getBookAHotelPagePojoClass().getDrpDownSelectMon().get(0), cardMon);

	}

	@When("user should give the Expiry Year {string}")
	public void user_should_give_the_Expiry_Year(String cardYear) {

		selectByVisibleText(page.getBookAHotelPagePojoClass().getDrpDownSelectYear().get(0), cardYear);

	}

	@When("user should give the {string}")
	public void user_should_give_the(String cvvNo) {
		type(page.getBookAHotelPagePojoClass().getTxtCvvNo().get(0), cvvNo);
	}

	@When("user should click the booknow button")
	public void user_should_click_the_booknow_button() {
		btnClick(page.getBookAHotelPagePojoClass().getBtnBookNow().get(0));
	}

	@Then("verify the booking Order no")
	public void verify_the_booking_Order_no() throws InterruptedException {

		String att = getAttributeValue(page.getBookAHotelPagePojoClass().getTxtOrderNo().get(0), "value");
		Assert.assertTrue(true);
		System.out.println("Booking order no is :" + att);

	}

}
