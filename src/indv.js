// renders the individual candy page
// importing the right modules
 
import {useParams} from 'react-router-dom';
import {convertToWords} from './cards.js';



// renders the actual component
export function Indv(props) {
    // the page will get the candy object from the url that the page goes to 
    let urlParams = useParams();
    let candyName = urlParams.candyname; // gets me the actual candy name


    let candy =  props.data.filter((candyObj) => {
      return candyObj.competitorname === candyName;
    }); 
    candy = candy[0];
    if(!candy) return <h2>Candy not specified</h2> 

    let aboutTitle = "About: " + candy.competitorname;
  
    // returns the actual components
    return (<div className="indv-info" key={candy.competitorname}>
      <div className="card indv-col">
        <div className="card-title">
          {aboutTitle}
        </div>
        <div className="card-img-top">
          <img className="indv-candy-img" src={candy.imglink} alt={candy.name} />
        </div>
        <div className="card-body candy-detail">
          <p>Has Chocolate: <span className="data-ans">{convertToWords(candy.chocolate)}</span></p>
          <p>Is Fruity: <span className="data-ans">{convertToWords(candy.fruit)}</span></p>
          <p>Has Caramel: <span className="data-ans">{convertToWords(candy.caramel)}</span></p>
          <p>Has Peanut, Almond, or Peanut Butter: <span className="data-ans">{convertToWords(candy.peanutyalmondy)}</span></p>
          <p>Has Nougat: <span className="data-ans">{convertToWords(candy.nougat)}</span></p>
          <p>Has Crispy Rice Wafer: <span className="data-ans">{convertToWords(candy.crispedricewafer)}</span></p>
          <p>Is Hard: <span className="data-ans">{convertToWords(candy.hard)}</span></p>
          <p>Is Bar: <span className="data-ans">{convertToWords(candy.bar)}</span></p>
          <p>Pluribus (many candies in 1 package): <span className="data-ans">{convertToWords(candy.pluribus)}</span> </p>
          <p>Sugar Percent: <span className="data-ans">{(candy.sugarpercent * 100) + '%'}</span> </p>
        </div>
      </div>
      <div className="indv-col nutrition-info">
        <div className="card">
          <div className="card-title">
            Nutrition Information:
          </div>
          <div className="card-img nutrition-info">
            <img src={"../" + getIndvCandyImgName(candy)} alt={"Nutrition Information about" + candy.competitorname}/>
          </div>
        </div>
      </div>
    </div>);
  }

  // gets the image file name from just the candy name 
  function getIndvCandyImgName(candy) {  
    // the props should be the individual candy object
    let location = candy.competitorname.split(' ').join('_');
    return "img/"+candy.candynum+"_"+location+".jpg";
}
  