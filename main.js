var media = [];
var geluid;

function KlikKlas(klas){
    SpeelGeluid(klas);
    MaakMedia(klas);

    //jQuery('#nanogallery2').nanogallery2('destroy');
    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   500,
        
        // ### gallery content ### 
        items: media
    });

    document.getElementById('gallerij').style.visibility = "visible";
}

function MaakMedia(klas){
    media = [];
    for(i = 1; i < 11; i++){
        //FOTO
        if(doesFileExist('images/kunst/' + klas + '/' + klas + '-' + i + '.jpg')){
            media.push({ src: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', srct: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', title: '' });
        }
        else console.log('Does not exist: ' + 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg');
        //VIDEO
        if(doesFileExist('images/kunst/' + klas + '/' + klas + '-' + i + '.mp4')){
            media.push({ src: 'images/kunst/' + klas + '/' + klas + '-' + i + '.mp4', srct: 'images/kunst/' + klas + '/' + klas + '-' + i + 'tb.jpg', title: '' });
        }
        else console.log('Does not exist: ' + 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg')
    };
}

function SpeelGeluid(klas){
    geluid = new Audio('sounds/' + klas + '.mp3');
    geluid.play();
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

function SluitGallerij(){
    document.getElementById('gallerij').style.visibility = "hidden";
    jQuery('#nanogallery2').nanogallery2('destroy');
}

function ToonVisie(){
    document.getElementById('visie').style.visibility = "visible";
    document.getElementById('btnSluitVisie').style.visibility = "visible";
}
function SluitVisie(){
    document.getElementById('visie').style.visibility = "hidden";
    document.getElementById('btnSluitVisie').style.visibility = "hidden";
}
