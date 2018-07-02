# js-utils
JS utils collection

## Install
```bash
npm i @savo/js-utils
```

## Usage
### Storage
```js
import { storage } from '@savo/js-utils'

storage.setItem(key, value) // value support object
storage.getItem(key) // auto convert to object
storage.removeItem(key)
storage.clear() // clear all
```

### Matrix
```js
import { Matrix } from '@savo/js-utils'

const matrix = new Matrix(list, rowCount, colCount)

matrix.getCol(0) // get the first col

matrix.getRow(1) // get the second row

```

### poller

#### using like setInterval
```js
import axios from 'axios'
import { poller } from '@savo/js-utils'

poller(retry => {
  axios.get(url).then(res => {
    retry() // retry when request finished
  })
}, 3000)
```

#### request retry
```js
import axios from 'axios'
import { poller } from '@savo/js-utils'

poller(retry => {
  axios.get(url).then(res => {
    if(res.data.ok) {
      doSomething(res)
    } else {
      retry() // only retry when request fail
    }
  })
}, 3000, 1.5)
```
