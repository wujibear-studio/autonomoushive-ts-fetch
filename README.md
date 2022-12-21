## autonomous-hive-sdk `0.0.1`

This is an SDK for interacting with the AutonomousHive API using a TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). 

You can use this SDK in these environments:
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Installation

navigate to the folder of your consuming project and run one of the following commands.

If you use `npm`, run the following:
```
npm install autonomous-hive-sdk@0.0.1 --save
```

Or if you use `yarn`, run the following:
```
yarn add autonomous-hive-sdk
```

## Usage

To use our SDK in your app, import and set the configuration options like the following:
```
import { Configuration, ConfigurationParameters, UsersApi } from 'autonomous-hive-sdk';

const configParameters: ConfigurationParameters = {
  headers: {
    'Authorization': 'Bearer aUserTokenYouGotFromSigningIn',
  },
};
const configuration = new Configuration(configParameters);
const api = new UsersApi(configuration); 
```

We also plan to release an example app running on [Remix](https://remix.run/) that will be a great example of how to use the SDK.