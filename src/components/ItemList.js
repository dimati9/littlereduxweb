import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://reqres.in/api/users?page=1', 1);
    }

    getError = () => {
        this.props.fetchData('http://599167402df2f40011e4929a.mocka2pi.io/items', 0);
    }
    handleClick = () => {
            if(this.props.itemsPage == 2) {
                this.props.fetchData('https://reqres.in/api/users?page=1', 1);
            } else {
                this.props.fetchData('https://reqres.in/api/users?page=2', 2);
            }


    }

    render() {
        if (this.props.hasErrored) {
            return <div>
            <p>Sorry! There was an error loading the items</p>
                <button onClick={this.handleClick}>
                    Get Data
                </button>
            </div>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.first_name}
                    </li>
                ))}
            </ul>
                {this.props.itemsStatus ? <p>Loading Complete</p> : <p>Complete error</p>}

                {this.props.itemsPage > 1 ? <button onClick={this.handleClick}>
                    Page 1
                </button> : ''}

                {this.props.itemsPage < 2 ? <button onClick={this.handleClick}>
                    Page 2
                </button> : ''}

                <button onClick={this.getError}>
                    Error plz
                </button>

            </div>
        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    itemsStatus: PropTypes.bool.isRequired,
    itemsPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        itemsStatus: state.itemsStatus,
        itemsPage: state.itemsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,page) => dispatch(itemsFetchData(url,page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
