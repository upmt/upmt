# μPMT - micro Phenomenology Modelling Tool

μPMT is aimed at researchers using microphenomenology interviews (also know as explicitation interviews) to study lived experience. It has been designed to help analyze the micro-dynamics of experience as described in interview transcriptions, by modelling and formalizing the sequential unfolding of "experience moments" described with categories and properties, and linked to the descriptemes - excerpts of the transcript - that justify them.

Access the latest version at https://upmt.github.io/upmt/

Read [documentation](https://github.com/upmt/upmt/wiki/%CE%BCPMT-documentation).

Ask questions and discuss with the community on the forum https://github.com/upmt/upmt/discussions

Report bugs and ask for features at: https://github.com/upmt/upmt/issues

## LICENCE

See the [LICENSE](LICENSE) file for license rights and limitations (GNU GPLv3).

## Developer installation instructions

### Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npx quasar dev
```

### Build the app for production
```bash
npx quasar build
```

### Run tests
```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

The test suite includes:
- **Storage tests**: Verify file system operations, project storage, and retrieval
- **Utility tests**: Test helper functions for timestamps, string manipulation, data transformations
- **Component tests**: Validate GUI component structure and business logic
