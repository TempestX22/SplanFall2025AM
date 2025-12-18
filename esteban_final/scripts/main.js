document.addEventListener('DOMContentLoaded', function () {
  initQuotes();
  initCards();
});

function initQuotes() {
  if (typeof $ === 'undefined') return;
  const quotes = [
    '"One thing I\'m a little worried about today, is that the current generation of young game creators has grown up on video games themselves, and I don\'t know if they\'ve had time or room to absorb the influence of other arts and mediums" — Hideo Kojima',
    '"I used to be an adventurer like you. Then I took an arrow in the knee..." — Skyrim',
    '"It’s dangerous to go alone! Take this." — The Legend of Zelda',
    '"It may sound strange, but it\'s quite common for the tutorial to be the last thing to be integrated. It\'s much easier to design it once you know what needs to be communicated, and found the best to explain it to the player. " — Hidetaka Miyazaki',
    '"Are you a boy or a girl?" — Pokemon Red/Blue',
  ];
  let i = 0;
  const el = document.getElementById('quote');
  if (!el) return;
  el.addEventListener('click', function () {
    i = (i + 1) % quotes.length;
    // use jQuery fade if available
    if (typeof $ !== 'undefined') {
      $(el).fadeOut(120, function () {
        el.textContent = quotes[i];
        $(el).fadeIn(120);
      });
    } else {
      el.textContent = quotes[i];
    }
  });
}

function initCards() {
  if (typeof $ === 'undefined') return;
  $(document).on('click', '.card', function () {
    $(this).toggleClass('open');
  });
}
