import { Component } from 'react'
import { v4 } from 'uuid';


class Users extends Component {
    state = {
        arrUsers: [
            {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz',  },
            {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv',  },
            {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net',  },
            {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org',  },
            {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca',  },
            {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info',  },
            {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz',  },
            {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me'},
            {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io',  }
        ]
    }

    // deleteUser = (e) => {
    //     console.log(e);

    //     this.setState({arrUsers: this.state.arrUsers.filter((el, i) => i !== e)})
    //     console.log(v4());
    // }

    deleteUser = (id) => {
        this.setState(({arrUsers}) => ({
                arrUsers: arrUsers.filter((item, i) => i !== id)
            }))
    }

    render() {        
        return <div>
            { 
                this.state.arrUsers.map((val, i) => (
                    <div key={v4()}> {val.id} - {val.name} - {val.username} - {val.email} - <button onClick={() => this.deleteUser(i)}> Delete </button> </div>
                ))
            }
        </div>
    }
}

export default Users