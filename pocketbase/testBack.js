import * as backend from "./backend.mjs";

try {
    const records = await backend.allMaisonsAgents('Zip', 'Zip');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*try {
    const records = await backend.allMaisonsByAgentId("byugzyyumoyftw4");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await backend.allMaisonsByAgentName("Zip");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await backend.allMaisonsSortedAgent();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await backend.bySurfaceAgent(200, "byugzyyumoyftw4");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/

/*try {
    const records = await backend.maisonFavoriAgent("byugzyyumoyftw4");
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}*/
