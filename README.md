# NG Bootstrap Modals

## What is it for
Basically a replacement for [NG Bootstrap's](https://github.com/ng-bootstrap/ng-bootstrap) modals implementation.

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
3. You no longer need to export your modal component as entry component. The way of constructing components is completely different
4. Injection is now inherited from the module which exports the component. 
