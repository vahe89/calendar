import React, {Component} from 'react';
import '../../assets/styles/App.css';
import Form from "../container/form";
import List from "../container/list";
import GoogleLogin from 'react-google-login';

class Home extends Component {

    state = {
      formVisible: false
    };

    setFormVisible = (visible)=>{
      this.setState({formVisible: visible})
    };

    responseGoogle = (response) => {
        console.log(response);
    };

    render() {

        const {formVisible} = this.state;

        return (
            <div>
                <GoogleLogin
                    clientId="804440186166-o4ovdjq67nq74n7ego8gfvdcjqdn3v1j.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

                <div className='contentContainer'>

                    <div className='section'>

                        <button className={"btn btn-primary"} onClick={()=>{this.setFormVisible(true)}}>+NEW</button>

                        <List/>

                    </div>

                    <div className='section'>

                        {formVisible && <Form setFormVisible={this.setFormVisible}/>}

                    </div>

                </div>
            </div>
        );
    }
}

export default Home