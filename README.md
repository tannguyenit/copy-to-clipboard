# Handy-Copy
The way to copy anything to clipboard

# Quick links
1. [Usage](#usage-with-npm-or-yarn)

# Usage with npm or Yarn

1. First install the package with `npm` or `Yarn`.
```bash
#npm 
npm install handy-copy-to-clipboard

#or with yarn
yarn add handy-copy-to-clipboard
```

2. And here comes the fun part.
```javascript
import Copy from 'handy-copy-to-clipboard'
Copy({
    value: 'What you want to copy',
    done: () => {    
        console.log('Callback function called')
    }
})
```

**Thanks for reading!!**
