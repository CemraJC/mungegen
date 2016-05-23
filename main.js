document.addEventListener("DOMContentLoaded", function(){

    var out = document.querySelector('header');
    var word_list = document.querySelector('aside');
    var generate = document.querySelector('[role=generate]');
    var theme = document.querySelector('[role=theme]');
    var length_seed = document.querySelector('input');

    var generated_words = [];


    theme.addEventListener('click', function(){
        var msg = theme.innerHTML;
        if (msg == "Dark Theme") {
            setDarkTheme();
            theme.innerHTML = 'Light Theme';
            theme.style.background = "#E1E1E1";
            theme.style.color = "#222";
        } else {
            theme.innerHTML = 'Dark Theme'
            theme.style.background = "#1E1E1E";
            theme.style.color = "#E1E1E1";
        };
    });

    generate.addEventListener('click', function(){
        var syllable_quantity = Math.min(Math.max(Math.round(Math.random() * length_seed.value), 2), 10);
        var word = wordGen(syllable_quantity);


        out.innerHTML = word;
        generated_words.unshift("<p>" + word + "</p>");

        word_list.innerHTML = generated_words.join("\n");
    });


    function setDarkTheme(){
        document.body.style.background = "#1a1a1a";
        document.body.style.color = "#eee";
        word_list.style.color = "#eee !important";
        out.style.color = "#eee";
        generate.style.boxShadow = "none";
        theme.style.boxShadow = "none";
    }

});

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
