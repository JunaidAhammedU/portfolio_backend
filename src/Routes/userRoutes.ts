import { Router } from "express";
import UserController from "../Controller/userController";
import portfolio_controller from "../Controller/portfolio_Controller";
const userRoutes = Router()
//--------------------------------------------------------

const userController = new UserController()
const porfoiloController = new portfolio_controller()

userRoutes.post('/newMessage', userController.newMessage.bind(userController));
userRoutes.get('/user', porfoiloController.getPortfolioData.bind(porfoiloController));


export default userRoutes