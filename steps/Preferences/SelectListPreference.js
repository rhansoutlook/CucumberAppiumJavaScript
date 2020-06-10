
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
    
Given('that I am in the List Preference option', async function () {
    
    console.log('Given that I am in the List Preference option....Start');    
    await driver.findElement(By.xpath("//android.widget.TextView[@text='Preference']")).click();
    await driver.findElement(By.xpath("//android.widget.TextView[@text='4. Default values']")).click();
    await driver.findElement(By.xpath("//android.widget.TextView[@text='List preference']")).click();
    console.log('Given that I am in the List Preference option....End');      
    console.log('');           
});       


When("I select Alpha option 01", async  function () {  
    
    console.log('When I select Alpha option 01....Start');    
    await driver.findElement(By.xpath("//android.widget.CheckedTextView[@text='Alpha Option 01']")).click();
    console.log('When I select Alpha option 01....End');    
    console.log('');  
}); 

When("I select Beta option 02", async  function () {  
    console.log('When I select Beta option 02....Start');    
     await driver.findElement(By.xpath("//android.widget.CheckedTextView[@text='Beta Option 02']")).click();
    console.log('When I select Beta option 02....End');    
    console.log('');  
}); 

When("I select Charlie option 03", async  function () {  
    console.log('When I select Charlie option 03....Start');    
    await driver.findElement(By.xpath("//android.widget.CheckedTextView[@text='Charlie Option 03']")).click();
    console.log('When I select Charlie option 03....End');    
    console.log('');  
}); 

Then("Alpha option 01 should become default option", async function () {  
    // Step not complete
    console.log('Then Alpha option 01 should become default option....Start');        
    
    console.log('Then Alpha option 01 should become default option....End');    
    //return expect(1,2).to.be.equal;    
    return false;
}); 

Then("Beta option 02 should become default option",  async function () {  
    // Step not complete
    console.log('Then Beta option 02 should become default option....Start');    
    console.log('Then Beta option 02 should become default option....End');    
    //return expect(1,2).to.be.equal;    
    return false;
}); 

Then("Charlie option 03 should become default option",  async function () {  
    // Step not complete
    console.log('Then Charlie option 03 should become default option....Start');    
    console.log('Then Charlie option 03 should become default option....End');    
    //return expect(1,2).to.be.equal;    
    return false;
}); 

After(function() {
  console.log('Killing connection...');  
  console.log('');  
  driver.quit;
})
    
  
//------------------------------------------------------------------------
// Further work is required on this Scenario
//------------------------------------------------------------------------
// Issue 1 - Not Sure that Click will work as uiautomator lists the element CheckedTextView as not clickable only selectable
//  Cant see the CheckedTextView visuall changing after the click method is called.
//  Need to sort this particular scenario out
