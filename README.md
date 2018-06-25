# js-utils
JS utils collection

## Install
```bash
npm i @savo/js-utils
```

## Usage
```js
import { storage } from '@savo/js-utils'

storage.setItem(key, value) // value support object
storage.getItem(key) // auto convert to object
storage.removeItem(key)
storage.clear() // clear all
```