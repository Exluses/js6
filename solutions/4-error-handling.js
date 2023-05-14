import fs, { unlink } from "fs";

// BEGIN
export const move = (src, destination, callback) => {
  fs.readFile(src, (readError, data) => {
    if (readError) {
      callback(readError);
      return;
    }
    fs.writeFile(destination, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }
      fs.unlink(src, (unlinkError) => {
        if (unlinkError) {
          callback(unlinkError);
          return;
        }
        callback(null);
      });
    });
  });
};
// END
