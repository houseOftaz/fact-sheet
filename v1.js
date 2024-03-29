// je veux créer un objet vide pour stocker les infos de mon user // prompt, objet
const userInfos = {};

// I want to ask the age
userInfos.age = Number(prompt("Although it may be indiscreet for some, could you tell me your age ?"));
// I want to ask the name
userInfos.name = prompt("Would you give me your name ?");
// I want to ask the hobby
userInfos.hobby = prompt("Talking of hobbies, how are things going for your favorite ?");

// wanna display all informations in one shot  //  en interpolant ma concaténation
console.log(`Your pretty name is ${userInfos.name}, you are so old that your age is ${userInfos.age} years old and you love so much your hobby that is : ${userInfos.hobby}`);
