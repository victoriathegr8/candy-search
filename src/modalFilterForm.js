
import {RenderForm} from "./mainFilterForm.js";
export function Modal(props) {
  //should have:
  //  currentData
  //  handleSubmit
  // <RenderModal handleFormSubmit={props.handleSubmit} handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax}/>
  return (<RenderModal handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={props.handleSubmit} handleClose={props.handleClose}/>);
}

export function RenderModal(props) {
  // this should be passed the same items as renderForm
  function modalHandleSubmit() {
    console.log("Modal handle submit");
    props.handleSubmit();
    props.handleClose();
    
  }
  console.log("calling from modal");
  return (
  <div className="small-view">
    <div id="filtermodal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => {props.handleClose()}}>×</span>
        <RenderForm handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={modalHandleSubmit}/>
      </div>
    </div>
  </div> );
}