import path from "path";
import fs from "fs";
import _ from "lodash";
import async from "async";

// BEGIN
export const getDirectorySize = (dirPath, cb) => {
    async.waterfall(
        [
            (callback) => {
                fs.readdir(dirPath, callback);
            },
            (files, callback) => {
                async.map(
                    files,
                    (file, done) => {
                        const filePath = path.join(dirPath, file);
                        fs.stat(filePath, (error, stats) => {
                            if (error) {
                                done(error);
                                return;
                            }
                            done(null, stats.isFile() ? stats.size : 0);
                        });
                    },
                    callback
                );
            },
            (filesSizes, callback) => {
                const totalSize = filesSizes.reduce((acc, size) => acc + size, 0);
                callback(null, totalSize);
            },
        ],
        cb
    );
};
// END
