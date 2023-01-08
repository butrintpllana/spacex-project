import { missionActionTypes } from '../../enum';

export const actionCreators = {
  setMissions: (mission) => (dispatch) => {
    dispatch({
      type: missionActionTypes.SET_MISSIONS,
      payload: mission,
    });
  },
  setCommentForMission: (comment) => (dispatch) => {
    dispatch({
      type: missionActionTypes.SET_MISSION_COMMENTS,
      payload: comment,
    });
  },
  setFetched: (fetched) => (dispatch) => {
    dispatch({
      type: missionActionTypes.SET_FETCHED,
      payload: fetched,
    });
  },
};
