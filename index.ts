//Map
//Map with differnt types to use it 
let map = new Map(
  [
  ['name','Mangesh'],
  ['age',"26"]
]
);
const data = map.get('age');
console.log(data);


//Map with set

let setMap = new Map()

setMap.set('name','Varad')
.set('age',12);

console.log("Set Map",setMap.get('name'))


//maps are designed specifically to update key-value pairs frequently. 