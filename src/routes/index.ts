import FileController from "../controllers/file.controller.js";
import { ControllerFunctionI } from "../types/index.js";
import HttpError from "../utils/HttpError.js";

const RouteHandler = (method:string, route: string) : ControllerFunctionI => {

    switch(route){
     case '/data'  : {
        switch(method){
          case 'GET' : return FileController // File Controller that returns file using two query params m (file name) and n (line number)
        }
      }
    }

    throw new HttpError(404, "Not Found")
}

export default RouteHandler;
