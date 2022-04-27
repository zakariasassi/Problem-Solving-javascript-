function reversNumbresIntoArray (numbers) {
    const temp = numbers.toString();
    const array = [];
    for (let i = 0 ; i < temp.length; i++){
            array[i] = temp[i];
    } 
    return array.reverse().toString();
    
}
console.log(reversNumbresIntoArray(564987654))
//log => 4,5,6,7,8,9,4,6,5
