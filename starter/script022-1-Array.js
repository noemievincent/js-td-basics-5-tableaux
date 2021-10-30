/*****************************
* 022 - Les tableaux indicés (Arrays)
*/

/* 
RAPPELS :
- une variable : un conteneur qui contient une seule valeur
- les types primitifs = les booléens, les nombres et les chaînes de caractères
TABLEAU (ARRAY) : 
- Un tableau (Array) est un conteneur qui contient plusieurs valeurs
- Chaque élément du tableau est une valeur et chaque emplacement est numéroté par un indice
- Pour les tableaux (Array), l’indice est un entier (il commence à zéro)
- Array est un type composite
*/


// 1. Initialiser un nouveau tableau

// 1°) Première méthode : déclaration littérale
var names = ['John', 'Mark', 'Jane'];
/*
- Un tableau indicé est un conteneur qui contient plusieurs données à la fois
- Chaque donnée est associée à un indice qui représente la place de la donnée dans le tableau
- Les indices dans un tableau commencent toujours à 0
	=> Le 1er élément du tableau (la première donnée) possède l'indice 0
	=> Le 2e élément du tableau (la première donnée) possède l'indice 1
	=> Le 3e élément du tableau (la première donnée) possède l'indice 2
	=> …
	=> Le denier élément du tableau (la première donnée) possède l'indice
		(nombre d'éléments dans le tableau) - 1
		Par exemple, dans un tableau de 5 éléments, le dernier possède l'indice 4
*/

/*
EXERCICE 1 : 
- créer un tableau semaine qui contient les noms des jours de la semaine
- afficher ce tableau dans la console
*/
const aWeek = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log(aWeek);
const day = function(elem) {
    console.log(elem);
}
aWeek.forEach(day);

// N.B. La fonction console.table() est très intéressante à utiliser pour affciher un tableau

console.table(aWeek);

// 2. Accéder à un élément du tableau : l'opérateur d'accession : les "[]"
console.log(names[2]); // affiche le 3e élément du tableau, ici 'Jane'
/* 
L'opérateur pour accéder à un élément d'un tableau est le crochet :
- si on veut accéder au 1er élément du tableau, on écrit nom_du_tableau[0]
- si on veut accéder au 2e élément du tableau, on écrit nom_du_tableau[1]
- …
- si on veut accéder au dernier élément du tableau,
	on écrit nom_du_tableau[(nombre d'éléments dans le tableau) - 1]
*/

/* 
EXERCCICE 2 : afficher dans la console
	- "Le premier jour de la semaine est …" (où … est le nom du jour récupéré dans le tableau)
	- "Le dernier jour de la semaine est…" (où … est le nom du jour récupéré dans le tableau)
 */
 // lundi
// dimanche
if (aWeek.length > 0){
    console.log(aWeek[0]);
    console.log(aWeek[2]);
    console.log(aWeek[aWeek.length-1]);
}



// 3. Nombre d'éléments dans un tableau : la propriété "length" du tableau
console.log(names.length);  // affiche la longueur du tableau, c.-à-d. le nombre d'éléments du tableau, ici 3
/* 
Un tableau est un objet de type Array (cf js-td-basics-6-objets).
On peut connaître le nombre d'éléments dans le tableau en utilisant
la propriété "length" du tableau, comme ceci :
	nom_du_tableau.length
*/

/* 
EXERCICE 3 :
- afficher le nombre de jours dans une semaine
- afficher le dernier jour de la semaine
*/




// 4. Modifier les données d'un tableau 
names[1] = 'Ben'; // modifie le 1er élément du tableau (c.-à-d. 'Mark') en 'Ben'
names[names.length] = 'Mary'; // ajoute la donnée 'Mary' à la fin du tableau (à la position n°3)
console.log(names);

/*
EXERCICE 4 :
- changer "samedi" en "saturday"
- réafficher le tableau
- stocker dimanche dans un variable jourFerie
- afficher le contenu de cette variable dans la console
- ajouter un nouveau jour, dimanche2, à la fin de la semaine
- réafficher le tableau des jours de la semaine
*/ 

aWeek[5] = "Saturday";
console.table(aWeek);

const jourFerie = aWeek[aWeek.length-1];
console.log(jourFerie);

aWeek.push("Dimanche2");
aWeek[aWeek.length] = "Dimanche3";
console.table(aWeek);


// 5. Un tableau peut contenir des données de différents types
var john = ['John', 'Smith', 1990, 'designer', false];
// 	Un tableau peut même contenir un tableau
var mark = ['Mark', 'Smith', 1990, 'designer', ['John', 'Mary'], true];


// 6. Méthodes associées à un tableau 

// 1°) Méthode pour ajouter des données à la fin ou au début d'un tableau 
john.push('blue'); // ajoute des éléments à la fin du tableau
john.unshift('Mr.'); // ajoute des éléments au début du tableau
console.log(john);

// 2°) Méthode pour retirer des données à la fin ou au début d'un tableau
john.pop(); // supprime le dernier élément du tableau
john.shift(); // supprime le premier élément du tableau
console.log(john);

// 3°) Méthode pour obtenir l'indice correspondant à une donnée du tableau
console.log(john.indexOf(23));

// 4°) Méthode pour inverser l'ordre des données dans un tableau
var tab = [0,1,2,3,4];
tab.reverse(); // inverse l'ordre du tableau
console.log(tab); 

// 7. Manière classique de tester si une donnée se trouve dans un tableau
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

/*
EXERCICE 5 :
- créer un tableau qui contient les fruits suivants :
	pomme, banane, poire, pêche, orange
- ajouter fraise au début du tableau
- ajouter myrtille à la fin du tableau
- afficher le tableau
- quelle est la position de poire ? (afficher "La poire est mon fruit n°…, il porte l'indice …")
- inverser l'ordre des fruits
- afficher "Mon tableau inversé :" et réafficher le tableau
- vérifier si mangue fait partie du tableau
	(afficher "mangue est dans le tableau" ou "mangue n'est pas dans le tableau" selon le cas)
- retirer le dernier fruit du tableau
- retirer aussi l'avant-dernier fruit
- réafficher le tableau
*/

const aFruits = ["Pomme", "Banane", "Poire", "Pêche", "Orange"];
aFruits.unshift("Fraise");
aFruits.push("Myrtille");
aFruits.pop();

console.table(aFruits);
console.log(`La poire est mon fruit n°${(aFruits.indexOf("Poire"))+1}, il porte l'indice ${aFruits.indexOf("Poire")}`);











// 1. Initialiser un nouveau tableau (… petit retour en arrière pour compléter…)

// 2°) Deuxième méthode pour initialiser un tableau : new Array()
var years = new Array(1990, 1969, 1948);
// OU
var years = new Array(); // étape 1 : on déclare un tableau vide
years[0]=1990; // étape 2 : on le remplit une case à la fois
years[1]=1969;
years[2]=1948;

console.log(years);









/*
Ressource intéressante à consulter :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
*/

/* 
RÉSUMÉ : 
- Un tableau permet de mémoriser un ensemble d'éléments.
- En JavaScript, un tableau est un objet ayant plusieurs propriétés spécifiques,
	telles que  length  qui renvoie sa taille (nombre d'éléments).
- On peut imaginer un tableau comme un ensemble de cases,
	chacune stockant une valeur spécifique et identifiée par un numéro appelé son indice
	(index en anglais). La numérotation des cases d'un tableau commence à l'indice 0 et non pas 1.
- On accède à un élément particulier d'un tableau en plaçant son indice entre une paire de crochets []
*/
