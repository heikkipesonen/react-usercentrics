## [1.4.0](https://github.com/s-group-dev/react-usercentrics/compare/v1.3.1...v1.4.0) (2023-03-02)


### Features

* detect Usercentrics events earlier by extracting singleton service ([#13](https://github.com/s-group-dev/react-usercentrics/issues/13)) ([74cffd6](https://github.com/s-group-dev/react-usercentrics/commit/74cffd608a16a3f04c650a229bec588069ddc6be))

## [1.3.1](https://github.com/s-group-dev/react-usercentrics/compare/v1.3.0...v1.3.1) (2022-12-21)


### Bug Fixes

* the `useHasServiceConsent` hook works better with SSR hydration ([d6372bb](https://github.com/s-group-dev/react-usercentrics/commit/d6372bbc702aed98e0be4d120108d5bfb22f6feb))

## [1.3.0](https://github.com/s-group-dev/react-usercentrics/compare/v1.2.0...v1.3.0) (2022-11-28)


### Features

* add hook to check if user has interacted with the CMP ([ea889eb](https://github.com/s-group-dev/react-usercentrics/commit/ea889ebca4dc69beba38c5b97ef3f543cb7be610))

## [1.2.0](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.7...v1.2.0) (2022-11-25)


### Features

* the `useHasServiceConsent` hook returns `null` if consent status is unknown (not yet loaded) ([69d0917](https://github.com/s-group-dev/react-usercentrics/commit/69d0917cd43109cf3859eb2fcbce4b230c8f3ef0))

## [1.1.7](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.6...v1.1.7) (2022-11-25)


### Bug Fixes

* **ci:** update GitHub Actions ([f3ad936](https://github.com/s-group-dev/react-usercentrics/commit/f3ad93639a8b3cb0808605e5a99de558a84275cb))

## [1.1.6](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.5...v1.1.6) (2022-11-25)


### Bug Fixes

* only read from localStorage when CMP has not loaded ([fbc5151](https://github.com/s-group-dev/react-usercentrics/commit/fbc51511768a1bba803af886ee63d056ffd3233e))


### Performance Improvements

* read consents from localStorage only once in the Provider ([acf1a2c](https://github.com/s-group-dev/react-usercentrics/commit/acf1a2ca2a2c7871ab36544555db8468dc2a4d9f))

## [1.1.5](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.4...v1.1.5) (2022-11-24)


### Performance Improvements

* try to read consent from localStorage before window.UC_UI ([ce012d0](https://github.com/s-group-dev/react-usercentrics/commit/ce012d0673b2cfbe8d0cfd07721d7cfd17055931))

## [1.1.4](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.3...v1.1.4) (2022-08-11)


### Bug Fixes

* **deps:** update dependencies ([d0c1fae](https://github.com/s-group-dev/react-usercentrics/commit/d0c1fae95f5414bf56057a2e1bd47146a567e209))

## [1.1.3](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.2...v1.1.3) (2022-08-04)


### Bug Fixes

* **deps:** update dependencies ([b830bad](https://github.com/s-group-dev/react-usercentrics/commit/b830badba769ddfc20e173888218f69a8d7d073d))

## [1.1.2](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.1...v1.1.2) (2022-06-27)


### Bug Fixes

* read type from `augmented.d.ts` to enable augmentation ([8b41d79](https://github.com/s-group-dev/react-usercentrics/commit/8b41d79b3e62a37164db8aaebcfdf9ce591f9d55))

## [1.1.1](https://github.com/s-group-dev/react-usercentrics/compare/v1.1.0...v1.1.1) (2022-06-27)


### Bug Fixes

* move type augmentation to separate file to make it easier ([931673b](https://github.com/s-group-dev/react-usercentrics/commit/931673bc7cac2ae8db540da51999f54bb2c72dbe))

## [1.1.0](https://github.com/s-group-dev/react-usercentrics/compare/v1.0.1...v1.1.0) (2022-06-27)


### Features

* add option for augmenting ServiceId type ([64192b9](https://github.com/s-group-dev/react-usercentrics/commit/64192b9d2b9c0ccb3447a269cbfd891d6fbc7bc8))

## [1.0.1](https://github.com/s-group-dev/react-usercentrics/compare/v1.0.0...v1.0.1) (2022-06-23)


### Bug Fixes

* add `*.js` file extensions to ESM imports ([f476727](https://github.com/s-group-dev/react-usercentrics/commit/f4767274ddcbfe7a1639914109205eccae3412ff))

## 1.0.0 (2022-06-23)


### Features

* initial commit ([526bd97](https://github.com/s-group-dev/react-usercentrics/commit/526bd975dd894afba029ea5e1a567f4334909e8e))
