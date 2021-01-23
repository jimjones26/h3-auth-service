const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/create-client', authController.createClient);
router.post('/invite-practitioner', authController.invitePractitioner);
router.post('/session', authController.session);
router.post('/refresh-tokens', authController.refresh_tokens);
router.post('/revoke-tokens', authController.revoke_tokens);

module.exports = router;
