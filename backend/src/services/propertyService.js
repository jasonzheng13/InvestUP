import {
    getAllProperties,
    getPropertyById,
    searchPropertiesByCity,
    filterProperties
} from '../config/mockProperties.js';

export async function searchProperties(filters = {}) {
    try {
        const properties = filterProperties(filters);
        return properties;
    } catch (error) {
        console.error('Error searching properties:', error);
        throw new Error('Failed to search properties.');
    }
}

export async function getPropertyDetails() {
    try {
        return getAllProperties();
    } catch (error) {
        console.error('Error fetching property details:', error);
        throw new Error('Failed to fetch property details.');
    }
}

