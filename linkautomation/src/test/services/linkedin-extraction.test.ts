import {describe, expect, test} from '@jest/globals';
import { LinkedinExtraction } from "../../services/linkedin-extraction"; //TODO: Look at aliases 

describe('Basic functionalities  ', () =>{
  test('', ()=>{
    expect(LinkedinExtraction.basicUrl).toBe('https://www.linkedin.com');
  })

})