import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "../Nav";
import Card from "../Card";
import PersonPage from "../PersonPage";
import Logo from "./logo.svg";
import One from "./paintings/1.jpg";
import Two from "./paintings/2.jpg";
import Three from "./paintings/3.jpg";
import Four from "./paintings/4.jpg";
import Five from "./paintings/5.jpg";
import Six from "./paintings/6.jpg";
import Seven from "./paintings/7.jpg";
import Eight from "./paintings/8.jpg";
import Nine from "./paintings/9.jpg";
import Ten from "./paintings/10.jpg";
import Eleven from "./paintings/11.jpg";
import Twelve from "./paintings/12.jpg";
import Thirteen from "./paintings/13.jpg";
import Fourteen from "./paintings/14.jpg";
import Fifteen from "./paintings/15.jpg";
import Sixteen from "./paintings/16.jpg";
import Seventeen from "./paintings/17.jpg";
import Eighteen from "./paintings/18.jpg";
import Nineteen from "./paintings/19.jpg";
import Twenty from "./paintings/20.jpg";
import TwentyOne from "./paintings/21.jpg";
import TwentyTwo from "./paintings/22.jpg";
import TwentyThree from "./paintings/23.jpg";
import TwentyFour from "./paintings/24.jpg";
import TwentyFive from "./paintings/25.jpg";
import TwentySix from "./paintings/26.jpg";
import TwentySeven from "./paintings/27.jpg";
import TwentyEight from "./paintings/28.jpg";
import TwentyNine from "./paintings/29.jpg";
import Thirty from "./paintings/30.jpg";
import ThirtyOne from "./paintings/31.jpg";
import ThirtyTwo from "./paintings/32.jpg";
import ThirtyThree from "./paintings/33.jpg";
import ThirtyFour from "./paintings/34.jpg";

const HomeGrid = () => {
  return (
    <>
      <Nav />
      <div class="masonry-wrapper">
        <h1 className="pageHeadline">Paintings</h1>
        <div class="masonry">
          <a href="/human-one">
            <Card
              title="Human 1"
              size="113x160"
              medium="Charcoal, white chalk"
              price="7.780,00 €"
              painting={One}
            />
          </a>
          <a href="/human-two">
          <Card
            title="Human 2"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Two}
          />
          </a>
          <a href="/human-three">
          <Card
            title="Human 3"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Three}
          />
          </a>
          <a href="/human-four">
          <Card
            title="Human 4"
            size="113x160"
            medium="Charcoal, white chalk"
            price="1.990,00 €"
            painting={Four}
          />
          </a>
          <a href="/human-five">
          <Card
            title="Human 5"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Five}
          />
           </a>
           <a href="/human-six">
          <Card
            title="Human 6"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Six}
          />
          </a>
          <a href="/human-seven">
          <Card
            title="Human 7"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Seven}
          />
          </a>
          <a href="/human-eight">
          <Card
            title="Human 8"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Eight}
          />
          </a>
          <a href="/human-nine">
          <Card
            title="Human 9"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Nine}
          />
              </a>
              <a href="/human-ten">
          <Card
            title="Human 10"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Ten}
          />
          </a>
          <a href="/human-eleven">
          <Card
            title="Human 11"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Eleven}
          />
          </a>
          <a href="/human-twelve">
          <Card
            title="Human 12"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Twelve}
          />
          </a>
          <a href="/human-thirteen">
          <Card
            title="Human 13 "
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={Thirteen}
          />
         </a>
         <a href="/human-fourteen">
          <Card
            title="Human 14"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Fourteen}
          />
           </a>
           <a href="/human-fifteen">
          <Card
            title="Human 15"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Fifteen}
          />
          </a>
          <a href="/human-sixteen">
          <Card
            title="Human 16 "
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={Sixteen}
          />
          </a>
          <a href="/human-seventeen">
          <Card
            title="Human 17"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Seventeen}
          />
          </a>
          <a href="/human-eighteen">
          <Card
            title="Human 18 "
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={Eighteen}
          />
          </a>
          <a href="/human-nineteen">
          <Card
            title="Human 19"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={Nineteen}
          />
          </a>
          <a href="/human-twenty">
          <Card
            title="Human 20 "
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={Twenty}
          />
          </a>
          <a href="/human-twentyone">
          <Card
            title="Human 21"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={TwentyOne}
          />
          </a>
          <a href="/human-twentytwo">
          <Card
            title="Human 22"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={TwentyTwo}
          />
          </a>
          <a href="/human-twentythree">
          <Card
            title="Human 23"
            size="113x160"
            medium="Charcoal, white chalk"
            price="7.780,00 €"
            painting={TwentyThree}
          />
          </a>
          <a href="/human-twentyfour">
          <Card
            title="Human 24 "
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={TwentyFour}
      
          ></Card>
          </a>
          <a href="/human-twentyfive">
          <Card
            title="Human 25"
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={TwentyFive}
          ></Card>
          </a>
          <a href="/human-twentysix">
          <Card
            title="Human 26"
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780 , 00 € "
            painting={TwentySix}
          ></Card>
          </a>
          <a href="/human-twentyseven">
          <Card
            title="Human 27"
            size=" 113x160 "
            medium=" Charcoal , white chalk "
            price=" 7.780,00 €"
            painting={TwentySeven}
          ></Card>
          </a>
          <a href="/human-twentyeight">
          <Card
            title="Human 28"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 €"
            painting={TwentyEight}
          ></Card>
          </a>
          <a href="/human-twentynine"> 
          <Card
            title="Human 29"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 €"
            painting={TwentyNine}
          ></Card>
          </a>
          <a href="/human-thirty">
          <Card
            title="Human 30"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 € "
            painting={Thirty}
          ></Card>
          </a>
          <a href="/human-thirtyone">
          <Card
            title="Human 31"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 € "
            painting={ThirtyOne}
          ></Card>
          </a>
          <a href="/human-thirtytwo">
          <Card
            title="Human 32"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 € "
            painting={ThirtyTwo}
          ></Card>
          </a>
          <a href="/human-thirtythree">
          <Card
            title="Human 33"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 € "
            painting={ThirtyThree}
          ></Card>
          </a>
          <a href="/human-thirtyfour">
          <Card
            title="Human 34"
            size=" 113x160 "
            medium=" Charcoal, white chalk"
            price=" 7.780,00 € "
            painting={ThirtyFour}
          ></Card>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
