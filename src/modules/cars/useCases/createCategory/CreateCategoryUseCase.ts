import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    //Funciona como a tipagem do service
    // 1. Controllers
    // São responsáveis pelo recebimento e retorno das requisições e delegação dos dados recebidos.

    // 2. Services/UseCases
    // São responsáveis pelas regras de negócio, lançamento de exceções.

    // 3. Repositories
    // São responsáveis pelas implementações concretas, sejam utilizados em memória, sejam utilizando o typeorm.
    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({name, description}: IRequest): void {
        
    const categotyAlreadyExists = this.categoriesRepository.findByName(name);
    
    if(categotyAlreadyExists){
        // throw new Error => Forma de dizr o erro que vai ser lançado na requisição
        throw new Error("Category Already Exists")
    }

    this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }