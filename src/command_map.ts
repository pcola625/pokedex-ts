import type { State } from "./state.js";

const mapUrl = "https://pokeapi.co/api/v2/location-area";
export async function commandMapForward(state: State) {
	const locations = await state.pokeAPI.fetchLocations(state.nextLocationsUrl);

  	state.nextLocationsUrl = locations.next;
  	state.prevLocationsUrl = locations.previous;

  	for (const loc of locations.results) {
   		 console.log(loc.name);
		}
};

export async function commandMapBack(state: State) {
	
	if (!state.prevLocationsUrl) {
		console.log("You're on the first page.\n");
		return;
	}

	const locations = await state.pokeAPI.fetchLocations(state.prevLocationsUrl);

	state.nextLocationsUrl = locations.next;
	state.prevLocationsUrl = locations.previous;

	for (const loc of locations.results) {
		console.log(loc.name);
		}
};

