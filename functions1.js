function printName(firstname, lastname) {
  console.log(`${firstname} ${lastname}`);
}
printName("Saja", "Albinali");

function printAge(birthyear) {
  console.log(`${birthyear}`);
}
printAge(2000);

function printAgeAndName(na, ag) {
  console.log(`hello ${na},you are ${ag} years old`);
}

printAgeAndName(`nadia`, `18`);

function printHello(language, name) {
  console.log(`${language} ${name}`);
}
printHello("Hello", "Nadia");
printHello("Hola", "Nadia");
printHello("Bonjour", "Nadia");
printHello("Merhaba", "Nadia");

function printMax(x, y) {
  if (x > y) {
    {
      console.log(x);
    }
  } else {
    console.log(y);
  }
}
printMax(1, 2);
