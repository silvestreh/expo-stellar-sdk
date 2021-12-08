# Expo Stellar SDK

This is a wrapper for the official Javascript Stellar SDK that works in managed Expo environments.

There's not a lot going on here, really. The basic idea is to shim a handful of node modules that are not available in React Native and use `expo-random` to generate random bytes to use as seed for a Keypair.

## Why?

The [Stellar SDK docs](https://github.com/stellar/js-stellar-sdk#how-to-use-with-react-native) only show how to set up the SDK with apps that are either started with `react-native init`, Expo's bare workflow, or ejected apps.

Their approach uses [`rn-nodeify`](https://www.npmjs.com/package/rn-nodeify), a CLI tool that patches your `package.json` file, goes through your app's `node_modules` directory and patches the dependencies to shim Node modules like `https` or `crypto`.

In the case of the `crypto` module, it requires a new dependency that uses native code, which would force you to eject from your Expo managed workflow.

This module does something very similar but without having to patch your app's dependencies and, IMO, is easier to set up.

## How to use

1. Install the Stellar SDK and this wrapper
```shell
npm install stellar-sdk expo-stellar-sdk
```

2. Install the `expo-random` package using the Expo CLI tool
```shell
expo install expo-random
```

3. Create a `metro.config.js` file on your app's root directory containing
```javascript
module.exports = {
  resolver: {
    extraNodeModules: require('expo-stellar-sdk/node-libs')
  }
};
```
