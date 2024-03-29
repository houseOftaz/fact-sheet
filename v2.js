/////////////////////////////////   V1 + ajouter une validation des données :
//////////   V2    /////////////   - être majeur pour remplir le questionnaire
////////////////////////////////   - un minimum de 4 caractères pour le nom  //  Le prompt non validé doit se répéter

/* si userInfos.age est inferieur a 18, le script s'arrete,
sinon il demande le nom et le hobby,
et il affiche les info dans la console
tout ca en interpolation et pas avec des + a la ES2 feignant
*/

const userInfos = {
    age: null,
    nom: "",
    hobby: "",
};
userInfos.age = Number(prompt("Although it may be indiscreet for some, could you tell me your age ?"));

if (userInfos.age < 18 || Number.isNaN(userInfos.age)) {
    alert("Go away little boy ...");
} else {
    while (true) {
        userInfos.name = prompt("Would you give me your name ?")
        if (userInfos.name.length < 4) {
            alert("Give me a real fucking name bro with more than 4 caracters ...")
            continue;
        }
        break;
    }

    userInfos.hobby = prompt("Talking of hobbies, how are things going for your favorite ?");
    console.log(`Your pretty name is ${userInfos.name}, you are so old that your age is ${userInfos.age} years old and you love so much your hobby that is : ${userInfos.hobby}`);
}
console.log("You can't see the rest of my beautiful algo mother fucker !");
