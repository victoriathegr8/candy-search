import {Link} from 'react-router-dom';


export function PromptModal(props) {
    function handleModalClose() {
    let modal = document.querySelector("#signin-modal");
    modal.style.display="none";
    }
    return (
        <div className="signin-modal">
            <div id="signin-modal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => handleModalClose()}>×</span>
                <p>You need to be signed in to like candies.</p>
                <button ><Link to="/signin">Log In or Sign Up</Link></button>
            </div>
            </div>
        </div>
    );
}