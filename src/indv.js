import CANDY_DATA from './data/candy-data.json'; 
import {useParams} from 'react-router-dom';
import {convertToWords} from './cards.js';

function getIndvCandyImgName(candy) {  
    // the props should be the individual candy object
    let location = candy.competitorname.split(' ').join('_');
    return "./img/"+candy.candynum+"_"+location+".jpg";
}

export function MakeIndv(props) {
    // the props for this should be the individual candy object
    let urlParams = useParams();
    let candyName = urlParams.candyname; 
    console.log("Candy Name: " , candyName);
    let candy =  CANDY_DATA.filter((candyObj) => {
      return candyObj.competitorname === candyName;
    }); 
    candy = candy[0];
    if(!candy) return <h2>Candy not specified</h2> 
    console.log("CANDY INDV PAGE: " , candy);
  
    return (<div key={candy.competitorname}>
      <div className="card">
        <div className="card-title">
          About:
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
      <p/>
      <section>
        <div className="card">
          <div className="card-title">
            Nutrition Information:
          </div>
          <div className="card-img nutrition-info">
            <img src={getIndvCandyImgName(candy)} alt={"Nutrition Information about" + candy.competitorname}/>
          </div>
        </div>
      </section>
    </div>);
  }
  