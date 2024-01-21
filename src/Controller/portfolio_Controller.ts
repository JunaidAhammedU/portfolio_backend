import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import portfolio_services from "../Service/portfolio_Services";
//------------------------------------------------------------

// portfolio controller interface
interface IPortfolioController {
  getPortfolioData(req: Request, res: Response): Promise<void>;
}

// portfolio controller class
export default class portfolio_controller implements IPortfolioController {
  private port_services: portfolio_services;
  constructor() {
    this.port_services = new portfolio_services();
  }

// function to fetch portfolio data
  async getPortfolioData(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    try {
      const data = await this.port_services.getPortfolioData();
      res.status(200).json(data);
    } catch (error) {
      res.status(200).send({ message: "internal server error!" });
    }
  }
}
