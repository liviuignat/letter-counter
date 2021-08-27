# LETTER COUNTER

### Description

Please create a function that receives as a parameter a string input and returns as output an object with the number of occurences for each letter in that string.

Example function

```ts
interface ILetterCounter {
  letter: string;
  occurences: number;
}

const letterCounter = (input: string): ILetterCounter[] => {
   ....
};
```

Example test cases:

```ts
// 1st test case
const result = letterCounter('aabc') 

expects(result).toEqual([{
  letter: 'a',
  occurences: 2,
}, {
  letter: 'b',
  occurences: 1,
}, {
  letter: 'c',
  occurences: 1,
}])

// 2nd test case
const result = letterCounter('aabb') 

expects(result).toEqual([{
  letter: 'a',
  occurences: 2,
}, {
  letter: 'b',
  occurences: 2,
}])
```

```sh
yarn install
yarn test
```
