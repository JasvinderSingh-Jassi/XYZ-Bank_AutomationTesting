//Accessing the variables from Vars.js
var Vars = require('./Vars');
//XYZ Bank Home page
describe("XYZ Bank Home Page",() =>
{
   beforeAll(() =>{
    //Access the URL of home page
      Vars.get();
    //Maximize the browser window
      browser.manage().window().maximize();
      });
    
it("Check Home Button",() =>{
   //Click on the home button
    Vars.clickHome();
})
it("Check the Home Page Header",() =>{
    //Verifying the home page heading
    expect(Vars.getHeader()).toEqual("XYZ Bank");
})

it("Check Customer Login-in button",() =>{
  //Click on the customer login
  Vars.clickCustomerLogin();
  //Click on home page
  Vars.clickHome();
})

it("Check Manager Login-in button",() =>{
  //Click on the customer login
  Vars.clickManager_Login();
  //Click on home page
  Vars.clickHome();
})


})
