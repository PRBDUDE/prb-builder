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

# Verdaccio *NPM* Setup

If your company does not have a private *npm* registry, you can use Verdaccio to publish your package to a private registry.

If your company uses a private registry, I recommend using it instead of Verdaccio.

Examples of private *NPM* registries your company may use:

- Sonatype Nexus
- Artifactory (JFrog)
- GCP Artifact Registry
- AWS Artifact Registry

## Private Verdaccio Node Package Registry

- [Verdaccio Home Page](https://verdaccio.org/)

- [Verdaccio Server Configuration](https://verdaccio.org/docs/server-configuration)

- [Verdaccio Reverse Proxy Setup](https://verdaccio.org/docs/reverse-proxy)

- [Verdaccio Plugins](https://verdaccio.org/docs/en/plugins)

- [Verdaccio CLI](https://verdaccio.org/docs/en/cli)

Verdaccio is a lightweight private npm proxy registry.

*Note* that if you configure your npm client to use the Verdaccio registry,
you will need to run `verdaccio` to access the public *npm* registry.
This is because Verdaccio is a proxy registry, not a registry itself.

#### Install

```bash
    npm install -g verdaccio
```

#### Run

In a separate terminal (Mac) or PowerShell (Windows) window

```bash
    veradaccio
```

#### Publish

In a terminal, cd to the "*dist*" folder and run

```bash
    npm publish --registry http://localhost:4873/
```

#### Unpublish

If you mess up and publish a version that you don't want, you can unpublish it.

In a terminal run

```bash
    npm unpublish @prb/builder --registry http://localhost:4873/ --force
```

To unpublish a specific version (0.0.1), run

```bash
    npm unpublish @prb/builder@0.0.1 --registry http://localhost:4873/ --force
```
