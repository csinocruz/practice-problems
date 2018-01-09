function search_arr(haystack, needle) {
    var needleLength = needle.length;
    var haystackLength = haystack.length;
    
    for(var i=(needleLength - 1); i>=0; i--) {
            if( haystack.indexOf(needle[i]) > 0) {
                console.log(needle[i]);
            }
    }
}
           // haystack                              // needle
search_arr(['cat','dog','bird','turtle','lizard'], ['dog','lizard','flower','monkey','unicorn']);