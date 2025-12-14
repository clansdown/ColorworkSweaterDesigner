/**
 * Storage utility for Origin Private File System (OPFS)
 * Provides easy access to browser's private file system storage
 */

export class OPFSStorage {
  private root: FileSystemDirectoryHandle | null = null;

  /**
   * Initialize the OPFS storage
   */
  async initialize(): Promise<void> {
    if ('storage' in navigator && 'getDirectory' in navigator.storage) {
      this.root = await navigator.storage.getDirectory();
    } else {
      throw new Error('OPFS is not supported in this browser');
    }
  }

  /**
   * Check if OPFS is supported
   */
  static isSupported(): boolean {
    return 'storage' in navigator && 'getDirectory' in navigator.storage;
  }

  /**
   * Write data to a file
   */
  async writeFile(filename: string, data: string | ArrayBuffer): Promise<void> {
    if (!this.root) {
      await this.initialize();
    }
    
    const fileHandle = await this.root!.getFileHandle(filename, { create: true });
    const writable = await fileHandle.createWritable();
    
    await writable.write(data);
    await writable.close();
  }

  /**
   * Read data from a file
   */
  async readFile(filename: string): Promise<string> {
    if (!this.root) {
      await this.initialize();
    }
    
    try {
      const fileHandle = await this.root!.getFileHandle(filename);
      const file = await fileHandle.getFile();
      return await file.text();
    } catch (error) {
      throw new Error(`File not found: ${filename}`);
    }
  }

  /**
   * Delete a file
   */
  async deleteFile(filename: string): Promise<void> {
    if (!this.root) {
      await this.initialize();
    }
    
    await this.root!.removeEntry(filename);
  }

  /**
   * List all files in the root directory
   */
  async listFiles(): Promise<string[]> {
    if (!this.root) {
      await this.initialize();
    }
    
    const files: string[] = [];
    // @ts-ignore - async iterator
    for await (const entry of this.root!.values()) {
      if (entry.kind === 'file') {
        files.push(entry.name);
      }
    }
    return files;
  }

  /**
   * Check if a file exists
   */
  async fileExists(filename: string): Promise<boolean> {
    if (!this.root) {
      await this.initialize();
    }
    
    try {
      await this.root!.getFileHandle(filename);
      return true;
    } catch {
      return false;
    }
  }
}

// Export a singleton instance
export const storage = new OPFSStorage();
