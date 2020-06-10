
"use strict";

const { After,Before,Given,When,Then} = require('cucumber');
var { setDefaultTimeout } = require("cucumber"); setDefaultTimeout(90 * 1000);
var {expect} = require('chai');

let webDriver = require("selenium-webdriver"),
    By = webDriver.By;

let driver;

let appPath =  process.cwd() + "\\App\\ApiDemos.apk";

let  desiredCaps = {
      platformName: "Android",
      deviceName: "AVDNougat1",
      automationName: "UiAutomator2",
      newCommandTimeout: 120,
      appPackage: "io.appium.android.apis",
      appActivity: "ApiDemos",  
      app: appPath,
      browserName: '',              
  };
  
console.log('');    

Before(function() {
  console.log('Starting Scenario....');    
  console.log('Connecting to device....');    
  console.log('');  
  driver = new webDriver.Builder()
      .usingServer("http://localhost:4723/wd/hub")
          .withCapabilities(desiredCaps).build();
})
    
Given('I open the application', async function () {
    
    console.log('Given I open the application....Start');    

    // Confirming that the application is open
    expect(
        await driver.findElement(
         By.xpath("//android.widget.TextView[@text='API Demos']"))
           .getText(),"API Demos").to.be.equal;     

    console.log('Given I open the application....End');      
    console.log('');           
});       


When("I tap on Accessibility", async  function () {  
    console.log('When I tap on Accessibility....Start');    
    await driver.findElement(By.xpath("//*[@text='Accessibility']")).click();    
    console.log('When I tap on Accessibility....End');    
    console.log('');  
}); 

When("I tap on Media",  async function () {  
    console.log('When I tap on Media....Start');    
    await driver.findElement(By.xpath("//*[@text='Media']")).click();    
    console.log('When I tap on Media....End');    
    console.log('');  
}); 

When("I tap on AudioFx",  async function () {  
    console.log('When I tap on AudioFx....Start');    
    await driver.findElement(By.xpath("//*[@text='AudioFx']")).click();
    console.log('When I tap on AudioFx....End');    
    console.log('');  
}); 

Then("I validate Media AudioFx view is displayed", async function () {  
    console.log('Then I validate Media AudioFx view is displayed....Start');    
    expect(
        await driver.findElement(
         By.xpath("//*[@text='Media/AudioFx']"))
           .getText(),"Media/AudioFx").to.be.equal;     
    console.log('Then I validate Media AudioFx view is displayed....End');    
}); 

Then("I validate Custom View is displayed",  async function () {  
    console.log('Then I validate Custom View is displayed....Start');    
    expect(
        await driver.findElement(
         By.xpath("//*[@text='Custom View']"))
           .getText(),"Custom View").to.be.equal;     
    console.log('Then I validate Custom View is displayed....End');    
    // Original Java Code
    //    Assert.assertTrue(driver.findElement(By.xpath("//*[@text='Custom View']")).isDisplayed(), "Custom View is not displayed");
    // Want to replace the above line in Java as below, but it is not working.
}); 

    
After(function() {
  console.log('Killing connection...');  
  console.log('');  
  driver.quit;
})
    


