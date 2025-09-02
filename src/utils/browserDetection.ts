/**
 * Browser detection utilities for Safari compatibility
 */

export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isMobileSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  return isIOS() && isSafari();
};

export const getSafariVersion = (): number | null => {
  if (typeof window === 'undefined' || !isSafari()) return null;
  const match = navigator.userAgent.match(/Version\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

/**
 * Check if browser supports modern features
 */
export const supportsIntersectionObserver = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'IntersectionObserver' in window;
};

export const supportsResizeObserver = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ResizeObserver' in window;
};

export const supportsScrollBehavior = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'scrollBehavior' in document.documentElement.style;
};

/**
 * Get optimized animation settings for Safari
 */
export const getAnimationSettings = () => {
  const safari = isSafari();
  const ios = isIOS();
  
  return {
    reducedMotion: safari,
    smoothness: safari ? 1.0 : 1.35,
    enableTouch: ios,
    useHardwareAcceleration: true,
    preferPerformance: safari || ios,
  };
};
