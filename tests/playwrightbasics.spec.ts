import { test, expect } from '@playwright/test';

var a: number=10;
const url: String[]= ["https://www.google.com", "https://www.google.com","https://www.google.com"];
var b: boolean[] = [true,false];
const mixedarray:(String | number | boolean)[]= ["https://www.google.com", 100, true];




test('test', async ({ page }) => {
  //await page.locator('body').click();

  for(const element of mixedarray){

    switch (typeof element) {
        case 'string':
            console.log("element is a string")
            break;
    
        default:
            break;
    }

  }
});