import { db } from '@/db';
import { projects } from '@/db/schema';

async function main() {
    const now = Date.now();
    const dayInMs = 24 * 60 * 60 * 1000;

    const sampleProjects = [
        {
            name: 'E-commerce Website Redesign',
            description: 'Complete overhaul of the online store with modern UI/UX, improved checkout flow, and mobile optimization',
            clientId: null,
            status: 'in_progress',
            progressPercentage: 65,
            startDate: new Date(now - 30 * dayInMs),
            estimatedCompletion: new Date(now + 15 * dayInMs),
            actualCompletion: null,
            createdAt: new Date(now - 30 * dayInMs),
            updatedAt: new Date(now),
        },
        {
            name: 'Mobile App Development',
            description: 'Native iOS and Android app for inventory management with real-time sync and barcode scanning',
            clientId: null,
            status: 'planning',
            progressPercentage: 10,
            startDate: new Date(now + 5 * dayInMs),
            estimatedCompletion: new Date(now + 90 * dayInMs),
            actualCompletion: null,
            createdAt: new Date(now - 7 * dayInMs),
            updatedAt: new Date(now),
        },
        {
            name: 'Dashboard Analytics Platform',
            description: 'Custom analytics dashboard with real-time data visualization, automated reporting, and export functionality',
            clientId: null,
            status: 'completed',
            progressPercentage: 100,
            startDate: new Date(now - 60 * dayInMs),
            estimatedCompletion: new Date(now - 10 * dayInMs),
            actualCompletion: new Date(now - 5 * dayInMs),
            createdAt: new Date(now - 60 * dayInMs),
            updatedAt: new Date(now - 5 * dayInMs),
        },
    ];

    await db.insert(projects).values(sampleProjects);
    
    console.log(`✅ Projects seeder completed successfully - ${sampleProjects.length} projects seeded`);
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
