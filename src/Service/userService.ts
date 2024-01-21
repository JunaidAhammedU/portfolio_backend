import { IUser } from "../Model/userModels";
import UserRepository from "../Repository/userRepository";
import { newMessageHelper } from "../Helper/mailHelper";
//-------------------------------------------------------

// message controller interface
interface IUserService {
  newMessage(user: IUser): Promise<responseT | null>;
}

// message response object
type responseT = {
  status: boolean;
  message: string;
  data?: IUser[] | IUser | null;
};

// message service class
export default class userService implements IUserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  // function for add new message
  async newMessage(user: IUser): Promise<responseT | null> {
    const response: responseT = {
      status: false,
      message: "",
    };
    try {
      await newMessageHelper(user.email);
      const data = await this.userRepository.newMessage(user);
      if (data) {
        (response.status = true),
          (response.message = "message submitted successfully");
      } else {
        (response.status = false),
          (response.message = "message note submitted");
      }
      return response;
    } catch (error) {
      return null;
    }
  }
}
