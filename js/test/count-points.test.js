import countPoints from './../data/count-points';
import {assert} from 'chai';

let generateAnswerArray = (length, correct, time) => {
  const generatedAnswers = [];
  while (length) {
    const answer = {};
    answer.result = correct;
    answer.time = time;
    generatedAnswers.push(answer);
    length--;
  }
  return generatedAnswers;
};

const SHORT = generateAnswerArray(5, true, 15);
const LONG = generateAnswerArray(15, true, 15);
const CORRECT_SLOW = generateAnswerArray(10, true, 30); // 500 points
const CORRECT_FAST = generateAnswerArray(10, true, 7); // 1500 points
const CORRECT_NORMAL = generateAnswerArray(10, true, 15); // 1000 points
const MIXED = [
  {result: true, time: 25}, // 50
  {result: false, time: 15}, // 0
  {result: true, time: 20}, // 100
  {result: true, time: 15}, // 100
  {result: true, time: 6}, // 150
  {result: true, time: 7}, // 150
  {result: false, time: 15}, // 0
  {result: true, time: 15}, // 100
  {result: false, time: 15}, // 0
  {result: true, time: 15} // 100
]; // 750 points

describe(`Counter check`, () => {
  it(`should take 10 answers`, () => {
    assert.equal(countPoints(SHORT, 3), -1);
    assert.equal(countPoints(LONG, 3), -1);
  });
  it(`should count properly`, () => {
    assert.equal(countPoints(CORRECT_FAST, 3), 1650);
    assert.equal(countPoints(CORRECT_SLOW, 3), 650);
    assert.equal(countPoints(CORRECT_NORMAL, 3), 1150);
    assert.equal(countPoints(MIXED, 1), 800);
  });
  it(`should not work with negative or zero lives`, () => {
    assert.equal(countPoints(MIXED, 0), -1);
    assert.equal(countPoints(MIXED, null), -1);
    assert.equal(countPoints(MIXED, -2), -1);
  });
});
