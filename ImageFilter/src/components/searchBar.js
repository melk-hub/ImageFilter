import React from "react";
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFilter: "",
        }
    }

    handleChange(e) {
        this.setState({
            searchFilter: e.target.value
        }, debounce(() => {this.props.changeFilter(this.state.searchFilter); window.scrollTo(0, 0);}, 500));
    }

    render() { 
        return(
            <div>
                <form className="py-3 m-5 my-2 flex flex-col items-center">
                    <input type="text" className="p-2.5 h-15 text-black rounded-md text-4xl" placeholder="Search" onChange={this.handleChange.bind(this)}>
                    </input>
                </form>
            </div>
        );
    }
}

export default SearchBar;