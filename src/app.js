var clock = document.querySelector('#clockdiv');
if(clock) {
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
}
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock(){
    var t = getTimeRemaining(new Date(2017, 5, 31));
    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
        clearInterval(timeinterval);
    }
}
if(clock) {
  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
}
(function($){
  $(function() {
    $(".qsm_results .qmn_question_answer ").each(function(i, e) {
      $(e).contents().filter(function(){
        return (this.nodeType == 3);
      }).remove();
    });
    $('.slides').slick({
      arrows: false
    });
     $($('.badges a')[0]).addClass('current');
    
    $('.badges a').on('click', function(e) {
      $('.slides').slick('slickGoTo', $(e.target).closest('a').index());
    });
    $('.slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.badges a').removeClass('current');
      $($('.badges a')[nextSlide]).addClass('current');  
    });
  });
}(jQuery));
