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
        return data.items;
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
        return data.items;
    } catch (error) {
        console.log('Une erreur est survenue en lisant les maisons favorites', error);
        return [];
    }
}