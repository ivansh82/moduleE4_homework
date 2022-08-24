let obj = {
    'a': 1,
    b: 2,
    c: 3,
    d: 4,
}
function iterFunc(string, obj){
    return !!obj[string];

}
a = iterFunc('a', obj)
console.log(a)