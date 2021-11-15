function bracesValid(stringB){

    let arr = []

    for(let i = 0; i < stringB.length; i++){
        if ( stringB[i] === "(" || stringB[i] === "{" || stringB[i] === "["){
            arr.push(stringB[i])
        } else{
            if(arr.length === 0){
                return false
            }
            let lastValue = arr[arr.length-1]
            if( (stringB[i] === ']' && lastValue === '[') || (stringB[i] === '}' && lastValue === '{') || (stringB[i] === ')' && lastValue === '('))
            {
                arr.pop()
            } else {
                break;
                }
            }
    }
    return arr.length === 0
}

console.log(bracesValid("{(})"));
console.log(bracesValid("{{()}}[]"));
