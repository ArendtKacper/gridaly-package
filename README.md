# First run
From root directory run
```sh
npm i 
```
From root directory run
```sh
turbo run dev 
```

# Commands
### Dev
Start all packages (used most of the time)
```sh
turbo run dev 
```

Start the UI package and all required dependencies
```sh
turbo run dev --workspace=<package-name-from package.json>
turbo run dev --workspace=ui 
```
### Install
Install into root directory
```sh
npm i <package-name-to-install>
npm i typescript
```

Install into a package
```sh
npm i <package-name-to-install> --workspace=<package-name-from package.json>
npm i typescript --workspace=ui
```

Install package from repo into sandbox
```sh
npm i <package-name-to-install> --workspace=sandbox
```
Go to sandbox packages.json, find installed package and change version from '0.0.1' to "*"

### Build
Build all packages
```sh
turbo run build 
```

Build the UI package and all required dependencies
```sh
turbo run build --workspace=<package-name-from package.json>
turbo run build --workspace=ui
 ```

### Lint
Lint all packages
```sh
turbo run lint 
```

Lint the UI package
```sh
turbo run lint --workspace=<package-name-from package.json>
turbo run lint --workspace=ui 
```

### Publish next version to npm
1. Go to packages/<package-dir>
2. Update version in package.json
3. run from package directory 
```sh
npm publish 
```

# Structure
#### Apps
  It's our playground where we can import packages and test them.

#### Packages
  It's where our npm packages live, like 'utils,' which will be pushed to npm.
  Directories with [directory] are templates to duplicate.

#### Sharable
  It's where packages that are shareable across all apps live.

# How to Create and Publish an NPM Package 
1. Copy TemplateNpmPackage in packages
2. Paste it in the packages directory
3. Rename packageName in package.json
4. run from packages/<your package name> npm publish --access public
5. To add sandbox app run from root npm i <your package name> --workspace=sandbox or add package inside package.json 
6. !!! Inside sandbox package.json remember to change version from '0.0.1' to '*' this will tell npm to link package from repo not from npm registry.


# Useful Links
Learn more about the power of Turborepo:
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
