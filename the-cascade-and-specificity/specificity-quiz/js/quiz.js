$(function() {

  var begin,
    end,
    thirty = 30 * 1000,
    questions = $('.question');

  $('.begin').on('click', function() {
    $('.begin-wrapper, .instructions').fadeOut(100, function() {
      $('.questions').fadeIn();
      begin = moment();
    });
  });

  $('.answer').on('submit', function(e) {
    e.preventDefault();
    var form = $(this),
      selected = form.find('input:checked'),
      question = form.closest('.question');
    if (!!selected.size()) {
      if (selected.val() == 'correct') {
        question.addClass('correct');
      }
      else {
        question.addClass('incorrect');
        setTimeout(function() {
          question.removeClass('incorrect');
        }, thirty);
      }
    }
    checkForComplete();
  });

  function checkForComplete() {
    var duration;
    if (questions.size() <= $('.correct').size()) {
      end = moment();
      duration = moment.duration(end.diff(begin));
      $('.time').text(duration.minutes() + ' minutes and ' + duration.seconds() + ' seconds');
      $('.results').addClass('done');
    }
  }

});
