/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import { getSocieteInfo } from './societe-info.util';

/**
 * Router Definition
 */
export const router = express.Router();

/**
 * Controller Definitions
 */

// GET societe-info/:siret
router.get("/:siret", async (req: Request, res: Response) => {
    try {
        const siret = req.params.siret;
        // Calling an external api
        const societeInfos = await getSocieteInfo(siret);
        const phone = societeInfos.contacts.phones[0];
        if (!phone) res.status(404).send('No phone number phone for this society');

        res.status(200).send({
            siret: siret,
            name: societeInfos.organization.name,
            phoneNumber: societeInfos.contacts.phones[0].value,
        });
    } catch (e) {
        res.status(e.statusCode).send(e.message);
    }
});
