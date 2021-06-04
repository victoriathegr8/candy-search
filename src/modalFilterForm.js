
import {RenderForm} from "./mainFilterForm.js";
export function Modal(props) {
  //should have:
  //  currentData
  //  handleSubmit
  // <RenderModal handleFormSubmit={props.handleSubmit} handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax}/>
  return (<RenderModal handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={props.handleSubmit}/>);
}

export function RenderModal(props) {
  // this should be passed the same items as renderForm
  console.log("calling from modal");
  return (
  <div className="small-view">
    <div id="filtermodal" className="modal">
      <div className="modal-content">
        <span className="close">×</span>
        <RenderForm handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={props.handleSubmit}/>
      </div>
    </div>
  </div> );
}