/*****************************
* 023 - TABLEAUX - CODING CHALLENGE 3
*/
/*
John et sa famille sont allés en vacances et sont allés dans trois restaurant différents.
Les factures étaient de  $124, $48 et $268.

Pour donner au serveur un pourboire correct, John a créé un calculateur de pourboire 
(en tant que fonction).
Il aime donner en guise de pourboire :
- 20% de la facture si celle-ci est inférieure à $50,
- 15% quand la facture est entre $50 et $200,
- et 10% si la facture est supérieure à $200.

À la fin, John aimerait avoir 2 tableaux :
1) un qui contient tous les pourboires (pour chacune des factures)
2) un qui contient les trois montants finaux payés (facture + pourboire).

(RAPPEL: Pour calculer 20% d'une valeur, il suffit de multiplier la valeur par 20/100 = 0.2)

BONNE CHANCE 😀
*/


function calculer(price) {
    let iTip;
    if (price < 50){
        iTip = (price/100)*20;
        aTips.push(iTip);
        aBill.push(iTip+price);
    } else if (price > 50 && price <= 200){
        iTip = (price/100)*15;
        aTips.push(iTip);
        aBill.push(iTip+price);
    } else if (price > 200){
        iTip = (price/100)*10;
        aTips.push(iTip);
        aBill.push(iTip+price);
    }
}

const aTips = [];
const aBill = [];

calculer(124);
calculer(48);
calculer(268);


console.table(aTips); //tableau avec tous les pourboires
console.table(aBill); //tableau avec la somme des pourboires et des factures

