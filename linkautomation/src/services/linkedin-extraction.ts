import { Driver } from "selenium-webdriver/chrome";
import { BrowserUtils } from "../utils/browser-utils";
import { WebDriver } from "selenium-webdriver";

export class LinkedinExtraction {



    static basicUrl: string =  "https://www.linkedin.com"; 


    static async goToLinkedin(): Promise<void>{

     const driver = await LinkedinExtraction.getDriver();
        (await this.getDriver()).get("https://www.linkedin.com/search/results/content/?datePosted=%22past-week%22&keywords=java%20latam&origin=FACETED_SEARCH&sid=l0G");
        
    }


    static async getDriver() : Promise<Driver> {
        return await BrowserUtils.getChromeDriver();
    }

    //TODO See a way to compose the url 

    //TODO: See a way to connect a database 

    //TODO: Thinking about the data modeling 

   


}