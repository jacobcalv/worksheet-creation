import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';

class App extends Component {
  state = {
    name: 'Adrian',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Michelle_Obama_at_the_DNC_July_2016_%28cropped%29.jpg/458px-Michelle_Obama_at_the_DNC_July_2016_%28cropped%29.jpg',
    phone: 0,
    email: "abc",
    languages: "none",
  }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
    .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => { 
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'generatedDocument.pdf')
    })
  }
  
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });
  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="Image URL" name="image" onChange={this.handleChange}/>
        <input type="text" placeholder="Street Address" name="streetAddress" onChange={this.handleChange}/>
        <input type="text" placeholder="City" name="city" onChange={this.handleChange}/>
        <input type="text" placeholder="State" name="state" onChange={this.handleChange}/>
        <input type="text" placeholder="Zip Code" name="zipCode" onChange={this.handleChange}/>
        <input type="number" placeholder="Phone Number" name="phone"    onChange={this.handleChange}/>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="Employer Name 1" name="employer1" onChange={this.handleChange}/>
        <input type="text" placeholder="Role at Job" name="role" onChange={this.handleChange}/>
        <input type="text" placeholder="Description of Job Duties" name="description" onChange={this.handleChange}/>
        <input type="text" placeholder="Coding Languages" name="languages" onChange={this.handleChange}/>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}



export default App;
