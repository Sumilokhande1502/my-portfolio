const fs = require('fs').promises;
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IGNORED_DIRS = ['.git', 'node_modules', 'dist', 'build', '.next'];
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.html']);

async function walk(dir) {
  let results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.includes(entry.name)) continue;
      results = results.concat(await walk(full));
    } else if (entry.isFile()) {
      if (EXTENSIONS.has(path.extname(entry.name))) results.push(full);
    }
  }
  return results;
}

function stripCssComments(input) {
  return input.replace(/\/\*[\s\S]*?\*\
}

function stripHtmlComments(input) {
  return input.replace(/<!--([\s\S]*?)-->/g, '');
}

function stripCommentsFromCode(input) {
  
  let out = '';
  const len = input.length;
  let i = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let prev = '';

  while (i < len) {
    const ch = input[i];
    const nxt = input[i + 1];

    
    if (!inSingle && !inDouble && !inTemplate) {
      
      if (ch === '"') {
        inDouble = true;
        out += ch;
        i++;
        continue;
      }
      if (ch === "'") {
        inSingle = true;
        out += ch;
        i++;
        continue;
      }
      if (ch === '`') {
        inTemplate = true;
        out += ch;
        i++;
        continue;
      }
      
      if (ch === '/' && nxt === '*') {
        
        i += 2;
        while (i < len && !(input[i] === '*' && input[i + 1] === '/')) i++;
        i += 2; 
        continue;
      }
      
      if (ch === '/' && nxt === '/') {
        i += 2;
        while (i < len && input[i] !== '\n') i++;
        continue;
      }
      
      out += ch;
      i++;
    } else {
      
      out += ch;
      if (ch === '\\') {
        
        if (i + 1 < len) {
          out += input[i + 1];
          i += 2;
          continue;
        }
      }
      if (inDouble && ch === '"' && prev !== '\\') {
        inDouble = false;
      } else if (inSingle && ch === "'" && prev !== '\\') {
        inSingle = false;
      } else if (inTemplate && ch === '`' && prev !== '\\') {
        inTemplate = false;
      }
      prev = ch;
      i++;
    }
  }
  return out;
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  let content = await fs.readFile(file, 'utf8');
  let newContent = content;
  try {
    if (ext === '.css' || ext === '.scss') {
      newContent = stripCssComments(content);
    } else if (ext === '.html') {
      newContent = stripHtmlComments(content);
    } else {
      
      newContent = stripCommentsFromCode(content);
    }
  } catch (err) {
    console.error('Failed to process', file, err);
    return false;
  }

  if (newContent !== content) {
    await fs.writeFile(file, newContent, 'utf8');
    return true;
  }
  return false;
}

(async () => {
  try {
    const files = await walk(ROOT);
    console.log('Found', files.length, 'files to inspect');
    let changed = 0;
    for (const f of files) {
      const ok = await processFile(f);
      if (ok) changed++;
    }
    console.log('Modified', changed, 'files');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
