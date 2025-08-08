// FOMUS Analytics & Tracking Setup
// Google Analytics 4 (GA4) + Google Tag Manager (GTM) Integration

// Google Tag Manager Implementation
(function() {
  // GTM Container ID will be: GTM-XXXXXXX (to be replaced with actual ID)
  const GTM_ID = 'GTM-PLACEHOLDER';
  
  // Load GTM
  function loadGTM() {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',GTM_ID);
  }
  
  // Enhanced E-commerce tracking for FOMUS products
  window.dataLayer = window.dataLayer || [];
  
  // Track page views with enhanced data
  function trackPageView(pageData) {
    window.dataLayer.push({
      'event': 'page_view',
      'page_title': document.title,
      'page_location': window.location.href,
      'page_language': document.documentElement.lang,
      'content_group1': pageData.category || 'General',
      'content_group2': pageData.subcategory || 'Page',
      'custom_map': {
        'dimension1': 'Japanese Traditional Crafts',
        'dimension2': pageData.product_type || 'General'
      }
    });
  }
  
  // Track MASU product interactions
  function trackProductInteraction(action, productData) {
    window.dataLayer.push({
      'event': 'product_interaction',
      'event_action': action,
      'product_name': productData.name,
      'product_category': productData.category || 'MASU Collection',
      'product_brand': 'FOMUS',
      'product_price': productData.price,
      'currency': 'USD'
    });
  }
  
  // Track custom events for Japanese craft interest
  function trackCraftInterest(craftType, interactionType) {
    window.dataLayer.push({
      'event': 'craft_interest',
      'craft_type': craftType,
      'interaction_type': interactionType,
      'event_category': 'Japanese Traditional Crafts',
      'event_label': 'FOMUS Engagement'
    });
  }
  
  // Track language switching
  function trackLanguageSwitch(fromLang, toLang) {
    window.dataLayer.push({
      'event': 'language_switch',
      'previous_language': fromLang,
      'new_language': toLang,
      'event_category': 'Internationalization'
    });
  }
  
  // Track form submissions (contact, custom orders)
  function trackFormSubmission(formType, formData) {
    window.dataLayer.push({
      'event': 'form_submit',
      'form_type': formType,
      'form_data': formData,
      'event_category': 'Lead Generation'
    });
  }
  
  // Initialize tracking based on page type
  function initializeTracking() {
    const currentPage = window.location.pathname;
    let pageData = {};
    
    // Determine page category and set up appropriate tracking
    if (currentPage.includes('masu-collection')) {
      pageData = {
        category: 'Product Collection',
        subcategory: 'MASU Collection',
        product_type: 'Traditional Sake Cups'
      };
    } else if (currentPage.includes('product-')) {
      pageData = {
        category: 'Product Detail',
        subcategory: 'Individual Product',
        product_type: 'MASU Sake Cup'
      };
    } else if (currentPage.includes('membership')) {
      pageData = {
        category: 'Service',
        subcategory: 'Membership',
        product_type: 'Premium Service'
      };
    } else if (currentPage.includes('index')) {
      pageData = {
        category: 'Landing',
        subcategory: 'Homepage',
        product_type: 'Brand Introduction'
      };
    }
    
    trackPageView(pageData);
  }
  
  // Export functions for global use
  window.fomusAnalytics = {
    trackProductInteraction,
    trackCraftInterest,
    trackLanguageSwitch,
    trackFormSubmission
  };
  
  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTracking);
  } else {
    initializeTracking();
  }
  
  // Load GTM when script loads
  if (GTM_ID !== 'GTM-PLACEHOLDER') {
    loadGTM();
  }
})();

// Enhanced E-commerce data layer for product pages
function setupEcommerceTracking() {
  // This will be called on product pages to set up enhanced e-commerce
  const productData = {
    'ecommerce': {
      'detail': {
        'products': [{
          'name': 'Traditional MASU Sake Cup',
          'id': 'masu-traditional-001',
          'price': '45.00',
          'brand': 'FOMUS',
          'category': 'Traditional Crafts/MASU Collection',
          'variant': 'Hinoki Cypress'
        }]
      }
    }
  };
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(productData);
}

// SEO Performance Tracking
function trackSEOMetrics() {
  // Track Core Web Vitals
  function trackWebVitals() {
    if ('web-vital' in window) {
      window.addEventListener('load', () => {
        // Track Largest Contentful Paint
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              window.dataLayer.push({
                'event': 'web_vitals',
                'metric_name': 'LCP',
                'metric_value': Math.round(entry.startTime),
                'event_category': 'Performance'
              });
            }
          }
        }).observe({entryTypes: ['largest-contentful-paint']});
        
        // Track First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.dataLayer.push({
              'event': 'web_vitals',
              'metric_name': 'FID',
              'metric_value': Math.round(entry.processingStart - entry.startTime),
              'event_category': 'Performance'
            });
          }
        }).observe({entryTypes: ['first-input']});
      });
    }
  }
  
  // Track scroll depth for engagement
  function trackScrollDepth() {
    let maxScroll = 0;
    const trackingPoints = [25, 50, 75, 100];
    
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        trackingPoints.forEach(point => {
          if (scrollPercent >= point && maxScroll < point) {
            window.dataLayer.push({
              'event': 'scroll_depth',
              'scroll_percent': point,
              'event_category': 'Engagement'
            });
          }
        });
      }
    });
  }
  
  trackWebVitals();
  trackScrollDepth();
}

// Initialize SEO tracking
trackSEOMetrics();