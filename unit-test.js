const solution = require('./task-example');

function testSolution(str, len, result) {
    console.log('Source string: ', str);
    console.log('Max length: ', len);
    console.log('Expected result: ', result);
    console.log('Current result: ', solution(str, len));
    console.log('\n');
}

const str = 'You have a long piece of text';

testSolution(str, 1, -1);
testSolution(str, 6, 6);
testSolution(str, 10, 4);
testSolution(str, 13, 3);
testSolution(str, 29, 1);