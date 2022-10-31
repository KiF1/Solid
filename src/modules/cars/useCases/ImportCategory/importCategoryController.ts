import { Request, response, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";



class ImportCategoryController{
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    handle(request: Request, reponse: Response): Response {
        const { file } = request;
        this.importCategoryUseCase.execute(file);
        return response.send();
    }
}

export { ImportCategoryController }