import {AnyAction, Reducer} from "redux";
import {IClickState} from "./state";
import {ClickActionTypes} from "./types";
export const initialState: IClickState = {
    counter: 0
};

const reducer: Reducer<IClickState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ClickActionTypes.CLICK_EVENT: {
            return { ...state, counter: action?.payload };
        }
        default: {
            return state;
        }
    }
};

export { reducer as clickReducer };