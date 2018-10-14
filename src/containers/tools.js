import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTools } from '../actions/toolActions';
// import Item from '../components/item'
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import toolForm from './form'

class Tools extends Component {


    componentDidMount() {
        this.props.fetchTools()
    }

    handleShow = (t) => {
       console.log(t) 
    }

    render() {

        return (
            <div>
                <Grid className="star">


                    <Row className="show-grid">
                        {this.props.myTools.map((t) => {

                            return (
                                <Col xs={6} md={4} >
                                    <img className="toolpic" src={t.url} alt={t.name}/>
                                    <p>{t.description}</p>
                                    <p>&#36;{t.price}&#47;hour<span></span><button onClick={this.handleShow}> Details </button>  </p>
                                    <p><button>Add to cart</button></p>
                                </Col>

                            )
                        })}

                    </Row>

                </Grid>
                {/* <Switch>
                    <Route exact path="/tools/new" component={toolForm}/>
                  
                </Switch> */}
                <Link to="/tools/new">Post New Tool</Link>




            </div>
        )
    }




}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchTools: fetchTools,
    }, dispatch)
}


const mapStateToProps = state => {

    return { myTools: state.tools.tools };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools)

