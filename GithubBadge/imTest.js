
// 1) SET USAGE: 
// const myMap = Immutable.Map({
// 	1: "ali",
// 	2: "sait",
// 	3: "bilgi"
// });
// const testMap = myMap.set(4, "iyte").set(5, 180201052)
// console.log(myMap.toJS(), testMap.toJS());




// 2) MERGE USAGE: 
// const firstMap = Immutable.Map({
// 	a: 5,
// 	b: 10,
// 	c: 20
// });
// const secondMap = Immutable.Map({
// 	a: "degisti",
// 	d: 11,
// 	e: 12
// });
// const result = firstMap.merge(secondMap);
// console.log(result.toJS());



// 3) MERGE_WITH USAGE:
// const firstMap = Immutable.Map({
// 	a: 5,
// 	b: 10,
// 	c: 20
// });
// const secondMap = Immutable.Map({
// 	a: 7,
// 	b: 11,
// 	c: 12
// });
// const result = firstMap.mergeWith((prev, next) => prev + next, secondMap);
// console.log(result.toJS());


// 4)