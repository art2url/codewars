/*
Description:
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.

Notes

There are 3 attributes:
name
age
sex ('M' or 'F')

When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

Examples
Hello.
Hello. My name is Bob. I am 27. I am male.
Hello. I am 27. I am male. My name is Bob.
Hello. My name is Alice. I am female.
Hello. My name is Batman.
Task
Fix the code so we can all go home early.
*/

class Dinglemouse {
  constructor() {
    this.props = {}; // store actual values
    this.order = []; // store the order of setting properties
  }

  setName(name) {
    if (!this.order.includes('name')) this.order.push('name');
    this.props.name = name;
    return this;
  }

  setAge(age) {
    if (!this.order.includes('age')) this.order.push('age');
    this.props.age = age;
    return this;
  }

  setSex(sex) {
    if (!this.order.includes('sex')) this.order.push('sex');
    this.props.sex = sex;
    return this;
  }

  hello() {
    if (this.order.length === 0) return 'Hello.';

    let output = ['Hello.'];

    for (const prop of this.order) {
      if (prop === 'name') output.push(`My name is ${this.props.name}.`);
      if (prop === 'age') output.push(`I am ${this.props.age}.`);
      if (prop === 'sex') {
        output.push(`I am ${this.props.sex === 'M' ? 'male' : 'female'}.`);
      }
    }

    return output.join(' ');
  }
}

describe('ExampleTests', function () {
  it('testBob27Male', function () {
    let dm = new Dinglemouse().setName('Bob').setAge(27).setSex('M');
    let expected = 'Hello. My name is Bob. I am 27. I am male.';
    doTest(expected, dm.hello());
  });

  it('test27MaleBob', function () {
    let dm = new Dinglemouse().setAge(27).setSex('M').setName('Bob');
    let expected = 'Hello. I am 27. I am male. My name is Bob.';
    doTest(expected, dm.hello());
  });

  it('testAliceFemale', function () {
    let dm = new Dinglemouse().setName('Alice').setSex('F');
    let expected = 'Hello. My name is Alice. I am female.';
    doTest(expected, dm.hello());
  });

  it('testBatman', function () {
    let dm = new Dinglemouse().setName('Batman');
    let expected = 'Hello. My name is Batman.';
    doTest(expected, dm.hello());
  });
});
