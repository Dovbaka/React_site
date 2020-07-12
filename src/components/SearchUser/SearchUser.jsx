import React from "react";
import style from './SearchUser.module.css'
import * as axios from "axios";

class SearchUser extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
            this.props.setUsers([{id: 1, fullName: "Arthur Morgan", status: "Where's Lenny?", location:{city: "Boston", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x"},
                {id: 2, fullName: "John Marston", status: "I'm gonna take my horse to the old time road", location:{city: "Black Water", country: "America"}, subscribed: true, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 3, fullName: "Dutch van der Linde", status: "I have a god damn plan! We need just one score!", location:{city: "Nuevo Paraíso", country: "Mexico"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
                {id: 4, fullName: "Lenny Summers", status: "I'm dead LOL", location:{city: "Boston", country: "America"}, subscribed: false, avatar:"https://gravatar.com/avatar/3c4324e51d48814cdb025fed693cca29?s=200&d=mp&r=x" },
            ])//(res.data.items)
        });
    }

    render() {
        return <div className={style.container}>
            {
                this.props.users.map( el => <div key={el.id} className={style.item}>
                    <div className={style.usersAvatar}>
                        <div>
                            <img  src={el.avatar}/>
                        </div>
                    </div>
                    <div className={style.users}>
                <span className={style.info}>
                    <div>{el.fullName}</div>
                    <div style={{fontSize: "8pt", padding: "5px 0px"}}>Status: {el.status}</div>
                </span>
                        <span className={style.location}>
                    <div>From {el.location.city}</div>
                    <div>{el.location.country}</div>
                </span>
                        <div className={style.sub}>
                            {el.subscribed ? <button onClick={() => {this.props.unsubscribeUser(el.id)}}> Subscribe </button>
                                : <button onClick={() => {this.props.subscribeUser(el.id)}}> Unsubscribe </button> }
                        </div>
                    </div>
                </div>)
            }
        </div>
    }

}

export default SearchUser;