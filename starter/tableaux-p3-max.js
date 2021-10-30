/*
TABLEAUX - PRÉPA 3 : Maximum d'un tableau
1. Initialisez un tableau qui contient les nombres 3, 11, 7, 2, 9 et 10 ;
2. Affichez-le ;
3. Calculez et affichez ensuite la plus grande valeur présente dans le tableau
	(précédé du message "La plus grande valeur de mon tableau est …")
4. Changez quelques valeurs dans le tableau (par exemple le 9 en 90) et retestez ;
*/

const aNumbers = [3, 11, 7, 2, 9, 10];
console.table(aNumbers);

let iMaxNumber = 3;

for (let i = 1; i < aNumbers.length; i++){
    if(aNumbers[i] > iMaxNumber){
        iMaxNumber = aNumbers[i];
    }
}

console.log(`La plus grande valeur de mon tableau est ${iMaxNumber}`);


/*
---
À ne lire que si vous n'y arrivez pas seul…
---
Aide :
	- On initialise une variable max avec le 1er élément du tableau
	- On parcourt le tableau à la recherche d'un nombre plus grand que celui-là
		en commençant au 2e élément du tableau :
		si la valeur courante est supérieur au maximum actuel, 
		elle devient le nouveau maximum
	- On affiche
*/
