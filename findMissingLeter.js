function findMissingLetter (data) {
     let letters = "abcdefghigklmnopqrstuvwxyz";
     let start = letters.indexOf(data[0]);
    // let temp = letters.length;
    // return temp;
    for (let i = 0 ; i < data.length; i++){
        if (data[i] != letters[start + i]){
            return letters[ start + i]
        }
    }
} 
console.log(findMissingLetter("defgi"));
// log => h