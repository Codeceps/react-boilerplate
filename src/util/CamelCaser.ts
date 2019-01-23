export function camelCaseIt(value: string): string {
    
    const chunks = value.split(' ');
    const uppercasedChunks = [];

    for (let chunk of chunks) {
        const uppercasedFirstLetter = chunk.substring(0, 1).toUpperCase();
        chunk = uppercasedFirstLetter + chunk.substring(1);
        uppercasedChunks.push(chunk);
    }

    return uppercasedChunks.length === 1 ? uppercasedChunks[0] : uppercasedChunks.join(' ').trimRight();
}