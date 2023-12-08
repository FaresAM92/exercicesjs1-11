// Exercise 1
function exercise1() {
    var a = prompt("Enter the value of a:");
    var b = prompt("Enter the value of b:");
    var sum = parseInt(a) + parseInt(b);
    console.log("The sum of " + a + " and " + b + " is equal to " + sum);
}

// Exercise 2
function exercise2() {
    var nomPrenom = prompt("Enter your name and surname:");
    var age = prompt("Enter your age:");
    var resultatInfo = "Name and surname: " + nomPrenom + ", Age: " + age;
    console.log(resultatInfo);
}

// Exercise 3
function exercise3() {
    var ch = "ExampleString";
    var Long = ch.length;
    console.log("Length of the string: " + Long);
    var premierCaractere = ch.charAt(0);
    console.log("First character of the string: " + premierCaractere);
}

// Exercise 4
function exercise4() {
    var fruits = ['Apple', 'Banana'];
    console.log("Length of the array fruits: " + fruits.length);
    fruits.push('Orange');
    fruits.pop();
    fruits.shift();
    var indexBanana = fruits.indexOf('Banana');
    console.log("Index of 'Banana' in the array: " + indexBanana);
    if (indexBanana !== -1) {
        fruits.splice(indexBanana, 1);
    }
    console.log("Array fruits after modifications: " + fruits);
}

// Exercise 5
function exercise5() {
    var arr = [12, 5, 7, 8, 6, 16, 24, 3];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
    }
    console.log("Array after incrementing each element by 1: " + arr);
}

// Exercise 6
function exercise6() {
    var note = 'C';
    switch (note) {
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('Très bien');
            break;
        case 'C':
            console.log('Bien');
            break;
        case 'D':
            console.log('Moyen');
            break;
        case 'E':
            console.log('Mauvais');
            break;
        default:
            console.log('Note non reconnue');
    }
}

// Exercise 7
function exercise7() {
    function creerTranche(tableau, n) {
        return tableau.slice(n);
    }
    console.log(creerTranche([1, 2, 3], 1)); // ➞ [2, 3]
    console.log(creerTranche([1, 2, 3], 2)); // ➞ [3]
    console.log(creerTranche([1, 2, 3], 5)); // ➞ []
    console.log(creerTranche([1, 2, 3], 0)); // ➞ [1, 2, 3]
}

// Exercise 8
function exercise8() {
    function comparerEntiers(a, b) {
        if (a < b) {
            return a + " is less than " + b;
        } else if (a > b) {
            return a + " is greater than " + b;
        } else {
            return a + " is equal to " + b;
        }
    }
    var resultatComparaison = comparerEntiers(10, 5);
    console.log(resultatComparaison);
}

// Exercise 9
function exercise9() {
    var film = {
        title: "Nom du film" };
    var titreDuFilm = film.title;
    var dureeDuFilm = film.duration;
    console.log("Le titre du film est : " + titreDuFilm);
    console.log("La durée du film est : " + dureeDuFilm + " minutes");
}

// Exercise 10
function exercise10() {
    function motsAvecLongueur(chaine) {
        var mots = chaine.split(' ');
        var resultat = mots.map(function(mot) {
            return mot + ' ' + mot.length;
        });
        return resultat;
    }
    var chaine = "you will win";
    var resultatFinal = motsAvecLongueur(chaine);
    console.log(resultatFinal); 
}
