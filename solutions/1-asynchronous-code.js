import fs from "fs";

// BEGIN
export default print = (filepath) => {
  fs.readFile(filepath, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  });
};
// END
