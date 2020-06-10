
"use strict";

const { After,Before,Given,When,Then} = require('cucumber');
var { setDefaultTimeout } = require("cucumber"); setDefaultTimeout(90 * 1000);
var {expect } = require('chai');

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
  

Given('that I am on Font Size option', async function () {
try {

  console.log('Given that I am on Font Size option... Start');    
  await driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']")).click();
  await driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']")).click();
  await driver.findElement(By.xpath("//android.widget.ImageButton[@index=1]")).click();
  await driver.findElement(By.xpath("//android.widget.TextView[@text='Font size']")).click();
  console.log('Given that I am on Font Size option... End');    
  console.log(' ');  
    
} catch (error) {
    
}
  
  });
 

When('I click the default option', async  function () {  
  console.log('When I click the default option... Start');      
  await driver.findElement(By.xpath("//android.widget.RadioButton[@index=1]")).click();
  console.log('When I click the default option... End');    
  console.log('');  
}); 

When(/^I click the small option$/, async function () {
  console.log('When I click the small option... Start');      
  await driver.findElement(By.xpath("//android.widget.RadioButton[@index=0]")).click();
  console.log('When I click the small option... End');    
  console.log(''); 
});


Then(/^The font size should be set to default$/, async ()=>{
console.log('Then the font size should be set to default... Start');    
  expect(await driver.findElement(
    By.xpath("//android.widget.TextView[@text='Default']")).getText(),"Default").to.be.equal;
  console.log('Then the font size should be set to default... End');    
  console.log(''); 
});     

  
Then(/^The font size should be set to small$/, async ()=>{
  console.log('Then the font size should be set to small... Start');    
  expect(await driver.findElement(
    By.xpath("//android.widget.TextView[@text='Small']")).getText(),"Small").to.be.equal;
    console.log('Then the font size should be set to small... End');    
    console.log(''); 
});   
        
After(function() {
  console.log('Disconnecting.....');  
  console.log('');  
  driver.quit;
})
  
//------------------------------------------------------------------------
// All code below ths is experimental and may have to be deleted eventually
//------------------------------------------------------------------------
/*  


/* Given('that I am on Font Size option',  function () {
try {

  console.log('Given that I am on Font Size option... Start');    
  driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']")).click();
   driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']")).click();
   driver.findElement(By.xpath("//android.widget.ImageButton[@index=1]")).click();
   driver.findElement(By.xpath("//android.widget.TextView[@text='Font size']")).click();
  console.log('Given that I am on Font Size option... End');    
  console.log(' ');  
   
} catch (error) {
    
}

});
 */

/* Before(async function() {
  console.log('Connecting to Device.....');  
  console.log('');  
  driver = await new webDriver.Builder()
      .usingServer("http://localhost:4723/wd/hub")
          .withCapabilities(desiredCaps).build();
}) */


//Then(/^The font size should be set to default$/, ()=>{
  //var getText = driver.findElement(By.id("com.android.settings:id/current_label")).getText();    
  //await driver.findElement(By.xpath("//android.widget.TextView[@text='Font size']")).click();
  //driver.findElement(By.xpath("//android.widget.RadioButton[@text='Default'")).click();
//   expect(driver.findElement(
 //    By.xpath("//android.widget.RadioButton[@text='Default']")).getText(),"Default").to.be.equal;

 
  /*    expect(driver.findElement(
       By.xpath("//android.widget.TextView[@text='Default']")).getText(),"Default").to.be.equal;
   });     
 */
 /* 
 Then(/^The font size should be set to small$/, ()=>{
 //var getText = driver.findElement(By.id("com.android.settings:id/current_label")).getText();
 
 //expect(driver.findElement(
   //By.xpath("//android.widget.RadioButton[@text='Small']")).getText(),"Small")    
   expect(driver.findElement(
     By.xpath("//android.widget.TextView[@text='Small']")).getText(),"Small").to.be.equal;
 });   
       
 */

// The Promise approach has been tried and it does not work
/* Given('that I am on Font Size option', function () {  
  
  driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']"))
    .then(function(element)
      {
        element.click();
        driver.findElement(By.xpath
           ("//android.widget.TextView[@text='Accessibility Service']"))
           .then(function(element)
              {     
                element.click();
              }   
            )
        }   
   )

});
 */


// to use
 /* this.When(/^I click on "([^"]*)"$/, function (text) {
  return this.driver.findElement({linkText: text}).then(function(element) {
    return element.click();
  });
}); */


// To discard
 /*   let AccessibilityElement = await driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']"));
  console.log(AccessibilityElement.deviceName);
  AccessibilityElement.click();

    var AccessibilityServiceElements = await AccessibilityElement.findElements(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
    
    var AccessibilityServiceElement1 = await AccessibilityElement.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
    AccessibilityServiceElement1.click();
    if (AccessibilityServiceElements.length > 0)
    {
      AccessibilityServiceElement = driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
      AccessibilityServiceElement.click();
    }
   */
//});

// To discard
//Given(/^that I am on Font Size option$/, ()=>{

  //driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']")).click();

  // access the accessibility Service option from Accessibility
  //driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']")).click();


  //let AccessibilityElement = driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility']"));
  //AccessibilityElement.click();

/*     var AccessibilityServiceElements = AccessibilityElement.findElements(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
    var AccessibilityServiceElement1 = AccessibilityElement.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
    AccessibilityServiceElement1.click();
    if (AccessibilityServiceElements.length > 0)
    {
      AccessibilityServiceElement = driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']"));
      AccessibilityServiceElement.click();
    }
         
 */    // access the accessibility Service option from Accessibility
    //UserElement.click();
    //UserElement.findElement
    //driver.findElement(By.xpath("//android.widget.TextView[@text='Accessibility Service']")).click();
    // Click the button at the bottom of the screen to go further
    //driver.findElement(By.xpath("//android.widget.ImageButton[@index=1]")).click();
    //driver.findElement(By.xpath("//android.widget.TextView[@text='Font size']")).click();
//});

    