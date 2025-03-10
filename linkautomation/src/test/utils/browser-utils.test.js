"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const browser_utils_1 = require("../../utils/browser-utils");
(0, globals_1.describe)('BrowserUtils', () => {
    (0, globals_1.test)('getOptions should set the correct debugger address', () => {
        const options = browser_utils_1.BrowserUtils.getOptions();
        (0, globals_1.expect)(options.options_.debuggerAddress).toBe('localhost:9222');
    });
});
