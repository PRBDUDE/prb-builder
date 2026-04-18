<style>
    h1 {
        color: #2e9ca3;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        background-color: #e0edfb;
        width: fit-content;
        padding: 10px;
        border-radius: 40px;
        margin: 1rem auto;
    }

    h2 {
        color: #8cafd4;
        font-family: Arial, Helvetica, sans-serif;
    }

    h3 {
        color: #8cafd4;
        width: fit-content;
        padding-right: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #8cafd4;
    }

    h4 {
        background-color: #131314;
        padding-top: 10px;
        color: #8cafd4;
    }
</style>

# ![PRBDUDE](/assets/favicon.ico) prb-builder

The purpose of this project is to provide a set of *Angular* builders.

### Builders

#### patch-lib-package builder

The 'patch-lib-package' builder is used to patch the 'package.json' file of a library.
This builder is used to keep the 'package.json' file of a library up to date with the 'package.json'
file of the library project. So many times I have had to manually update the 'package.json' file of
a library project. This builder will do that for you.

The versions of the 'peerdependencies' in the library project will be updated to match the versions of the
'dependencies' in the primary project.json file.

The versions of the 'dependencies' in the library project will be updated to match the versions of the
'dependencies' in the primary project.json file.

*Note* that you must have a 'package.json' file in the library project which is used to publish the library.
This package has the 'peerdependencies' and 'dependencies' that you want to use in the library project.
The 'peerdependencies' are the dependencies that are required to exist in the project that uses the library.
The 'dependencies' are the dependencies that are used by the library project and the primary project.

## GitHub Repository

[https://github.com/prbdude/prb-builder](https://github.com/prbdude/prb-builder)

## Angular builders

- patch-lib-package

## Environment Setup

### Private NPM Registry

If your company has a private NPM registry, you should use it.

Examples of private *NPM* registries your company may use:

- Sonatype Nexus
- Artifactory (JFrog)
- GCP Artifact Registry
- AWS Artifact Registry

If you don't have a private NPM registry, and you would like to use a private *npm* registry,
you can use [Verdaccio](https://verdaccio.org/).
Keep in mind that Veradaccio is a *PRIVATE LOCAL NPM* registry and will not work with your
*CICD* pipeline.

Veradaccio can be setup on an IIS server https://verdaccio.org/docs/iss-server to make it
work with your *CICD* pipeline.

See the following for more information:
[VERADACCIO-SETUP.md](VERDACCIO-SETUP.md)

### Angular Project Configuration

Install the builder in the Angular project where you want to use it.

```bash
    npm install @prb/builder --save-dev
```

In the Angular project where you want to use the builder, add the following to the `angular.json` file.

#### patch-lib-package builder configuration

In the `angular.json` file, add the following to the `architect` section.`

```json
  "patch-lib-info": {
"builder": "@prb/builder:patch-lib-package",
"options": {
"libraryPackagePath": "lib/prb-lib/package.json",
"packagePath": "package.json"
}
}
```

Use the 'ng run' command to run the builder.

##### Example

Let's say you want to run the builder for the 'prb-lib' library.
The 'prb-lib' project contains a 'demo' application to test the library before publishing it to the *NPM* registry.

See the [BUILDER.md](./builder.md) for more information.
