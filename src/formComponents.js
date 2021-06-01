export function MakeForm () {
    // this is where to input the form code
    // this should render the form page - not sure if you actually update the state here
    return (<form>
      <h2>Filter</h2>
      <nobr className="filtertype">Contains:</nobr><br />
      <input type="checkbox" id="contains1" name="contains1" defaultValue="Chocolate" />
      <label htmlFor="contains1">
        Chocolate</label><br />
      <input type="checkbox" id="contains2" name="contains2" defaultValue="Caramel" />
      <label htmlFor="contains2">
        Caramel</label><br />
      <input type="checkbox" id="contains3" name="contains3" defaultValue="PeanutAlmondy" />
      <label htmlFor="contains3">
        Peanuts/Peanut Butter/Almonds</label><br />
      <input type="checkbox" id="contains4" name="contains4" defaultValue="Nougat" />
      <label htmlFor="contains4">
        Nougat</label><br />
      <input type="checkbox" id="contains5" name="contains5" defaultValue="CrispedRiceWafer" />
      <label htmlFor="contains5">
        Crisped Rice/Wafers/Cookie</label><br />
      <input type="checkbox" id="contains6" name="contains6" defaultValue="Pluribus" />
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
      <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" name="sugarmin" min={0} max={100} />
      <nobr>% to
      </nobr>
      <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" name="sugarmax" min={0} max={100} /><nobr>
        %</nobr><br />
      <p id="sugarFeedback" className="invalid-feedback" /><br />
      <label className="filtertype" htmlFor="sort">Sort By:</label><br />
      <select name="sort" id="sort">
        <option value="alphabet">Name A to Z</option>
        <option value="sugarasc">Sugar Percentile Low to High</option>
        <option value="sugardes">Sugar Percentile High to Low</option>
      </select>
      <br /><br />
      <button id="applybutton" type="button">Apply</button>
      <input type="reset" defaultValue="Reset" />
    </form>);
  }
  
export function MakeModal () {
    // this is where to input the modal code
    // this should render the modal page - not sure if you actually update the state here
    return (<div className="small-view">
    {/* The Modal */}
    <div id="filtermodal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <span className="close">×</span>
        <form>
          <h2>Filter</h2>
          <span className="filtertype">Contains:</span><br />
          <input type="checkbox" id="contains1" name="contains1" defaultValue="Chocolate" />
          <label htmlFor="contains1">
            Chocolate</label><br />
          <input type="checkbox" id="contains2" name="contains2" defaultValue="Caramel" />
          <label htmlFor="contains2">
            Caramel</label><br />
          <input type="checkbox" id="contains3" name="contains3" defaultValue="PeanutAlmondy" />
          <label htmlFor="contains3">
            Peanuts/Peanut Butter/Almonds</label><br />
          <input type="checkbox" id="contains4" name="contains4" defaultValue="Nougat" />
          <label htmlFor="contains4">
            Nougat</label><br />
          <input type="checkbox" id="contains5" name="contains5" defaultValue="CrispedRiceWafer" />
          <label htmlFor="contains5">
            Crisped Rice/Wafers/Cookie</label><br />
          <input type="checkbox" id="contains6" name="contains6" defaultValue="Pluribus" />
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
          <nobr>Min             Max</nobr><br />
          <input className="sugarrange" aria-label="Minimum Sugar Percentile" type="number" id="sugarmin" name="sugarmin" min={0} max={100} />
          <nobr>% to
          </nobr>
          <input className="sugarrange" aria-label="Maximum Sugar Percentile" type="number" id="sugarmax" name="sugarmax" min={0} max={100} /><nobr>
            %</nobr><br />
          <p id="sugarFeedback" className="invalid-feedback" /><br />
          <label className="filtertype" htmlFor="sort">Sort By:</label><br />
          <select name="sort" id="sort">
            <option value="alphabet">Name A to Z</option>
            <option value="sugarasc">Sugar Percentile Low to High</option>
            <option value="sugardes">Sugar Percentile High to Low</option>
          </select>
          <br /><br />
          <button id="applybutton" type="button">Apply</button>
          <input type="reset" defaultValue="Reset" />
        </form>
      </div>
    </div>
  </div>
  );
  }
  