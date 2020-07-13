import React from "react";
import style from './SearchUser.module.css'
import * as axios from "axios";

class SearchUser extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount-2500);
            /*[{id: 1, fullName: "Arthur Morgan", status: "Where's Lenny?", location:{city: "Boston", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
                {id: 2, fullName: "John Marston", status: "I'm gonna take my horse to the old time road", location:{city: "Black Water", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 3, fullName: "Dutch van der Linde", status: "I have a god damn plan! We need just one score!", location:{city: "Nuevo Paraíso", country: "Mexico"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 4, fullName: "Lenny Summers", status: "I'm dead LOL", location:{city: "Boston", country: "America"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
            ]*/
        });
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)});
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 0; i < pagesCount; i++){
            pages.push(i+1);
        }

        return <div className={style.container}>
            <div className={style.pageNumbers}>
                {
                    pages.map( p =>
                        <span className={this.props.currentPage === p && style.selectedPage }
                        onClick={() => {this.onPageChange(p)}}> {p} </span>
                    )
                }
            </div>
            {
                this.props.users.map( el => <div key={el.id} className={style.item}>
                    <div className={style.usersAvatar}>
                        <div>
                            <img  src={el.photos.small == null ? "https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" : el.photos.small}/>
                        </div>
                    </div>
                    <div className={style.users}>
                <span className={style.info}>
                    <div>{el.name}</div>
                    <div style={{fontSize: "8pt", padding: "5px 0px"}}>Status: {el.status}</div>
                </span>
                        <span className={style.location}>
                    <div>From City</div>
                    <div>Country</div>
                </span>
                        <div className={style.sub}>
                            {el.followed ? <button onClick={() => { this.props.unsubscribeUser(el.id)}}> Subscribe </button>
                                : <button onClick={() => {this.props.subscribeUser(el.id)}}> Unsubscribe </button> }
                        </div>
                    </div>
                </div>)
            }
        </div>
    }

}

export default SearchUser;