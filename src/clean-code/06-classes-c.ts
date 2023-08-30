(() => {

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }
  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor(
      { email,
        role,
        name,
        gender,
        birthdate }: UserProps
    ) {
      super({ name, gender, birthdate });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // const newPerson = new Person('Francisco', 'M', new Date('1999-10-11'));
  // const newUser = new User('fran@fran.com', 'admin', 'Francisco', 'M', new Date('1999-10-11'));

  const userSettings = new UserSettings({
    birthdate: new Date('1999-10-11'),
    email: 'fran@fran.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Francisco',
    role: 'admin',
    workingDirectory: '/usr/home',
  });

  console.log({ userSettings });

})();
