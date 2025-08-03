// FOMUS Language Switcher Module
// This module provides language switching functionality for all FOMUS pages

(function() {
    'use strict';
    
    // Language configuration
    const languages = {
        ja: { name: '日本語', flag: '🇯🇵', dir: 'ltr' },
        en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
        zh: { name: '中文', flag: '🇨🇳', dir: 'ltr' },
        fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
        ar: { name: 'العربية', flag: '🇦🇪', dir: 'rtl' }
    };
    
    // Get current page info
    function getCurrentPageInfo() {
        const path = window.location.pathname;
        const filename = path.substring(path.lastIndexOf('/') + 1);
        
        // Extract base name and language from filename
        const match = filename.match(/^(.+?)(?:-(ja|en|zh|fr|ar))?\.html$/);
        if (!match) return null;
        
        const baseName = match[1];
        const currentLang = match[2] || 'en'; // Default to English if no language specified
        
        return { baseName, currentLang, filename };
    }
    
    // Generate language switcher HTML
    function generateLanguageSwitcher() {
        const pageInfo = getCurrentPageInfo();
        if (!pageInfo) return '';
        
        const { baseName, currentLang } = pageInfo;
        
        // Build language options HTML
        let optionsHTML = '';
        for (const [langCode, langInfo] of Object.entries(languages)) {
            const isSelected = langCode === currentLang ? 'selected' : '';
            optionsHTML += `<option value="${langCode}" ${isSelected}>${langInfo.flag} ${langInfo.name}</option>`;
        }
        
        return `
            <div class="language-switcher-container" style="position: relative; display: inline-block;">
                <select id="language-switcher" class="language-switcher" style="
                    background-color: transparent;
                    border: 1px solid rgba(199, 162, 83, 0.3);
                    color: #c7a253;
                    padding: 8px 32px 8px 12px;
                    font-size: 14px;
                    cursor: pointer;
                    border-radius: 8px;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    transition: all 0.3s ease;
                    min-width: 150px;
                " onmouseover="this.style.borderColor='rgba(199, 162, 83, 0.6)'" onmouseout="this.style.borderColor='rgba(199, 162, 83, 0.3)'">
                    ${optionsHTML}
                </select>
                <div style="
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: #c7a253;
                    font-size: 12px;
                ">▼</div>
            </div>
        `;
    }
    
    // Switch language function
    function switchLanguage(newLang) {
        const pageInfo = getCurrentPageInfo();
        if (!pageInfo) return;
        
        const { baseName, currentLang } = pageInfo;
        
        // Don't switch if already on the selected language
        if (newLang === currentLang) return;
        
        // Save language preference
        localStorage.setItem('preferredLanguage', newLang);
        
        // Build new URL
        let newFilename;
        
        // Special handling for specific pages
        if (baseName === 'index' && newLang === 'en') {
            // index-en.html
            newFilename = 'index-en.html';
        } else if (baseName === 'language-selector' || baseName === '404') {
            // These pages don't have language variants
            return;
        } else if (baseName === 'checkout' || baseName === 'international-collection') {
            // These pages might have limited language support
            if (baseName === 'checkout' && newLang !== 'ja') {
                // Only Japanese version exists for checkout
                alert('This page is only available in Japanese.');
                return;
            }
            if (baseName === 'international-collection' && newLang !== 'en') {
                // Only English version exists for international collection
                alert('This page is only available in English.');
                return;
            }
            newFilename = `${baseName}-${newLang}.html`;
        } else {
            // Standard language switching
            newFilename = `${baseName}-${newLang}.html`;
        }
        
        // Check if we need to go to language selector for non-existent pages
        const languageVariants = {
            'product-uniform-l': ['ja'],
            'product-uniform-m': ['ja'],
            'product-masu-basic': ['ja'],
            'product-masu-mini': ['ja'],
            'product-fomus-logo-basic': ['ja'],
            'product-fomus-logo-mini': ['ja'],
            'product-custom-masu-basic': ['ja'],
            'product-custom-masu-mini': ['ja'],
            'product-fomus-original-basic': ['ja'],
            'product-fomus-original-mini': ['ja'],
            'kuku-characters': ['ja']
        };
        
        if (languageVariants[baseName] && !languageVariants[baseName].includes(newLang)) {
            if (confirm(`This page is not available in ${languages[newLang].name}. Would you like to go to the language selector?`)) {
                window.location.href = 'language-selector.html';
            }
            return;
        }
        
        // Navigate to new URL
        window.location.href = newFilename;
    }
    
    // Initialize language switcher
    function initLanguageSwitcher() {
        // Find existing language link or create container
        const existingLangLink = document.querySelector('a[href="language-selector.html"]');
        
        if (existingLangLink) {
            // Replace the link with the switcher
            const switcherHTML = generateLanguageSwitcher();
            const switcherContainer = document.createElement('div');
            switcherContainer.innerHTML = switcherHTML;
            existingLangLink.parentNode.replaceChild(switcherContainer.firstElementChild, existingLangLink);
        } else {
            // Try to find navigation area to add switcher
            const nav = document.querySelector('nav');
            if (nav) {
                const rightSection = nav.querySelector('.flex.items-center.space-x-4') || 
                                   nav.querySelector('.flex:last-child');
                if (rightSection) {
                    const switcherHTML = generateLanguageSwitcher();
                    rightSection.innerHTML = switcherHTML;
                }
            }
        }
        
        // Add event listener to the switcher
        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.addEventListener('change', function(e) {
                switchLanguage(e.target.value);
            });
        }
        
        // Set document direction for RTL languages
        const pageInfo = getCurrentPageInfo();
        if (pageInfo && languages[pageInfo.currentLang]) {
            document.documentElement.dir = languages[pageInfo.currentLang].dir;
        }
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }
    
    // Export for manual initialization if needed
    window.FOMUSLanguageSwitcher = {
        init: initLanguageSwitcher,
        switchLanguage: switchLanguage,
        getCurrentPageInfo: getCurrentPageInfo
    };
})();