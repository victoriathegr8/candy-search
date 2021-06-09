
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
    props.handleSubmit();
    props.handleClose();
    
  }
  return (
    <div id="filtermodal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => {props.handleClose()}}>×</span>
        <RenderForm handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={modalHandleSubmit}/>
      </div>
    </div>
  );
}