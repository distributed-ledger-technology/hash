# Hash

This 🦕 [module](https://deno.land/x/hash) represents a collection of hash functions.

## Usage Example SHA256

```ts
import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'

console.log(hashJs.sha256().update('Bitcoin').digest('hex'))
```

## Execute Usage Example SHA256
```sh 
deno run https://deno.land/x/hash/usage-example-sha256.ts
```

## Usage Example CRC32

```ts
import crc32 from 'https://deno.land/x/hash/mod-crc32.ts'

console.log(crc32.str("SheetJS"))
console.log(crc32.bstr("SheetJS"))
console.log(crc32.buf([83, 104, 101, 101, 116, 74, 83]))
```

## Execute Usage Example CRC32
```sh 
deno run https://deno.land/x/hash/usage-example-crc32.ts
```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)