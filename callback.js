//Çay demleme işlemleri
suKaynadi(demAtildi);

function suKaynadi(demAtildi){
    setTimeout(() => {
        console.log('Su Kaynadı...');
        demAtildi(demlemeSuresiDoldu);
    }, 1000);
}

function demAtildi(demlemeSuresiDoldu) {
    setTimeout(() => {
        console.log('Kaynayan suya çay atıldı...');
        demlemeSuresiDoldu(cayDemlendi)
    }, 2000);
}

function demlemeSuresiDoldu(cayDemlendi) {
    setTimeout(() => {
        console.log('Çayın demlenme süresi tamamlandı...');
        cayDemlendi()
    }, 3000);
}

function cayDemlendi(){
    setTimeout(() => {
        console.log('Çay demlendi.');        
    }, 4000);
}