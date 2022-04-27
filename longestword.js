function longest (text) {
    let spliting = text.split(" ");
    let temp
    temp = spliting[0]
    for (let i = 0; i < spliting.length; i++ ){
        if (spliting[i].length > temp.length ){
            temp = spliting[i]
        }else{
            return spliting[i]
        }
    }
}
console.log(longest("zakaria sassi is the best web deolper erver and if you wn"));
//log =>  zakaria