// $(document).ready(function(){
//dit is de lange versie om te wachten dat de 
//pagina geladen is voordat de functie uitgevoerd wordt
// })


$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
    $("#start").html("GO!");
    $("a").attr("href", "https://www.google.com");
    $(".container").attr("style", "background-color:red");
   // $(".theory").removeAttr("style", "border") 
   //removeAttr werkt niet

   //html() geeft ook de html in het geselecteerde (vb:dit is <b>fun</b>!)
   //text() geeft enkel de tekst
//    var val =  $(".head>h1").text();
//    alert(val);
//html invoegen
$(".theory").prepend("<h3>Theorie</h3>");
$(".theory").after("<h3>...</h3>");
//nieuwe tags invoegen
var txt = $("<div></div>").text("Dit is vanuit JQuery gemaakt");
var txt2 = $("<p></p>").text("en we doen er nog één bij")
$(".container").after(txt, txt2);
//class toevoegen
$('#start').addClass('layout');
//toggleClass
$("#btn").click(function(){
    $(".theory").toggleClass("content")
});
//via css() methode
$('#styling').css({"background-color":"yellow", "color":"orange", "border":"1.5rem solid orange"  });
$('#styling').width(700);
$('#styling').height(700);
//width() met padding erbij
// $('#styling').innerWidth(700); //zonder padding bij
//outerWidth() zonder margin erbij
$("#innerW").click(function(){
    $('#styling').innerWidth(700)
});
$("#outerW").click(function(){
    $("#styling").outerWidth(700)
});
$("#w").click(function(){
    $("#styling").width(700)
})

}); 