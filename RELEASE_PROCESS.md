# Release process

## Regular releases

-   Update `version` in `package.json` using [SemVer](https://semver.org/)
    -   e.g. `1.2.3` -> `1.3.0`
-   Create new Gitflow release with new version number, open new pull request, finish release when approved
-   Push `master`, will trigger new build in Azure DevOps

## Beta releases

-   Update `version` in `package.json` using [SemVer](https://semver.org/)
    -   e.g. `1.2.3` -> `1.3.0-beta.0`
-   Tag `develop` with new version number
-   Push `develop`, will trigger new build in Azure DevOps

## Release approval

-   Successful build will trigger a new release in Azure DevOps
-   Release will need a manual approval:
    -   You'll only have 30s before the OTP times out, so have everything open in tabs etc.
    -   In 'Variables' tab, click 'Edit' > 'Edit release', set npmToken to OTP token for NPM, save
    -   Approve release
