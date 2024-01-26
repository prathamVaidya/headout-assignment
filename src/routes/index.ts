import FileController from "../controllers/file.controller.js";
import HelloController from "../controllers/hello.controller.js";
import { ControllerFunctionI } from "../types/index.js";
import HttpError from "../utils/HttpError.js";

const RouteHandler = (method:string, route: string) : ControllerFunctionI => {

    switch(route){
      case '/' : {
        return HelloController // Just a polite Hello from API
      }
     case '/data'  : {
        switch(method){
          case 'GET' : return FileController // File Controller that returns file using two query params m (file name) and n (line number)
        }
      }
    }

    throw new HttpError(404, "Not Found")
}

export default RouteHandler;
