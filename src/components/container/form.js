import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveForm} from '../../actions'
import '../../assets/styles/Form.css';

class Form extends Component {

    state = {
        formData: {
            title: null,
            from: null,
            to: null,
            description: null
        },
        formErrors: {
            title: {
                error: false,
                message: 'Title is required.'
            },
            from: {
                error: false,
                message: 'Field from is required.'
            },
            to: {
                error: false,
                message: 'Field to is required.'
            },
            description: {
                error: false,
                message: 'Description is required'
            },
            dateError: {
                error: false,
                message: 'The End date must be greater than the Start date.'
            }
        }
    };

    handleChange = (e)=>{

      let data = {...this.state.formData};
      let newErrorsData = {...this.state.formErrors};
      if(e.target.name === 'to' || e.target.name === 'from'){
          data[e.target.name] = new Date(e.target.value).getTime();
          newErrorsData.dateError.error=false
      }else{
          data[e.target.name] = e.target.value
      }
      newErrorsData[e.target.name].error = false;
      this.setState({formData: data,formErrors: newErrorsData})

    };

    saveData = (e)=>{

        e.preventDefault();
        for(let i in this.state.formData){

            if(!this.state.formData[i]){

                let newErrorsData = {...this.state.formErrors};
                newErrorsData[i].error = true;
                this.setState({formErrors: newErrorsData});
                return

            }

        }

        if(this.state.formData.from > this.state.formData.to){

            let newErrorsData = {...this.state.formErrors};
            newErrorsData.dateError.error = true;
            this.setState({formErrors: newErrorsData});
            return

        }

        this.props.saveForm(this.state.formData);
        this.props.setFormVisible(false);

    };

    render() {
        const {formErrors} =this.state;
        return (
            <form onSubmit={this.saveData}>

                <div className={'flexCenterContainer columnFlex flexStart'}>

                    <input className="form-control" type={'text'} name={'title'} placeholder={' TITLE'}  onChange={this.handleChange}/>
                    {formErrors.title.error && <p className={'text-danger'}>{formErrors.title.message}</p>}

                </div>

                <div className={'flexCenterContainer'}>

                    <div className={'inputContainer'}>
                        <div className={'flexCenterContainer'}>
                            <label htmlFor={'from'}>From</label>
                            <input className="form-control" type={'date'} name={'from'} onChange={this.handleChange} id={'from'}/>
                        </div>
                        {formErrors.from.error && <p className={'text-danger ml-5'}>{formErrors.from.message}</p>}
                        {formErrors.dateError.error && <p className={'text-danger ml-5'}>{formErrors.dateError.message}</p>}
                    </div>

                    <div className={'inputContainer'}>
                        <div className={'flexCenterContainer'}>
                            <label htmlFor={'to'}>To</label>
                            <input className="form-control" type={'date'} name={'to'} onChange={this.handleChange} id={'to'}/>
                        </div>
                        {formErrors.to.error && <p className={'text-danger ml-4'}>{formErrors.to.message}</p>}
                    </div>

                </div>

                <div className={'flexCenterContainer columnFlex'}>

                    <textarea className="form-control" rows="4" cols="50" placeholder={'DESCRIPTION'} name={'description'} onChange={this.handleChange}/>
                    {formErrors.description.error && <p className={'text-danger'}>{formErrors.description.message}</p>}

                </div>

                <div className={'flexCenterContainer buttonSaveContainer'}>

                    <button type="submit" className={"btn btn-success m-5 saveButton"}>SAVE</button>

                </div>

            </form>
        );
    }
}


export default connect(null,{saveForm})(Form)