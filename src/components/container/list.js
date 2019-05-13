import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from '../../actions'
import '../../assets/styles/List.css';

class List extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            this.props.data.length?<div className={'listContainer'}>

                {
                    this.props.data.map((item,index)=><div className={'itemContainer'} key={index.toString()}>

                        <h4>{item.title}</h4>
                        <p>From - {new Date(+item.from).toLocaleDateString().split(".").reverse().join("-")}</p>
                        <p>To - {new Date(+item.to).toLocaleDateString().split(".").reverse().join("-")}</p>
                        <p>Description - {item.description}</p>

                    </div>)
                }

            </div>:null
        );
    }
}

const mapStateToProps = state =>{

    return {
        ...state.data
    }

};

export default connect(mapStateToProps,{getData})(List)
