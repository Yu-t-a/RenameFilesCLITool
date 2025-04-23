import * as fs from 'fs';
import * as path from 'path';


function renameFilesInFolder(folderPath: string,fileType: string, prefix: string): void {
  if (!fs.existsSync(folderPath)) {
    console.error('❌ Folder not found:', folderPath);
    return;
  }

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (ext === fileType.toLowerCase()) {
      const oldPath = path.join(folderPath, file);
      const newName = `${prefix}${file}`;
      const newPath = path.join(folderPath, newName);

      if (fs.lstatSync(oldPath).isFile()) {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ Renamed: ${file} → ${newName}`);
      }
    }
  }
}

const [,, folderArg, typeArg, prefixArg] = process.argv;

if (!folderArg || !typeArg?.startsWith('--type=') || !prefixArg?.startsWith('--prefix=')) {
  console.log('Usage: ts-node rename.ts <folderPath> --type=.jpg --prefix=new_');
  process.exit(1);
}

const fileType = typeArg.split('=')[1];
const prefix = prefixArg.split('=')[1];

renameFilesInFolder(folderArg, fileType, prefix);
