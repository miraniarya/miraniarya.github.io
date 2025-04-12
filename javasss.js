// Function to initialize Google Map
function initMap() {
    const location = { lat: 22.36213950808471, lng: 73.13267465413875 }; // Baroda birthplace
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Function to capture all click events and page views
(function () {
    function logEvent(eventType, event) {
        const timestamp = new Date().toLocaleString();
        let eventObject;
        if (event.target.tagName.toLowerCase() === 'img') {
            eventObject = 'image';
        } else if (event.target.tagName.toLowerCase() === 'select') {
            eventObject = 'drop-down';
        } else if (event.target.tagName.toLowerCase() === 'input' && event.target.type === 'text') {
            eventObject = 'text';
        } else {
            eventObject = event.target.tagName.toLowerCase();
        }
        console.log(`${timestamp}, ${eventType}, ${eventObject}`);
    }
    document.addEventListener('click', (event) => {
        logEvent('click', event);
    });
    window.addEventListener('load', (event) => {
        logEvent('view', event);
    });
})();

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function analyzeText() {
    let text = document.getElementById("inputText").value;
    let letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    let wordCount = (text.match(/\b\w+\b/g) || []).length;
    let spaceCount = (text.match(/ /g) || []).length;
    let newlineCount = (text.match(/\n/g) || []).length;
    let specialCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    document.getElementById("letterCount").innerText = letterCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("spaceCount").innerText = spaceCount;
    document.getElementById("newlineCount").innerText = newlineCount;
    document.getElementById("specialCount").innerText = specialCount;

    let pronouns = [
        "he", "she", "it", "they", "we", "you", "I", "him", "her", "us", "them",
        "his", "hers", "its", "theirs", "ours", "yours", "my", "mine", "your",
        "yours", "our", "ours", "their", "theirs", "me", "myself", "yourself",
        "himself", "herself", "itself", "ourselves", "yourselves", "themselves"
    ];
    let prepositions = [
        "in", "on", "at", "by", "with", "about", "against", "between", "into", "through",
        "during", "before", "after", "above", "below", "to", "from", "up", "down", "over",
        "under", "again", "further", "then", "once", "here", "there", "when", "where",
        "why", "how", "all", "any", "both", "each", "few", "more", "most", "other",
        "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than",
        "too", "very", "can", "will", "just", "until", "while", "of", "off", "near",
        "inside", "outside", "onto", "opposite", "past", "per", "plus", "round",
        "since", "than", "throughout", "toward", "towards", "underneath", "unlike",
        "upon", "via", "within", "without"
    ];
    let articles = ["a", "an"];

    function countOccurrences(wordList) {
        let counts = {};
        let words = text.toLowerCase().split(/\W+/);
        wordList.forEach(word => {
            let count = words.filter(w => w === word).length;
            if (count > 0) counts[word] = count;
        });
        return counts;
    }

    document.getElementById("pronounsCount").innerText = JSON.stringify(countOccurrences(pronouns), null, 2);
    document.getElementById("prepositionsCount").innerText = JSON.stringify(countOccurrences(prepositions), null, 2);
    document.getElementById("articlesCount").innerText = JSON.stringify(countOccurrences(articles), null, 2);
}
