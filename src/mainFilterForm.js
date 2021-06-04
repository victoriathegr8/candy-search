
export function Form(props) {
  //should have:
  //  currentData
  //  handleSubmit
  // <RenderForm handleFormSubmit={props.handleSubmit} handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax}/>
  console.log("props inside MakeForm", props);
  return (<RenderForm handleSugarMin={props.handleSugarMin} handleSugarMax={props.handleSugarMax} handleSubmit={props.handleSubmit}/>);
 
}


export function RenderForm (props) {
  console.log("inside RenderForm");
  console.log("props", props);
  
  
  return (
  <form>
    <h2>Filter</h2>
    <nobr className="filtertype">Contains:</nobr><br />
    <input type="checkbox" id="contains1" name="contains1" value="chocolate" />
    <label htmlFor="contains1">
      Chocolate</label><br />
    <input type="checkbox" id="contains2" name="contains2" value="caramel" />
    <label htmlFor="contains2">
      Caramel</label><br />
    <input type="checkbox" id="contains3" name="contains3" value="peanutyalmondy" />
    <label htmlFor="contains3">
      Peanuts/Peanut Butter/Almonds</label><br />
    <input type="checkbox" id="contains4" name="contains4" value="nougat" />
    <label htmlFor="contains4">
      Nougat</label><br />
    <input type="checkbox" id="contains5" name="contains5" value="crispedricewafer" />
    <label htmlFor="contains5">
      Crisped Rice/Wafers/Cookie</label><br />
    <input type="checkbox" id="contains6" name="contains6" value="pluribus" />
    <label htmlFor="contains6">
      Multiple Candies in Bag/Box</label><br />
    <input type="checkbox" id="contains7" name="contains7" defaultValue="Egg" />
    <label htmlFor="contains7">
      No Egg</label><br />
    <input type="checkbox" id="contains8" name="contains8" defaultValue="Milk" />
    <label htmlFor="contains8">
      No Milk</label><br />
    <input type="checkbox" id="contains9" name="contains9" defaultValue="Soy" />
    <label htmlFor="contains9">
      No Soy</label><br /><br />
    <nobr className="filtertype">Other Attributes:</nobr><br />
    <input type="checkbox" id="other1" name="other1" defaultValue="Fruity" />
    <label htmlFor="other1">
      Fruit-Flavored</label><br />
    <input type="checkbox" id="other2" name="other2" defaultValue="Hard" />
    <label htmlFor="other2">
      Hard Candy</label><br />
    <input type="checkbox" id="other3" name="other3" defaultValue="Bar" />
    <label htmlFor="other3">
      Candy Bar</label><br /><br />
    <nobr className="filtertype">Sugar Percentile:</nobr><br />
    <nobr>Min         Max</nobr><br />
    {/* need an onChange for the input */}
    {/* onChange={(event) => {props.handleSugarMin(event.target.value); console.log("changed sugar min")}} */}
    <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" name="sugarmin" min={0} max={100} onChange={(event) => {props.handleSugarMin(event.target.value)}} />
    <nobr>% to
    </nobr>
    {/* need an onChange for the input */}
    {/* onChange={(event) => {props.handleSugarMax(event.target.value); console.log("changed sugar max")}} */}
    <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" name="sugarmax" min={0} max={100} onChange={(event) => {props.handleSugarMax(event.target.value)}} /><nobr>
      %</nobr><br />
    <p id="sugarFeedback" className="invalid-feedback" /><br />
    <label className="filtertype" htmlFor="sort">Sort By:</label><br />
    <select name="sort" id="sort">
      <option value="alphabet">Name A to Z</option>
      <option value="sugarasc">Sugar Percentile Low to High</option>
      <option value="sugardes">Sugar Percentile High to Low</option>
    </select>
    <br /><br />
    {/* need an onClick for the button */}
    {/* {onClick={props.handleSubmit()}} */}
    <button id="applybutton" type="button" onClick={() => props.handleSubmit()} >Apply</button>
    <input type="reset" defaultValue="Reset" />
    <div className="error-message">
      <p className="text-danger">Values in sugar percent ranges must be between 0 and 100.</p>
    </div>
  </form>);
}

