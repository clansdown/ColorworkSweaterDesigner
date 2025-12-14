export class OPFS {
    private root: FileSystemDirectoryHandle;

    private constructor(root: FileSystemDirectoryHandle) {
        this.root = root;
    }

    static async create(): Promise<OPFS> {
        const root = await navigator.storage.getDirectory();
        return new OPFS(root);
    }

    async writeFile(path: string, content: string | Blob): Promise<void> {
        const fileHandle = await this.getFileHandle(path, true);
        const writable = await fileHandle.createWritable();
        await writable.write(content);
        await writable.close();
    }

    async readFile(path: string): Promise<string> {
        const fileHandle = await this.getFileHandle(path);
        const file = await fileHandle.getFile();
        return await file.text();
    }

    async readFileAsBlob(path: string): Promise<Blob> {
        const fileHandle = await this.getFileHandle(path);
        const file = await fileHandle.getFile();
        return file;
    }

    async listDirectory(path: string = ''): Promise<string[]> {
        const dirHandle = path ? await this.getDirectoryHandle(path) : this.root;
        const names: string[] = [];
        for await (const [name] of dirHandle.entries()) {
            names.push(name);
        }
        return names;
    }

    async createDirectory(path: string): Promise<void> {
        await this.getDirectoryHandle(path, true);
    }

    async delete(path: string): Promise<void> {
        const parts = path.split('/').filter(p => p);
        if (parts.length === 0) throw new Error('Cannot delete root');
        const parentPath = parts.slice(0, -1).join('/');
        const parent = parentPath ? await this.getDirectoryHandle(parentPath) : this.root;
        await parent.removeEntry(parts[parts.length - 1]);
    }

    private async getDirectoryHandle(path: string, create = false): Promise<FileSystemDirectoryHandle> {
        const parts = path.split('/').filter(p => p);
        let current = this.root;
        for (const part of parts) {
            current = await current.getDirectoryHandle(part, { create });
        }
        return current;
    }

    private async getFileHandle(path: string, create = false): Promise<FileSystemFileHandle> {
        const parts = path.split('/').filter(p => p);
        if (parts.length === 0) throw new Error('Invalid path');
        const dirPath = parts.slice(0, -1).join('/');
        const dirHandle = dirPath ? await this.getDirectoryHandle(dirPath, create) : this.root;
        const fileName = parts[parts.length - 1];
        return await dirHandle.getFileHandle(fileName, { create });
    }
}