# Hash

This module represents a collection of hash functions.

## Usage Examples

### SHA 256

```sh 
deno run https://deno.land/x/hash/usage-examples/sha256.ts
```


```ts

import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'

console.log(hashJs.sha256().update('Bitcoin').digest('hex'))

```



### CRC32

```ts

import crc32 from 'https://deno.land/x/hash/mod-crc32.ts'

console.log(crc32.str("SheetJS"))
console.log(crc32.bstr("SheetJS"))
console.log(crc32.buf([83, 104, 101, 101, 116, 74, 83]))

```
