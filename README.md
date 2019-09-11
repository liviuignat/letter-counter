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

```sh
yarn install
yarn test
```
