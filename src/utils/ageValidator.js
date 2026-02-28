/**
 * Age Validation Utility
 * Provides functions to validate and check user age
 */

/**
 * Calculate age from birth date
 * @param {string} birthDate - Date string in format YYYY-MM-DD
 * @returns {number} - Age in years
 */
export const calculateAgeFromDate = (birthDate) => {
    if (!birthDate) return null;
    const born = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    const monthDiff = today.getMonth() - born.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) {
        age--;
    }
    
    return age;
};

/**
 * Validate if age is within minimum requirements
 * @param {number} age - Age to validate
 * @param {number} minAge - Minimum required age
 * @returns {boolean} - True if age meets requirement
 */
export const isAgeValid = (age, minAge = 18) => {
    return age !== null && age >= minAge;
};

/**
 * Validate if age is within range
 * @param {number} age - Age to validate
 * @param {number} minAge - Minimum age
 * @param {number} maxAge - Maximum age (optional)
 * @returns {boolean} - True if age is within range
 */
export const isAgeInRange = (age, minAge = 18, maxAge = 120) => {
    return age !== null && age >= minAge && age <= maxAge;
};

/**
 * Get age validation error message
 * @param {number} age - Age in years
 * @param {number} minAge - Minimum required age
 * @returns {string} - Error message
 */
export const getAgeValidationMessage = (age, minAge = 18) => {
    if (age === null) {
        return 'Please provide your date of birth.';
    }
    if (age < minAge) {
        return `You must be at least ${minAge} years old to proceed. You are currently ${age} years old.`;
    }
    return '';
};

/**
 * Determine if service requires age verification
 * @param {string} serviceType - Type of service
 * @returns {object} - { required: boolean, minAge: number, reason: string }
 */
export const getServiceAgeRequirement = (serviceType) => {
    const requirements = {
        medical: { required: true, minAge: 18, reason: 'Medical procedures may only be booked by adults' },
        hospital: { required: true, minAge: 18, reason: 'Hospital arrangements require adult verification' },
        flight: { required: false, minAge: 0, reason: 'Minors can fly with guardian' },
        rail: { required: false, minAge: 0, reason: 'Minors can travel by rail' },
        hotel: { required: true, minAge: 18, reason: 'Hotel check-in typically requires 18+ years' },
        tourism: { required: true, minAge: 16, reason: 'Some tourism activities require minimum age verification' },
        cab: { required: false, minAge: 0, reason: 'Minors can use cab services' },
    };
    
    return requirements[serviceType] || { required: false, minAge: 0, reason: '' };
};

/**
 * Format birth date for maximum date input (prevents future dates)
 * @returns {string} - Date string in YYYY-MM-DD format
 */
export const getMaxBirthDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

/**
 * Format birth date for minimum date input (typically 100+ years ago)
 * @returns {string} - Date string in YYYY-MM-DD format
 */
export const getMinBirthDate = () => {
    const hundred = new Date();
    hundred.setFullYear(hundred.getFullYear() - 120);
    return hundred.toISOString().split('T')[0];
};
