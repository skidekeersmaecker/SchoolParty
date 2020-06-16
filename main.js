var media = [];
var geluid;

function KlikKlas(klas){
    console.log(klas);
    document.getElementById('gallerij').innerHTML = "<button id='btnSluitGallerij' aria-label='Sluit Gallerij' onclick='SluitGallerij()'>×</button><div id='nanogallery2'>gallery_made_with_nanogallery2</div>";
    
    SpeelGeluid(klas);

    media = [];
    for(i = 1; i < 9; i++){
        //FOTO
        if(doesFileExist('images/kunst/' + klas + '/' + klas + '-' + i + '.jpg')){
            media.push({ src: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', srct: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', title: '' });
        }
        else console.log('Does not exist: ' + 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg');
        //VIDEO
        if(doesFileExist('images/kunst/' + klas + '/' + klas + '-' + i + '.mp4')){
            media.push({ src: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', srct: 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg', title: '' });
        }
        else console.log('Does not exist: ' + 'images/kunst/' + klas + '/' + klas + '-' + i + '.jpg')
    };

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   300,
        
        // ### gallery content ### 
        items: media
    });

    document.getElementById('gallerij').style.visibility = "visible";
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
    document.getElementById('gallerij').innerHTML = '';
    console.log('sluit')
}