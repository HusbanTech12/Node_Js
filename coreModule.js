// Gobal Core Module : They are Modules that Can use without import.
// Non-Global Core Module : They are Modules that Can use with import. 

// Global Core Module Exp:

// console.log() use without import
console.log('Husban');



// Non-Global Core Module Exp:

// Create instance myFile and import 'fs' module
const myFile = require('fs').writeFileSync
// console.log('Node Js Core Module');

// writeFileSync : create file  

//                    your file name ,  what write in file     
// myFile.writeFileSync('coreModule.txt','Global and Non-Global Core Module')
myFile('coreModule.txt','Global and Non-Global Core Module')
