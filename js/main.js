
$(document).ready(function(){

//Section background transitions
var sectionTransition = function() {

  $('.project-section')
  .mouseenter(function() {
      $(this)
        .animate({backgroundColor:'#e9fdff'}, 500);
    })
    .mouseleave(function() {
        $(this)
        .animate({backgroundColor:'white'}, 500);
      });
};

sectionTransition();


//When hovering over a project-image, decrease opacity and show button
var overlay = function() {

  var $imageWrapper = $('.project-image-wrapper,  .project-image-wrapper-full');


  if ($(this).has('button')){
    $imageWrapper.find('.project-button').hide();
  }

  $imageWrapper.mouseenter(function() {
      $(this).find('.project-image, project-image-full').css({
        'opacity': '0.5',
        'border-color': '#00385a'
      });
      if ($(this).has('button')){
      $(this).find('.project-button').fadeIn(300);
    }
    })
    .mouseleave(function() {
      $(this).find('.project-image', 'project-image-full').css({
        'opacity': '1',
        'border-color': '#d8d8d8'
      });
      if ($(this).has('button')){
      $(this).find('.project-button').fadeOut(200);
    }
    });

};

overlay();

//On button click, replace cover div with projet description and move
//image to the left column

$('.hidden').hide(0);

var slideSection = function() {

  $('.project-image-wrapper, .project-image-wrapper-full').click(function() {

    var $parentDiv = $(this).parents('.transition-div');
    var $childToShow = $parentDiv.find('.hidden');
    var $childToHide = $childToShow.siblings('.project-section');

    $childToShow.fadeIn(2000, hideActiveSection());

    function hideActiveSection() {
      $childToShow.removeClass('hidden');
      $childToHide.fadeOut(0, function() {
        $(this).addClass('hidden');
      });
    }



  });


};

slideSection();

});
