/**
 * Created by pawe on 5/20/17.
 */
export class User {
  id: string;

  constructor(public name: string,
              public avatarSrc: string) {
    this.id = uuid();
  }
}

// taken from TodoMVC
export function uuid() {
  var i, random;
  var result = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      result += '-';
    }
    result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }

  return result;
};


let me: User = new User('Juliet', 'assets/images/avatars/female-avatar-1.png');
let ladycap: User = new User('Lady Capulet', 'assets/images/avatars/female-avatar-2.png');
let echo: User = new User('Echo Bot', 'assets/images/avatars/male-avatar-1.png');
let rev: User = new User('Reverse Bot', 'assets/images/avatars/female-avatar-4.png');
let wait: User = new User('Waiting Bot', 'assets/images/avatars/male-avatar-2.png');
export var USERS = [me, ladycap, echo, rev, wait];
