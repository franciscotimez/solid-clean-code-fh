(() => {

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date) { }
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newPerson = new Person('Francisco', 'M', new Date('1999-10-11'));
  const newUser = new User('fran@fran.com', 'admin', 'Francisco', 'M', new Date('1999-10-11'));

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'fran@fran.com',
    'admin',
    'Francisco',
    'M',
    new Date('1999-10-11'));

  console.log({ userSettings });

})();
