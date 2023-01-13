import React from 'react'

class InstructorItem extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <div className="d-flex p-2 justify-content-between align-items-center">
            <div>{this.props.name}</div>
            <div className='d-flex gap-2'>
                <button
                    className='btn btn-warning'
                    onClick={() => {
                        this.props.handleToggle()
                    }}
                >Edit</button>
                <button
                    className="btn btn-danger"
                    onClick={e => this.props.removeInstructor(this.props.idx)}
                >Delete</button>
            </div>

        </div>
    }

}

export default InstructorItem