import { analyticsConfig } from '../config/business';

export const trackEvent = (eventName, eventParams = {}) => {
  console.log(`[Analytics Event]: ${eventName}`, eventParams);

  // Google Analytics 4
  if (window.gtag && analyticsConfig.gaId) {
    window.gtag('event', eventName, eventParams);
  }

  // Meta (Facebook) Pixel
  if (window.fbq && analyticsConfig.metaPixelId) {
    window.fbq('trackCustom', eventName, eventParams);
  }

  // TikTok Pixel
  if (window.ttq && analyticsConfig.tiktokPixelId) {
    window.ttq.track(eventName, eventParams);
  }
};
