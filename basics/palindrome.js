function palindrome(word) {
   var origin = word.toUpperCase();
   var reverse = "";
    for (var i = origin.length - 1; i >= 0; i--)
        reverse += origin.charAt(i);
    if(origin == reverse)
        return(word + " is a palindrome");
    return(word + " is not a palindrome");
}

console.log(palindrome("rAdar"));
console.log(palindrome("come"))