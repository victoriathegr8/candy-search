
// modal that adds a candy to the file
export function AddModal(props) {   
    return (
        <div className="add-modal card">
            <div className="modal-content card-body">
                <span className="add-modal-close close" onClick={() => props.handleModalClose()}>×</span>
                <span className="add-modal-txt">Add Your New Candy Information</span>
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
                <button className="btn btn-primary" onClick={() => props.handleModalApply()}>Apply</button>
            </div>
        </div>
        
    );
}