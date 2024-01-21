import { IPortfolio } from "../Model/portfolioModel";
import portfolio_Repo from "../Repository/portfolioRepo";
//-------------------------------------------------------

// portfolio service interface
interface IPortfolioServices {
  getPortfolioData(): Promise<responseT | null>;
}

//portfoilio response object
type responseT = {
  status: boolean;
  message: string;
  data?: IPortfolio[] | IPortfolio | null;
};

// portfolio service class
export default class portfolio_services implements IPortfolioServices {
  private portfolio_repo: portfolio_Repo;
  constructor() {
    this.portfolio_repo = new portfolio_Repo();
  }

  // function to fetch portfolio data
  async getPortfolioData(): Promise<responseT | null> {
    const response: responseT = {
      status: false,
      message: "",
      data: null,
    };
    try {
      const data = await this.portfolio_repo.getPortfolioData();
      if (data) {
        response.status = true;
        response.message = "data fetched";
        response.data = data;
      } else {
        response.status = false;
        response.message = "error";
      }
      return response;
    } catch (error) {
      return null;
    }
  }
}
