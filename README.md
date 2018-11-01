TrueAutomation.IO helper functions
====

This helper allows to use TrueAutomation.IO in your existing JS tests that use webdriver.

## Installation

The easiest way is to keep `trueautomation-helper` as a dependency in your `package.json`.

```json
{
  "devDependencies": {
    "trueautomation-helper": "~0.3"
  }
}
```

You can simple do it by:

```bash
npm install trueautomation-helper --save
```

## Usage

Use `ta('<locator:name>')` as a locator name in any tests. 

Example:
```javascript
import { ta } from 'trueautomation-helper';

browser.click(ta('mainPage:login:loginButton'));
```

You can record an element during the first run using plain locators:

```javascript
import { ta } from 'trueautomation-helper';

browser.click(ta('mainPage:login:loginButton', '#loginButton'));
```
