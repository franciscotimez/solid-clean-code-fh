(() => {

  type Gender = 'M' | 'F';

  // Forma larga
  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  // Forma Corta
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date) { }
  }

  const newPerson = new Person('Francisco', 'M', new Date('1999-10-11'));

  console.log({ newPerson });

})();
