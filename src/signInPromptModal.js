import {Link} from 'react-router-dom';


export function PromptModal(props) {
    function handleModalClose() {
    let modal = document.querySelector("#signin-modal");
    modal.style.display="none";
    }
    return (
        <div className="signin-modal">
            <div id="signin-modal" className="modal card">
            <div className="modal-content card-body">
                <span className="signin-modal-close close" onClick={() => handleModalClose()}>×</span>
                <span className="signin-modal-txt">You need to be signed in to like candies.</span>
                <br/>
                <Link to="/signin" className="btn btn-primary">Log In or Sign Up</Link>
            </div>
            </div>
        </div>
    );
}