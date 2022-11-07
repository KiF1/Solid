import {parse} from 'csv-parse';
import fs from 'fs';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase{
    constructor(private categoriesRepository: ICategoryRepository) {}


    loadCategories(file: Express.Multer.File): IImportCategory[]{
        const stream = fs.createReadStream(file.path);
        const categories: IImportCategory[] = [];
        const parseFile = parse();

        stream.pipe(parseFile);
        parseFile.on('data', async (line) => {
            const [name, description] = line;
            categories.push({
                name, description,
            });
        });
        return categories;
    }

    execute(file: Express.Multer.File): void {
       const categories = this.loadCategories(file);
       console.log(categories);
    }
}

export { ImportCategoryUseCase }