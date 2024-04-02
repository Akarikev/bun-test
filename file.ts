//file I/O API
// const data = "i hate javascript 🔥";

//write to a file
// await Bun.write("output.txt", data);

//reading from a file
const file = await Bun.file("output.txt");
console.log(await file.text());
console.log("file size:", file.size + " bytes"); //getting file size
console.log("Readable Stream:", await file.stream()); //get contents as a readdable stream
console.log("Array Buffer:", await file.arrayBuffer()); //get contents as an array buffer
