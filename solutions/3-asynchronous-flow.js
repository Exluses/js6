import fs from "fs";

// BEGIN
export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      const result = Math.sign(size1 - size2);
      cb(null, result);
    });
  });
};
// END
