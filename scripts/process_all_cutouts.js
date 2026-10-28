const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicAssets = path.join(__dirname, '../public/assets');

async function removeConnectedBackground(filename, options = {}) {
  const filePath = path.join(publicAssets, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    return;
  }

  const tolerance = options.tolerance || 28;
  const feather = options.feather || 14;

  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  // Sample background color from corners & border midpoints
  const samplePoints = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [0, Math.floor(height / 2)],
    [width - 1, Math.floor(height / 2)],
    [Math.floor(width / 2), height - 1]
  ];

  let sumR = 0, sumG = 0, sumB = 0, count = 0;
  for (const [cx, cy] of samplePoints) {
    const idx = (cy * width + cx) * channels;
    sumR += data[idx];
    sumG += data[idx + 1];
    sumB += data[idx + 2];
    count++;
  }
  const bgR = Math.round(sumR / count);
  const bgG = Math.round(sumG / count);
  const bgB = Math.round(sumB / count);

  function colorDist(idx) {
    const dr = data[idx] - bgR;
    const dg = data[idx + 1] - bgG;
    const db = data[idx + 2] - bgB;
    return Math.sqrt(dr * dr + dg * dg + db * db);
  }

  // Visited array: 0 = unvisited, 1 = background/visited
  const visited = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0;
  let tail = 0;

  function pushPixel(x, y) {
    const pIdx = y * width + x;
    if (visited[pIdx]) return;
    const dIdx = pIdx * channels;
    const dist = colorDist(dIdx);
    if (dist <= tolerance + feather) {
      visited[pIdx] = 1;
      queue[tail++] = pIdx;
    }
  }

  // Seed borders
  for (let x = 0; x < width; x++) {
    pushPixel(x, 0);
    pushPixel(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    pushPixel(0, y);
    pushPixel(width - 1, y);
  }

  // BFS flood fill from borders inwards
  while (head < tail) {
    const pIdx = queue[head++];
    const x = pIdx % width;
    const y = Math.floor(pIdx / width);
    const dIdx = pIdx * channels;
    const dist = colorDist(dIdx);

    if (dist <= tolerance) {
      data[dIdx + 3] = 0; // completely transparent
    } else {
      const alphaFactor = (dist - tolerance) / feather;
      data[dIdx + 3] = Math.min(255, Math.max(0, Math.round(alphaFactor * 255)));
    }

    // 4-directional neighbors
    if (x > 0) pushPixel(x - 1, y);
    if (x < width - 1) pushPixel(x + 1, y);
    if (y > 0) pushPixel(x, y - 1);
    if (y < height - 1) pushPixel(x, y + 1);
  }

  // Overwrite with transparent PNG
  const tempPath = filePath + '.tmp.png';
  await sharp(data, {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile(tempPath);

  fs.renameSync(tempPath, filePath);
  console.log(`Clean transparent PNG created: ${filename} (bg: rgb(${bgR},${bgG},${bgB}))`);
}

// Special function for pencil sketches: convert near-white/cream paper background into pure alpha transparency
async function makeSketchTransparent(filename) {
  const filePath = path.join(publicAssets, filename);
  if (!fs.existsSync(filePath)) return;

  const { data, info } = await sharp(filePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / 3;

    // If pixel is light cream/white paper, make transparent; dark pencil strokes remain opaque
    if (brightness > 238) {
      data[i + 3] = 0;
    } else if (brightness > 190) {
      data[i + 3] = Math.round(((238 - brightness) / 48) * 255);
    }
  }

  const tempPath = filePath + '.tmp.png';
  await sharp(data, {
    raw: { width, height, channels: 4 }
  })
    .png()
    .toFile(tempPath);

  fs.renameSync(tempPath, filePath);
  console.log(`Sketch transparent PNG created: ${filename}`);
}

async function run() {
  console.log('Processing all assets into clean transparent PNGs...');

  // 1. Hero Jar & Pedestal
  await removeConnectedBackground('hero_jar_pedestal.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('hero_pedestal_jar.png', { tolerance: 32, feather: 16 });

  // 2. Bees & Mascots
  await removeConnectedBackground('bee_flying.png', { tolerance: 35, feather: 16 });
  await removeConnectedBackground('hero_bee_flight.png', { tolerance: 35, feather: 16 });
  await removeConnectedBackground('mascot_baby_bee.png', { tolerance: 35, feather: 16 });
  await removeConnectedBackground('mascot_bee_honey_pot.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('mascot_bee_footer_highres.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('mascot_bee_footer.png', { tolerance: 32, feather: 16 });

  // 3. About Us Dipper & Honey Jar
  await removeConnectedBackground('about_honey_dipper.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('about_dipper.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('about_jar_bees.png', { tolerance: 32, feather: 16 });

  // 4. Products Section Jars
  await removeConnectedBackground('product_center_jar.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('product_center_exact.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('product_peek_left.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('product_peek_left_exact.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('product_peek_right.png', { tolerance: 30, feather: 15 });
  await removeConnectedBackground('product_peek_right_exact.png', { tolerance: 30, feather: 15 });

  // 5. Best Seller 3 Jars
  await removeConnectedBackground('bestseller_exact_1.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('bestseller_exact_2.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('bestseller_exact_3.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('bestseller_sidr.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('bestseller_forest.png', { tolerance: 32, feather: 16 });
  await removeConnectedBackground('bestseller_acacia.png', { tolerance: 32, feather: 16 });

  // 6. Benefit Icons
  await removeConnectedBackground('icon_benefit_nutrients.png', { tolerance: 25, feather: 12 });
  await removeConnectedBackground('icon_benefit_bloodsugar.png', { tolerance: 25, feather: 12 });
  await removeConnectedBackground('icon_benefit_wound.png', { tolerance: 25, feather: 12 });
  await removeConnectedBackground('icon_benefit_support.png', { tolerance: 25, feather: 12 });

  // 7. Botanical Sketches
  await makeSketchTransparent('hero_botanical_right.png');
  await makeSketchTransparent('botanical_hero_left.png');
  await makeSketchTransparent('botanical_top_right.png');

  console.log('ALL background removal completed successfully!');
}

run().catch(console.error);
