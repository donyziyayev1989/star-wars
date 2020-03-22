import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';


// import Main from '../Main/Main';
// import Footer from '../Footer/Footer';

class Layout extends React.Component {
    state = {
        items: [],
        count: 0,
        selectType: "people",
        searchText: '',
        loading:false
    }

    

    

    searchHandler = (data) => {
        this.setState(data)
    }


    render(){
        console.log(this.state)
        const { items, count, selectType, searchText, loading } = this.state;
        // console.log(loading);
        return(
            <div className="App-inner">
                <Header searchTerms={this.searchHandler}/>
               <Main 
                items={this.state.items} 
                count={this.state.count}
                selectType={this.state.selectType}
                searchText={this.state.searchText}
                loading={this.state.loading} />
                 {/* <Footer></Footer> */}
            </div>

        )
    }
}

export default Layout