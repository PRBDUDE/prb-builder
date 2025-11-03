import {createBuilder} from "@angular-devkit/architect";
import {getSystemPath, JsonObject, normalize} from "@angular-devkit/core";
import * as path from "node:path";
import {readFileSync, writeFileSync} from "node:fs";

interface BuildOptions extends JsonObject {
    libraryPackagePath: string;
    packagePath: string;
}

export default createBuilder((options: BuildOptions, ctx): any => {
    ctx.logger.info("Patching library package " + options.libraryPackagePath + "...");
    let libaryPackagePath = "";
    let libraryPackageJsonContent: any;
    const filePath = path.dirname(`${options.libraryPackagePath}`);
    try {
        libaryPackagePath = `${getSystemPath(normalize(ctx.workspaceRoot))}/${options.libraryPackagePath}`;
        libraryPackageJsonContent = JSON.parse(readFileSync(libaryPackagePath, "utf-8"));
        // ctx.logger.info("Found library package.json: " + JSON.stringify(libraryPackageJsonContent, undefined, 2));
    } catch (error) {
        ctx.logger.error("Unable to read \"" + options.libraryPackagePath + "\": " + error.message);
        return {
            success: false
        };
    }
    let packageContent = "";
    try {
        packageContent = readFileSync(`${getSystemPath(normalize(ctx.workspaceRoot))}/${options.packagePath}`, "utf-8");
        // ctx.logger.info("Found package.json: " + packageContent);
    } catch (error) {
        ctx.logger.error("Unable to read \"" + options.packagePath + "\": " + error.message);
    }
    for (const key in libraryPackageJsonContent) {
        if (key === "version") {
            libraryPackageJsonContent[key] = JSON.parse(packageContent).version;
        }
    }
    for (const key in libraryPackageJsonContent.dependencies) {
        libraryPackageJsonContent.dependencies[key] = JSON.parse(packageContent).dependencies[key];
    }
    for (const key in libraryPackageJsonContent.peerDependencies) {
        libraryPackageJsonContent.peerDependencies[key] = JSON.parse(packageContent).dependencies[key];
    }
    ctx.logger.info("Writing library package.json: " + JSON.stringify(libraryPackageJsonContent, undefined, 2));
    writeFileSync(libaryPackagePath, JSON.stringify(libraryPackageJsonContent, undefined, 2), "utf-8");
    return {
        success: true,
    }
});
