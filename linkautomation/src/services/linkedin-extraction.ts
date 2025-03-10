import { Driver } from "selenium-webdriver/chrome";
import { BrowserUtils } from "../utils/browser-utils";
import { WebDriver, By, WebElement } from "selenium-webdriver";
import * as fs from 'fs';

export class LinkedinExtraction {

    static basicUrl: string =  "https://www.linkedin.com"; 

    static async goToLinkedin(): Promise<void> {
        const driver = await LinkedinExtraction.getDriver();
        await driver.get("https://www.linkedin.com/search/results/content/?datePosted=%22past-week%22&keywords=java%20latam&origin=FACETED_SEARCH&sid=l0G");
        
        // Wait for the search results to load
        await driver.sleep(5000); // Adjust the sleep time as needed

        // Retrieve data from the search results
        const results = await LinkedinExtraction.getSearchResults(driver);
      //  console.log(results);

        // Save results to a file
        fs.writeFileSync('results.txt', results.join('\n'), 'utf-8');
    }

    static async getDriver() : Promise<Driver> {
        return await BrowserUtils.getChromeDriver();
    }

    static async getSearchResults(driver: WebDriver): Promise<string[]> {
        const results: string[] = [];
        let lastHeight = await driver.executeScript("return document.body.scrollHeight");
        let count: number = 0;
        while (true) {
            const elements: WebElement[] = await driver.findElements(By.css('.fie-impression-container')); // Adjust the selector as needed

            for (const element of elements) {
                const text = await element.getText();
                results.push(text);
            }

            // Scroll down the page
            await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
            await driver.sleep(3000); // Adjust the sleep time as needed
            count++;
            if (count === 5) {
                  break;  
            }  
            const newHeight = await driver.executeScript("return document.body.scrollHeight");
            if (newHeight === lastHeight) {
                break; // Exit the loop if no more content is loaded
            }
            lastHeight = newHeight;
        }

        return results;
    }
}