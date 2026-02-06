import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allMaisonsAgents(nom, prenom) {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            filter: `agent.nom = '${nom}' && agent.prenom = '${prenom}'`
        }
    );
}

export async function allMaisonsByAgentId(id) {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            filter: `agent.id = '${id}'`
        }
    );
}

export async function allMaisonsByAgentName(nom) {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            filter: `agent.nom = '${nom}'`
        }
    );
}

export async function allMaisonsSortedAgent() {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            sort: 'agent.id'
        }
    );
}

export async function bySurfaceAgent(superficie, id) {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            filter: `agent.id = '${id}' && surface >= '${superficie}'`

        }
    );
}

export async function maisonFavoriAgent(id) {
    return await pb.collection('maison').getFullList(
        {
            expand: 'agent',
            filter: `agent.id = '${id}' && favori = true`
        }
    );
}