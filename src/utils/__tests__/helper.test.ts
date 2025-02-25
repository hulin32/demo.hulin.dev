import { describe, it, expect } from 'vitest';
import { hello } from '../helper';

describe('helper', () => {
  describe('hello', () => {
    it('should return a greeting with the provided name', () => {
      expect(hello('world')).toBe('hello world');
      expect(hello('vitest')).toBe('hello vitest');
    });

    it('should work with empty string', () => {
      expect(hello('')).toBe('hello ');
    });
  });
}); 