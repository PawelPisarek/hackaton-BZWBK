/**
 * Created by pawe on 5/20/17.
 */
export class User {


  constructor(public  id: string,
              public name: string,
              public rate: number,
              public loans: number[],
              public avatarSrc: string,
              public price: number,
              public tranche: string,
              public buisnesArea: string,
              public area: string,
              public description: string) {
  }
}



let me: User = new User('1','FindAir',3,[70,90,51], 'assets/images/avatars/female-avatar-1.png', 100000, '1 000 zł / miesiąc', 'Zdrowie', 'Poznań', ' FindAir chce produkować inhalatory, które są „sprzężone” z aplikacją na smartfony. Dzięki takiemu skorelowaniu hardware i software, aplikacja ma zbierać informacje o tym, kiedy i w jakich okolicznościach użytkownik korzystał z inhalatora. W aplikacji jest kalendarz pyleń oraz połączenie ze stacjami pomiarowymi, badającymi poziom emisji zanieczyszczeń. Z kolei inhalator – choć jest klasycznym urządzeniem – również posiada dodatkowe funkcjonalności, np. lokalizator pozwalający szybko znaleźć go w kryzysowej sytuacji. Założyciele FindAir nie mają zamiaru tracić czasu. - Rzeczywiście, chcielibyśmy wejść z tym rozwiązaniem na rynek tak szybko, jak się da. Najlepiej jeszcze w tym roku ');
let ladycap: User = new User('2','Softmicro',1,[17,26,35], 'assets/images/avatars/female-avatar-3.png', 20000, '4 000 zł / 3 miesiące', 'Środowisko', 'Poznań', 'Oprogramowanie dla użytkowników domowych');
let echo: User = new User('3','stripe',5,[20,30,45], 'assets/images/avatars/rocket.jpg', 30300, 'co pół roku 15150', 'fintech', 'Warszawa', 'Obsługa płatności');
let rev: User = new User('4','Blik',4,[20,30], 'assets/images/avatars/female-avatar-4.png', 500000, 'co miesiąc 2000', 'IT', 'Kraków', 'Płatności telefonem');
let wait: User = new User('5','Google',3,[10], 'assets/images/avatars/male-avatar-2.png', 7000, 'co 2 miesiące 1000', 'fintech', 'Gdańsk', 'Wyszukiwarka internetowa');
export var USERS = [me, ladycap, echo, rev, wait];
