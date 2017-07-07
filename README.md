# bash-codegen

> turn bash AST back into code

This module will take an AST and add a property to each node named `source`. This attribute when accessed will return the code value of the node.

## Installation

```
npm install bash-codegen
```

## Usage

```javascript
const codegen = require('bash-codegen');

const parsed = codegen(ast).commands.map((code) => {
    return code.source + '\n';
}).join('');
```

## Contributing

When making code changes, please add details to the `CHANGELOG.md` file under the section `## Unreleased`, if it doesn't exist, please add it.

> example

```
## Unreleased

- changed the way something works // each change is a different bullet
```
