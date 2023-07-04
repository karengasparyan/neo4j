import { QueryResult } from "neo4j-driver";

const getNeo4jData = (result: QueryResult) => {
    if (result?.records){
        return result.records.map(record => {
            const { id, name, properties } = record.get('n').properties;
            return { id, name, properties: JSON.parse(properties) }
        });
    }
    return [];
}
export {
    getNeo4jData
}