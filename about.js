let eng_radio = document.getElementById('eng_radio');
let gr_radio = document.getElementById('gr_radio');
let get_paragraph = document.querySelector(".paragraph");

// These 2 consts hold the values of values for Greek and Englush language.
const about_gr = "Ο Χρήστος Δούρης (AKA The_Runner_01) είναι ένα δημιοργικό μυαλό που " +
                    "συνδυάζει τέχνη και τεχνολογία. Δημιουργεί full stack εφαρμογές με " + 
                    "το Neovim και καλλιτεχνικές εφαρμογές με το Processing. Είναι ενθουσιώδης " +
                    "με τις Machine Learning και τις low level τεχνολογίες. Δημιουργεί " +
                    "βιντεοπαιχνίδια και εμπειρίες χρησημοποιώντας Blender 3D, Propcreate, " +
                    "Logic Pro και Davinci Resolve. Από το 2019 έχει ένα Bachelor of arts " +
                    "στην μουσική τεχνολογία και την παραγωγή. Ανυπομονεί να μάθει " +
                    "καινούργιες τεχνολογίες και να δημιουργήσει εφαρμογές που έχουν " +
                    "ενδιαφέρον. Αυτόν τον καιρό διαμένει στην Αθήνα, Ελλάδα."

const about_eng = "Christos Douris (AKA The_Runner_01) is a creator who blends art and " +
                   "technology. He creates full stack web applications with Neovim, and art " +
                   "applications with Processing. He is a machine learning and low level " +
                    "technologies enthusiast. He also creates experiences and games using " + 
                    "Blender 3D, Procreate, Logic Pro, and Davinci Resolve. Since 2019 he's " + 
                    "holding a Bachelor of arts in music technology and production. Now " +
                    "he looks forward to learning new technologies and create interesting " +
                    "applications. Currently, he lives in Athens, Greece."

// When the window loads check which radio button is pressed
// this is useful when the user somehow refreshes the page.
window.addEventListener("load", () => {
    //console.log(about_gr);
    //console.log(about_eng);
    if (eng_radio.checked) {
        get_paragraph.innerText = about_eng;
    }
    else{
        get_paragraph.innerText = about_gr;
    }
});

// Using the "input" event is the way to go for radio buttons
// Source https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// Source: https://stackoverflow.com/questions/3761096/event-for-radio-button-being-selected

// When the english language button is pressed
eng_radio.addEventListener("input", () => {
    get_paragraph.innerText = about_eng;
});

// When the greek language button is pressed
gr_radio.addEventListener("input", () => {
    get_paragraph.innerText = about_gr;
});
