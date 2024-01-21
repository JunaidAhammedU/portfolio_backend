import getPortData, { IPortfolio } from "../Model/portfolioModel";
//----------------------------------------------------------------

// portfolio repository interface
interface IPortfolioRepo {
  getPortfolioData(): Promise<IPortfolio[] | null>;
}

// portfolio repository class
export default class portfolio_Repo implements IPortfolioRepo {
  // function to fetch portfolio data
  async getPortfolioData(): Promise<IPortfolio[] | null> {
    try {
      return await getPortData.find();
    } catch (error) {
      return null;
    }
  }
}
