import React, {useState} from "react";
import style from './Pagination.module.css'

function Pagination(props) {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize +1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div className={style.paginator}>
        {
            portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button>}
                <div className={style.pageNumbers}>
                    { pages
                        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                        .map(p =>
                            <span key={p} className={props.currentPage === p ? style.selectedPage : ""}
                                  onClick={() => {
                                      props.onPageChange(p)
                                  }}> {p} </span>
                        )
                    }
                </div>
        {
            portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>}
    </div>
}

export default Pagination;