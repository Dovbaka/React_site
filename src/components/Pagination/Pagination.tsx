import React, {useState} from "react";
import style from './Pagination.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    portionSize?: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}

const Pagination: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                         portionSize = 10, currentPage, onPageChange }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let leftBtnMode, rightBtnMode;


    return <div className={style.paginator}>
        {portionNumber > 1 ? leftBtnMode = false : leftBtnMode = true}
        <button disabled={leftBtnMode} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}> &#60; </button>
        <div className={style.pageNumbers}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p =>
                    <span key={p} className={currentPage === p ? style.selectedPage : ""}
                          onClick={() => {
                              onPageChange(p)
                          }}> {p} </span>
                )
            }
        </div>
        {portionCount > portionNumber ? rightBtnMode = false : rightBtnMode = true}
        <button disabled={rightBtnMode} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}> &#62; </button>
    </div>
}

export default Pagination;