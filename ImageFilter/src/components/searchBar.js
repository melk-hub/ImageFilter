import React from "react";

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
        }, () => {this.props.changeFilter(this.state.searchFilter); window.scrollTo(0, 0);});
    }

    render() { 
        return(
            <div className="sticky top-0">
                <form className="pt-3 m-10 my-5 flex flex-col items-center">
                    <input type="text" className="p-2.5 h-15 text-black rounded-md text-4xl" placeholder="Search" onChange={this.handleChange.bind(this)}>
                    </input>
                </form>
            </div>
        );
    }
}

export default SearchBar;