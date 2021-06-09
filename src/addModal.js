// modal that shows when a user tries to use like button without being signed in
export function addModal(props) {
    function handleModalClose() {
    let modal = document.querySelector("#add-modal");
    modal.style.display="none";
    }
    
    return (
        <div className="add-modal">
            <div id="add-modal" className="modal card">
            <div className="modal-content card-body">
                <span className="add-modal-close close" onClick={() => handleModalClose()}>×</span>
                <span className="add-modal-txt">Add You New Candy Information</span>
                <label for="name">Name of your Candy: </label>
                <input type="text" name="name"></input> <br/>
                <label for="image">Image Url of a Picture of your Candy: </label>
                <input type="text" name="image"></input> <br/>
                <input type="checkbox" name="containsEgg"></input>
                <label for="containsEgg">Your Candy contains Egg</label> <br/>
                <input type="checkbox" name="containsMilk"></input>
                <label for="containsMilk">Your Candy contains Milk</label> <br/>
                <input type="checkbox" name="containsSoy"></input>
                <label for="containsSoy">Your Candy contains Soy</label> <br/>
                <br/>
                <button>Apply</button>
            </div>
            </div>
        </div>
    );
}