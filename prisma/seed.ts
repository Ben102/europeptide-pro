import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { CATALOG, productImage } from '../lib/products-catalog';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log(`Seeding ${CATALOG.length} products...`);
  let created = 0;
  let updated = 0;
  const seen = new Set<string>();

  for (const p of CATALOG) {
    if (seen.has(p.name)) continue;
    seen.add(p.name);

    const existing = await prisma.product.findFirst({ where: { name: p.name } });
    const data = { ...p, image: productImage(p.name) };

    if (existing) {
      await prisma.product.update({ where: { id: existing.id }, data });
      updated++;
    } else {
      await prisma.product.create({ data });
      created++;
    }
  }

  console.log(`Seed complete. Created: ${created}, updated: ${updated}, total unique: ${seen.size}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
