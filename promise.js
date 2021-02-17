let suVeCayVarMi= true;
function suKaynadi() {
    return new Promise(function (resolve, reject) {
        if (suVeCayVarMi == true) {
            resolve('Su Kaynadı...');
        } else {
            reject('Cay demlenMEdi...');
        }
    });
}

function demAtildi() {
    setTimeout(() => {
        console.log('Kaynayan suya çay atıldı...');        
    }, 2000);
}
function demlemeSuresiDoldu() {
    setTimeout(() => {
        console.log('Çayın demlenme süresi tamamlandı...');
    }, 3000);
}
function cayDemlendi(){
    setTimeout(() => {
        console.log('Çay demlendi.');        
    }, 4000);
}


suKaynadi()
    .then((data) => {
        console.log(data);
        demAtildi();    
    })
    .then((data) => {
        console.log(data);
        demlemeSuresiDoldu();
    })
    .then((data) => {
        console.log(data);
        cayDemlendi();
    })

    .catch((hata) => {
        console.log(hata);
    });
