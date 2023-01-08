/* eslint-disable import/prefer-default-export */
import { missionActionTypes } from '../../enum';

const initialState = {
  missions: [],
  didItFetch: false,
};

export const missions = (state = initialState, action) => {
  console.log(action, 'action');
  switch (action.type) {
    case missionActionTypes.SET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };
    case missionActionTypes.SET_FETCHED:
      return {
        ...state,
        didItFetch: action.payload,
      };
    case missionActionTypes.SET_MISSION_COMMENTS:
      return addCommentsToAMission(state, action.payload);
    default:
      return state;
  }
};

const addCommentsToAMission = (state, payload) => {
  const newMissions = [...state.missions];
  const { flight_number, comment_name, comment_description } = payload;
  const foundMission = newMissions.find(
    (mission) => mission.flight_number === +flight_number
  );
  if (!foundMission.comments) {
    foundMission.comments = [];
  }
  foundMission.comments = [
    ...foundMission.comments,
    { flight_number, comment_name, comment_description },
  ];
  return { ...state, missions: newMissions };
};
