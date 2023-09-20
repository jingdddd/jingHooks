import * as jingHooks from '..';

describe('jingHooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(jingHooks).forEach((module) => {
      expect(jingHooks[module]).toBeDefined();
    });
  });
});