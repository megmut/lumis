[![<typescript>](https://badgen.net/badge/typescript/strict%20%F0%9F%92%AA/blue?icon=typescript)](https://www.typescriptlang.org/)
[![<megmut>](https://circleci.com/gh/megmut/lumis.svg?style=svg)](https://app.circleci.com/pipelines/github/megmut/lumis?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![npm](https://img.shields.io/npm/v/lumis?style=flat-square)
[![Coverage Status](https://coveralls.io/repos/github/megmut/lumis/badge.svg?branch=master)](https://coveralls.io/github/megmut/lumis?branch=master)

# Lumis
## Automatically create factory and fake data from typescript interfaces

> Please note, this is still very early development and has not been tested in a production envirnoment!

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Lumis](#lumis)
  - [Automatically create factory and fake data from typescript interfaces](#automatically-create-factory-and-fake-data-from-typescript-interfaces)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Running the tests](#running-the-tests)
  - [Known Bugs](#known-bugs)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
- [Apache 2.0 License © Nicholas Mordecai](#apache-20-license--nicholas-mordecai)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)


To install the library, run:

```sh
$ npm install --save-dev lumis
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev lumis
```

## Usage

To run Lumis on your project, add the command to your package.json scripts:

```json 
"script": {
      "...": "...",
      "lumis": "lumis -f ./src/**/*{.d.ts,.ts}"
}
```
and execute the above script like so:

```sh
$ npm run lumis
# or
$ yarn lumis
```

or if you have it installed globally:
```sh
$ lumis --files=./**/*.ts
```

## Examples
Create the following file, saving the example below inside.
```ts
  export interface Example {
    str: string;
    num: number;
    literal: {
        key1: string;
        key2: string;
    };
    arraySimple: string[];
    arrayComplex: Array<{key1: string, key2: number}>;

    tupSimple: [string, string, number];
    tupComplex: [number, string, {key1: string}];
    address: Address;
  }

  interface Address {
      streetName: string;
      houseNumber: number;
  }
```

Now run your npm command:
```sh
$ npm run lumis
# or
$ yarn lumis
```

Now in any other Typescript file in your project, you can get the factory.
```ts
import { Example, Address } from 'lumis';

const newExample = Example.create({...});

// note, this is currently being implemented
const fakedExample = Example.fake();
```

### Running the tests

```sh
$ npm test
```

## Known Bugs
- Nullkeyword isn't being recognised in the looper



## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b feat/my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/megmut/lumis/tags).

## Authors

- **Nicholas Mordecai**

See also the list of [contributors](https://github.com/megmut/lumis/contributors) who participated in this project.

## License

[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0) © Nicholas Mordecai
=======

##### Notes To Self
- If a nested structure is optional, a config should be set to allow that nested property to be or not to be generated