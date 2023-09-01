# Structure
- #### Apps </br>
  It's our playground where we can import packages and test them
- #### Packages </br>
  It's where our npm packages live, spelled ex 'utils' are packages that will be pushed to npm
  Directories with [directory] are template's to duplicate []
- #### Sharable </br>
  It's where packages that are sharable across all apps and packages live

# How to Create and Publish an NPM Package 
1. Copy TemplateNpmPackage in packages
2. Paste it in packages directory
3. Rename packageName in package.json
4. run from packages/<your package name> npm publish --access public
5. To add  sandbox appp run from root npm i <your package name> --workspace=sandbox or add packge inside package.json 
6. !!! Inside sandbox package.json remeber to change version from '0.0.1' to '*' this will tell npm to link package from repo not from npm registry.


# Useful Links
Learn more about the power of Turborepo:
- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
