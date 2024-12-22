// ==UserScript==
// @name         Force Google Verbatim (iOS)
// @description  Forces verbatim search mode on Google
// @match        *://www.google.com/*
// @match        *://google.com/*
// @match        *://www.google.co.uk/*
// @match        *://www.google.ca/*
// @match        *://www.google.com.au/*
// @inject-into  content
// ==/UserScript==

function forceVerbatim() {
    // Only run on search pages
    if (!window.location.pathname.includes('/search')) {
        return;
    }

    // Get current URL
    const url = new URL(window.location.href);
    
    // Check if verbatim isn't already enabled
    if (url.searchParams.get('tbs') !== 'li:1') {
        // Add verbatim parameter
        url.searchParams.set('tbs', 'li:1');
        
        // Navigate to new URL
        window.location.href = url.toString();
    }
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceVerbatim);
} else {
    forceVerbatim();
}
