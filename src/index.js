import animals, { useAnimals } from "./data";

const [cat, dog] = animals;
console.log(animals);

console.log(useAnimals(cat));

// destructioning own function similar to useState
//  creating an array literal
// which is like:
// const [<element in array], <function>] = useStatefunction(<object consist of an array>)
// name of first item in array, value of the function = output function with object cat
const [name, setSound] = useAnimals(cat);

console.log(name);
setSound();
