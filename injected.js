(() => {
  'use strict';

  const BLOCKED_EVENTS = ['blur', 'visibilitychange'];

  // Override document visibility properties
  Object.defineProperty(document, 'hidden', {
    value: false,
    writable: false,
  });
  Object.defineProperty(document, 'visibilityState', {
    value: 'visible',
    writable: false,
  });

  // Block event listener registration for blur/visibilitychange
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (BLOCKED_EVENTS.includes(type)) {
      return;
    }
    return originalAddEventListener.call(this, type, listener, options);
  };
})();
