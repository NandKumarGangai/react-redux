module.exports = {
    testURL: 'http://localhost/',
    roots: [
        "<rootDir>"
    ],
    testEnvironment: 'node',
    testEnvironmentOptions: {
        'enzymeAdapter': 'react16'
    },
    testMatch: [
        "<rootDir>/src/**/*.test.js?(x)"
    ],
    setupFiles: [
        '<rootDir>/src/test/setup.js',
        '<rootDir>/src/test/setupTests.js',
        '<rootDir>/src/test/fileTransformer.js'
    ],
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    },
    testPathIgnorePatterns: [
        'node_modules'
    ],
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{js,jsx,ts}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    coverageDirectory: '<rootDir>/target/reports',
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
      ],
    verbose: true,
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: [
                    [
                        'babel-preset-trigen',
                        {
                            commonjs: true
                        }
                    ]
                ]
            }
        }
    }
};