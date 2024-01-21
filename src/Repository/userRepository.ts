import userModel, { IUser } from "../Model/userModels";
//-----------------------------------------------------

// message repository interface
interface IUserRepo {
  newMessage(user: IUser): Promise<IUser | null>;
}

// message repository class
export default class UserRepository implements IUserRepo {
  // function for add new message
  async newMessage(user: IUser): Promise<IUser | null> {
    try {
      return await userModel.create(user);
    } catch (error) {
      return null;
    }
  }
}
