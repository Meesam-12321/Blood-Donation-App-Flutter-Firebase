const bcrypt = require('bcrypt');
const CustomError = require('../utils/CustomError.js');
const potentialCustomerService = require('../services/potentialCustomerService.js');
const customerService = require('../services/customerService.js');

// Helper function to generate a secure password
const generatePassword = (name, dob) => {
    // Combine the user's name and DOB to create a base password
    const basePassword = `${name}${dob.replace(/-/g, '')}`; // Remove dashes from DOB if present
    return basePassword;
};

const generateUniqueUsernameAndPassword = async (firstName, dob) => {
    const generateUsername = () => {
        const randomNumber = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
        return `${firstName}${randomNumber}`; // Ensure username is at least 8 characters
    };

    // Ensure the username is unique
    const username = await generateUsername();
    let existingCustomer = await customerService.getCustomerByUsername(username);

    while (existingCustomer) {
        const username = generateUsername(); // Generate a new username
        existingCustomer = await customerService.getCustomerByUsername(username);
    }

    const basePassword = generatePassword(firstName, dob);
    const hashedPassword = await bcrypt.hash(basePassword, 10); // Hash the password

    return { username, password: basePassword, hashedPassword };
};

// Example usage:
const finalizeCustomerData = async (potentialCustomerID) => {
    try {
        const potentialCustomer = await potentialCustomerService.getCustomerById(potentialCustomerID);
        if (!potentialCustomer) {
            throw new CustomError('Potential customer not found', 404);
        }
        if (potentialCustomer.Status == "New") {
            throw new CustomError('Fill data first', 405);
        }
        // Generate a unique username and password
        const { username, password, hashedPassword } = await generateUniqueUsernameAndPassword(
            potentialCustomer.Name.split(' ')[0], 
            potentialCustomer.MemberDOB.toISOString().split('T')[0] // Format DOB as YYYY-MM-DD
        );

        // Prepare customer data for the new Customer entry
        const customerData = {
            Username: username,
            Password: hashedPassword,
            MemberID: potentialCustomer.MemberID,
            Name: potentialCustomer.Name,
            MedicaidID: potentialCustomer.MedicaidID,
            Phone: potentialCustomer.Phone,
            Address: potentialCustomer.Address,
            DeliveryNote: potentialCustomer.DeliveryNote,
            PreferredDeliveryTime: potentialCustomer.PreferredDeliveryTime,
            AlternateContactName: potentialCustomer.AlternateContactName,
            AlternateContactPhone: potentialCustomer.AlternateContactPhone,
            AlternateContactAddress: potentialCustomer.AlternateContactAddress,
            Allergies: potentialCustomer.Allergies,
            MemberDOB: potentialCustomer.MemberDOB,
            Status: 'Active',
            // Additional fields can be added here if needed
        };

        // Create the new customer using the customer service
        const newCustomer = await customerService.createCustomer(customerData);

        // Delete the entry from the PotentialCustomers table
        await potentialCustomer.destroy();

        return { newCustomer, password, username }; // Return the new customer and generated password
    } catch (error) {
        throw new CustomError(`Error finalizing customer data: ${error.message}`, 500);
    }
};

module.exports = {
    finalizeCustomerData,
};
