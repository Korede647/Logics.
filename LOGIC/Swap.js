function swapShii(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let temp = str.charAt(i);
        if (temp == temp.toLowerCase()){
            result += temp.toUpperCase();
        }
        else{
            result += temp.toLowerCase();
        }
}
return result;
    
}

const result = swapShii("jEdDy");
console.log(result);