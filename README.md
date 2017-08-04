# Bug Bounty Contracts

Bug bounty dApp contract code

### Build
Recompile contracts and build artifacts.
```
$ yarn build
```

### Build Artifacts
Rebuilds truffle artifacts found at `./build/artifacts` from your contracts in `.build/contracts`.
```
$ yarn build-artifacts
```

### Deploy
Deploy contracts to RPC provider at port `8545`.
```
$ yarn redeploy
```

### Recompile
Recompile your contracts without rebuilding artifacts
```
$ yarn recompile
```

### Test
Restart `testrpc` and run `truffle test`.
```
$ yarn test
```
