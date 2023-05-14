import fs from "fs";

// BEGIN
export default write = (path, data, callback) => {
  fs.writeFile(path, data, (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
}
// END
