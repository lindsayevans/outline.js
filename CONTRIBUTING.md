# Contributing

All contributors must adhere to the [code of conduct](CODE_OF_CONDUCT.md).

## Bug reports & feature requests

Use the issue templates to create issues on Github.

## Development

### System dependencies
- [Node.js v10](http://nodejs.org)

### Tools & stuff used
- TypeScript
- Rollup
- tslint for linting
- Jest + ts-jest for unit testing
- Nightwatch.js + BrowserStack for e2e testing

### Basic workflow

Clone the repository locally and run `npm install` in the project directory to install the project dependencies.

Run `npm start` to run the rollup build, plus linting & unit testing in watch mode.

Please add unit & e2e tests if possible for any new features or bugfixes that you do.

### Pull requests

Create a pull request on Github, targetting the `develop` branch.

### Releasing a new NPM package

This needs to be done manually, az Azure Pipelines doesn't support publishing NPM packages with 2f1 enabled :(

See RELEASE_PROCESS.md for details.
