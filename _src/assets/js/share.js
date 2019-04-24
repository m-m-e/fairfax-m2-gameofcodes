'use strict';

const twitterLinkBtn = document.querySelector('.share__btn--twitter');
const twitterLink = 'https://twitter.com/intent/tweet';
const hashtags = 'AdalabDigital,adalabers,GameOfCodes';
const text = 'Check%20out%20my%20new%20online%20business%20card%20from%20Awesome%20Profile%20Cards!%20';

function createTweet(url) {
  const tweet = `${twitterLink}?text=${text};hashtags=${hashtags}%20${url}`;
  twitterLinkBtn.href = tweet;
  console.log(twitterLinkBtn.href);
}
