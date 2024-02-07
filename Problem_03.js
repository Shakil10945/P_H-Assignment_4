function deleteInvalids(array) {
    let array2= [];

    if (!(Array.isArray(array))) {
        return 'Invalid';
    }

    for (let i=0;i<array.length; i++){
        if(typeof(array[i]) == 'number'){
            if(!(isNaN(array[i]))){
                array2.push(array[i]);
            }
            
        }
    }
    return array2;
}
const array = {num: [ 1 , 2 , 3 ]};

console.log(deleteInvalids(array));