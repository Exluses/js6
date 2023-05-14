import fs from 'fs';

// BEGIN
export default watch = (filepath, interval, cb) => {
    let lastCheck = Date.now();
    const timer = setInterval(() => {
        fs.stat(filepath, (err, stats) => {
            if (err) {
                clearInterval(timer);
                cb(err);
                return;
            }
            if (stats.mtimeMs > lastCheck) {
                lastCheck = stats.mtimeMs;
                cb(null);
            }
        });
    }, interval);

    return timer;
};
// END
