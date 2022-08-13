
function choice(arr){

    let length = arr.length;
    let index = Math.floor(Math.random() * length);
    return arr[index];

}

function remove(arr, item){

    let removeIndex = arr.findIndex((arrItem) => arrItem === item);
    if(removeIndex === -1) return undefined;
     arr.splice(removeIndex, 1);
     return arr;

}

export {choice, remove};