# Expo Stellar SDK

This is a wrapper for the official Javascript Stellar SDK that works in managed Expo environments.

There's not a lot going on here, really. The basic idea is to shim a handful of node modules that are not available in React Native and use Expo Random to generate random bytes to use as seed for a Keypair.

> Please note that this is still in **early** development. I recommend skipping it for now.

## How to use

1. Install the Stellar SDK and this wrapper
```shell
npm install stellar-sdk expo-stellar-sdk
```

2. Install the `expo-random` package using the Expo CLI
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
