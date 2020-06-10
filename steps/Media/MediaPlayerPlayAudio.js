
"use strict";

const { After,Before,Given,When,Then} = require('cucumber');
var { setDefaultTimeout } = require("cucumber"); setDefaultTimeout(90 * 1000);
var {expect} = require('chai');
var {assert} = require('assert');

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

Before(async function() {
  console.log('Connecting to device....');    
  driver = await new webDriver.Builder()
      .usingServer("http://localhost:4723/wd/hub")
          .withCapabilities(desiredCaps).build();
})
    
Given('that I have selected the MediaPlayer option', async function () {
  try {
    console.log('Given that I have selected the MediaPlayer option....Start');    
    await driver.findElement(By.xpath("//android.widget.TextView[@text='Media']")).click();
    await driver.findElement(By.xpath("//android.widget.TextView[@text='MediaPlayer']")).click();
    console.log('Given that I have selected the MediaPlayer option....End'); 
    console.log(''); 
   } 
   catch (error) 
   {
  
   } 
});

When("I click play audio from resources", async function () {  
  try {
  console.log('When I click play audio from resources....Start');    
  await driver.findElement(By.xpath("//android.widget.Button[@text='PLAY AUDIO FROM RESOURCES']")).click();
  console.log('When I click play audio from resources....End');    
  console.log(''); 
   } 
   catch (error)
   {

   }   
}); 

Then(/^the system should play audio$/, async function () {  
  console.log('Then the system should play audio....Start');    
  expect(
    await driver.findElement(
     By.xpath("//android.widget.TextView[@index=0]"))
       .getText(),"Playing audio...").to.be.equal; 
  console.log('Then the system should play audio....End');           
   });     

After(function() {
  console.log('Closing connection....');  
  console.log('');  
  driver.quit;  
})

  
//------------------------------------------------------------------------
// All code below ths is experimental and may have to be deleted eventually
//------------------------------------------------------------------------
/* 

    
/* //console.log(await driver.findElement(
    //By.xpath("//android.widget.TextView[@text='Playing audio...']")).isDisplayed()); 
/*     expect(driver.findElement(
      By.xpath("//android.widget.TextView[@text='Default']")).getText(),"Default").to.be.equal;
 */

//assert.equal(
  //driver.findElement(By.xpath("//android.widget.TextView[@text='Playing audio...']")).isDisplayed(),true);

  
  //assert.ok(driver.findElement(By.xpath("//android.widget.TextView[@text='Playing audio...']")).isDisplayed());

/*     expect(driver.findElement
            (By.xpath("//android.widget.TextView[@text='Playing audio...']")).isDisplayed()).to.be.true;
 }); 
 */
    

/* Then("the system should play audio", function () {

  var isDisplayed = driver.findElement(By.xpath("//android.widget.TextView[@text='Playing audio...']")).isDisplayed();
  return isDisplayed;


}) */


