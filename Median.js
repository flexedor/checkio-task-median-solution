alert(median([1, 2, 3, 4, 5]));
alert(median([3, 1, 2, 5, 3])) ;
alert(median([1, 300, 2, 200, 1])); 
alert(median([3, 6, 20, 99, 10, 15]));
function median(start_arr) {
    start_arr.sort(compareNumeric);
    var a = start_arr.length;
    if (a%2==0){
        a=a/2;
        n=start_arr[parseInt(a-1)]+start_arr[parseInt(a)];
        n=n/2;
        return n;
    }else {
        a=a/2;
        n=start_arr[Math.floor(a)];
        return n;
    }
}
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
