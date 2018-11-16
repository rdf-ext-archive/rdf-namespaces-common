# rdf-namespaces-common

A collection of common RDF Namespaces as @rdfjs/namespace builders.

## Usage

```
const ns = require('rdf-namespaces-common')

const type = ns.rdf('type') // creates a NamedNode...

console.log(type.value) // ...with the value http://www.w3.org/1999/02/22-rdf-syntax-ns#type
```
