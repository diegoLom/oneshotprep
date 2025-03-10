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
