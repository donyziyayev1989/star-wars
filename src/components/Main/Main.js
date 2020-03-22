import React, {Component} from 'react';
import Item from '../Item/Item';

class Main extends Component {
    render() {
        let heading = '';
        let items = null;
        if(this.props.searchText) {
            heading = <h1 className="notification">{this.props.count} items found for <span className="text-primary">{this.props.searchText}</span> in <span className="text-success">{this.props.selectType}</span></h1>;

           if (this.props.count > 0) {
            items = this.props.items.map((item, index) => {
                return <Item data={item} key={index}/>
            })
           }
        } else {
            heading = <h1 className="notification">Please enter search text that interested in</h1>
        }
        return(
            <main className="main">
                <div className="container">
                    {heading}
                    <div className="row">
                        {items}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main