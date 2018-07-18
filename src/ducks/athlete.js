// reducer
export default function athlete(state = []) {
    return state; 
}

// selectors
export function getAthletes(state, props) {
    console.log(state.athlete);
    return state.athlete;
}

export function getAthlete(state, props) {
    return state.athlete.find(sport => sport.id === props.id);
}
