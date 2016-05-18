document.addEventListener("DOMContentLoaded", function(){

    var out = document.querySelector('header');
    var word_list = document.querySelector('aside');
    var button = document.querySelector('button');
    var length_seed = document.querySelector('input');

    var generated_words = [];
    var sound_list = [
        "mung",
        "bung",
        "wagga",
        "mug",
        "ah",
        "bing",
        "moo",
        "wul",
        "ngah",
        "jng",
        "dirp",
        "oo",
        "gum",
        "ham",
        "cung",
        "ber",
        "bla",
        "bng",
        "gngij",
        "wig",
        "wng",
        "ng",
        "iwg",
        "jwig",
        "gmi",
        "jnigi",
        "ikl",
        "imn",
        "igj",
        "yu",
        "yim",
        "yur",
        "ah",
        "yji",
        "ylu",
        "yert",
        "ygim"
    ];


    button.addEventListener('click', function(){
        var syllable_quantity = Math.min(Math.max(Math.round(Math.random() * length_seed.value), 2), 10);
        var word = wordGen(syllable_quantity);


        out.innerHTML = word;
        generated_words.unshift("<p>" + word + "</p>");

        word_list.innerHTML = generated_words.join("\n");
    })


    function wordGen(len) {
        var array_len = sound_list.length - 1;
        var result = "";

        for (var i = 0; i < len; i++) {
            var rand = Math.round(Math.random() * array_len);
            result += sound_list[rand];
        };

        return titleCase(result);
    }

    function titleCase(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

});