// ==UserScript==
// @name         Colored Repository Visibility Labels
// @version      1.0.0
// @description  Colors the Private and Public labels on GitHub repositories to be more visible
// @author       brewffee
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function applyStyles() {
        // Private, Public, and Public template labels
        document.querySelectorAll('span.Label.Label--secondary').forEach(l => {
            switch (l.innerText) {
                case "Public":
                    l.style.background = 'linear-gradient(#55c675, #1e883c)';
                    l.style.color = "white";
                    l.style.border = "2px solid #1e883c";
                    break;
                case "Public template":
                    l.style.background = "linear-gradient(#74adf0, #0969da)";
                    l.style.color = "white";
                    l.style.border = "2px solid #0969da";
                    break;
                case "Private":
                    l.style.background = "linear-gradient(#C468F9 , #8F2EC6)";
                    l.style.color = "white";
                    l.style.border = "2px solid #8F2EC6";
                    break;
            }
        });

        // Public archive
        // This one is already visible enough on its own, but it's nice to match :3
        document.querySelectorAll('span.Label.Label--attention').forEach(l => {
            switch (l.innerText) {
                case "Public archive":
                    l.style.background = "linear-gradient(#eaac32, #9a6700)";
                    l.style.color = "white";
                    l.style.border = "2px solid #9a6700";
                    break;
            }
        });
    }

    // Call on page load
    applyStyles();

    // Call on page mutate
    const theLooker = new MutationObserver((muts) => {
        muts.forEach(m => {
            if (m.type === 'childList') applyStyles();
        });
    });
    theLooker.observe(document, { childList: true, subtree: true });
})();