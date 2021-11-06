# Hash

This module represents a collection of hash functions.

## Usage Examples
### CRC32

```ts

import crc32 from 'https://deno.land/x/hash/mod-crc32.ts'

console.log(crc32.str("SheetJS"))
console.log(crc32.bstr("SheetJS"))
console.log(crc32.buf([83, 104, 101, 101, 116, 74, 83]))

```

### SHA 256

```ts

import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'

console.log(hashJs.sha256().update('abc').digest('hex'))

```


