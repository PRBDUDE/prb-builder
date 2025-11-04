<style>
    h1 {
        background-color: #131314;
        color: #13b6e7;
        padding: 10px;
        border-bottom: 1px solid #13b6e7;
    }

    h2 {
        background-color: #131314;
        padding: 10px;
        color: #13b6e7;
    }

    h3 {
        background-color: #cce1e7;
        padding: 8px;
        color: #000000;
    }

    h4 {
        background-color: #131314;
        padding-top: 10px;
        color: #13b6e7;
    }
</style>

# Builder

This builder was set up to be installed as an *NPM* package.

The builder source code is located in the *src* folder.

The package to be published to *NPM* is located in the *dist* folder.

## Setup

Builders are placed in the *builders* folder.
Currently, there is only one builder, *patch-lib-package*.

A *builders.json* file is used to define the builders.
This file is placed in the 'builder' folder.
The *builders.json* file will be used by the *Angular CLI* to find the builders.

The *builders.json* file contains the following content:

```json
{
  "builders": {
    "patch-lib-package": {
      "implementation": "./patch-lib-package",
      "schema": "./patch-lib-package/schema.json",
      "description": "Patch library package"
    }
  }
}
```

Other builders can be added to the *builders.json* file.

```json
{
  "builders": {
    "patch-lib-package": {
      "implementation": "./patch-lib-package",
      "schema": "./patch-lib-package/schema.json",
      "description": "Patch library package"
    },
    "other-builder": {
      "implementation": "./other-builder",
      "schema": "./other-builder/schema.json",
      "description": "Other builder"
    } 
  }
}
```

For each builder in the *builders.json* file, a folder with the same name is created in the *src/builder* folder.
Each builder contains the following files:

- *index.ts*
- *schema.json*

## index.ts

This file contains the builder implementation code. All logic for the builder is contained in this file.

## schema.json

This file contains the schema for the builder options.

```json
{
  "$schema": "http://json-schema.org/schema",
  "type": "object",
  "properties": {
    "libraryPackagePath": {
      "description": "The name of the file to patch.",
      "type": "string",
      "default": "src/assets/build.json"
    },
    "packagePath": {
      "description": "The full path to the package.json file in case there are multiple",
      "type": "string",
      "default": "package.json"
    }
  }
}
```

## .npmrc

Create an *.npmrc* file in the root of the project with the following content:

```ignorelang
    registry=http://localhost:4873/
```

In this case we are using a local *NPM* registry.
You can use any other registry you want.
This ensures that the builder is published to the local registry and not to the public registry.

## Publishing

Once the project has been built, the builder can be published.
To publish the builder, open a terminal and run the following commands:

```bash
    cd dist/builder
    npm publish
```

