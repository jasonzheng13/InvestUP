// Returns investment for all 3 strategies
// CORE CONCEPT OF ENTIRE APP
// Uses market data and user inputs to calculate investment returns


import { getMarketData } from '../config/marketRates.js';

// Mortgage Payment Calculator
// Will use standard mortgage formula
// M = P * [r(1 + r)^n] / [(1 + r)^n – 1]
// M = monthly payment
// P = principal loan amount
// r = monthly interest rate (annual rate / 12)
// n = number of payments (loan term in months (years * 12))


function calculateMonthlyMortgage(principal, annualRate, years) {

    if (annualRate === 0) {
        return principal / (years * 12);
    }

    // Convert annual rate to monthly and decimal
    const monthlyRate = annualRate / 100 / 12;
    // Calculate number of payments
    const numberOfPayments = years * 12;

    // Mortgage formula
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

        return Math.round(payment * 100) / 100; // Round to 2 decimal places
}

// Airbnb Investment Calculation
// Analyzes short-term rental profitability
// Factors in occupancy rates, nightly rates, and expenses

export async function calculateAirbnb(property, params) {

    // Destructure parameters with default values
    const {
        downPayment,
        interestRate,
        loanTerm = 30, // Default to 30 years
        occupancyRate = 70, // Default to 70%
        nightlyRate = null
    } = params;

    // Retrieving market data

    const marketData = getMarketData(property.city, property.state);

    const avgNightlyRate = nightlyRate || (marketData ? marketData.airbnb_nightly : 150); // Default to $150 if no data

    // Calculate monthly mortgage
    const loanAmount = property.price - downPayment;
    const monthlyMortgage = calculateMonthlyMortgage(loanAmount, interestRate, loanTerm);

    const monthlyIncome = (30 * (occupancyRate / 100)) * avgNightlyRate;

    // Calculate Monthly Expenses

    const monthlyPropertyTax = (property.price * (marketData.property_tax_rate / 100)) / 12;

    // Insurance
    const monthlyInsurance = (marketData.insurance_annual) / 12;

    const monthlyMaintenance = property.price * 0.01 / 12; // 1% of property price annually
    
    const monthlyUtilities = 200; // Fixed estimate

    const monthlyManagement = monthlyIncome * 0.20; // 20% property management fee

    const monthlyExpenses = monthlyMortgage + monthlyPropertyTax + monthlyInsurance +
                            monthlyMaintenance + monthlyUtilities + monthlyManagement;


    // Calculating Cash Flow

    const monthlyCashFlow = monthlyIncome - monthlyExpenses;
    
    const annualCashFlow = monthlyCashFlow * 12;

    // Calculate Investment Returns

    const cashOnCashReturn = (annualCashFlow / downPayment) * 100;

    // Cap Rate: Measures property’s net operating income against its purchase price

    const capRate = ((monthlyIncome * 12 - (monthlyExpenses - monthlyMortgage) * 12) / property.price) * 100;

    // Total ROI
    // Combines cash flow return with property value growth

    const totalROI = cashOnCashReturn + marketData.appreciation_rate;

    // Break Even Rate

    const breakEvenOccupancy = ((monthlyExpenses) / (30 * avgNightlyRate)) * 100;



    return {
        strategy: 'airbnb',
        
        // Property information
        property: {
        id: property.id,
        address: property.address,
        price: property.price,
        city: property.city,
        state: property.state,
        },
        
        // User inputs (what they provided)
        inputs: {
        downPayment,
        loanAmount,
        interestRate,
        loanTerm,
        monthlyMortgage: Math.round(monthlyMortgage * 100) / 100,
        occupancyRate,
        nightlyRate: avgNightlyRate,
        },
        
        // Market data used in calculations
        marketData: {
        avgNightlyRate,
        location: `${property.city}, ${property.state}`,
        appreciationRate: marketData.appreciation_rate,
        },
        
        // Detailed monthly breakdown (for charts/tables)
        monthlyBreakdown: {
        income: Math.round(monthlyIncome * 100) / 100,
        mortgage: Math.round(monthlyMortgage * 100) / 100,
        propertyTax: Math.round(monthlyPropertyTax * 100) / 100,
        insurance: Math.round(monthlyInsurance * 100) / 100,
        maintenance: Math.round(monthlyMaintenance * 100) / 100,
        utilities: monthlyUtilities,
        management: Math.round(monthlyManagement * 100) / 100,
        totalExpenses: Math.round(monthlyExpenses * 100) / 100,
        },
        
        // Final results (the important numbers!)
        results: {
        monthlyIncome: Math.round(monthlyIncome * 100) / 100,
        monthlyExpenses: Math.round(monthlyExpenses * 100) / 100,
        monthlyCashFlow: Math.round(monthlyCashFlow * 100) / 100,
        annualCashFlow: Math.round(annualCashFlow * 100) / 100,
        cashOnCashReturn: Math.round(cashOnCashReturn * 100) / 100,
        capRate: Math.round(capRate * 100) / 100,
        totalROI: Math.round(totalROI * 100) / 100,
        breakEvenOccupancy: Math.round(breakEvenOccupancy * 100) / 100,
        },
    };

}

// STRATEGY 2: LONG-TERM RENTAL (LEASE)

export async function calculateLease(property, params) {
    // Extract parameters

    const {
        downPayment,
        interestRate,
        loanTerm = 30, // Default to 30 years
        monthlyRent = null,
    } = params;

    // Get market data

    const marketData = getMarketData(property.city, property.state);

    // Use provided rent or market average
    
    const avgMonthlyRent = monthlyRent || (marketData ? marketData.rental_monthly : 2000); // Default to $2000 if no data

    // Calculate Loan Details

    const loanAmount = property.price - downPayment;
    const monthlyMortgage = calculateMonthlyMortgage(loanAmount, interestRate, loanTerm);

    // Calculate Monthly Income
    const monthlyIncome = avgMonthlyRent * 0.95;

    // Calculate Monthly Expenses
    const monthlyPropertyTax = (property.price * (marketData.property_tax_rate / 100)) / 12;

    const monthlyInsurance = (marketData.insurance_annual) / 12;

    const monthlyMaintenance = property.price * 0.01 / 12; // 1% annually

    const monthlyManagement = monthlyIncome * 0.10; // 10% management fee

    // Vacancy Reserve
    const vacancyReserve = avgMonthlyRent * 0.05; // 5% vacancy reserve

    // Total Expenses
    const monthlyExpenses = monthlyMortgage + monthlyPropertyTax + monthlyInsurance +
                            monthlyMaintenance + monthlyManagement + vacancyReserve;


    // Cash Flow Calculation
    const monthlyCashFlow = monthlyIncome - monthlyExpenses;
    const annualCashFlow = monthlyCashFlow * 12;


    // Calculate Returns
    const cashOnCashReturn = (annualCashFlow / downPayment) * 100;

    // Cap Rate
    const capRate = ((monthlyIncome * 12 - (monthlyExpenses - monthlyMortgage) * 12) / property.price) * 100;

    // Total ROI
    const totalROI = cashOnCashReturn + marketData.appreciation_rate;

    // Rent to Value Ratio
    const rentToValueRatio = (avgMonthlyRent * 12 / property.price) * 100;

    return {
        strategy: 'lease',
    
        property: {
        id: property.id,
        address: property.address,
        price: property.price,
        city: property.city,
        state: property.state,
        },
        
        inputs: {
        downPayment,
        loanAmount,
        interestRate,
        loanTerm,
        monthlyMortgage: Math.round(monthlyMortgage * 100) / 100,
        monthlyRent: avgMonthlyRent,
        },
        
        marketData: {
        avgMonthlyRent,
        location: `${property.city}, ${property.state}`,
        appreciationRate: marketData.appreciation_rate,
        },
        
        monthlyBreakdown: {
        income: Math.round(monthlyIncome * 100) / 100,
        mortgage: Math.round(monthlyMortgage * 100) / 100,
        propertyTax: Math.round(monthlyPropertyTax * 100) / 100,
        insurance: Math.round(monthlyInsurance * 100) / 100,
        maintenance: Math.round(monthlyMaintenance * 100) / 100,
        management: Math.round(monthlyManagement * 100) / 100,
        vacancyReserve: Math.round(vacancyReserve * 100) / 100,
        totalExpenses: Math.round(monthlyExpenses * 100) / 100,
        },
        
        results: {
        monthlyIncome: Math.round(monthlyIncome * 100) / 100,
        monthlyExpenses: Math.round(monthlyExpenses * 100) / 100,
        monthlyCashFlow: Math.round(monthlyCashFlow * 100) / 100,
        annualCashFlow: Math.round(annualCashFlow * 100) / 100,
        cashOnCashReturn: Math.round(cashOnCashReturn * 100) / 100,
        capRate: Math.round(capRate * 100) / 100,
        totalROI: Math.round(totalROI * 100) / 100,
        rentToValueRatio: Math.round(rentToValueRatio * 100) / 100,
        },
    };
}