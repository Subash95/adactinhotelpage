@Func1
Feature: verifying the adactin details

  @Regression
  Scenario Outline: verifying  the login details with valid and invalid credential
    Given user is on adactin
    When user enter "<username>" and "<password>"
    And User should click the login button

    Examples: 
      | username         | password |
      | subashmuthukumar | 70C6R2   |

  #| subashmuthu      | 72C6R2   |
  @Sanity
  Scenario Outline: verifying the  search hotel with given details
    Given user should give the location"<location>"
    Given user should give the hotel "<hotel>"
    When user should select the "<roomtype>"
    When user should give the no of "<rooms>"
    When user should give the Checkin "<check in date>"
    When user  should give the Checkout  "<check out date>"
    When user should give the no of adults "<adults>"
    When user should give the chidren"<child>"
    When user click the search button

    Examples: 
      | location | hotel       | roomtype | rooms   | check in date | check out date | adults  | child   |         |
      | Sydney   | Hotel Creek | Standard | 1 - One | 09/07/2020    | 10/07/2020     | 1 - One | 1 - One | 1 - One |

  # | Melbourne | Hotel Creek    | Double       | 2 - Two   | 02/08/2020    | 06/08/2020     |        | 2 - Two   | 2 - Two   |
  # | Brisbane  | Hotel Sunshine | Deluxe       | 3 - Three | 05/08/2020    | 11/08/2020     |        | 3 - Three | 3 - Three |
  # | Adelaide  | Hotel Cornice  | Super Deluxe | 4 - Four  | 07/08/2020    | 15/08/2020     |        | 4 - Four  | 4 - Four  |
  @E2E
  Scenario: verify  the hotel name
    Given User is on SearchHotel page
    When user should  click the conntinue button

  @Smoke
  Scenario Outline: 
    verify the book a hotel

    Given User is on book a hotel
    When user should  give the first "<firstname>"
    When user should give the last "<lastaname>"
    When user should give the billing "<Address>"
    When user should give the credit card "<number>"
    When user should give the credit card type"<type>"
    When user should give the Expiry mon "<mon>"
    When user should give the Expiry Year "<year>"
    When user should give the "<cvv number>"
    And user should click the booknow button
    Then verify the booking Order no

    Examples: 
      | firstname |  | lastaname |  | Address       |  | number           |  | cvv number |  | type           |  | mon      |  | year |
      | Subash    |  | Kumar     |  | Meenashipuram |  | 5846231578964582 |  |        303 |  | VISA           |  | January  |  | 2014 |
    #  | Suresh    |  | Kumar     |  | Nagercoil     |  | 5842645454543544 |  |        305 |  | AmericanExpres |  | February |  | 2020 |
     # | Subiksha  |  | ganesan   |  | chennai       |  | 5842615454545544 |  |        309 |  | Master         |  | March    |  | 2022 |
