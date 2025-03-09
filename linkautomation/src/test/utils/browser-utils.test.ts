import {describe, expect, test} from '@jest/globals';
import {BrowserUtils} from '../../utils/browser-utils';


import { Options } from 'selenium-webdriver/chrome';


interface OptionsInternal extends Options {
  options_?: any; // Define the property you need
}



describe('BrowserUtils', () => {
  test('getOptions should set the correct debugger address', () => {
    const options = BrowserUtils.getOptions() as OptionsInternal;

    expect(options.options_.debuggerAddress).toBe('localhost:9222');
  });
});

//TODO: 


/**
 * 
 * 
 * 
 * 
 * 

(async function browserStart(){
    let driver; 

    try {
        // Connect to the existing Chrome instance
        const options = new chrome.Options();
        options.debuggerAddress('localhost:9222');

        driver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(options)
            .build();

      
      Browser -> 
	  
	  
	  
        await driver.get('https://www.linkedin.com/'); // perform get linkedin  on chrome website
        
        // Wait for the page to load completely
        await driver.wait(until.elementLocated(By.css('body')), 10000); // wait

        const searchInput = 
        await driver.wait(until.elementLocated(By.css('input.search-global-typeahead__input')), 10000);

        // Wait for the element to be visible and interactable
        await driver.wait(until.elementIsVisible(searchInput), 10000);
      
        await driver.wait(until.elementIsEnabled(searchInput), 10000);

        // Scroll the element into view
        await driver.executeScript("arguments[0].scrollIntoView(true);", searchInput);

        // Wait a bit for any animations to complete
        await driver.sleep(1000);

        // Clear any existing text in the input field
        await searchInput.clear();

        // Type in the search field
        await searchInput.sendKeys('Java Latam');

        // searchInput.

        // Press Enter to perform the search
        await searchInput.sendKeys(Key.RETURN);

        // Wait for a moment to see the results (you can adjust or remove this)
        await driver.sleep(5000);





    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Don't quit the browser, just close the current tab
        if (driver) {
            const handles = await driver.getAllWindowHandles();
            if (handles.length > 1) {
                await driver.close();
            }
            await driver.quit();
        }
    }
})();



    
 */