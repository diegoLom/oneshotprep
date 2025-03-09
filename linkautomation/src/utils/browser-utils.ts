import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { Options, Driver } from "selenium-webdriver/chrome";

export class BrowserUtils {
    static getOptions(): Options {
        const options: Options = new Options();
        options.debuggerAddress('localhost:9222');
        return options;
    }

    static async getChromeDriver(): Promise<Driver> {
        const driver: WebDriver = await new Builder()
            .forBrowser(Browser.CHROME)
            .setChromeOptions(this.getOptions())
            .build();
        return driver as Driver;
    }
}
     
