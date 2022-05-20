import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private users = [
    {
      id : 1,
      name : "Keljon",
      surname : "Vianney",
      email: "vykelange@gmail.com",
      password: "123456789",
      date_creation : new Date()
    },

    {
      id : 2,
      name : "Kamaha",
      surname : "Joelle",
      email: "joelle.kamaha@ejara.africa",
      password: "123456789",
      date_creation : new Date()
    },
    {
      id : 3,
      name : "ofosu",
      surname : "kingsley",
      email: "kingsley.ofosu@ejara.africa",
      password: "123456789",
      date_creation : new Date()
    },
    {
      id : 4,
      name : "nguemne",
      surname : "eva",
      email: "nguemnev@ejara.africa",
      password: "123456789",
      date_creation : new Date()
    }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUserByEmailAndPassword(email: string, password: string): object{
      return this.users.find(user => (user.email==email && user.password==password));
  }
}
