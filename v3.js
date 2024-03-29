/////////////////////////////////   V2
//////////   V3    /////////////    +
////////////////////////////////    hobby devient un Array et peut recevoir plusieurs données


const userInfos = {
    age: null,
    nom: "",
    hobbies: [],
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

    while (true) {
        let tempHobby = prompt("Talking of hobbies, how are things going for your favorite ?");
        if (tempHobby !== "") {
            userInfos.hobbies.push(tempHobby);
            continue;
        }
        break;
    }

    console.log(`Your pretty name is ${userInfos.name}, you are so old that your age is ${userInfos.age} years old and you love so much your hobby that is : ${userInfos.hobbies}`);
}
console.log("You can't see the rest of my beautiful algo mother fucker !");
