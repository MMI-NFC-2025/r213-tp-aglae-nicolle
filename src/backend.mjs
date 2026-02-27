import Pocketbase from 'pocketbase';
const db = new Pocketbase('http://127.0.0.1:8090/');

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