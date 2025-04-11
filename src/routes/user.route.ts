import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

router.post('/', async (req, res) => {
    const { email, name } = req.body;

    try {
        const user = await prisma.user.create({
            data: { email, name },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'User creation failed', details: error });
    }
});

export default router;
