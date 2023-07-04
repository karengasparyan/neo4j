const CREATE_QUERY = 'CREATE (n: Nodes {id: $id, name: $name, properties: $properties}) RETURN n';
const UPDATE_QUERY = 'MATCH (n: Nodes {id: $id}) SET n.name = $name, n.properties = $properties RETURN n';
const DESTROY_QUERY = 'MATCH (n: Nodes {id: $id}) DELETE n';
const GET_QUERY = 'MATCH (n: Nodes {id: $id}) RETURN n';
const GET_ALL_QUERY = 'MATCH (n: Nodes) RETURN n';

export {
    CREATE_QUERY,
    UPDATE_QUERY,
    DESTROY_QUERY,
    GET_QUERY,
    GET_ALL_QUERY
}