document.addEventListener("DOMContentLoaded", function(){

    var out = document.querySelector('header');
    var button = document.querySelector('button');
    var lengthSeed = document.querySelector('input');

    var soundList = [
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
        out.innerHTML = wordGen();
    })



    function wordGen() {
        var len = soundList.length - 1;
        var wordLen = Math.min(Math.max(lengthSeed.value, 1), 10);
        var result = "";

        for (var i = 0; i < wordLen; i++) {
            var rand = Math.round(Math.random() * len);
            result += soundList[rand];
        };

        return titleCase(result);
    }

    function titleCase(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

});