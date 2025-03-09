"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const linkedin_extraction_1 = require("../../services/linkedin-extraction"); //TODO: Look at aliases 
(0, globals_1.describe)('Basic functionalities  ', () => {
    (0, globals_1.test)('', () => {
        (0, globals_1.expect)(linkedin_extraction_1.LinkedinExtraction.basicUrl).toBe('https://www.linkedin.com');
    });
});
