var SonnyContent = $('.Central');
var CherylContent = $('.central1');
var OliverContent = $('.central2')
var MolochContent = $('.central3')
var TheRichardContent = $('.central4')
var ContentAll = $('.contentAll')
var AuthorContent = $('.author__content')
var WorldContent = $('.world__content')


$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="button-1.mp3";
        obj.volume=0.30;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".cheryl, .oliver, .sonny, .the_richard, .Moloch").click(function() {
            obj.play();
        });
 
    });


$(document).ready(function() {
        var obj = document.createElement("audio");
        obj.src="button-2.mp3";
        obj.volume=0.30;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $(".world, .startreading, .author").click(function() {
            obj.play();
        });
 
    });

$('.world').on('click', function(event) {
	ContentAll.css('display', 'none')
	WorldContent.css('display', 'block');
});
$('.author').on('click', function(event) {
	ContentAll.css('display', "none")
	AuthorContent.css('display', 'block');
});
$('.cheryl').on('click', function(event) {
	ContentAll.css('display', 'none')
	CherylContent.css('display', 'block');
});
$('.sonny').on('click', function(event) {
	ContentAll.css('display', 'none')
	SonnyContent.css('display', 'block');
});
$('.oliver').on('click', function(event) {
	ContentAll.css('display', 'none')
	OliverContent.css('display', 'block');
});
$('.the_richard').on('click', function(event) {
	ContentAll.css('display', 'none')
	TheRichardContent.css('display', 'block');
});
$('.Moloch').on('click', function(event) {
	ContentAll.css('display', 'none')
	MolochContent.css('display', 'block');
});
$('.author').on('click', function(event) {
	ContentAll.css('display', 'none')
	AuthorContent.css('display', 'block');
});




$('.SonnyHover').on('mouseover', function(){
	$('a.SonnyHover').addClass('pulse');
});

$('.SonnyHover').on('mouseleave', function(){
	$('a.SonnyHover').removeClass('pulse');
});



$('.CherylHover').on('mouseover', function(){
	$('a.CherylHover').addClass('pulse');
});

$('.CherylHover').on('mouseleave', function(){
	$('a.CherylHover').removeClass('pulse');
});



$('.OliverHover').on('mouseover', function(){
	$('a.OliverHover').addClass('pulse');
});

$('.OliverHover').on('mouseleave', function(){
	$('a.OliverHover').removeClass('pulse');
});



$('.RichardHover').on('mouseover', function(){
	$('a.RichardHover').addClass('pulse');
});

$('.RichardHover').on('mouseleave', function(){
	$('a.RichardHover').removeClass('pulse');
});



$('.MolochHover').on('mouseover', function(){
	$('a.MolochHover').addClass('pulse');
});

$('.MolochHover').on('mouseleave', function(){
	$('a.MolochHover').removeClass('pulse');
});



$('.world').on('mouseover', function() {
	$('a.WorldHover').addClass('pulse');
});

$('.world').on('mouseleave', function() {
	$('a.WorldHover').removeClass('pulse');
});



$('.author').on('mouseover', function() {
	$('a.author').addClass('pulse');
});

$('.author').on('mouseleave', function() {
	$('a.author').removeClass('pulse');
});



$('.startreading').on('mouseover', function() {
	$('a.startreading').addClass('pulse');
});

$('.startreading').on('mouseleave', function() {
	$('a.startreading').removeClass('pulse');
});