function rus_to_latin(str) {
  var ru = {
      а: 'a',
      б: 'b',
      в: 'v',
      г: 'g',
      д: 'd',
      е: 'e',
      ё: 'e',
      ж: 'j',
      з: 'z',
      и: 'i',
      к: 'k',
      л: 'l',
      м: 'm',
      н: 'n',
      о: 'o',
      п: 'p',
      р: 'r',
      с: 's',
      т: 't',
      у: 'u',
      ф: 'f',
      х: 'h',
      ц: 'c',
      ч: 'ch',
      ш: 'sh',
      щ: 'shch',
      ы: 'y',
      э: 'e',
      ю: 'u',
      я: 'ya',
      ь: '',
      ъ: '',
      й: 'i',
      ',': '',
    },
    n_str = [];

  for (var i = 0; i < str.length; ++i) {
    n_str.push(
      ru[str[i]] ||
        (ru[str[i].toLowerCase()] == undefined && str[i]) ||
        ru[str[i].toLowerCase()].replace(/^(.)/, function (match) {
          return match.toLowerCase();
        })
    );
  }

  return n_str.join('').replace(/ /g, '-');
}

export default rus_to_latin;
