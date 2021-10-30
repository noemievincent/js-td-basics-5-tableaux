/*
TABLEAUX - PRÉPA 4 :  Date valide - version 3
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retroune true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas :
		stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau
		(utilisez isBissextile pour gérer le cas du mois de février)
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/

function isBissextile(){
    if ((iYear % 400 === 0) || (iYear % 4 === 0 && iYear % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}
function isValid(Bissextile){
    let iMaxJour = 31;
    if (iMonth === 2){
        if (Bissextile){
            iMaxJour = 29;
        }else{
            iMaxJour = 28;
        }
    }else if (iMonth === 4 || iMonth === 6 || iMonth === 9 || iMonth === 11){
        iMaxJour = 30;
    }
    if (iMonth <= 12 && iMonth > 0){
        if (iDay <= iMaxJour){
            return true;
        }else {
            return false;
        }
    }else {
        return false;
    }

}

const iDay = parseInt(prompt("Entrez un jour :"));
const iMonth = parseInt(prompt("Entrez un mois :"));
const iYear = parseInt(prompt("Entrez une année :"));
const Bissextile = isBissextile();
console.log(`La date entrée est le ${iDay}/${iMonth}/${iYear}`);
console.log(isValid(Bissextile));
console.log(aMaxDays);


/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/




