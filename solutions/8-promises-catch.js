import fsp from 'fs/promises';

// BEGIN
export const touch = (filePath) => {
    return fsp.access(filePath)
        .catch(() => fsp.writeFile(filePath, ''));
};
// END