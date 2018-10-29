function palindrome(word) {
   var origin = word.toUpperCase();
   var reverse = [];
    for (var i = origin.length - 1; i >= 0; i--)
        reverse.push(origin.charAt(i));
    if(origin == reverse.join(""))
        return(word + " is a palindrome");
    return(word + " is not a palindrome");
}

console.log(palindrome("radar"));
console.log(palindrome("come"))