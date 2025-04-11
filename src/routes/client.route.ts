import {Request, Response, Router} from 'express';
import prisma from '../prisma';

const router = Router();

router.post('/', async (req, res) => {
    const {name, email, userId} = req.body;

    if (!name || !email || !userId) {
        res.status(400).send({error: 'Name, email, and userId are required'});
    }

    try {
        const client = await prisma.client.create({
            data: {
                name,
                email,
                userId,
            },
        });

        res.status(201).json(client);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(500).json({error: 'Internal server error', details: error});
    }
});

export default router;
