/* MagicMirror² Module: MMM-DailyBibleVerse
 * Displays a daily Bible verse
 */
Module.register("MMM-DailyBibleVerse", {
    defaults: {
        updateInterval: 24 * 60 * 60 * 1000, // 24 hours
        apiUrl: "https://labs.bible.org/api/?passage=random&type=json"
    },

    start: function() {
        this.verse = null;
        this.getVerse();
        this.scheduleUpdate();
    },

    getStyles: function() {
        return ["MMM-DailyBibleVerse.css"];
    },

    getVerse: function() {
        var self = this;
        var url = this.config.apiUrl;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                if (response && response.length > 0) {
                    self.verse = response[0];
                    self.updateDom();
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    },

    scheduleUpdate: function() {
        var self = this;
        setInterval(function() {
            self.getVerse();
        }, this.config.updateInterval);
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        if (!this.verse) {
            wrapper.innerHTML = "Loading verse...";
            return wrapper;
        }
        var verseText = document.createElement("div");
        verseText.className = "verse-text";
        verseText.innerHTML = `"${this.verse.text}"`;
        var verseRef = document.createElement("div");
        verseRef.className = "verse-ref";
        verseRef.innerHTML = `- ${this.verse.bookname} ${this.verse.chapter}:${this.verse.verse}`;
        wrapper.appendChild(verseText);
        wrapper.appendChild(verseRef);
        return wrapper;
    }
});
