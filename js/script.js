// event
$('.page-scroll').on('click', function(e){

 // ambil href
  	var tujuan = $(this).attr('href');
 // tangkap element
   	var elemenTujuan = $(tujuan);

 // scroll
   $('html,body').animate({
 	  scrollTop: elemenTujuan.offset().top - 50
   }, 1250);

  e.preventDefault();

 // console.log(tujuan);

});


// parallax
// Aboout

$(window).on('load', function(){
	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');
})
