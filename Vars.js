"use strict";
var Vars = function() {
  var home=element(by.xpath("//button[contains(text(),'Home')]"));
  var header=element(by.xpath("//strong[contains(text(),'XYZ Bank')]"));
  var Customer_Login=element(by.css("button[ng-click='customer()']"));
  var Manager_Login=element(by.css("button[ng-click='manager()']"));
  var Select_User=element(by.xpath("//select[@id='userSelect']"));
  var Login=element(by.css("button[type='submit']"));
  var welcome_messg=element(by.xpath("//span[contains(text(),'Ron Weasly')]"));
  var acc_select=element(by.xpath("//select[@id='accountSelect']"));
  var Customer_Transaction=element(by.css("button[ng-click='transactions()']"));
  var Back=element(by.css("button[ng-click='back()']"));
  var Customer_Deposit=element(by.css("button[ng-click='deposit()']"));
  var amount=element(by.model("amount"));
  var Deposit_button=element(by.className("btn btn-default"));
  var Check_Deposit=element(by.css("span[ng-show='message']"))
  var Customer_Withdrawl=element(by.css("button[ng-click='withdrawl()']"));
  var Withdrawl_button=element(by.className("btn btn-default"));
  var Check_Withdrawl=element(by.css("span[ng-show='message']"));
  var Logout=element(by.css("button[ng-click='byebye()']"));
  var AddCustomer=element(by.css("button[ng-click='addCust()']"));
  var Fname=element(by.model("fName"));
  var Lname=element(by.model("lName"));
  var Pcode=element(by.model("postCd"));
  var Add_Customer=element(by.className("btn btn-default"));
  var Open_Acc=element(by.css("button[ng-click='openAccount()']"));
  var Select_Currency=element(by.xpath("//select[@id='currency']"));
  var Process=element(by.css("button[type='submit']"));
  var Customers=element(by.css("button[ng-click='showCust()']"));
  var Search=element(by.model("searchCustomer"));
  var Delete=element(by.css("button[ng-click='deleteCust(cust)']"));
//Access the URL
  this.get = () => {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
  };
//Click Home Button
  this.clickHome = () => {
     home.click();
  };
//Get Header
 this.getHeader = () => {
  return header.getText();
};
//Click Customer Login
this.clickCustomerLogin = () => {
  Customer_Login.click();
};
//Click Manager Login
this.clickManager_Login = () => {
  Manager_Login.click();
};
//Select User in Customer Login
this.select_User = () => {
  Select_User.click().sendKeys("Ron Weasly").click();
}
//Click after selecting the user in the dropdown
this.click_select_Customer_Login = () => {
  Login.click();
};
//Get welcome message
this.getwelcome_messg = () => {
  return welcome_messg.getText();
};
//Select customer account
this.account_select = () => {
  acc_select.click().sendKeys("1007").click();
}
//Click to view customer transactions
this.clickCustomer_Transaction = () => {
  Customer_Transaction.click();
}
//Click back button within transactions
this.clickBack = () => {
  Back.click();
}
//Click on customer deposit section
this.clickCustomerDeposit = () => {
  Customer_Deposit.click();
}
//Enter amount to deposit
this.sendAmountDeposit = () => {
  amount.sendKeys("500");
}
//Click on deposit button to deposit entered amount
this.clickAmountDeposit = () => {
  Deposit_button.click();
}
//Get the message after deposit
this.checkDepositStatus = () => {
  return Check_Deposit.getText();
};
//Click on the customer withdrawl section
this.clickCustomer_Withdrawl = () => {
  Customer_Withdrawl.click();
}
//Enter amount to withdrawl
this.sendAmountWithdrawl = () => {
  amount.sendKeys("100");
}
//Click on withdrawl button to withdrawl entered amount
this.clickAmountWithdrawl = () => {
  Withdrawl_button.click();
}
//Get the message after withdrawl
this.checkWithdrawlStatus = () => {
  return Check_Withdrawl.getText();
};
//Click on the logout button after transaction
this.clickLogout = () => {
  Logout.click();
}
//Click on the manager login button
this.clickManager_Login = () => {
  Manager_Login.click();
}
//Click on the add customer section
this.clickAddCustomerSection = () => {
  AddCustomer.click();
}
//Enter first name
this.sendFName = () => {
  Fname.sendKeys("Jasvinder");
}
//Enter last name
this.sendLName = () => {
  Lname.sendKeys("Singh");
}
//Enter post code
this.sendPcode = () => {
  Pcode.sendKeys("831011");
}
//Click on the add customer button
this.clickAddCustomerbutton = () => {
  Add_Customer.click();
}
//Accept the alert message
this.clickAcceptAlert = () => {
  browser.driver.switchTo().alert().accept();
}
//Click on the open account section
this.clickOpenAccountSection = () => {
  Open_Acc.click();
}
//Enter the currency
this.sendCurrency = () => {
  Select_Currency.click().sendKeys("Rupee").click();
}
//Click on the process button
this.clickProcessbutton = () => {
  Process.click();
}
//Click on the customers section
this.clickCustomerSection = () => {
  Customers.click();
}
//Enter the name on the search menu
this.sendSearchName = () => {
  Search.sendKeys("Ron");
}
//Click on the delete customer button
this.clickDelete = () => {
  Delete.click();
}

};

module.exports = new Vars();