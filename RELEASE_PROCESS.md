# Release process

## Regular releases

-   Create new Gitflow release with new version number following [SemVer](https://semver.org/)
    -   e.g. `1.2.3` -> `1.3.0`
-   Update `version` in `package.json`
-   Open new pull request
-   Publish package:

```sh
npm publish
```

-   Finish release

## Beta releases

-   Update `version` in `package.json` following [SemVer](https://semver.org/)
    -   e.g. `1.2.3` -> `1.3.0-beta.1`
-   Tag `develop` with new version number

-   Publish package:

```sh
npm publish --tag next
```
