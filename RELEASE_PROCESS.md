# Release process

## Regular releases

TODO

## Beta releases

-   Merging to `develop` will trigger a new bild in Azure DevOps
-   Successful build will trigegr a new release in Azure DevOps
-   Release will need a manual approval:
    -   In 'Variables' tab, click 'Edit' > 'Edit release', set npmToken to OTP token for NPM, save
    -   Approve release
