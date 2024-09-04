const formintakeService = require('../services/formintakeService.js');
const PotentialCustomers = require('../models/PotentialCustomer');

exports.getAllPotentialCustomers = async (req, res, next) => {
    try {
        const potentialCustomers = await formintakeService.getAllPotentialCustomers();
        res.status(201).json({ success: true, data: potentialCustomers });
    } catch (error) {
        next(error); // Pass error to the errorHandler middleware
    }
};

exports.fillform = async (req, res, next) => {
    try {
        const {
            potentialpustomerID,
            address,
            preferreddt,
            delinerynote,
            alternatecn,
            alternatecp,
            alternateca,
            allergies
        } = req.body;

        const data = {
            potentialpustomerID,
            address,
            preferreddt,
            delinerynote,
            alternatecn,
            alternatecp,
            alternateca,
            allergies
        };

        // Directly update the relevant customer using the service layer
        const result = await formintakeService.fillform(data);

        if (result.success) {
            res.status(200).json({ success: true, message: result.message, data: result.data });
        } else {
            res.status(404).json({ success: false, message: result.message });
        }
    } catch (error) {
        next(error); // Pass error to the errorHandler middleware
    }
};
