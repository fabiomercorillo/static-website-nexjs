import {RootState} from "../index";

export const selectClickCount = (state: RootState) => state.click.counter;

export const selectClickCountRaisedTo = (param: number) => (state:RootState) => state.click.counter * param;