const fs = require('fs');
const path = require('path');
const parse = require('bash-parser');
const codegen = require('../');
const test = require('tape');

test('bash-codegen', (t) => {
    t.plan(1);

    t.test('should be able to convert AST to be the same as the input', (t) => {
        const content = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'test.sh'));
        const ast = parse(content.toString('utf8'));

        const parsed = codegen(ast).commands.map((code) => {
            return code.source + '\n';
        }).join('');

        t.deepEqual(parsed, 'HELLO=WORLD  \n echo hello world\n ls -la\nif  [ 1 ]\nthen\n echo hello again world\n echo another hello!\nelse\n echo nope\n\nfi\nif  [ 1 ]\nthen\n echo hello and that is it!\n\nfi\n echo "$HELLO"\n noop \n');
        t.end();
    });

});
