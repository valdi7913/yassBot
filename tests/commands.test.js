import { describe, expect, it } from '@jest/globals';
import { parseOutName } from '../commands.js';

describe('bot commands', () => {
    it('filters out name candidate from string', () => {
        const command = "Hey yassbot, quote 'Bob the Drag Queen' for me";
        const expected = 'Bob%20the%20Drag%20Queen';
        const actual = parseOutName(command);
        console.log('expected :>> ', expected);
        console.log('actual :>> ', actual);
        expect(actual).toBe(expected);
    });

    it('Returns empty if there is no name', () => {
        const command = 'Hey yassbot, quote test for me';
        const expected = '';
        const actual = parseOutName(command);
        console.log('expected :>> ', expected);
        console.log('actual :>> ', actual);
        expect(actual).toBe(expected);
    });
});