const hello1: string = 'hello';
const hello2: string = 'hello';

console.log('two strings are equal', hello1 === hello2);

const hello3: String = new String('hello');
const hello4: String = new String('hello');

console.log('two Strings are not equal', hello3 === hello4);

function isSeason(name: string) {
  return ['spring', 'summer', 'autumn', 'winter'].includes(name);
}

console.log('Strings are not strings', isSeason('spring'));
// console.log('Strings are not strings', isSeason(new String('spring')));
