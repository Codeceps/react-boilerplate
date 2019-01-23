module.exports = {
    /**
     * Mocking of files, styles and webpack aliases
     * Ordering is of importance 
     */
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|svg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(sa|sc|c)ss$": "<rootDir>/src/__mocks__/styleMock.js",
        "^resources(.*)$": "<rootDir>/resources/$1",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    roots: ['<rootDir>/src'],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$",
    transform: { "^.+\\.(t|j)sx?$": "babel-jest" }
};