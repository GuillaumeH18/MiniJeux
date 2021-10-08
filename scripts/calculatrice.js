var  nb1 ="";
var  nb2 ="";
var operateur =""

let afficheNombre = ( nombre) => {
    
    if (operateur ="")
    {
        nb1 += nombre
    }
    else
    {
        nb1 += nombre
    }
    document.querySelector("#affiche").value = nb1 + " "+ operateur +" "+ nb2
}

let AddOperateur = ( op) => {
    operateur = op
}

let calcul = ( ) => {
    let resultat = Equal( nb1 + " "+ operateur +" "+ nb2)
    document.querySelector("#affiche").value = nb1 + " "+ operateur +" "+ nb2 + " = "+ resultat
}