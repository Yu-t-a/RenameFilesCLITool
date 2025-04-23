# 🔁 TypeScript CLI - Rename Files Tool

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
sudo apt update
sudo apt install nodejs npm -y
node -v
npm -v
```

Global
```bash
npm install -g typescript ts-node
```

Local
```bash
npm install typescript ts-node @types/node
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
ts-node rename.ts ./images --type=.jpg --prefix=new_1
```

