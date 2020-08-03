import React from "react";
import style from './Pagination.module.css'

function Pagination(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return <div className={style.pageNumbers}>
        {
            pages.map(p =>
                <span className={props.currentPage === p && style.selectedPage}
                      onClick={() => {
                          props.onPageChange(p)
                      }}> {p} </span>
            )
        }
    </div>
}

export default Pagination;