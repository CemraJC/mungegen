var cache_name = "munge_gen_cache_4657"


document.addEventListener("DOMContentLoaded", function(){

    var out = document.querySelector('header');
    var word_list = document.querySelector('aside');
    var generate = document.querySelector('[role=generate]');
    var theme = document.querySelector('[role=theme]');
    var length_seed = document.querySelector('input');

    var generated_words = [];
    setInitialTheme();


    theme.addEventListener('click', function() {
        toggleTheme();
    });

    generate.addEventListener('click', function() {
        var syllable_quantity = Math.min(Math.max(Math.round(Math.random() * length_seed.value), 2), 10);
        var word = wordGen(syllable_quantity);


        out.innerHTML = word;
        generated_words.unshift("<p>" + word + "</p>");

        word_list.innerHTML = generated_words.join("\n");
    });

    function toggleTheme() {
        if (getLocalStore('theme') == "Dark") {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    function setInitialTheme() {
        if (getLocalStore('theme') == "Dark") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    function setLightTheme() {
        document.body.removeAttribute('class');
        theme.innerHTML = 'Dark Theme';
        setLocalStore('theme', 'Light');
    }

    function setDarkTheme() {
        document.body.setAttribute('class', 'dark');
        theme.innerHTML = 'Light Theme';
        setLocalStore('theme', 'Dark');
    }
});


function setLocalStore(key, value){
    window.localStorage.setItem(cache_name + key, value);
}

function getLocalStore(key){
    return window.localStorage.getItem(cache_name + key);
}

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
