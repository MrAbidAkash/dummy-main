'use client';

import { useEffect, useState } from 'react';
import { isSafari, isIOS, supportsIntersectionObserver } from '@/utils/browserDetection';

interface SafariWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Wrapper component that provides Safari-specific optimizations
 */
const SafariWrapper: React.FC<SafariWrapperProps> = ({ children, fallback }) => {
  const [isClient, setIsClient] = useState(false);
  const [browserInfo, setBrowserInfo] = useState({
    isSafari: false,
    isIOS: false,
    supportsModernFeatures: true,
  });

  useEffect(() => {
    setIsClient(true);
    setBrowserInfo({
      isSafari: isSafari(),
      isIOS: isIOS(),
      supportsModernFeatures: supportsIntersectionObserver(),
    });

    // Add Safari-specific CSS class to body
    if (isSafari()) {
      document.body.classList.add('safari-browser');
    }
    if (isIOS()) {
      document.body.classList.add('ios-device');
    }

    return () => {
      document.body.classList.remove('safari-browser', 'ios-device');
    };
  }, []);

  // Don't render until client-side hydration
  if (!isClient) {
    return null;
  }

  // Render fallback for unsupported browsers
  if (!browserInfo.supportsModernFeatures && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div 
      className={`
        browser-wrapper 
        ${browserInfo.isSafari ? 'safari-optimized' : ''} 
        ${browserInfo.isIOS ? 'ios-optimized' : ''}
      `}
      style={{
        // Safari-specific optimizations
        ...(browserInfo.isSafari && {
          WebkitFontSmoothing: 'antialiased',
          WebkitOverflowScrolling: 'touch',
        }),
      }}
    >
      {children}
    </div>
  );
};

export default SafariWrapper;
