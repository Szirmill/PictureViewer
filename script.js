  let photos = [
    {
        photo: 'images/Bp1.jpg',
        title: 'Budapest',
        description: 'The view of Budapest, capital of Hungary with the Parliament and the Margit bridge.',
    },
    {
        photo: 'images/Bp2.jpg',
        title: 'Buda Castle',
        description: 'Buda Castle, the emblematic architectural masterpiece of our cityscape, is located on Szent György Square . From the 13th century, it hosted the Hungarian kings; from this period, the medieval walls and some buildings survived, but in the 19th century it was significantly remodeled based on the designs of Miklós Ybl and Alajos Hauszmann .',
    },
    {
        photo: 'images/Bp3.jpg',
        title: 'Budavári Palace',
        description: 'The former Hungarian royal palace, the Budavári Palace, is one of the most outstanding sights of our capital, part of the world heritage . On the Buda side of Budapest, it rises above the Danube from Várhegy with its characteristic greenish dome towards the sky.',
    },
    {
        photo: 'images/Bp4.jpg',
        title: "Heroes' Square",
        description: "One of the symbols of Budapest: Heroes' Square. The square was built for the 1896 millennium celebration and commemorates the thousand-year history of Hungarians. There are statues of 14 emblematic historical figures, with an obelisk in the middle, and a statue of the Archangel Gabriel on top.",
    },
    {
        photo: 'images/Bp5.jpg',
        title: "Saint Stephen's Basilica",
        description: "One of the most visited landmarks in Budapest, one of the most important Hungarian relics, the Saint Stephen's Basilica is located in the heart of the city, in the 5th district of Pest.",
    },
    {
        photo: 'images/Bp6.jpg',
        title: 'Statue of Anonymous',
        description:"The nearly two-meter-high statue is located in Városliget next to Vajdahunyad Castle. He was probably a clerk of one of Béla's kings (I-II-III.IV.).",
    },
    {
        photo: 'images/Bp7.jpg',
        title: 'Chain Bridge',
        description: "The Széchenyi Chain Bridge (commonly known as Chain Bridge ) is the oldest and most well-known bridge on the Danube , providing a permanent connection between Buda and Pest , one of the symbols of the Hungarian capital , and also the first permanent bridge on the entire Hungarian section of the Danube.",
    },
    {
        photo: 'images/Bp8.jpg',
        title: 'Clark Adam square',
        description: "The square is located at the Lánchíd's Buda bridgehead, at the entrance to the Tunnel. It was named after its designer, the architect Ádám Clark. The '0' kilometer stone stands on the square, which is the starting point for the numbering of the main highways in Hungary. ",
    },
    {
        photo: 'images/Bp9.jpg',
        title: 'Parliament',
        description: "The Országház is one of Budapest's best-known public buildings, the seat of the Hungarian Parliament.  It is located in the V. district of Budapest , on the left bank of the Danube.",
    }
  ];

  let actualIndex = (0);

function loadPhoto (actualIndex) {
    $('#photoBox').css("background-image", 'url('+ photos[actualIndex].photo +')');
    $('#title').text(photos[actualIndex].title);
    $('#description').text(photos[actualIndex].description);
    setBorder(actualIndex);
}

function loadThumbnail(i)  {
    for(var i=0; i < photos.length; i++){
        $("#thumbnailBack").append($('<button>', {
            class:'thumbnailPicBox',
            id:'pic'+ i                
        }));
        $('#pic'+i).append($('<img>', {
            class:'thumbnailPic', 
            src: photos[i].photo,
        }));
        $('#pic'+i).append($('<h3>', {
            class:'thumbnailTitle', 
            text:photos[i].title,
            id: 'pic'+i+ 'Title'
        }));
    };
};

function setBorder (actualIndex) {
    $('#pic'+actualIndex).css({
        borderWidth: '4px',
        borderStyle:  'double',
        borderColor:  '#4b4021'
    })
};

$(function(){
    loadPhoto (actualIndex);
    loadThumbnail();
    

    $('#next').on('click', function(actualindex){
        $('#pic'+actualIndex).css('border', 'none');
            if (actualIndex === photos.length-1){ 
                actualIndex = (0)
            } else {  
                actualIndex = actualIndex + 1;
            }; 
        loadPhoto (actualIndex);
    });

    $('#previous').on('click', function(actualindex){
        $('#pic'+actualIndex).css('border', 'none');
        if (actualIndex === 0){ 
            actualIndex = photos.length-1
        } else {  
            actualIndex = actualIndex - 1;
        }; 
        loadPhoto (actualIndex);
    });

    $('.thumbnailPicBox').on('click', function(actualindex){
        $('#pic'+actualIndex).css('border', 'none');
            var clickedId = $(this).attr("id");
            actualIndex = clickedId.substring(3, 4);
            loadPhoto (actualIndex);
    });

    $( ".thumbnailPicBox" ).on("mouseenter", function() {
        var hoverID = $(this).attr("id")+'Title';
        $('#'+hoverID).css('visibility','visible');
    });

    $( ".thumbnailPicBox" ).on("mouseleave",function() {
        var hoverID = $(this).attr("id")+'Title';
        $('#'+hoverID).css('visibility','hidden');
    });

  })



