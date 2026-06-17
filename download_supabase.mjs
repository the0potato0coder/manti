import fs from 'fs';
import path from 'path';
import https from 'https';

const filesToProcess = [
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/app/upcoming-projects/upcoming-projects-client.tsx',
  'src/app/layout.tsx',
  'src/app/home-client.tsx',
  'src/app/about/team-slider.tsx'
];

const publicDir = 'public/supabase';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const urlRegex = /https:\/\/slelguoygbfzlpylpxfs\.supabase\.co\/storage\/v1\/(render\/image|object)\/public\/[^"'\s`]+/g;
  
  for (const file of filesToProcess) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) {
      console.log(`Skipping ${file}, not found`);
      continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    const matches = [...content.matchAll(urlRegex)];
    
    for (const matchObj of matches) {
      const url = matchObj[0];
      const urlObj = new URL(url);
      let filename = path.basename(urlObj.pathname);
      
      // If there's a width parameter, it might be a resized version
      if (urlObj.searchParams.has('width')) {
         const ext = path.extname(filename) || '.png';
         const base = path.basename(filename, ext);
         filename = `${base}-${urlObj.searchParams.get('width')}${ext}`;
      }
      
      // Sanitize filename
      filename = filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
      
      const localPath = path.join(publicDir, filename);
      const publicUrl = `/supabase/${filename}`;
      
      if (!fs.existsSync(localPath)) {
        console.log(`Downloading ${filename}...`);
        try {
          await download(url, localPath);
        } catch(e) {
          console.error(`Failed to download ${url}`, e);
          continue; // Don't replace if download fails
        }
      }
      
      // Replace all occurrences in the content
      content = content.split(url).join(publicUrl);
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}

run().catch(console.error);
