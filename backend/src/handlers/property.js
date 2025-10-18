// Handler retrieves properties based on filters or lists all properties
// This endpoint is called to fetch all information about property
// Helps maintain separation of concerns by isolating property-related logic

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
    console.error('Search failed:', error);
    throw new Error('Failed to search properties');
  }
}

export async function getProperty(propertyId) {
  try {
    const property = getPropertyById(propertyId);
    
    if (!property) {
      throw new Error('Property not found');
    }
    
    return property;
  } catch (error) {
    console.error('Failed to get property:', error);
    throw error;
  }
}

export async function handleGetProperty(c) {
  try {
    const propertyId = c.req.param('id');
    
    validatePropertyId(propertyId);
    
    const property = await getProperty(propertyId);
    
    return c.json(successResponse(property));
    
  } catch (error) {
    console.error('Get property error:', error);
    
    if (error.message === 'Property not found') {
      return c.json(errorResponse(error.message), 404);
    }
    
    return c.json(errorResponse(error.message), 500);
  }
}

export async function listAllProperties() {
  try {
    return getAllProperties();
  } catch (error) {
    console.error('Failed to list properties:', error);
    throw new Error('Failed to list properties');
  }
}