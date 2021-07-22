import { Component } from 'react'
import 'isomorphic-fetch'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
class CreateShowRoom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    const data = new FormData(event.target)

    fetch('http://localhost:8000/api/v1/showroom/', {
      method: 'POST',
      body: data
    }).then(
      function (response) {
        if (response.ok) {
          alert('Showroom have been added!')
        } else {
          alert('Showroom have been not added!')
        }
      }
    )
      .catch(
        function (error) {
          alert('server error')
        }
      )
  }

  render () {
    return (
      <div>
        <Header title={'Car Showroom'} />
        <Navbar />

        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <form className='formtop' id='CreateShowRoom' onSubmit={this.handleSubmit} method='post'>
                <h4 className='text-center'>Create Showroom</h4>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <label>Show Name</label>
                    <input type='text' className='form-control shadow-none' ref={el => this.name = el} value={this.state.name} name='name' onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <label>Registration Number</label>
                    <input type='text' className='form-control shadow-none' ref={el => this.registration_number = el} value={this.state.registration_number} name='registration_number' onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <label>Logo Type</label>
                    <input type='text' className='form-control shadow-none' ref={el => this.logo_type = el} value={this.state.logo_type} name='logo_type' onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8 offset-md-2'>
                    <label>Contact Detail</label>
                    <input type='text' className='form-control shadow-none' ref={el => this.contact_info = el} value={this.state.contact_info} name='contact_info' onChange={this.handleUserInput} />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-8 offset-md-2 formtop'>
                    <input type='submit' className='btn btn-primary btn-block shadow-none' value='Create Show Room' />
                  </div>
                </div>
                <div className='panel panel-default'>
                  <div className='col-md-8 offset-md-2 text-danger'>
                    {/* <FormErrors formErrors={this.state.formErrors} /> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateShowRoom
