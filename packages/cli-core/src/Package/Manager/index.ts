export interface PackageManagerCommands {
    install: string;
    add: string;
    update: string;
    remove: string;
    saveFlag: string;
    saveDevFlag: string;
}

export enum PackageManager {
    NPM = 'npm',
    YARN = 'yarn',
}

export class PackageManagerFactory {
  public static create() {
    // TODO[mattmark] can I abstract to shared space for runner and package management
  }

  public static async find() {
    // return NpmPackageManager or YarnPackageManagerarn based on presence of lock
  }
}