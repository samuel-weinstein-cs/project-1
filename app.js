//let words = [{ "word": "owens", "results": [{ "definition": "United States athlete and Black American whose success in the 1936 Olympic Games in Berlin outraged Hitler (1913-1980)", "partOfSpeech": "noun", "synonyms": ["james cleveland owens", "jesse owens"], "instanceOf": ["athlete", "jock"] }], "syllables": { "count": 2, "list": ["ow", "ens"] }, "pronunciation": { "all": "'oʊənz" }, "frequency": 3.33 }, { "word": "fireproof material", "pronunciation": { "all": "'faɪər,pruf_mə'tiriəl" } }, { "word": "ghostlier", "syllables": { "count": 3, "list": ["ghost", "li", "er"] } }, { "word": "shuck spray", "pronunciation": { "all": "ʃək_spreɪ" } }, { "word": "reink", "syllables": { "count": 2, "list": ["re", "ink"] } }, { "word": "walloon sword", "pronunciation": { "all": "wɑ'lun_soʊrd" } }, { "word": "new caledonian pine", "results": [{ "definition": "very tall evergreen of New Caledonia and the New Hebrides similar to norfolk island pine", "partOfSpeech": "noun", "synonyms": ["araucaria columnaris"], "typeOf": ["araucaria"] }] }, { "word": "gracefully", "results": [{ "definition": "in a gracious or graceful manner", "partOfSpeech": "adverb", "synonyms": ["graciously"], "antonyms": ["ungracefully"], "pertainsTo": ["graceful"] }, { "definition": "in a graceful manner", "partOfSpeech": null, "antonyms": ["gracelessly"], "pertainsTo": ["graceful"], "examples": ["she swooped gracefully"] }], "syllables": { "count": 3, "list": ["grace", "ful", "ly"] }, "pronunciation": "'ɡreɪsfʌli", "frequency": 3 }, { "word": "thirdly", "results": [{ "definition": "in the third place", "partOfSpeech": "adverb", "synonyms": ["third"] }], "syllables": { "count": 2, "list": ["third", "ly"] }, "pronunciation": "'θɝrdli", "frequency": 2.85 }, { "word": "bissextile year", "results": [{ "definition": "a calendar year with an extra day added in February", "partOfSpeech": "noun", "synonyms": ["366 days", "intercalary year", "leap year"], "typeOf": ["twelvemonth", "year", "yr"] }], "pronunciation": { "all": "baɪ'sɛkstɪl_jir" } }, { "word": "slangily", "results": [{ "definition": "with slang; in a slangy manner", "partOfSpeech": null, "pertainsTo": ["slangy"], "examples": ["he expresses himself slangily"] }], "syllables": { "count": 3, "list": ["slang", "i", "ly"] } }, { "word": "orthopaedics", "results": [{ "definition": "the branch of medical science concerned with disorders or deformities of the spine and joints", "partOfSpeech": "noun", "synonyms": ["orthopedics"], "hasCategories": ["traction"], "typeOf": ["medical science"], "derivation": ["orthopaedist"] }], "syllables": { "count": 4, "list": ["or", "tho", "pae", "dics"] }, "pronunciation": { "all": ",oʊrθə'pidɪks" }, "frequency": 1.97 }, { "word": "chicken colonel", "pronunciation": { "all": "'ʧɪkən_'kɜrnəl" } }, { "rhymes": { "all": "-æntɪn_livd" }, "word": "plantain-leaved", "pronunciation": {} }, { "word": "affirmably", "syllables": { "count": 4, "list": ["af", "firm", "a", "bly"] } }, { "word": "judgment day", "results": [{ "definition": "(New Testament) day at the end of time following Armageddon when God will decree the fates of all individual humans according to the good and evil of their earthly lives", "partOfSpeech": "noun", "synonyms": ["crack of doom", "day of judgement", "day of judgment", "day of reckoning", "doomsday", "end of the world", "eschaton", "judgement day", "last day", "last judgement", "last judgment"], "inCategory": ["new testament"], "typeOf": ["day"] }], "syllables": { "count": 2, "list": ["judg", "ment day"] }, "pronunciation": { "all": "'dʒədʒmənt_deɪ" } }, { "word": "total hysterectomy", "results": [{ "definition": "surgical removal of the uterus and cervix", "partOfSpeech": "noun", "typeOf": ["hysterectomy"] }] }, { "word": "wylie", "results": [{ "definition": "United States poet (1885-1928)", "partOfSpeech": "noun", "synonyms": ["elinor morton hoyt wylie"], "instanceOf": ["poet"] }], "pronunciation": "'waɪli", "frequency": 2.27 }, { "word": "gogetting", "syllables": { "count": 3, "list": ["go", "get", "ting"] } }, { "word": "nonheritable", "results": [{ "definition": "not inheritable", "partOfSpeech": "adjective", "synonyms": ["noninheritable"], "similarTo": ["acquired", "congenital", "inborn", "innate", "nonhereditary", "nontransmissible", "nurtural"] }], "syllables": { "count": 5, "list": ["non", "her", "it", "a", "ble"] } }]
let words = [];
let text = "";
let typedText = "";
let cursorBlink = false;
let startTime;
const API_KEY = "153acece76mshf5d8ae199da13d7p145b8ejsnf8b9be3122ee";
const BASE_URL = "https://wordsapiv1.p.mashape.com/words/"
window.onload = async function () {
    let WPM_timer;
    setInterval(blink, 250);//start the cursor blinking
    text = await createText();
    render();

    //dictionary(words[0]);
    //console.log("got here lmao");
    document.addEventListener("keydown", function (e) {
        e.preventDefault();//prevents scrolling if the definition is too long

        let wordIndex = -1;//current word we are on
        let textLength = typedText.length + 2;//length of the currently typed text in characters
        do {
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = words.length - 1;
            }
            textLength -= words[wordIndex].word.length + 1;
        } while (textLength > 0);

        dictionary(words[wordIndex]);

        if (e.key.length === 1) {//if the key pressed is a single character
            //write to the text
            typedText += e.key;


        } else if (e.key === "Backspace") {
            typedText = typedText.slice(0, -1);//remove the last letter
        }
        // console.log(typedText);
        render();//place the text in the 
        console.log(typedText.length + " " + text.length);
        if (typedText.length === text.length) {
            console.log("i guess we're done? theres prob. some edge cases");
        }
    });
    document.querySelector("#start").addEventListener("click", function () {
        startTime = new Date();
        //console.log("pressed button");
        document.querySelector("#start").classList.add("invisible");
        WPM_timer = setInterval(wordsPerMinute, 1000 / 60);
    })



}
function render() {
    const textDiv = document.querySelector("#text");
    textDiv.innerHTML = "";
    // typed.classList.add = "typed";
    // error.classList.add = "error";
    // untyped.classList.add = "untyped";

    for (let i = 0; i < text.length; i++) {
        const element = document.createElement("span");
        if (i === typedText.length) {
            element.classList.add("cursor");
            if (cursorBlink) {
                element.classList.add("cursor-blink");
            }
        }
        if (typedText[i] === text[i]) {
            element.textContent = text[i];
            element.classList.add("typed");
        } else if (typedText[i]) {
            element.textContent = typedText[i];//must be typedText to show the incorrect text
            element.classList.add("error");
        } else {
            element.textContent = text[i];
            element.classList.add("untyped");
        }
        textDiv.appendChild(element);
    }
    //console.log(typed.innerHTML);
}
function dictionary(word) {
    //console.log(word);
    const dictionary = document.querySelector("#dictionary");
    const syllables = document.createElement("span");
    const pronunciation = document.createElement("span");
    dictionary.innerHTML = "";//clear the div
    syllables.id = "syllables";
    pronunciation.id = "pronunciation";
    if (word.syllables) {
        for (let i = 0; i < word.syllables.count; i++) {
            syllables.textContent += word.syllables.list[i];
            if (word.syllables.count - 1 !== i) {
                syllables.textContent += "·";
            }
        }
    } else {
        syllables.textContent = word.word;
    }
    if (word.pronunciation && word.pronunciation.all) {
        pronunciation.textContent = `/${word.pronunciation.all}/`;
    }
    dictionary.appendChild(syllables);
    dictionary.innerHTML += " ";//add a space
    dictionary.appendChild(pronunciation);
    dictionary.innerHTML += " ";//add a space
    let currentPOS;//part of speech as we loop thru all the definitions
    let results = word.results;
    let definitionIndex = 1;
    if (results) {
        for (let i = 0; i < results.length; i++) {
            if (results[i].partOfSpeech !== currentPOS) {

                currentPOS = results[i].partOfSpeech;
                //console.log(currentPOS);
                if (currentPOS) {
                    definitionIndex = 1;
                    const partOfSpeech = document.createElement("span");
                    partOfSpeech.classList.add("part-of-speech");
                    partOfSpeech.textContent = currentPOS + ".";
                    dictionary.appendChild(partOfSpeech);
                    dictionary.innerHTML += " ";
                }
            }
            const defNum = document.createElement("span");
            const definition = document.createElement("span");
            defNum.classList.add("definition-number");
            definition.classList.add("definition");
            defNum.textContent = `${definitionIndex}. `
            definition.textContent = `${results[i].definition}. `;
            dictionary.appendChild(defNum);
            dictionary.appendChild(definition);
            definitionIndex++;
        }
    }
}
function blink() {//blink cursor
    cursorBlink = !cursorBlink;
    if (cursorBlink) {
        document.querySelector(".cursor").classList.add("cursor-blink");
    } else {
        document.querySelector(".cursor").classList.remove("cursor-blink");
    }
}
function wordsPerMinute() {//update words per minute
    const currentTime = new Date();
    const diff = currentTime - startTime;//time since start in ms
    const wpm = (typedText.length / (diff / 1000)) * 60 / 5;//5 characters per word
    //console.log(wpm);
    document.querySelector("#score h1").textContent = wpm.toFixed(3) + " WPM";
}
async function createText() {
    let text = "";
    /*
    for (let i = 0; i < 20; i++) {//create 20 words

        let word = await axios.get(`${BASE_URL}?random=true`, { headers: { "X-Mashape-Key": API_KEY } });
        words.push(word.data);
        text += word.data.word + " ";

    }
    //console.log(JSON.stringify(words));
    /*/
    words = [{ "word": "half-altered", "syllables": { "count": 2, "list": ["half-al", "tered"] } }, { "word": "unapologizing", "syllables": { "count": 6, "list": ["un", "a", "pol", "o", "giz", "ing"] } }, { "rhymes": { "all": "-æzbəri" }, "word": "asbury", "syllables": { "count": 3, "list": ["As", "bur", "y"] }, "pronunciation": "'æz,bɛri", "frequency": 2.36 }, { "rhymes": { "all": "-ɑb" }, "word": "marybob", "pronunciation": {} }, { "rhymes": { "all": "-ɔɡɪʃ" }, "word": "road-hoggish", "pronunciation": {} }, { "word": "stunt pilot", "results": [{ "definition": "a pilot who travels around the country giving exhibits of stunt flying and parachuting", "partOfSpeech": "noun", "synonyms": ["barnstormer", "stunt flier"], "typeOf": ["airplane pilot", "pilot"] }] }, { "word": "plate modulation", "pronunciation": { "all": "pleɪt_,mɑdʒə'leɪʃən" } }, { "word": "john bach mcmaster", "results": [{ "definition": "United States historian who wrote a nine volume history of the people of the United States (1852-1932)", "partOfSpeech": "noun", "synonyms": ["mcmaster"], "instanceOf": ["historian", "historiographer"] }] }, { "word": "aeroelastic", "syllables": { "count": 5, "list": ["aer", "o", "e", "las", "tic"] }, "pronunciation": { "all": ",ɜroʊɪ'læstɪk" }, "frequency": 1.82 }, { "rhymes": { "all": "-ɪsənəbəl" }, "word": "listenable", "pronunciation": {}, "frequency": 1.6 }, { "rhymes": { "all": "-ɛltʃərz" }, "word": "melchers", "pronunciation": {} }, { "rhymes": { "all": "-æm" }, "word": "hierogram", "pronunciation": {} }, { "word": "dextroamphetamine sulfate", "pronunciation": { "all": ",dɛkstroʊæm'fɛtə,min_'səlfeɪt" } }, { "rhymes": { "all": "-aɪnd" }, "word": "basic-lined", "syllables": { "count": 2, "list": ["ba", "sic-lined"] }, "pronunciation": {} }, { "word": "nasolachrymal", "syllables": { "count": 5, "list": ["na", "so", "lach", "ry", "mal"] } }, { "word": "refined", "results": [{ "definition": "suggesting taste, ease, and wealth", "partOfSpeech": "adjective", "synonyms": ["elegant", "graceful"], "similarTo": ["gracious"] }, { "definition": "freed from impurities by processing", "partOfSpeech": "adjective", "synonyms": ["processed"], "antonyms": ["unrefined"], "examples": ["refined sugar", "refined oil", "to gild refined gold"] }, { "definition": "showing a high degree of refinement and the assurance that comes from wide social experience", "partOfSpeech": "adjective", "synonyms": ["polished", "urbane"], "similarTo": ["sophisticated"] }, { "definition": "precise to a fine degree", "partOfSpeech": "adjective", "similarTo": ["precise"], "examples": ["due to the limitations of the available tools, a more refined analysis of the data may be necessary"] }, { "definition": "(used of persons and their behavior) cultivated and genteel", "partOfSpeech": "adjective", "also": ["gracious", "polished", "elegant", "civilised", "fastidious", "civilized"], "similarTo": ["delicate", "effete", "finespun", "genteel", "gentlemanlike", "gentlemanly", "ladylike", "mincing", "niminy-piminy", "overrefined", "patrician", "polite", "prim", "suave", "superfine", "twee", "well-bred", "well-mannered", "civilised", "civilized", "couth", "cultivated", "cultured", "debonair", "debonaire", "debonnaire"], "antonyms": ["unrefined"], "examples": ["she was delicate and refined and unused to hardship", "refined people with refined taste"] }], "syllables": { "count": 2, "list": ["re", "fined"] }, "pronunciation": { "all": "rɪ'faɪnd" }, "frequency": 3.42 }, { "rhymes": { "all": "-ɛtərd" }, "word": "well-lettered", "pronunciation": {} }, { "word": "imputativeness", "syllables": { "count": 5, "list": ["im", "put", "a", "tive", "ness"] } }, { "word": "intercomparing", "syllables": { "count": 5, "list": ["in", "ter", "com", "par", "ing"] } }, { "word": "impassionedness", "syllables": { "count": 4, "list": ["im", "pas", "sioned", "ness"] } }];
    for (let i = 0; i < 20; i++) {
        text += words[i].word + " ";
    }
    //*/
    return text;

}