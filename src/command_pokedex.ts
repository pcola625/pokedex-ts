import type { State } from "./state.js";

export async function commandPokedex(state: State) {
    if ( Object.keys(state.myPokedex).length === 0 ) {
        console.log("You haven\'t CAUGHT ANY POKEMEN yet!");
        return;
    } else {
        console.log(`Your Pokedex:`);
        for (const pokemon in state.myPokedex) {
            console.log(` - ${state.myPokedex[pokemon].name}`);
        }
        return;
    }

}
