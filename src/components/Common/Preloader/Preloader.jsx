import React from "react";
import preloader from "../../../assets/images/loading.svg";

function Preloader() {
    return <div>
    <img src={preloader}
         style={{marginLeft: "auto", marginRight: "auto", display: "block", paddingTop: "50px"}
         }/>
</div>
}

export default Preloader;