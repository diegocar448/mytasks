import React from 'react';
import {it} from '@jest/globals';

export function add(x:number, y: number){
  return x + y;
}


describe('calculator', () => {
  it('add number', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
