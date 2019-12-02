//let words = [{ "word": "owens", "results": [{ "definition": "United States athlete and Black American whose success in the 1936 Olympic Games in Berlin outraged Hitler (1913-1980)", "partOfSpeech": "noun", "synonyms": ["james cleveland owens", "jesse owens"], "instanceOf": ["athlete", "jock"] }], "syllables": { "count": 2, "list": ["ow", "ens"] }, "pronunciation": { "all": "'oʊənz" }, "frequency": 3.33 }, { "word": "fireproof material", "pronunciation": { "all": "'faɪər,pruf_mə'tiriəl" } }, { "word": "ghostlier", "syllables": { "count": 3, "list": ["ghost", "li", "er"] } }, { "word": "shuck spray", "pronunciation": { "all": "ʃək_spreɪ" } }, { "word": "reink", "syllables": { "count": 2, "list": ["re", "ink"] } }, { "word": "walloon sword", "pronunciation": { "all": "wɑ'lun_soʊrd" } }, { "word": "new caledonian pine", "results": [{ "definition": "very tall evergreen of New Caledonia and the New Hebrides similar to norfolk island pine", "partOfSpeech": "noun", "synonyms": ["araucaria columnaris"], "typeOf": ["araucaria"] }] }, { "word": "gracefully", "results": [{ "definition": "in a gracious or graceful manner", "partOfSpeech": "adverb", "synonyms": ["graciously"], "antonyms": ["ungracefully"], "pertainsTo": ["graceful"] }, { "definition": "in a graceful manner", "partOfSpeech": null, "antonyms": ["gracelessly"], "pertainsTo": ["graceful"], "examples": ["she swooped gracefully"] }], "syllables": { "count": 3, "list": ["grace", "ful", "ly"] }, "pronunciation": "'ɡreɪsfʌli", "frequency": 3 }, { "word": "thirdly", "results": [{ "definition": "in the third place", "partOfSpeech": "adverb", "synonyms": ["third"] }], "syllables": { "count": 2, "list": ["third", "ly"] }, "pronunciation": "'θɝrdli", "frequency": 2.85 }, { "word": "bissextile year", "results": [{ "definition": "a calendar year with an extra day added in February", "partOfSpeech": "noun", "synonyms": ["366 days", "intercalary year", "leap year"], "typeOf": ["twelvemonth", "year", "yr"] }], "pronunciation": { "all": "baɪ'sɛkstɪl_jir" } }, { "word": "slangily", "results": [{ "definition": "with slang; in a slangy manner", "partOfSpeech": null, "pertainsTo": ["slangy"], "examples": ["he expresses himself slangily"] }], "syllables": { "count": 3, "list": ["slang", "i", "ly"] } }, { "word": "orthopaedics", "results": [{ "definition": "the branch of medical science concerned with disorders or deformities of the spine and joints", "partOfSpeech": "noun", "synonyms": ["orthopedics"], "hasCategories": ["traction"], "typeOf": ["medical science"], "derivation": ["orthopaedist"] }], "syllables": { "count": 4, "list": ["or", "tho", "pae", "dics"] }, "pronunciation": { "all": ",oʊrθə'pidɪks" }, "frequency": 1.97 }, { "word": "chicken colonel", "pronunciation": { "all": "'ʧɪkən_'kɜrnəl" } }, { "rhymes": { "all": "-æntɪn_livd" }, "word": "plantain-leaved", "pronunciation": {} }, { "word": "affirmably", "syllables": { "count": 4, "list": ["af", "firm", "a", "bly"] } }, { "word": "judgment day", "results": [{ "definition": "(New Testament) day at the end of time following Armageddon when God will decree the fates of all individual humans according to the good and evil of their earthly lives", "partOfSpeech": "noun", "synonyms": ["crack of doom", "day of judgement", "day of judgment", "day of reckoning", "doomsday", "end of the world", "eschaton", "judgement day", "last day", "last judgement", "last judgment"], "inCategory": ["new testament"], "typeOf": ["day"] }], "syllables": { "count": 2, "list": ["judg", "ment day"] }, "pronunciation": { "all": "'dʒədʒmənt_deɪ" } }, { "word": "total hysterectomy", "results": [{ "definition": "surgical removal of the uterus and cervix", "partOfSpeech": "noun", "typeOf": ["hysterectomy"] }] }, { "word": "wylie", "results": [{ "definition": "United States poet (1885-1928)", "partOfSpeech": "noun", "synonyms": ["elinor morton hoyt wylie"], "instanceOf": ["poet"] }], "pronunciation": "'waɪli", "frequency": 2.27 }, { "word": "gogetting", "syllables": { "count": 3, "list": ["go", "get", "ting"] } }, { "word": "nonheritable", "results": [{ "definition": "not inheritable", "partOfSpeech": "adjective", "synonyms": ["noninheritable"], "similarTo": ["acquired", "congenital", "inborn", "innate", "nonhereditary", "nontransmissible", "nurtural"] }], "syllables": { "count": 5, "list": ["non", "her", "it", "a", "ble"] } }]
let words = [];
let text;
let typedText = "";
let cursorBlink = false;
let startTime;
let started = false;
const API_KEY = "153acece76mshf5d8ae199da13d7p145b8ejsnf8b9be3122ee";
const BASE_URL = "https://wordsapiv1.p.mashape.com/words/"
window.onload = async function () {
    let WPMtimer;
    let blinkTimer;//start the cursor blinking
    //text = await createText();
    //render();

    //dictionary(words[0]);
    //console.log("got here lmao");
    document.addEventListener("keydown", function (e) {
        e.preventDefault();//prevents scrolling if the definition is too long
        if (started) {
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
            //console.log(typedText.length + " " + text.length);
            if (typedText.length === text.length - 1) {//if we're finished
                clearInterval(WPMtimer);//stop the timer
                clearInterval(blinkTimer);//stop the cursor blinking
                document.querySelector(".cursor").classList.remove("cursor-blink");
                cursorBlink = false;
                started = false;

                document.querySelector("#start").classList.remove("invisible");//make the start button visible
            }
        }
    });
    document.querySelector("#start").addEventListener("click", async function () {
        document.querySelector("#text").textContent = "Please Wait...";
        document.querySelector("#start").classList.add("invisible");
        text = await createText();//reset the text to something new
        typedText = "";
        render();

        startTime = new Date();
        //console.log("pressed button");
        WPMtimer = setInterval(wordsPerMinute, 1000 / 60);
        blinkTimer = setInterval(blink, 250);
        started = true;
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
        //console.log("blink");
    } else {
        document.querySelector(".cursor").classList.remove("cursor-blink");
        //console.log("blonk");

    }
}
function wordsPerMinute() {//update words per minute
    const currentTime = new Date();
    const diff = currentTime - startTime;//time since start in ms
    const wpm = (typedText.length / (diff / 1000)) * 60 / 5;//5 characters per word
    //console.log(wpm);
    document.querySelector("#score h1").textContent = wpm.toFixed(3) + " WPM";
    return wpm;
}
async function createText() {
    let text = "";
    words = [];
    /*
    for (let i = 0; i < 20; i++) {//create 20 words

        let word = await axios.get(`${BASE_URL}?random=true`, { headers: { "X-Mashape-Key": API_KEY } });
        words.push(word.data);
        text += word.data.word + " ";

    }
    console.log(JSON.stringify(words));
    /*/
    //words = [{ "word": "half-altered", "syllables": { "count": 2, "list": ["half-al", "tered"] } }, { "word": "unapologizing", "syllables": { "count": 6, "list": ["un", "a", "pol", "o", "giz", "ing"] } }, { "rhymes": { "all": "-æzbəri" }, "word": "asbury", "syllables": { "count": 3, "list": ["As", "bur", "y"] }, "pronunciation": "'æz,bɛri", "frequency": 2.36 }, { "rhymes": { "all": "-ɑb" }, "word": "marybob", "pronunciation": {} }, { "rhymes": { "all": "-ɔɡɪʃ" }, "word": "road-hoggish", "pronunciation": {} }, { "word": "stunt pilot", "results": [{ "definition": "a pilot who travels around the country giving exhibits of stunt flying and parachuting", "partOfSpeech": "noun", "synonyms": ["barnstormer", "stunt flier"], "typeOf": ["airplane pilot", "pilot"] }] }, { "word": "plate modulation", "pronunciation": { "all": "pleɪt_,mɑdʒə'leɪʃən" } }, { "word": "john bach mcmaster", "results": [{ "definition": "United States historian who wrote a nine volume history of the people of the United States (1852-1932)", "partOfSpeech": "noun", "synonyms": ["mcmaster"], "instanceOf": ["historian", "historiographer"] }] }, { "word": "aeroelastic", "syllables": { "count": 5, "list": ["aer", "o", "e", "las", "tic"] }, "pronunciation": { "all": ",ɜroʊɪ'læstɪk" }, "frequency": 1.82 }, { "rhymes": { "all": "-ɪsənəbəl" }, "word": "listenable", "pronunciation": {}, "frequency": 1.6 }, { "rhymes": { "all": "-ɛltʃərz" }, "word": "melchers", "pronunciation": {} }, { "rhymes": { "all": "-æm" }, "word": "hierogram", "pronunciation": {} }, { "word": "dextroamphetamine sulfate", "pronunciation": { "all": ",dɛkstroʊæm'fɛtə,min_'səlfeɪt" } }, { "rhymes": { "all": "-aɪnd" }, "word": "basic-lined", "syllables": { "count": 2, "list": ["ba", "sic-lined"] }, "pronunciation": {} }, { "word": "nasolachrymal", "syllables": { "count": 5, "list": ["na", "so", "lach", "ry", "mal"] } }, { "word": "refined", "results": [{ "definition": "suggesting taste, ease, and wealth", "partOfSpeech": "adjective", "synonyms": ["elegant", "graceful"], "similarTo": ["gracious"] }, { "definition": "freed from impurities by processing", "partOfSpeech": "adjective", "synonyms": ["processed"], "antonyms": ["unrefined"], "examples": ["refined sugar", "refined oil", "to gild refined gold"] }, { "definition": "showing a high degree of refinement and the assurance that comes from wide social experience", "partOfSpeech": "adjective", "synonyms": ["polished", "urbane"], "similarTo": ["sophisticated"] }, { "definition": "precise to a fine degree", "partOfSpeech": "adjective", "similarTo": ["precise"], "examples": ["due to the limitations of the available tools, a more refined analysis of the data may be necessary"] }, { "definition": "(used of persons and their behavior) cultivated and genteel", "partOfSpeech": "adjective", "also": ["gracious", "polished", "elegant", "civilised", "fastidious", "civilized"], "similarTo": ["delicate", "effete", "finespun", "genteel", "gentlemanlike", "gentlemanly", "ladylike", "mincing", "niminy-piminy", "overrefined", "patrician", "polite", "prim", "suave", "superfine", "twee", "well-bred", "well-mannered", "civilised", "civilized", "couth", "cultivated", "cultured", "debonair", "debonaire", "debonnaire"], "antonyms": ["unrefined"], "examples": ["she was delicate and refined and unused to hardship", "refined people with refined taste"] }], "syllables": { "count": 2, "list": ["re", "fined"] }, "pronunciation": { "all": "rɪ'faɪnd" }, "frequency": 3.42 }, { "rhymes": { "all": "-ɛtərd" }, "word": "well-lettered", "pronunciation": {} }, { "word": "imputativeness", "syllables": { "count": 5, "list": ["im", "put", "a", "tive", "ness"] } }, { "word": "intercomparing", "syllables": { "count": 5, "list": ["in", "ter", "com", "par", "ing"] } }, { "word": "impassionedness", "syllables": { "count": 4, "list": ["im", "pas", "sioned", "ness"] } }];
    words = [{ "rhymes": { "all": "-ɪli" }, "word": "fire-lily", "pronunciation": {} }, { "word": "unblanketed", "syllables": { "count": 4, "list": ["un", "blan", "ket", "ed"] } }, { "word": "device", "results": [{ "definition": "any clever maneuver", "partOfSpeech": "noun", "synonyms": ["gimmick", "twist"], "typeOf": ["manoeuvre", "maneuver", "tactical maneuver", "tactical manoeuvre"], "hasTypes": ["fast one", "mnemonic", "trick"], "examples": ["he would stoop to any device to win a point"] }, { "definition": "an emblematic design (especially in heraldry)", "partOfSpeech": "noun", "inCategory": ["heraldry"], "typeOf": ["emblem"], "hasTypes": ["union"], "examples": ["he was recognized by the device on his shield"] }, { "definition": "an instrumentality invented for a particular purpose", "partOfSpeech": "noun", "typeOf": ["instrumentation", "instrumentality"], "hasTypes": ["agglomerator", "airfoil", "alarm", "alarm system", "appliance", "applicator", "applier", "aspergill", "aspersorium", "asphyxiator", "autocue", "automatic pilot", "autopilot", "baby's dummy", "bait", "battery charger", "billiard marker", "bird feeder", "birdfeeder", "birth control device", "blower", "bootjack", "breathalyser", "breathalyzer", "breathing apparatus", "breathing device", "breathing machine", "bubbler", "buffer", "button", "catapult", "charger", "clip-on", "comb", "comforter", "conductor", "constraint", "contraceptive", "contraceptive device", "contraption", "contrivance", "control surface", "convenience", "converter", "convertor", "corer", "corrective", "crusher", "cryptograph", "cutoff", "dampener", "damper", "dart thrower", "decoy", "deflector", "dental appliance", "depressor", "detector", "diestock", "doorknocker", "drive", "drop forge", "drop hammer", "drop press", "elastic device", "electrical device", "electronic device", "energiser", "energizer", "exercise device", "explosive device", "extinguisher", "fan", "feeder", "fender", "widget", "adapter", "adaptor", "aerofoil", "afterburner", "throwing stick", "tilter", "tongs", "toy", "trap", "trigger", "valve", "vaporiser", "vaporizer", "ventilator", "washboard", "warmer", "warning device", "water cooler", "acoustic device", "filter", "fire extinguisher", "flare", "foil", "fumigator", "gadget", "gas fixture", "gismo", "gizmo", "goad", "groover", "guard", "heat exchanger", "heater", "holding device", "horn", "hydrofoil", "igniter", "ignition interlock", "ignitor", "imprint", "indicator", "instrument", "interlock", "interrupter", "jig", "key", "keyboard", "kinetoscope", "knocker", "launcher", "lift", "lifting device", "light", "lighter", "lure", "machine", "magnet", "mechanism", "memory device", "moistener", "muffler", "musical instrument", "nest egg", "noisemaker", "optical device", "override", "pacifier", "pair of tongs", "paper feed", "peeler", "pick", "plectron", "plectrum", "power takeoff", "preventative", "preventive", "prod", "prompter", "prophylactic device", "pto", "pull", "rapper", "reflector", "reinforcement", "release", "remote", "remote control", "reset", "restorative", "restraint", "robot pilot", "router", "runner", "safety", "safety device", "scratcher", "sensing element", "sensor", "shoehorn", "shoetree", "shooting stick", "shredder", "signaling device", "slide chart", "snowshoe", "sounder", "source of illumination", "spear thrower", "stabiliser", "stabilizer", "stemmer", "storage device", "straightener", "strengthener", "stylus", "suction cup", "support", "surface", "sweatbox", "synchroflash", "take-up", "teaser", "teething ring", "throwing board"], "examples": ["the device is small enough to wear on your wrist", "a device intended to conserve water"] }, { "definition": "any ornamental pattern or design (as in embroidery)", "partOfSpeech": "noun", "typeOf": ["pattern", "figure", "design"], "hasTypes": ["seal", "stamp"] }, { "definition": "something in an artistic work designed to achieve a particular effect", "partOfSpeech": "noun", "typeOf": ["expressive style", "style"], "hasTypes": ["conceit", "rhetorical device"] }], "syllables": { "count": 2, "list": ["de", "vice"] }, "pronunciation": { "all": "dɪ'vaɪs" }, "frequency": 4.18 }, { "word": "all but", "pronunciation": { "all": "ɔl_bət" } }, { "word": "housebreak", "results": [{ "definition": "train (a pet) to live cleanly in a house", "partOfSpeech": "verb", "synonyms": ["house-train"], "typeOf": ["develop", "educate", "prepare", "train"] }], "syllables": { "count": 2, "list": ["house", "break"] }, "pronunciation": { "all": "'haʊs,breɪk" }, "frequency": 1.9 }, { "word": "hand horn", "pronunciation": { "all": "hænd_hɔrn" } }, { "word": "hands-off", "results": [{ "definition": "not involving participation or intervention", "partOfSpeech": "adjective", "similarTo": ["inactive", "passive"], "examples": ["a hands-off foreign policy"] }], "pronunciation": { "all": "'hændz'ɔf" } }, { "word": "third gear", "results": [{ "definition": "the third from the lowest forward ratio gear in the gear box of a motor vehicle", "partOfSpeech": "noun", "synonyms": ["third"], "typeOf": ["gear", "gear mechanism"], "partOf": ["car", "auto", "motorcar", "machine", "automobile"], "examples": ["you shouldn't try to start in third gear"] }] }, { "rhymes": { "all": "-ɪldər" }, "word": "castle-builder", "pronunciation": {} }, { "word": "ivan the terrible", "results": [{ "definition": "the first czar of Russia (1530-1584)", "partOfSpeech": "noun", "synonyms": ["ivan iv", "ivan iv vasilievich"], "instanceOf": ["czar", "tsar", "tzar"] }] }, { "word": "facing", "results": [{ "definition": "a protective covering that protects the outside of a building", "partOfSpeech": "noun", "synonyms": ["cladding"], "typeOf": ["protection", "protective cover", "protective covering"], "hasTypes": ["revetment", "stone facing", "revetement"], "derivation": ["face"] }, { "definition": "an ornamental coating to a building", "partOfSpeech": "noun", "synonyms": ["veneer"], "typeOf": ["coat", "coating"], "derivation": ["face"] }, { "definition": "providing something with a surface of a different material", "partOfSpeech": "noun", "synonyms": ["lining"], "typeOf": ["covering", "coating", "application"], "hasTypes": ["babbitting"], "derivation": ["face"] }, { "definition": "a lining applied to the edge of a garment for ornamentation or strengthening", "partOfSpeech": "noun", "typeOf": ["liner", "lining"], "partOf": ["turnup", "collar", "cuff", "neckband"], "derivation": ["face"] }], "syllables": { "count": 2, "list": ["fac", "ing"] }, "pronunciation": { "all": "'feɪsɪŋ" }, "frequency": 4.14 }, { "word": "rip", "results": [{ "definition": "a dissolute man in fashionable society", "partOfSpeech": "noun", "synonyms": ["blood", "profligate", "rake", "rakehell", "roue"], "typeOf": ["debauchee", "rounder", "libertine"] }, { "definition": "an opening made forcibly as by pulling apart", "partOfSpeech": "noun", "synonyms": ["rent", "snag", "split", "tear"], "typeOf": ["opening", "gap"], "examples": ["there was a rip in his pants"] }, { "definition": "take without the owner's consent", "partOfSpeech": "verb", "synonyms": ["rip off", "steal"], "typeOf": ["take"], "hasTypes": ["loot", "malversate", "misappropriate", "nobble", "peculate", "pilfer", "pinch", "pirate", "plagiarise", "plagiarize", "pluck", "plunder", "pocket", "purloin", "rob", "roll", "rustle", "shoplift", "snarf", "sneak", "walk off", "abstract", "bag", "burglarise", "burglarize", "burgle", "cabbage", "cop", "defalcate", "embezzle", "filch", "glom", "heist", "hook", "hustle", "knock off", "lift", "snitch", "swipe", "thieve"] }, { "definition": "a stretch of turbulent water in a river or the sea caused by one current flowing into or across another current", "partOfSpeech": "noun", "synonyms": ["countercurrent", "crosscurrent", "riptide", "tide rip"], "typeOf": ["turbulency", "turbulence"] }, { "definition": "the act of rending or ripping or splitting something", "partOfSpeech": "noun", "synonyms": ["rent", "split"], "typeOf": ["tear"], "examples": ["he gave the envelope a vigorous rip"] }, { "definition": "tear or be torn violently", "partOfSpeech": "verb", "synonyms": ["pull", "rend", "rive"], "typeOf": ["rupture", "tear", "snap", "bust"], "examples": ["The curtain ripped from top to bottom", "pull the cooked chicken into strips"] }, { "definition": "criticize or abuse strongly and violently", "partOfSpeech": "verb", "typeOf": ["assault", "lash out", "round", "snipe", "assail", "attack"], "examples": ["The candidate ripped into his opponent mercilessly"] }, { "definition": "cut (wood) along the grain", "partOfSpeech": "verb", "typeOf": ["cut"] }, { "definition": "move precipitously or violently", "partOfSpeech": "verb", "typeOf": ["shoot", "shoot down", "charge", "tear", "buck"], "examples": ["The tornado ripped along the coast"] }], "syllables": { "count": 1, "list": ["rip"] }, "pronunciation": { "all": "rɪp" }, "frequency": 4.31 }, { "word": "tenantable", "syllables": { "count": 4, "list": ["ten", "ant", "a", "ble"] } }, { "word": "handset", "results": [{ "definition": "telephone set with the mouthpiece and earpiece mounted on a single handle", "partOfSpeech": "noun", "synonyms": ["french telephone"], "typeOf": ["phone", "telephone", "telephone set"], "hasParts": ["grip", "hold", "handgrip", "handle"] }], "syllables": { "count": 2, "list": ["hand", "set"] }, "pronunciation": { "all": "'hænd,sɛt" }, "frequency": 2.33 }, { "word": "revend", "syllables": { "count": 2, "list": ["re", "vend"] } }, { "frequency": 2.02, "word": "neutralisation", "results": [{ "definition": "(euphemism) the removal of a threat by killing or destroying it (especially in a covert operation or military operation)", "partOfSpeech": "noun", "synonyms": ["neutralization"], "usageOf": ["euphemism"], "typeOf": ["destruction", "devastation"] }, { "definition": "action intended to nullify the effects of some previous action", "partOfSpeech": "noun", "synonyms": ["counteraction", "neutralization"], "typeOf": ["nullification", "override"], "derivation": ["neutralise"] }, { "definition": "a chemical reaction in which an acid and a base interact with the formation of a salt; with strong acids and bases the essential reaction is the combination of hydrogen ions with hydroxyl ions to form water", "partOfSpeech": "noun", "synonyms": ["neutralisation reaction", "neutralization", "neutralization reaction"], "typeOf": ["chemical reaction", "reaction"], "derivation": ["neutralise"] }, { "definition": "action intended to keep a country politically neutral or exclude it from a possible war", "partOfSpeech": "noun", "synonyms": ["neutralization"], "typeOf": ["nullification", "override"], "derivation": ["neutralise"] }], "syllables": { "count": 5, "list": ["neu", "tral", "i", "sa", "tion"] } }, { "word": "mothiest", "syllables": { "count": 3, "list": ["moth", "i", "est"] } }, { "rhymes": { "all": "-ənd" }, "word": "bundelkhand", "syllables": { "count": 3, "list": ["Bun", "del", "khand"] }, "pronunciation": {} }, { "rhymes": { "all": "-ɛlfəs" }, "word": "polyadelphous", "pronunciation": {} }, { "word": "na-dn", "syllables": { "count": 2, "list": ["na-d", "n"] } }]
    for (let i = 0; i < 20; i++) {
        text += words[i].word + " ";
    }
    //*/
    return text;

}