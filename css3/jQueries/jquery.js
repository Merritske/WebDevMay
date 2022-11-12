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
$(".theory").prepend("<h3>Theorie</h3>");
$(".theory").after("<h3>...</h3>");
var txt = $("<div></div>").text("Dit is vanuit JQuery gemaakt");
var txt2 = $("<p></p>").text("en we doen er nog één bij")
$(".container").after(txt, txt2);
}); 