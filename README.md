<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run in Development Mode

1. Clone the repository.  
2. Install dependencies: `npm install`  
3. Copy the `.env.template` file, rename it to `.env`, and fill in the required environment variables.  
4. Start the database: `docker compose up -d`  
5. Run the project: `npm run start:dev`  
6. Load default data:  
   Access `http://localhost:3000/graphql` and execute the following mutation:  
   ```graphql
   mutation Mutation {
     executeSeed
   }