/**************************************** 
* Show/Hide pictures according to filters
****************************************/
$(document).ready(function () {

    $(".filterButton").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('');
        }
        else {
            $(".filter").not('.' + value).hide('1551');
            $('.filter').filter('.' + value).show('1551');

        }

        if ($(".filterButton").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});

/****************
* Create pictures
****************/
function Picture(name, category, source) {
    this.name = name;
    this.category = category;
    this.source = source;
}

let pictures = new Array();
pictures[0] = new Picture("Abeille", "nature bug", "Abeille.jpg");
pictures[1] = new Picture("Agrion", "nature bug", "Agrion.jpg");
pictures[2] = new Picture("Amiens", "landscape", "Amiens.jpg");
pictures[3] = new Picture("Amphibien", "nature amphibian", "Amphibien.jpg");
pictures[4] = new Picture("Chardonneret élegant", "nature bird", "ChardonneretElegant.jpg");
pictures[6] = new Picture("Cigogne blanche", "nature bird", "CigogneBlanche.jpg");
pictures[7] = new Picture("Hérisson d'Europe", "nature mammal", "Herisson.jpg");
pictures[8] = new Picture("Îles de Glénan", "landscape", "IlesDeGlenan.jpg");
pictures[9] = new Picture("Lapereau", "nature mammal", "Lapereau.jpg");
pictures[10] = new Picture("Lézard des murailles", "nature reptile", "Lezard.jpg");
pictures[11] = new Picture("Libellule", "nature bug", "Libellule.jpg");
pictures[12] = new Picture("Mésange Bleue", "nature bird", "Mesange.jpg");
pictures[13] = new Picture("Notonecte", "nature bug", "Notonecte.jpg");
pictures[14] = new Picture("Ouverture sur la Mer", "landscape", "Mer.jpg");
pictures[15] = new Picture("Papillon métallique", "bug", "Papillon.jpg");
pictures[16] = new Picture("Pêcherie", "landscape", "Pecherie.jpg");
pictures[17] = new Picture("Plage de Kersidan", "landscape", "PlagedeKersidan.jpg");
pictures[18] = new Picture("Pleine de lune", "landscape", "Lune.jpg");
pictures[19] = new Picture("Pornic", "landscape", "Pornic.jpg");
pictures[20] = new Picture("Port", "landscape", "Port.jpg");
pictures[21] = new Picture("Serpent Ratier Rhinocéros", "nature reptile", "SerpentRatierRhinoceros.jpg");
pictures[22] = new Picture("Singe aérien", "nature mammal", "Singe.jpg");
pictures[23] = new Picture("Syrphe", "nature bug", "Syrphe.jpg");
pictures[24] = new Picture("Vol de Cygnes", "nature bird", "Cygnes.jpg");

pictures.forEach(function (picture) {
    imagesZone.innerHTML +=
        `<div class="galleryItem col-md-3 col-4 filter ${picture.category}">
            <img class="img-fluid imgItem p-2" alt="Image ${picture.name}" src="assets/img/${picture.source}" />
            <div class='img-info'>
            <h2>${picture.name}</h2>
        </div>`;
});

/******************************************
* Get the information and pass to the modal
******************************************/
$(".filter").click(function () {
    let source = $(this).find('img').attr('src');
    let caption = $(this).find('h2').text();
    $("#pictureModal").find('img').attr('src', source);
    $("#pictureModal").find('#caption').html(caption);
    $("#pictureModal").show();
});

$("#pictureModal").click(function () {
    $("#pictureModal").hide();
})