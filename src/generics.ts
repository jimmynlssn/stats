// T is just the definition, it can be anything. Like 'TypeOfData'
class HoldAnything<T> {
  data: T;

  constructor(data: T) {
    this.data = data;
  };
}

const holdNumbers = new HoldAnything<number>(123);
holdNumbers.data = 123;

const holdstring = new HoldAnything<string>('123');
holdstring.data = '123';