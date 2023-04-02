var currentPage = 0;

$('.book')
.on('click', '.active', nextPage)
.on('click', '.flipped', prevPage);

function prevPage() {
  
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
// function nextPage() {
  
//   $('.active')
//     .removeClass('active')
//     .addClass('flipped')
//     .next('.page')
//     .addClass('active')
//     .siblings(); 
    
// }

function nextPage() {
  var nextPage = $(this).next('.page');
  if (nextPage.length > 0) {
    setTimeout(function() {
      nextPage.addClass('active').siblings('.page').removeClass('active');
      if (nextPage.attr('id') == 'page2') {
        setTimeout(function() {
          window.location.href = 'https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html';
        }, 100); // wait for 0.5 seconds before redirecting
      }
    }, 1000); // wait for 1.5 seconds before flipping to next page
    $(this).removeClass('active').addClass('flipped');
  }
}

