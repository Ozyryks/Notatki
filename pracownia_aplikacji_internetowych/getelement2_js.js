console.log("Wywołanie z zewnętrznego pliku js:",document.getElementById("naglowek")); //1

console.log(document.getElementsByClassName("tekst")); //2

console.log(document.getElementsByTagName("li")); //3

console.log(document.querySelector("span","#info")); //4

console.log(document.querySelectorAll("span","#info")); //5

console.log(document.querySelector("div", "#kontener").querySelector("span","#info")); //6

console.log(document.querySelector("div", "#kontener").querySelectorAll("span","#info")); //7

//w pliku html //8

//w pliku html //9


/*
W podanym pliku html dołącz skrypt js a następnie wykonaj ćwiczenia:
-1 Pobierz nagłówek o id="naglowek" i wypisz jego tekst w konsoli użyj getElementById.

-2 Pobierz wszystkie akapity z klasą "tekst" i wypisz ich teksty w konsoli użyj getElementsByClassName.

-3 Pobierz wszystkie elementy <li> i wypisz ich liczbę użyj getElementsByTagName.

-4 Użyj querySelector do pobrania pierwszego <span> z klasą "info" i wypisz jego tekst.

-5 Użyj querySelectorAll do pobrania wszystkich <span> z klasą "info" i wypisz ich teksty.

-6 Pobierz <span> znajdujący się w <div> "kontener" i wypisz jego tekst.

-7 Pobierz elementy z klasą "info" tylko wewnątrz "kontener" i wypisz ich liczbę.

-8 Zmień tekst drugiego akapitu na "Zmieniony tekst"

-9 Zmień kolor tekstu nagłówka na czerwony.
*/