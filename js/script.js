// $(document).ready(function () {
//   alert('jQuery動作テスト');
// });

/*
$('h1').css('color', 'green');

$('.site-header-nav li a').css('color', 'blue');

$('.mv-copy').next().css('text-decoration', 'underline');

$('.mv-subcopy').prev().css('font-weight', 'bold');

$('.service-card').parent().css('border', '1px solid orange');

$('.site-footer-sns').children().css('color', 'orange');

$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000');

$('.contact-logo').closest('div').css('background', '#eee');

// jQuery4まで
*/

/*
$('.works-container')
  .css('border', '4px dotted orange')
  .find('.works-thumb')
  .css('opacity', '.5')
  .next()
  .css('background-color', 'rgba(255,255,0,0.5)')
  .children()
  .css('text-decoration', 'underline');

  // jQuery 5まで
*/

const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetContainer = $('.tweet-container');

/*
// $tweetContainer.append(tweet);
// $tweetContainer.prepend(tweet);
// $tweetContainer.before(tweet);
// $tweetContainer.after(tweet);
// $tweetContainer.html(tweet);
// $tweetContainer.text(tweet);

// jQuery6まで
*/

// jQuery 7
let display = true;
const $content = $('.quick-news-content');
$('#quick-news-btn').on('click', e => {
  if (display) {
    $content.wrap('<div class="hidden">');
    $(e.target).text('+ ニュースを開く');
    display = false;
  } else {
    $content.unwrap();
    $(e.target).text('× ニュースを閉じる');
    display = true;
  }
});

// jQuery 8
// $('.works-desc').empty();
// $('.works-desc').remove();

// jQuery 9
/*
const $workImg = $('.works-thumb img');
// $workImg.removeAttr('alt');
// console.log( $workImg.attr('alt') );
$workImg.attr('alt', 'アンティーク家具ショップ');
$workImg.attr('id', 'works-antique');
*/


// jQuery 10
/*
const $serviceIcon = $('.service-icon');
console.log($serviceIcon.css('color'));
$serviceIcon.css({
  'font-size': '20px',
  'color': 'red',
});
// jQuery 10
*/

// jQuery 11
// $('.faq-openclose').addClass('is-open');
// $('.faq-openclose').removeClass('faq-openclose');
// $('.faq-openclose').toggleClass('is-open');
// console.log($('.faq-openclose').hasClass('is-open'));

// jQuery 12
/*
$('.faq-openclose').on('click', e => {
  console.log('クリックしました');
  // $(e.target).off('click');
  $(e.target).toggleClass('is-open');
});
*/

// jQuery 13
/*
$(document).on('DOMContentLoaded', () => {
  $('.site-header-logo').css('border-bottom', '2px solid black');
});

$(window).on('load', () => {
  console.log('window load');
})
*/

// jQuery 14
/*
$('.faq-list *').on('click', e => {
  console.log(e);
  e.stopPropagation();
})

const mouseFollow = $('.mouse-follow');
$(window).on('mousemove', e => {
  console.log(e.clientX, e.clientY);
  mouseFollow.css({
    'left': e.clientX,
    'top': e.clientY,
  });
});

*/

// jQuery 15

$('.mv-copy').on('click', e => {
  $(e.target)
    .animate({
      'font-size': 40
    })
    .animate({
      'font-weight': '700'
    })
    .animate({
      'height': 'hide'
    });
});

$('.pagetop').on('click', () => {
  $('html').animate({
    'scrollTop': 0
  });
})

/*
$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000, function () {
    $(this).css('background-color', 'yellow');
  });
});

$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut();
})

//jQuery 16
*/

// jQuery 17
$('.faq-openclose').on('click', e => {
  const $dd = $(e.target).parent().next();

  $(e.target).toggleClass('is-open');
  $dd.stop().slideToggle(!$dd.is(':visible'));

  // $dd.toggle(!$dd.is(':visible'));

  // if($dd.is(':visible')) {
  //   $dd.hide();
  // } else {
  //   $dd.show(1000);
  // }
})

// jQuery 19
const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19');
let counter = 0;
tweetContent.text(tweets[counter]).fadeIn();

setInterval(() => {
  tweetContent.fadeOut(400, () => {
    counter++;
    if (counter === tweets.length) {
      counter = 0;
    }
    tweetContent.text(tweets[counter]).fadeIn();
  });
}, 3000);

// jQuery inView設定
// window.addEventListener
const $serviceList = $('.service-list');
$(window).on('scroll', () => {
  if ($serviceList.hasClass('in-view')) return;

  let isInView = $serviceList.inView('topOnly', 150);
  if (isInView) {
    $serviceList.addClass('in-view');
  }
});

// slickの設定
$('.works-container').slick({
  autoplay: true,
  speed: 800,
  dots: true,
});