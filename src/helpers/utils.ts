import { QueryResult } from "neo4j-driver";
import {Mutex} from 'async-mutex';
import HttpError from "http-errors";
import {NOT_CHANGES_VARIABLE} from "./Messages";

const mutex = new Mutex();

const getNeo4jData = (result: QueryResult) => {
    if (result?.records){
        return result.records.map(record => {
            const { id, name, properties } = record.get('n').properties;
            return { id, name, properties: JSON.parse(properties) }
        });
    }
    return [];
}

const setDbName = async (newDbName: string = 'neo4j'): Promise<void> => {
    const release = await mutex.acquire();
    try {
        dbName = newDbName;
    } catch (e) {
        throw HttpError(431, NOT_CHANGES_VARIABLE + e)
    } finally {
        release();
    }
};

let dbName: string;

export {
    getNeo4jData,
    setDbName,
    dbName,
}