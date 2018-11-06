function check(str) {
    var openBracketsList = ['{', '[', '('];
    var closeBracketsList = ['}', ']', ')'];
    var openBrackets = [];
    for (i = 0; i < str.length; i++) {
        if (openBracketsList.indexOf(str[i]) != -1) {
            openBrackets.push(str[i]);
        }
        var lastOpenBracket = openBrackets[openBrackets.length-1];
        if (closeBracketsList.indexOf(str[i]) != -1){
            if ((lastOpenBracket == '{' && str[i] == '}') || (lastOpenBracket == '[' && str[i] == ']') || (lastOpenBracket == '(' && str[i] == ')')){
                openBrackets.pop();
            } else {
                console.error(' invalid closing bracket: ' + str[i]);
                break;
            }
        }
    }
    if (openBrackets.length > 0) {
        console.error(' Have not closed brackets: ' + openBrackets );
    }
}
check("{  [  sds { aa ( )  } ] }");
