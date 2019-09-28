import { createSelector } from "reselect";

/**
 * Hub general
 */
export const getHubInitializing = state => state.hub.initializing;

/**
 * Active candidate
 */
export const getActiveCandidateId = state => state.hub.activeCandidateId;
export const getActiveCandidate = state => state.hub.activeCandidate;
export const getActiveCandidateFinancials = state => state.hub.financials;
export const getActiveCandidateHistory = state => state.hub.history;

/**
 * Derived financials
 */
export const getFinancialStatistics = createSelector(
  [getActiveCandidateFinancials],
  financials => {
    let contributionSum, expenditureSum, individualContributionSum;
    contributionSum = expenditureSum = individualContributionSum = 0;
    financials.forEach(financial => {
      contributionSum += financial.contributions;
      expenditureSum += financial.operating_expenditures;
      individualContributionSum +=
        financial.individual_unitemized_contributions;
    });
    const numCycles = financials.length;
    return {
      contributionAvg: contributionSum / numCycles,
      expenditureAvg: expenditureSum / numCycles,
      individualContributionAvg: individualContributionSum / numCycles,
      avgIndividualContribution: contributionSum / individualContributionSum,
      numCycles,
    };
  }
);
