let islemTamam = true;
function suKaynadi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Su Kaynadı...');
            //islemTamam =false;
        } else {
            reject('Su KaynaMAdı...');
        }
    });
}
function demAtildi() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Kaynayan suya çay atıldı...');
            //islemTamam =false;
        } else {
            reject('Kaynayan suya çay atılMAdı...');
        }
    });
}
function demlemeSuresiDoldu() {
    return new Promise(function (resolve, reject) {
        if (islemTamam == true) {
            resolve('Çayın demlenme süresi tamamlandı...');     
            //islemTamam =false;       
        } else {
            reject('Çayın demlenme süresi tamamlanMAdı...');
        }
    });
}
function cayDemlendi(){    
    console.log('Çay demlendi.');     
}
suKaynadi()
    .then((data) => {
        console.log(data);
        demAtildi()  
        .then((data) => {
            console.log(data);
            demlemeSuresiDoldu()
            .then((data) => {
                console.log(data);
                cayDemlendi();        
            })
            .catch((hata) => {
                console.log(hata);
            });    
        })
        .catch((hata) => {
            console.log(hata);
        });
    })
    .catch((hata) => {
        console.log(hata);
    });
