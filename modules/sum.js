let somme = function (number) {
    let total = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 === total || i % 5 === total){
      total = total + i;
    }
  }
  return total;
};


module.exports = { somme };