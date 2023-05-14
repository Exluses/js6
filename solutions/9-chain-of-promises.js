import fsp from 'fs/promises';

// BEGIN
export async function getTypes(paths) {
    const promises = paths.map((path) =>
        fsp.stat(path).then((stats) => (stats.isDirectory() ? 'directory' : 'file')).catch(() => null),
    );
    return Promise.all(promises);
};
// END