import dotenv from 'dotenv';
dotenv.config();

const {
    NODE_ENV,
    PORT,
    DBNAME,
    USER,
    PASSWORD,
    HOST,
    DBPORT,
    BASE_URL,
    NEO4JURL,
    NEO4JUSER,
    NEO4JPASSWORD
} = process.env;

interface EnvVariables {
    NODE_ENV: string;
    PORT: number;
    DBNAME: string;
    USER: string;
    PASSWORD: string;
    HOST: string;
    DBPORT: number;
    BASE_URL: string;
    NEO4JURL: string;
    NEO4JUSER: string;
    NEO4JPASSWORD: string;
}

const config: EnvVariables = {
    NODE_ENV: NODE_ENV || "development",
    PORT: PORT ? +PORT : 4000,
    DBNAME: DBNAME || "postgres",
    USER: USER || "postgres",
    PASSWORD: PASSWORD || "postgres",
    HOST: HOST || "localhost",
    DBPORT: DBPORT ? +DBPORT : 5432,
    BASE_URL: BASE_URL || "http://localhost:4000",
    NEO4JURL: NEO4JURL || "bolt://localhost:7687",
    NEO4JUSER: NEO4JUSER || "neo4j",
    NEO4JPASSWORD: NEO4JPASSWORD || "12345678"
}

export default config;






