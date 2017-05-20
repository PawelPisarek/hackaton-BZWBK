/**
 * Created by pawe on 5/20/17.
 */
export class User {
  id: string;

  constructor(public name: string,
              public avatarSrc: string,
              public price: number,
              public tranche: string,
              public buisnesArea: string,
              public area: string,
              public description: string) {
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


let me: User = new User('FindAir', 'assets/images/stock1.jpg', 100000, 'co 3 miesiące 2 tysiące', 'IT', 'Poznań', ' FindAir chce produkować inhalatory, które są „sprzężone” z aplikacją na smartfony. Dzięki takiemu skorelowaniu hardware i software, aplikacja ma zbierać informacje o tym, kiedy i w jakich okolicznościach użytkownik korzystał z inhalatora. W aplikacji jest kalendarz pyleń oraz połączenie ze stacjami pomiarowymi, badającymi poziom emisji zanieczyszczeń.  ');
let ladycap: User = new User('Microsoft', 'assets/images/avatars/female-avatar-2.png', 20000,'co 2 miesiące 4 tysiące', 'budownictwo', 'Wrocław', 'Oprogramowanie dla użytkowników domowyc');
let echo: User = new User('stripe', 'assets/images/avatars/male-avatar-1.png', 30300,'co pół roku 15150', 'fintech', 'Warszawa', 'Obsługa płatności');
let rev: User = new User('Blik', 'assets/images/avatars/female-avatar-4.png', 500000,'co miesiąc 2000', 'IT', 'Kraków', 'Płatności telefonem');
let wait: User = new User('Google', 'assets/images/avatars/male-avatar-2.png', 7000, 'co 2 miesiące 1000','fintech', 'Gdańsk', 'Wyszukiwarka internetowa');
export var USERS = [me, ladycap, echo, rev, wait];
