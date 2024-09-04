const PotentialCustomers = require('../models/PotentialCustomer');
const CustomError = require('../utils/CustomError');

const getAllPotentialCustomers = async () => {
    try {
        const potentialCustomers = await PotentialCustomers.findAll();
        return potentialCustomers;
    } catch (error) {
        throw new CustomError(`Error fetching potential customers: ${error.message}`, 500);
    }
};

const fillform = async (data) => {
    try {
        // Find the potential customer by ID
        const customer = await PotentialCustomers.findByPk(parseInt(data.potentialpustomerID));

        if (!customer) {
            // If no matching customer is found, return an error
            return { success: false, message: 'Potential customer not found.' };
        }

        // Check if the customer status is already "GenCreds"
        if (customer.Status === 'GenCreds') {
            // If the status is "GenCreds", return a message indicating that the form is already filled
            return { success: false, message: 'Form already filled and credentials generated for this customer.' };
        }

        // If the status is not "GenCreds", update the customer's data
        customer.Address = data.address || customer.Address;
        customer.PreferredDeliveryTime = data.preferreddt || customer.PreferredDeliveryTime;
        customer.DeliveryNote = data.delinerynote || customer.DeliveryNote;
        customer.AlternateContactName = data.alternatecn || customer.AlternateContactName;
        customer.AlternateContactPhone = data.alternatecp || customer.AlternateContactPhone;
        customer.AlternateContactAddress = data.alternateca || customer.AlternateContactAddress;
        customer.Allergies = data.allergies || customer.Allergies;
        customer.Status = 'GenCreds';

        // Save the updated customer data
        await customer.save();

        // Return the updated customer data
        return { success: true, message: 'Customer data updated successfully', data: customer };
    } catch (error) {
        throw new CustomError(`Error saving data: ${error.message}`, 500);
    }
};

module.exports = {
    getAllPotentialCustomers,
    fillform
};
