function KlikKlas(klas){
    console.log(klas);
    document.getElementById('gallerij').style.visibility = "visible";

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  300,
        thumbnailWidth:   300,
        //itemsBaseURL:     'images/kunst' //'https://nanogallery2.nanostudio.org/samples/',
        
        // ### gallery content ### 
        items: [
            { src: 'images/kunst/K1A/Bandensporen maken .jpg', srct: 'images/kunst/K1A/Bandensporen maken .jpg', title: 'Bandensporen maken' },
            { src: 'images/kunst/K1A/Onderzoekend leren -  verven met ijs en verf.jpg', srct: 'images/kunst/K1A/Onderzoekend leren -  verven met ijs en verf.jpg', title: 'verven met ijs en verf' },
            { src: 'images/kunst/K1A/onderzoekend leren - archeoloog dino opgraven .jpg', srct: 'images/kunst/K1A/onderzoekend leren - archeoloog dino opgraven .jpg', title: 'archeoloog dino opgraven' }
          ]
      });

}

function SluitGallerij(){
    document.getElementById('gallerij').style.visibility = "hidden";
    console.log('sluit')
}