export function calculateInvestmentResults({
  intialInvestment,
  annualInvestment,
  expectedReturn,
  duration}
) {
  const annualData = [];
  let investmentValue = intialInvestment;

  for (let i = 0; i < duration; i++) {
    console.log("inside for loop");
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
