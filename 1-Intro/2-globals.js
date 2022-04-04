// Globals - NO WINDOW OBJeCT !!!!! NO Browser !!!!!
// I have access to global variables from everywhere !!!

// __dirname - pat to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current moduele (file)
// process - info about env where the program is being executed

console.log(__filename);
setInterval(() => {
  console.log("hello");
}, 1000);
