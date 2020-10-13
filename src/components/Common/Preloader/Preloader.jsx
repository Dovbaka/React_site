import React from "react";
import preloader from "../../../assets/images/loading.svg";

function Preloader({marginTopValue = 50}) {
    return <div>
    <img src={preloader} alt={"preloader"}
         style={{marginLeft: "auto",
             marginRight: "auto",
             display: "block",
             marginTop: (marginTopValue + "px")}
         }/>
</div>
}

export default Preloader;