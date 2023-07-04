import dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV, PORT, DBNAME, USER, PASSWORD, HOST, DBPORT, BASE_URL, NEO4JURL, NEO4JUSER, NEO4JPASSWORD } = process.env

interface EnvVariables {
    NODE_ENV: string | undefined;
    PORT: number | undefined;
    DBNAME: string | undefined;
    USER: string | undefined;
    PASSWORD: string | undefined;
    HOST: string | undefined;
    DBPORT: number | undefined;
    BASE_URL: string | undefined;
    NEO4JURL: string | undefined;
    NEO4JUSER: string | undefined;
    NEO4JPASSWORD: string | undefined;
}

const env: EnvVariables = {
    NODE_ENV,
    PORT: PORT ? +PORT : 3000,
    DBNAME,
    USER,
    PASSWORD,
    HOST,
    DBPORT: DBPORT ? +DBPORT : 5432,
    BASE_URL,
    NEO4JURL,
    NEO4JUSER,
    NEO4JPASSWORD
}

export default env;






