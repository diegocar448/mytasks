import React from 'react';
import {it} from '@jest/globals';

describe('Not method', () => {
  it('uso basico - not', () => {
    expect(1+1).not.toEqual(1);
  });  
});
describe('Math - expressoes regulares', () => {
  it('uso basico - toMath', () => {
    expect('developer').toMatch(/\w+/);
  });  
});

export {};
