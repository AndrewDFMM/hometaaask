var func = '';
var i = 0;
while (i < 1000) {
    func = func + 'if (b === '+ i + '){ }';
    i++;
}

var ifCalls = new Function('b', func);

var switchCases = 'switch(b) {';
var q = 0;
while (q < 1000){
    switchCases = switchCases + 'case ' + q + ': break;'
    q++;
}
switchCases = switchCases + '}';

var switchCalls = new Function('b', switchCases);


console.time("if:")
var i = 0;
while (i<1000) {
    i++
    ifCalls(i);
}
console.timeEnd("if:");

console.time('case:')
var y = 0;
while (y<1000){
    y++
    switchCalls(y)
}
console.timeEnd('case:');