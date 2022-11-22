
const url = 'https://blockchain.info/ticker';

//creer un requete

function actualiser(){

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE){
        if (requete.status === 200 ){
            let reponse = requete.response;
            let prix_en$ = reponse.USD.last;
            document.querySelector('#price_label') .textContent = prix_en$;
        }else{
            alert("Une erreur");
        }
    }
}

}

setInterval(actualiser, 5000);