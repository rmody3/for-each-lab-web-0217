function iterativeLog(array){
  array.forEach((element,index,array) =>
    console.log(`${index}: ${element}`)
  )
}

function iterate(callback){
  let pizza = ["cheese", "sauce", "dough"]
  pizza.forEach(callback)
  return pizza
}

function doToArray(array,callback){
  array.forEach(callback)
}
