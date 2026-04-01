import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const PRODUCTS = [
  { name: 'BPC-157', dosage: '5mg', price: 34.99, image: 'https://picsum.photos/seed/bpc157/400/400', category: 'Healing & Recovery', purity: '99.4%', description: 'Known for accelerated healing.' },
  { name: 'TB-500', dosage: '5mg', price: 39.99, image: 'https://picsum.photos/seed/tb500/400/400', category: 'Healing & Recovery', purity: '99.2%', description: 'Supports injury recovery.' },
  { name: 'Semaglutide', dosage: '5mg', price: 89.99, image: 'https://picsum.photos/seed/sema/400/400', category: 'Weight Loss', purity: '99.8%', description: 'Effective metabolic regulator.' },
  { name: 'CJC-1295 DAC', dosage: '2mg', price: 29.99, image: 'https://picsum.photos/seed/cjc/400/400', category: 'Muscle Growth', purity: '99.1%', description: 'Long-lasting secretagogue.' },
  { name: 'Ipamorelin', dosage: '5mg', price: 32.99, image: 'https://picsum.photos/seed/ipa/400/400', category: 'Muscle Growth', purity: '99.5%', description: 'Gentle growth hormone stimulator.' },
  { name: 'Tirzepatide', dosage: '10mg', price: 119.99, image: 'https://picsum.photos/seed/tirz/400/400', category: 'Weight Loss', purity: '99.7%', description: 'Dual agonist for comprehensive weight management.' },
  { name: 'Epitalon', dosage: '10mg', price: 45.99, image: 'https://picsum.photos/seed/epi/400/400', category: 'Anti-Aging', purity: '99.3%', description: 'Telomerase activator for cellular rejuvenation.' },
];

async function main() {
  console.log('Seeding products...');
  for (const product of PRODUCTS) {
    const existing = await prisma.product.findFirst({ where: { name: product.name } });
    if (!existing) {
      await prisma.product.create({ data: product });
    }
  }
  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
