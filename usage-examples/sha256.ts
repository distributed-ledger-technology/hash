// for details check https://www.npmjs.com/package/hash.js
import hashJs from '../mod-hashjs.ts'

console.log(hashJs.sha256().update('abc').digest('hex'))