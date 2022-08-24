let obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
}
function iterFunc(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
iterFunc(obj)