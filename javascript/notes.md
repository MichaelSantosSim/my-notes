# Javascript notes
Notes about some javascript utilities

## log tables

Using ```console.table()``` will output a nice table!
```js
let table = [
    {name : 'michael', age : 25},
    {name : 'rick', age : 26},
    {name : 'dora', age : 27},
    {name : 'william', age : 28}
];
console.table(table);
```

## Variable tracking

Passing variable between curly brackets will output its name
```js
let pokemon = { name : 'pikachu', atk : 10, def : 8};
console.log(pokemon);
// output will be : {name: "pikachu", atk: 10, def: 8}
console.log({pokemon});
// output will be: {pokemon: {name: "pikachu", atk: 10, def: 8}
```

## CSS styled output

Will style the output ___Only works in browser!___
```js
console.log("%c hello, World", "color: blue;");
```

Will output:  <span style="color:blue">Hello world</span>

## timer

Description
```js
console.time('timeLoop');
for(let i = 0; i < 1000000000; i++){}
console.timeEnd('timeLoop');
// will output: timeLoop: 614.06396484375ms
```


## Console Trace

Trace Definition and Calls from some trace
```js
function doSomething(){
    console.trace('DoSomething function');
    // code does stuff
}
doSomething();
// ouput will be: 
// doSomething	@	index.js:2      // defined at
// (anonymous)	@	index.js:6      // called at

```

## Destructuring

Destructure an object to access properties
```js
let pokemon = { name : 'pikachu', atk : 10, def : 8};

function pokemonAttributes(pokemon){
    let {name, atk, def } = pokemon;
    console.log("Pokemon: " + name);
    console.log("Attack: " + atk);
    console.log("Defense: " + def);
}
```


## Spread Syntax
```js
// Objects

const pikachu = { name: 'Pikachu 🐹'  };
const stats = { hp: 40, attack: 60, defense: 45 }

'Bad Object Code 💩'

pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 45 })

'Good Object Code ✅'

const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }


// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code 💩'

pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

'Good Array Code ✅'

// Push 
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]

```

## Configure Async storage mock for jest

### With mocks directory
* In your project root directory, create a `__mocks__/@react-native-community directory`.
* Inside that folder, create async-storage.js file.
* Inside that file, export Async Storage mock.
``` js
export default from '@react-native-community/async-storage/jest/async-storage-mock'
```
Jest should then mock `AsyncStorage` by default in all your tests. If it doesn't, try calling `jest.mock(@react-native-community/async-storage)` at the top of your test file.
### With Jest setup file
* In your Jest config (probably in `package.json` or `jest.config.js`) add the setup file's location:
``` js
"jest": {
  "setupFiles": ["./path/to/jestSetupFile.js"]
}
```

Inside your setup file, set up the AsyncStorage mock:

import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
***If you're using TypeScript***, using the 2nd option (Jest setup file) is way easier, since with the 1st one (mocks directory) it won't associate `@types/react-native-community__async-storage` with the mock automatically.


## title

Description
```js
// code here
```

## title

Description
```js
// code here
```
