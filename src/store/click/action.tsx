import { ClickActionTypes } from "./types";
import {ActionCreator, Action, Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {IClickState} from "./state";

export type ClickThunk = ActionCreator<
    ThunkAction<void, IClickState, null, Action<string>>
    >;

export const dispatchClick: ClickThunk = (counter: number) =>
    (dispatch: Dispatch): Action => dispatch({
        type: ClickActionTypes.CLICK_EVENT,
        payload: counter
    });
;