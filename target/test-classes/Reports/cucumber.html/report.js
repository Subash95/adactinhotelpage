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
});