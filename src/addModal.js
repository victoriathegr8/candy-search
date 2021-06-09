
// modal that adds a candy to the file
export function AddModal(props) { 
    let candy = {num:props.candyNum, name:"", imgurl:"", hasEgg:0, hasMilk:0, hasSoy:0}  
    return (
        <div className="add-modal card">
            <div className="modal-content card-body">
                <span className="add-modal-close close" onClick={() => props.handleModalClose()}>×</span>
                <span className="add-modal-txt">Add Your New Candy Information</span>
                <label for="name">Name of your Candy: </label>
                <input type="text" name="name" onChange={(event) => {candy.name = event.target.value}}></input>
                <br/>
                <label for="image">Image Url of a Picture of your Candy: </label>
                <input type="text" name="image" onChange={(event) => {candy.imgurl = event.target.value}}></input>
                <br/>
                <input type="checkbox" name="containsEgg" onClick={() => {candy.hasEgg = 1}}></input>
                <label for="containsEgg">Your Candy contains Egg</label>
                <br/>
                <input type="checkbox" name="containsMilk" onClick={() => {candy.hasMilk = 1}}></input>
                <label for="containsMilk">Your Candy contains Milk</label>
                <br/>
                <input type="checkbox" name="containsSoy" onClick={() => {candy.hasSoy = 1}}></input>
                <label for="containsSoy">Your Candy contains Soy</label>
                <br/>
                <br/>
                <button className="btn btn-primary" onClick={() => props.handleModalApply(candy)}>Apply</button>
            </div>
        </div>
        
    );
}