
let home=element(by.xpath("//button[contains(text(),'Home')]"));
let header=element(by.xpath("//strong[contains(text(),'XYZ Bank')]"));
let Customer_Login=element(by.css("button[ng-click='customer()']"));
let Manager_Login=element(by.css("button[ng-click='manager()']"));
let Select_User=element(by.xpath("//select[@id='userSelect']"));
let Login=element(by.css("button[type='submit']"));
let welcome_messg=element(by.xpath("//span[contains(text(),'Ron Weasly')]"));
let acc_select=element(by.xpath("//select[@id='accountSelect']"));
let Customer_Transaction=element(by.css("button[ng-click='transactions()']"));
let Back=element(by.css("button[ng-click='back()']"));
let Customer_Deposit=element(by.css("button[ng-click='deposit()']"));
let amount=element(by.model("amount"));
let Deposit_button=element(by.className("btn btn-default"));
let Check_Deposit=element(by.css("span[ng-show='message']"))
let Customer_Withdrawl=element(by.css("button[ng-click='withdrawl()']"));
let Withdrawl_button=element(by.className("btn btn-default"));
let Check_Withdrawl=element(by.css("span[ng-show='message']"));
let Logout=element(by.css("button[ng-click='byebye()']"));
let AddCustomer=element(by.css("button[ng-click='addCust()']"));
let Fname=element(by.model("fName"));
let Lname=element(by.model("lName"));
let Pcode=element(by.model("postCd"));
let Add_Customer=element(by.className("btn btn-default"));
let Open_Acc=element(by.css("button[ng-click='openAccount()']"));
let Select_Currency=element(by.xpath("//select[@id='currency']"));
let Process=element(by.css("button[type='submit']"));
let Customers=element(by.css("button[ng-click='showCust()']"));
let Search=element(by.model("searchCustomer"));
let Delete=element(by.css("button[ng-click='deleteCust(cust)']"));


describe("XYZ Bank",function()
{


    beforeAll(function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.manage().window().maximize();
      });
    
it("Home",function(){
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(home), 5000);
    home.click();
})
it("Header",function(){
    let text=header.getText();
    expect(text).toEqual("XYZ Bank");
})

it("Customer_Login_In",function(){
    Customer_Login.click();
    Select_User.click().sendKeys("Ron Weasly").click();
    Login.click();
    home.click();
    Customer_Login.click();
    Select_User.click().sendKeys("Ron Weasly").click();
    Login.click();
    let text1=welcome_messg.getText();
    expect(text1).toEqual("Ron Weasly");
    acc_select.click().sendKeys("1007").click();
    Customer_Transaction.click();
    Back.click();
    Customer_Deposit.click();
    amount.sendKeys("500");
    Deposit_button.click();
    let text2=Check_Deposit.getText();
    expect(text2).toEqual("Deposit Successful");
    Customer_Withdrawl.click();
    amount.sendKeys("100");
    Withdrawl_button.click();
    let text3=Check_Withdrawl.getText();
    expect(text3).toEqual("Transaction successful");
    Logout.click();
    home.click();
})

fit("Manager_Login_In",function(){
    Manager_Login.click();
    AddCustomer.click();
    Fname.sendKeys("Jasvinder");
    Lname.sendKeys("Singh");
    Pcode.sendKeys("831011");
    Add_Customer.click();
    browser.driver.switchTo().alert().accept();
    Open_Acc.click();
    Select_User.click().sendKeys("Ron Weasly").click();
    Select_Currency.click().sendKeys("Rupee").click();
    Process.click();
    browser.driver.switchTo().alert().accept();
    Customers.click();
    Search.sendKeys("Harry");
    Delete.click();
    home.click();
})

})
