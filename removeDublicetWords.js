function rm (text){
    let spli = text.split(" ");

    // let cleard = spli.filter( (index) => index != "zakaria" )
    // return cleard ;
    let temp = spli[0];
    
  
    for (let i = 0 ; i < spli.length; i++){
        console.log(temp)
        temp = spli[i + 2]
    }
}
console.log(rm("zakaria zakaria javascript devolper"));