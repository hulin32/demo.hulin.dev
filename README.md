# Demo Projects

[![CI](https://github.com/hulin32/demo.hulin.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/hulin32/demo.hulin.dev/actions/workflows/ci.yml)
[![Build](https://github.com/hulin32/demo.hulin.dev/actions/workflows/build.yml/badge.svg)](https://github.com/hulin32/demo.hulin.dev/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/hulin32/demo.hulin.dev/branch/main/graph/badge.svg)](https://codecov.io/gh/hulin32/demo.hulin.dev)

## Testing

This project uses Vitest for unit testing and Playwright for end-to-end testing.

### Unit Tests

Run unit tests:

```bash
npm test
```

Run unit tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

### End-to-End Tests

Run end-to-end tests:

```bash
npm run test:e2e
```

Run end-to-end tests with UI:

```bash
npm run test:e2e:ui
```

Debug end-to-end tests:

```bash
npm run test:e2e:debug
```

## Continuous Integration

This project uses GitHub Actions for continuous integration. The following workflows are set up:

- **CI**: Runs linting, unit tests, and end-to-end tests
- **Build**: Ensures the application builds successfully

The CI workflow uploads test coverage reports to Codecov.