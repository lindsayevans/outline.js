module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coverageDirectory: 'test-coverage',
    reporters: [
        'default',
        [
            'jest-junit',
            {
                output: './test-reports/jest-junit.xml',
                suiteName: 'Jest tests'
            }
        ]
    ],
    collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    }
};
