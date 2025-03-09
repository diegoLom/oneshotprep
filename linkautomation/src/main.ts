import { LinkedinExtraction } from "./services/linkedin-extraction";
import { BrowserUtils } from "./utils/browser-utils";

async function main() {
    try {
        await LinkedinExtraction.goToLinkedin().then(() => {
            
        });
        console.log(`${BrowserUtils.getOptions()}`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main().catch(error => console.error("Unhandled error:", error));

// TODO : sTUDY PROMISES 