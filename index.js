import './shim';
import StellarSDK from 'stellar-sdk';
import * as Random from 'expo-random';

StellarSDK.Keypair.random = () => {
  const randomBytes = Random.getRandomBytes(32);
  return StellarSDK.Keypair.fromRawEd25519Seed(Buffer.from(randomBytes));
};

export default StellarSDK;
