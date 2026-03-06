import Pocketbase from 'pocketbase';
const db = new Pocketbase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons : ', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return await db.files.getURL(record, recordImage);
}

export async function getOffre(id) {
    try {
        const data = await db.collection('maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function bySurface(surface) {
    try {
        const data = await db.collection('maison').getFullList({
            filter: `surface >= ${surface}`,
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant les maisons par surface', error);
        return [];
    }
}

export async function offreFavori() {
    try {
        const data = await db.collection('maison').getFullList({
            filter: `favori = true`,
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant les maisons favorites', error);
        return [];
    }
}

export async function addOffre(house) {
    try {
        await db.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        const data = await db.collection('maison').getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant les maisons par prix', error);
        return [];
    }
}

export async function filterBySurface(surface) {
    try {
        const data = await db.collection('maison').getFullList({
            filter: `surface >= ${surface}`,
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant les maisons par surface', error);
        return [];
    }
}

export async function addNewMaion(newMaison) {
    try {
        await db.collection('maison').create(newMaison);
    } catch (e) {
        console.error(e);
    }
}

export async function addNewAgent(newAgent) {
    try {
        await db.collection('agent').create(newAgent);
    } catch (e) {
        console.error(e);
    }
}

export async function deleteMaisonById(id) {
    try {
        await db.collection('maison').delete(id);
    } catch (e) {
        console.error(e);
    }
}

export async function deleteAgentById(id) {
    try {
        await db.collection('agent').delete(id);
    } catch (e) {
        console.error(e);
    }
}

export async function updateMaisonById(id, data) {
    try {
        await db.collection('maison').update(id, data);
    } catch (e) {
        console.error(e);
    }
}

export async function superUserauth(login, mdp) {
    try {
        const { token, record } = await db.collection("_superusers").authWithPassword(login, mdp);
        console.log('Connexion réussie pour le superuser ', record.email);
    } catch (e) {
        console.error(e);
    }
}

export async function deconnexion() {
    try {
        await db.authStore.clear();
        console.log("Déconnexion réussie");
    } catch (e) {
        console.error(e);
    }
}

export async function verifConnexion() {
    try {
        console.log(db.authStore.isValid);
    } catch (e) {
        console.error(e);
    }
}

export async function addNewUser(newUser) {
    try {
        await db.collection('users').create(newUser);
        console.log('Nouvel utilisateur ajouté');
    } catch (e) {
        console.error(e);
    }
}

export async function userAuth(login, mdp) {
    try {
        const { token, record } = await db.collection("users").authWithPassword(login, mdp);
        console.log("Connexion réussie pour l'utilisateur", record.email);
    } catch (e) {
        console.error(e);
    }
}

export async function byAgentId(id) {
    try {
        let data = await db.collection('maison').getFullList({
            filter: `agent=${id}`,
        });
        return data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getAgents() {
    try {
        return await db.collection('agent').getFullList();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getAgentById(id) {
    try {
        return await db.collection('agent').getOne(id);
    } catch (e) {
        console.error(e);
    }
}