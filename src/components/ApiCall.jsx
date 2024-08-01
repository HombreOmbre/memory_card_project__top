export default class ApiCall {
    static async getPokemonsArray(url, cb, offset) {
        try {
            const blob = await fetch(url + "?limit=12&offset=" + offset);
            const response = await blob.json();
            const results = response.results;

            await cb(results);
        } catch (e) {
            return cb([]);
        }
    }

    static async getPokemon(url, cb) {
        try {
            const blob = await fetch(url);
            const response = await blob.json();
            const {name, cries: {latest: sound}, sprites: {front_default: image}} = await response

            cb({name, sound, image});
        } catch (e) {
            cb({});
        }
    }
}