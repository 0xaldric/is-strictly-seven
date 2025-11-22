import { describe, it, expect } from 'vitest';
import { isSeven } from '../src/index';

describe('isSeven', () => {
    it('should return true for 7', () => {
        expect(isSeven(7)).toBe(true);
    });

    it('should return false for numbers other than 7', () => {
        expect(isSeven(6)).toBe(false);
        expect(isSeven(8)).toBe(false);
        expect(isSeven(0)).toBe(false);
        expect(isSeven(-7)).toBe(false);
    });

    it('should return false for decimal 7.00001', () => {
        expect(isSeven(7.00001)).toBe(false);
    });
});