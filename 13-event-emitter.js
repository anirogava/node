const EventEmitter = require("events");

const costumEmitter = new EventEmitter();

costumEmitter.on("response", (name, id) => {
  console.log("data recieved user", `${name} with id: ${id}`);
});
costumEmitter.on("response", () => {
  console.log("Some other logic");
});

costumEmitter.emit("response", "john", 34);
