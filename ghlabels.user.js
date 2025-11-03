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

    const DEFAULT_STYLES = {
        'Public': {
            background: 'linear-gradient(#55c675, #1e883c)',
            color: 'white',
            border: '2px solid #1e883c',
        },
        'Public template': {
            background: 'linear-gradient(#74adf0, #0969da)',
            color: 'white',
            border: '2px solid #0969da',
        },
        'Private': {
            background: 'linear-gradient(#C468F9 , #8F2EC6)',
            color: 'white',
            border: '2px solid #8F2EC6',
        },
        'Public archive': {
            background: 'linear-gradient(#eaac32, #9a6700)',
            color: 'white',
            border: '2px solid #9a6700',
        }
    }

    function applyStyles() {
        document.querySelectorAll('span.Label.Label--secondary, span.Label.Label--attention').forEach(l => {
            if (DEFAULT_STYLES[l.innerText]) Object.assign(l.style, DEFAULT_STYLES[l.innerText]);
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