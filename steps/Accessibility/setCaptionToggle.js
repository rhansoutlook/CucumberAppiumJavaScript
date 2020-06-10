
"use strict";

const { After,Before,Given,When,Then} = require('cucumber');
var { setDefaultTimeout } = require("cucumber"); setDefaultTimeout(90 * 1000);
var {expect } = require('chai');
var previousState = '';
var currentState = '';
 
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

Before( function() {
  console.log('Connecting to Device.....');  
  console.log('');  
  driver = new webDriver.Builder()
      .usingServer("http://localhost:4723/wd/hub")
          .withCapabilities(desiredCaps).build();
})
  

Given('that I am on the Captions option', async function () {
    try {

    console.log('Given that I am on the Captions option... Start');    
        // access the accessibility option from Opening Screen
      await driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']")).click();
        // access the accessibility Service option
      await driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']")).click();
      // Click the button at the bottom of the screen to go further
      await driver.findElement(By.xpath("//android.widget.ImageButton[@index=1]")).click();
      // Access the Captions Option
      await driver.findElement(By.xpath("//android.widget.TextView[@text='Captions']")).click();
    console.log('Given that I am on the Captions option... End');    
    console.log(' ');  
        
    } catch (error) {
        
    }  
});
 

When("I click the caption toggle switch", async  function () {  
  console.log("When I click the caption toggle switch... Start");    
  previousState = await driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).getText();
  await driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).click();
  console.log("Toggle State is  " + previousState);
  console.log("When I click the caption toggle switch... End");      
  console.log('');  
}); 

Then("I should be able to set the caption toggle to on or off", async function () {  
  console.log('Then I should be able to set the caption toggle to on or off....Start');    
  currentState = await driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).getText();
  
  console.log('Then I should be able to set the caption toggle to on or off....End');    
  console.log(''); 
  if (previousState == 'ON')  
  {
    console.log("Previous State is  " + previousState);
    console.log("Current  State is  " + currentState);
    expect(currentState,'OFF').to.be.equal
  }
  else if (previousState == 'OFF')  
  {
    console.log("Previous State is  " + previousState);
    console.log("Current State is  " + currentState);
    expect(currentState,'OFF').to.be.equal
  }
  
}); 

After(function() {
  console.log('Disconnecting.....');  
  console.log('');  
  driver.quit;
})



/* When("I click the caption toggle switch",   function () {  
  console.log("When I click the caption toggle switch... Start");  
  console.log("I was " + previousState);
  var element =  driver.findElement(By.xpath("//android.widget.Switch[@index=1]"));
  //previousState = element.getText();  
  //console.log("I was " + previousState);
  element.click();
  console.log("When I click the caption toggle switch... End");      
  console.log('');  
}); 
 */

/* When("I click the caption toggle switch", async  function () {  
  console.log("When I click the caption toggle switch... Start");  
  console.log("I was " + previousState);
  var element = await driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).click();  
  previousState = element.getText();  
  console.log("When I click the caption toggle switch... End");      
  console.log('');  
}); 
 */
/*         //Save the current State of the Switch
        previousState = driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).getText();
       System.out.println("I was " + previousState);
        // Click the switch
        driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).click();
 */
/* 
Then("I should be able to set the caption toggle to on or off", async function () {  
    console.log('Then I should be able to set the caption toggle to on or off....Start');    
    var toggleState = await driver.findElement(By.xpath("//android.widget.Switch[@index=1]")).getText();
    //currentState = element.getText();
    //System.out.println("Now I am  " + currentState);
    console.log("Toggle State is  " + toggleState);
/*     if (previousState == "ON")
        Assert.assertEquals(currentState, "OFF");
    else if (previousState == "OFF")
        Assert.assertEquals(currentState, "ON");
 */
/*     console.log('Then I should be able to set the caption toggle to on or off....End');    
    console.log('');  
}); 
 */ 

  
