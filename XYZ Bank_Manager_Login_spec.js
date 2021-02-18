//Accessing the variables from Vars.js
var Vars = require('./Vars');
//XYZ Bank Customer Login page
describe("XYZ Bank Customer login",() =>
{
   beforeAll(() =>{
    //Access the URL of home page
      Vars.get();
    //Maximize the browser window
      browser.manage().window().maximize();
      });
    
//Manager Login page
it("Manager_Login",() =>{
    //Click on manager login section
    Vars.clickManager_Login();
    
  })
// Add the customers in the record
    it("AddCustomer_section",() =>{
    //Click on add customer section
    Vars.clickAddCustomerSection();
    //Enter the first name
    Vars.sendFName();
    //Enter the last name
    Vars.sendLName();
    //Enter the Pin code
    Vars.sendPcode();
    //Click on add customer button
    Vars.clickAddCustomerbutton();
    //Click on accept alert button
    Vars.clickAcceptAlert();
  })

  //Open account section
    it("OpenAccount_section",() =>{
    //Click on open account section
    Vars.clickOpenAccountSection();
    //Select user from the dropdown
    Vars.select_User();
    //Enter the currency type
    Vars.sendCurrency();
    //Click on process button
    Vars.clickProcessbutton();
    //Click on accept alert button
    Vars.clickAcceptAlert();
  })


    it("Customers_section",() =>{
    //Click on customer section
    Vars.clickCustomerSection();
    //Enter the name to be searched
    Vars.sendSearchName();
    //Delete the selected user record
    Vars.clickDelete();
    //Click on home page
    Vars.clickHome();
})
})