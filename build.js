const chunks = []

process.stdin.on('data', chunk => chunks.push(chunk))
process.stdin.on('end', () => {
  const prefixes = JSON.parse(Buffer.concat(chunks).toString())

  process.stdout.write('const namespace = require(\'@rdfjs/namespace\')\n\n')
  process.stdout.write('module.exports = {\n')

  process.stdout.write(Object.keys(prefixes).sort().map(prefix => {
    return `  ${prefix}: namespace('${prefixes[prefix]}')`
  }).join(',\n'))

  process.stdout.write('\n}\n')
})
