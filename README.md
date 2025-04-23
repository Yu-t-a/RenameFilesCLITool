# สร้างไฟล์ README.md ที่มีเนื้อหาตามที่ผู้ใช้ต้องการ
readme_content = """# 🔁 TypeScript CLI - Rename Files Tool

A simple, lightweight, and type-safe CLI tool built with TypeScript to **batch rename files** in a folder based on **file type** and a **custom prefix**. Perfect for file organization, bulk renaming, and automation tasks.

---

## 📦 Features

- ✅ Rename all files in a specified folder
- 🏷️ Add custom prefix to each file
- 🎯 Filter by file extension (e.g. `.jpg`, `.png`, `.pdf`)
- ⚡ Fully built with TypeScript (no external frameworks)
- 🛠️ Easy to extend for additional features

---

## 🚀 Getting Started

### 1. Clone the repository


```bash
npm init -y
npm install typescript ts-node @types/node
npx tsc --init
```

```bash
npm install --save-dev @types/node
```

tsconfig.json
```bash
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2020",
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```

```bash
ts-node rename.ts ./images --prefix=new_
```

