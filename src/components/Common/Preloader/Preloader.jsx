import React from "react";
import preloader from "../../../assets/images/loading.svg";

function Preloader({marginTopValue}) {
    return <div>
    <img src={preloader} alt={"preloader"}
         style={{marginLeft: "auto",
             marginRight: "auto",
             display: "block",
             marginTop: marginTopValue? (marginTopValue + "px"): "50px"}
         }/>
</div>
}

export default Preloader;