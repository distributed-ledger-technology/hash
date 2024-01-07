import crc32 from 'https://deno.land/x/hash/mod-crc32.ts'

console.log(crc32.str("SheetJS"))
console.log(crc32.bstr("SheetJS"))
console.log(crc32.buf([83, 104, 101, 101, 116, 74, 83]))

