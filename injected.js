(() => {
  'use strict';

  // Override document visibility properties
  Object.defineProperty(document, 'hidden', { value: false, writable: false });
  Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });

  // Block visibilitychange event
  document.addEventListener('visibilitychange', (e) => e.stopImmediatePropagation(), true);

  // Disable Plyr autopause
  const disableAutopause = () => {
    if (window.player?.config?.autopause) {
      window.player.config.autopause = false;
    }
    if (typeof Plyr !== 'undefined') {
      document.querySelectorAll('.plyr').forEach((el) => {
        if (el.plyr?.config?.autopause) {
          el.plyr.config.autopause = false;
        }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', disableAutopause);
  } else {
    disableAutopause();
  }

  new MutationObserver(disableAutopause).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
