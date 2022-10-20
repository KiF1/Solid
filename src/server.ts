import express, { request } from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);


app.listen(4000, () => console.log("Server is running in port 4000"));

//Conceitos de Solid:

// 1. rotas - têm a responsabilidade de receber os requests, repassá-los para as outras camadas e retornar um response
// 2. controller - um intermediário entre a rota e o use case, conhece os dois lados e (até o momento) é onde fazemos um tratamento de erro
// 3. UseCases: é onde colocamos a regra de negócio: validações, cálculos,etc
// 4. Repository: é onde temos informações do nosso repositório, estrutura de dados , conexões etc.
// 5. Model é onde modelamos nossa entidade