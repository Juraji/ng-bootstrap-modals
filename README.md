[![GitHub release](https://img.shields.io/github/release/juraji/ng-bootstrap-modals.svg)](https://GitHub.com/juraji/ng-bootstrap-modals/releases/)
![Library build badge](https://github.com/juraji/ng-bootstrap-modals/actions/workflows/package.workflow.yaml/badge.svg)
![Demo app build badge](https://github.com/juraji/ng-bootstrap-modals/actions/workflows/demo-app.workflow.yaml/badge.svg)

# NG Bootstrap Modals

## What is it for
Basically a replacement for [NG Bootstrap's](https://github.com/ng-bootstrap/ng-bootstrap) modals implementation.

__For a demo's and examples visit [the demo site](https://juraji.github.io/ng-bootstrap-modals)__.

### Why?
__NG Bootstrap does a great job of abstracting [Bootstrap's](https://getbootstrap.com/) controls and widgets.__

The only thing I do not agree on is their implementation of the modals:
1. Direct access to the modal component's instance to inject data (inputs).
2. No clear separation in api of how a modal was completed (dismiss or resolved)
3. The use of entry components
4. Modal components use DI injector of the module where they were spawned.

This library tries to fix these issues by merging NG Bootstrap's implementation with the one from [Angular Material](https://material.angular.io/).
1. It uses (encapsulated) DI injector to pass settings and data to the hosted modals
2. The `ModalRef` now has the following outputs:
    * `onResolve: Observable<T>` emits and complets when the modal resolves with a value.
    * `onDismiss: Observable<void>` emits and completes when the modal is dismissed by the user pressing escape, clicking the close button or outside the container.
    * `onComplete: Observable<void>` emits and completes on resolved and dismissed.
3. You no longer need to export your modal component as entry component. The way of constructing components is completely different.
4. Injection is now inherited from the module which exports the component. 

## Installation instructions

### Preconditions
Peer dependencies:
* @angular/common: `^11.2.1`
* @angular/core: `^11.2.1`
* @angular/animations: `^11.2.1`
* bootstrap: `~4.5.0`

### Github packages
You will need to authorize to Github packages for the `@juraji` scope.
If you have never done this before, read up on [Configuring npm for use with GitHub Packages](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages).

Just for reference, here's what my `.npmrc` looks like:
```
@juraji:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=MY_PERSONAL_ACCESS_TOKEN
```
The above configuration is the same for NPM and Yarn.
It will route NPM and yarn to only use Github packages for the `@juraji` scope.

For more information on Github personal access tokens check [your developer settings](https://github.com/settings/tokens).

### Installation

1. Install `@juraji/ng-bootstrap-modals`.
    * For Yarn use `yarn add @juraji/ng-bootstrap-modals`.
    * For NPM use `npm install @juraji/ng-bootstrap-modals`.
2. Add `ModalModule.forRoot()` to your root module.
3. Use the `Modals` service to open components as modals.

For examples visit [the demo site](https://juraji.github.io/ng-bootstrap-modals)!
