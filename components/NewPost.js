import React from 'react';
import ReactDOM from 'react-dom';

class NewPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A post was submitted!' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>New Post!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:<br/>
                        <input
                            type="text"
                            name="title"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </label>

                    <label>
                        <br/>
                        <span>
                            Category:<br/>
                        </span>
                        <input
                            type="text"
                            name="category"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </label>

                    <label>
                        <br/>
                        Content:<br/>
                        <input
                            type="textarea"
                            name="content"
                            />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" onChange={this.handleChange}/>
                </form>
            </div>
        )
    };
}

export default NewPosts;