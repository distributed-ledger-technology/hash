// for details check https://www.npmjs.com/package/hash.js
import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'

console.log(hashJs.sha256().update('Bitcoin').digest('hex'))
