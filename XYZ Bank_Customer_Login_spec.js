//Accessing the variables from Vars.js
var Vars = require('./Vars');
//XYZ Bank Customr login
describe("XYZ Bank Customer login",() =>
{
   beforeAll(() =>{
    //Access the URL of home page
      Vars.get();
    //Maximize the browser window
      browser.manage().window().maximize();
      });
    
//Customer Login page
it("Customer_Login",() =>{
    //Click on Customer Login section
    Vars.clickCustomerLogin();
    //Select user in the dropdown
    Vars.select_User();
    //Click on the customer login button
    Vars.click_select_Customer_Login();
    //Click on the home button
    Vars.clickHome();
    //Click on Customer Login section
    Vars.clickCustomerLogin();
    //Select user in the dropdown
    Vars.select_User();
    //Click on the customer login button
    Vars.click_select_Customer_Login();
    //Check the Welcome message 
    expect(Vars.getwelcome_messg()).toEqual("Ron Weasly");
    //Select the account from the dropdown
    Vars.account_select();
  })
  //Transaction Record page
    it("Customer_Transaction",() =>{
    //Click on customer transaction section
    Vars.clickCustomer_Transaction();
    //Click on Back button
    Vars.clickBack();
    
  })
  //Customer Deposit page
  it("Customer_Deposit",() =>{
    //Click on customer deposit section
    Vars.clickCustomerDeposit();
    //Enter the deposit amount
    Vars.sendAmountDeposit();
    //Click on deposit button
    Vars.clickAmountDeposit();
    //Check the message after deposit
    expect(Vars.checkDepositStatus()).toEqual("Deposit Successful");
    
  })
  //Customer Withdrawl page
  it("Customer_Deposit",() =>{
    //Click on customer withdrawl section
    Vars.clickCustomer_Withdrawl();
    //Enter the withdrawl amount
    Vars.sendAmountWithdrawl();
    //Click on withdrawl button
    Vars.clickAmountWithdrawl();
    //Check the message after withdrawl
    expect(Vars.checkWithdrawlStatus()).toEqual("Transaction successful");
    //Click on logout
    Vars.clickLogout();
    //Click on home button
    Vars.clickHome();
})
})