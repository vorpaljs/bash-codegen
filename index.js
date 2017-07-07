const traverse = require('bash-ast-traverser');

module.exports = (ast) => {
    return traverse(ast, {
        Word: (node) => {
            Object.defineProperty(node, 'source', {
                get: () => node.text
            })
            return node;
        },
        AssignmentWord: (node) => {
            Object.defineProperty(node, 'source', {
                get: () => node.text
            })
            return node;
        },
        Command: (node) => {
            Object.defineProperty(node, 'source', {
                get: () => {
                    const suffix = node.suffix ? node.suffix.map(s => s.source).join(' ') : '';
                    const prefix = node.prefix ? node.prefix.map(s => s.source).join(' ') : '';
                    const name = node.name ? node.name.source : '';
                    return prefix + ' ' + name + ' ' + suffix;
                }
            });
            return node;
        },
        If: (node) => {
            Object.defineProperty(node, 'source', {
                get: () => {
                    const _clause = node.clause ? node.clause.commands.map(c => {
                        return c.source;
                    }).join(' ') : '';
                    const _then = node.then ? node.then.commands.map(c => {
                        return c.source;
                    }).join('\n') : '';
                    const _else = node.else ? node.else.commands.map(c => {
                        return c.source;
                    }).join(' ') : '';
                    const _elseif = node.elseif ? node.elseif.commands.map(c => {
                        return c.source;
                    }).join(' ') : '';

                    return `if ${_clause}\n${_then && `then\n${_then}\n`}${_else && `else\n${_else}\n`}${_elseif && `elseif\n${_elseif}\n`}\nfi`
                }
            });
            return node;
        }
    });
}
