import fsp from 'fs/promises';

// BEGIN
export const reverse = (filePath) => {
    return fsp.readFile(filePath, 'utf-8')
        .then((data) => {
            const reversedData = data.split('\n').reverse().join('\n');
            return fsp.writeFile(filePath, reversedData);
        })
        .catch((error) => console.error(error));
};
// END