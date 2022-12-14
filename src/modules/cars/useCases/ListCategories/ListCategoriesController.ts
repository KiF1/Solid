import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";




class ListCategoriesController {
    constructor(private ListCategoriesUseCase: ListCategoriesUseCase) {}


    handle(request: Request, response: Response): Response {
        const allCategorys = this.ListCategoriesUseCase.execute();
        return response.json(allCategorys)
    }
}

export { ListCategoriesController}