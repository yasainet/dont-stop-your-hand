# TODO

Chrome extension to prevent video pause when tab loses focus.

## Background

- Target site uses **Plyr** video player with `autopause: true`
- Videos pause when switching to other apps (Terminal, etc.)
- Cause: Page Visibility API triggers pause on `visibilitychange` event

## Solution

1. Disable Plyr's `autopause` setting
2. Block `visibilitychange` events from propagating

## Tasks

### Setup

- [ ] Create `manifest.json` (Manifest V3)
- [ ] Create project structure

### Core Implementation

- [ ] Create content script to inject code
- [ ] Override `player.config.autopause = false`
- [ ] Block `visibilitychange` event propagation
- [ ] Test on target site

### Optional

- [ ] Add popup UI with enable/disable toggle
- [ ] Add site whitelist/blacklist
- [ ] Publish to Chrome Web Store (if needed)

## Technical Notes

```javascript
// Disable autopause
player.config.autopause = false;

// Block visibilitychange
document.addEventListener('visibilitychange', function(e) {
  e.stopImmediatePropagation();
}, true);
```
