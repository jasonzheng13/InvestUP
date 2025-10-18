import { getProperty } from '../services/propertyService.js';
import { calculateInvestment } from '../services/calculationServices.js';
import { successResponse, errorResponse } from '../utils/response.js';
import { validatePropertyId, validateStrategy, validateNumber } from '../utils/validation.js';

export async function handleCalculate(c) {
  try {
    const propertyId = c.req.param('id');
    
    const strategy = c.req.query('strategy');
    const downPayment = c.req.query('downPayment');
    const interestRate = c.req.query('interestRate');
    const loanTerm = c.req.query('loanTerm') || '30';
    
    validatePropertyId(propertyId);
    validateStrategy(strategy);
    
    if (!downPayment) {
      throw new Error('downPayment is required');
    }
    
    if (!interestRate) {
      throw new Error('interestRate is required');
    }
    
    const property = await getProperty(propertyId);
    
    const params = {
      downPayment: validateNumber(downPayment, 'downPayment', 0),
      interestRate: validateNumber(interestRate, 'interestRate', 0, 30),
      loanTerm: validateNumber(loanTerm, 'loanTerm', 1, 30),
    };
    
    if (strategy === 'airbnb') {
      const occupancyRate = c.req.query('occupancyRate') || '75';
      const nightlyRate = c.req.query('nightlyRate');
      
      params.occupancyRate = validateNumber(occupancyRate, 'occupancyRate', 0, 100);
      if (nightlyRate) {
        params.nightlyRate = validateNumber(nightlyRate, 'nightlyRate', 0);
      }
    }
    
    if (strategy === 'lease') {
      const monthlyRent = c.req.query('monthlyRent');
      if (monthlyRent) {
        params.monthlyRent = validateNumber(monthlyRent, 'monthlyRent', 0);
      }
    }
    
    if (strategy === 'flip') {
      const renovationBudget = c.req.query('renovationBudget');
      const afterRepairValue = c.req.query('afterRepairValue');
      const holdingPeriod = c.req.query('holdingPeriod') || '6';
      
      if (!renovationBudget) {
        throw new Error('renovationBudget is required for flip strategy');
      }
      
      if (!afterRepairValue) {
        throw new Error('afterRepairValue is required for flip strategy');
      }
      
      params.renovationBudget = validateNumber(renovationBudget, 'renovationBudget', 0);
      params.afterRepairValue = validateNumber(afterRepairValue, 'afterRepairValue', 0);
      params.holdingPeriod = validateNumber(holdingPeriod, 'holdingPeriod', 1, 24);
    }
    
    const results = await calculateInvestment(property, strategy, params);
    
    return c.json(successResponse(results));
    
  } catch (error) {
    console.error('Calculate error:', error);
    
    if (error.message === 'Property not found') {
      return c.json(errorResponse(error.message), 404);
    }
    
    return c.json(errorResponse(error.message), 400);
  }
}