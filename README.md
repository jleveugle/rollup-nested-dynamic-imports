# Rollup-nested-dynamic-imports

## Introduction

I created this repository to explain an issue between rollup 0.66 and rollup >= 1.

## Reproduce the issue

First of all, clone and install these repository:

```bash
git clone https://github.com/jleveugle/rollup-nested-dynamic-imports.git
cd rollup-nested-dynamic-imports
```

Checkout the branch `rollup-0.66` and install the project:

```bash
npm i
```

Try to build the project:

```bash
npm start
```

It should result to:

```bash
➜  rollup-nested-dynamic-imports git:(rollup-0.66) npm start

> rollup-nested-dynamic-imports@0.0.0 start /Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports
> rollup -c


index.js → ./dist...
created ./dist in 19ms
```

You can test the project if you want, it should display "foobar":

```sh
➜  rollup-nested-dynamic-imports git:(rollup-0.66) ✗ node dist/index.js
foobar
```

Checkout the branch `master`, and launch an installation to install rollup@^1.1.0

```sh
npm i
npm start
```

The build should fail, with this kind of error:

```sh
➜  rollup-nested-dynamic-imports git:(master) npm start
$ rollup -c

index.js → ./dist...
[!] Error: Cannot split a chunk that has already been edited (1:18 – "import('/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/bar')")
Error: Cannot split a chunk that has already been edited (1:18 – "import('/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/bar')")
    at MagicString._splitChunk (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:1692:9)
    at MagicString._split (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:1682:46)
    at MagicString.overwrite (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:1448:7)
    at Import.renderFinalResolution (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:11985:18)
    at Chunk.finaliseDynamicImports (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:15202:30)
    at Chunk.render (/Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:15786:14)
    at /Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:18057:38
    at Array.map (<anonymous>)
    at /Users/jleveugle/Documents/Work/github/jleveugle/rollup-nested-dynamic-imports/node_modules/rollup/dist/rollup.js:18055:47
    at <anonymous>

error Command failed with exit code 1.
```

See you :)
