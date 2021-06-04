
import {RenderForm} from "./mainFilterForm.js";
export function Modal(props) {
  //should have:
  //  currentData
  //  handleSubmit
  // <RenderModal handleFormSubmit={props.handleSubmit} handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax}/>
  return (<RenderModal props={props}/>);
}

export function RenderModal(props) {
  // this should be passed the same items as renderForm
  return (
  <div className="small-view">
    <div id="filtermodal" className="modal">
      <div className="modal-content">
        <span className="close">×</span>
        <RenderForm props={props}/>
      </div>
    </div>
  </div> );
}