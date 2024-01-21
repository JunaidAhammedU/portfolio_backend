import { Request, Response } from "express";
import { IUser } from "../Model/userModels";
import UserService from "../Service/userService";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
//-----------------------------------------------------------

// message controller interface
interface IUserCotroller {
  newMessage(req: Request, res: Response): Promise<void>;
}

// message controller class
export default class userController implements IUserCotroller {
  private userServices: UserService;
  constructor() {
    this.userServices = new UserService();
  }

  // function for add new message
  async newMessage(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): Promise<void> {
    try {
      const user: IUser = req.body.newMessage;
      const data = await this.userServices.newMessage(user);
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}
