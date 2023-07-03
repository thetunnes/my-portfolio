import fs from 'fs'

// Convertendo binario em arquivo
export function base64Decode(base64str: string, fileName: string) {
  const bitmap = Buffer.from(base64str, 'base64')
  fs.writeFileSync('src/temp/' + fileName + '', bitmap, {
    encoding: 'binary',
  })
}

// Convertendo arquivo em binário
export function base64Encode(fileName: string) {
  const bitmap = fs.readFileSync('src/temp/' + fileName + '')
  return Buffer.from(bitmap).toString('base64')
}
