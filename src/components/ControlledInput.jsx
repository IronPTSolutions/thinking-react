import React from 'react'

class ControlledInput extends React.Component {
    state = {
        text: ''
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.text}
                    onChange={(event) => {
                        this.setState({ text: event.target.value })
                    }}
                    type="text"
                    className={`form-control ${this.state.text.length < 10 ? 'is-invalid' : 'is-valid'}`}
                />
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default ControlledInput