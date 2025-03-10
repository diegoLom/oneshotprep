"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedinExtraction = void 0;
const browser_utils_1 = require("../utils/browser-utils");
const selenium_webdriver_1 = require("selenium-webdriver");
const fs = __importStar(require("fs"));
class LinkedinExtraction {
    static goToLinkedin() {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield LinkedinExtraction.getDriver();
            yield driver.get("https://www.linkedin.com/search/results/content/?datePosted=%22past-week%22&keywords=java%20latam&origin=FACETED_SEARCH&sid=l0G");
            // Wait for the search results to load
            yield driver.sleep(5000); // Adjust the sleep time as needed
            // Retrieve data from the search results
            const results = yield LinkedinExtraction.getSearchResults(driver);
            //  console.log(results);
            // Save results to a file
            fs.writeFileSync('results.txt', results.join('\n'), 'utf-8');
        });
    }
    static getDriver() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield browser_utils_1.BrowserUtils.getChromeDriver();
        });
    }
    static getSearchResults(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            let lastHeight = yield driver.executeScript("return document.body.scrollHeight");
            let count = 0;
            while (true) {
                const elements = yield driver.findElements(selenium_webdriver_1.By.css('.fie-impression-container')); // Adjust the selector as needed
                for (const element of elements) {
                    const text = yield element.getText();
                    results.push(text);
                }
                // Scroll down the page
                yield driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
                yield driver.sleep(3000); // Adjust the sleep time as needed
                count++;
                if (count === 5) {
                    break;
                }
                const newHeight = yield driver.executeScript("return document.body.scrollHeight");
                if (newHeight === lastHeight) {
                    break; // Exit the loop if no more content is loaded
                }
                lastHeight = newHeight;
            }
            return results;
        });
    }
}
exports.LinkedinExtraction = LinkedinExtraction;
LinkedinExtraction.basicUrl = "https://www.linkedin.com";
