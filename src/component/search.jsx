import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "./imageResults"

class Search extends Component {
     
    state = {
        searchText: "",
        amount: 15,
        apiUrl: "https://pixabay.com/api/",
        apiKey: "9259184-33e11f59eb5abd709817fb3fe",
        images: [],
    }

    onTextChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {

            if (value === "") {
                this.setState({
                    images: [],
                })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(response => this.setState({ images: response.data.hits }))
                    .catch(err => console.log(err))
            }
        })
    };

    onAmountChange = (event, index, value) => {
        this.setState( { amount: value } )
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField
                name="searchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="Search for Images"
                fullWidth={true}
                />

                <br />
                
                <SelectField
                    amount="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15}primaryText="15" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50"/>
                    
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
                
            </div>
        )
    }
}

export default Search;