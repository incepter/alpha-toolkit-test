import * as React from "react";
import { connect } from "react-redux";
import { IReduxToggleMessageAction, toggleMessage } from "./actions";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "./rootReducer";

import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

type TT = ActionReducerMapBuilder<any> & never;
let t: TT;

console.log(t);

const Toggle: React.FC<ToggleProps> = ({
  messageVisibility,
  toggleMessage
}) => (
  <div>
    <button onClick={toggleMessage}>Toggle</button>
    {messageVisibility && <p>Toggled content</p>}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  messageVisibility: state.showMessage
});

const mapDispatchToProps = (dispatch: Dispatch<IReduxToggleMessageAction>) =>
  bindActionCreators({ toggleMessage }, dispatch);

type ToggleProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
