import './App.css'
import React from 'react'
import InstructorItem from './components/InstructorItem'
import Modal from './components/Modal'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      instructor: '',
      instructors: [],
      isModalOpen: false,
      itemToEdit: null
    }

    this.removeInstructor = this.removeInstructor.bind(this)
    this.addInstructor = this.addInstructor.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.applyEdit = this.applyEdit.bind(this)

  }

  toggleModal(idx) {
    console.log(this.state.isModalOpen)
    this.setState({
      ...this.state,
      isModalOpen: !this.state.isModalOpen,
      itemToEdit: idx
    })
  }


  addInstructor() {
    let newInstructors = Array.from(this.state.instructors)
    newInstructors.push(this.state.instructor)
    console.log(newInstructors)
    this.setState({
      ...this.state,
      instructors: newInstructors
    })
  }

  removeInstructor(idx) {
    let newInstructors = Array.from(this.state.instructors)
    console.log(newInstructors)
    newInstructors.splice(idx, 1)
    console.log({
      instructors: newInstructors
    })
    this.setState({
      ...this.state,
      instructors: newInstructors
    })
  }


  applyEdit(idx, newName) {
    let newInstructors = Array.from(this.state.instructors)
    newInstructors[idx] = newName
    this.setState({
      ...this.state,
      instructors: newInstructors,
      isModalOpen: false
    })

  }

  render() {
    return (
      <div className="App">
        <div className="row mt-5">
          <input className="col mx-2" id="input"
            onChange={e => {
              this.setState({
                instructor: e.target.value
              })
            }}
          />
          <button className="col btn btn-primary mx-2"
            onClick={e => {
              this.addInstructor()
            }}
          >
            Add Instructors
          </button>
        </div>
        <div className="row">
          <ul className="col">
            {this.state.instructors.map((inst, idx) => {
              return <InstructorItem
                key={idx}
                name={inst}
                removeInstructor={this.removeInstructor}
                handleToggle={this.toggleModal}
                idx={idx}
              />
            })}
          </ul>
        </div>

        {this.state.isModalOpen ? <Modal

          handleToggle={this.toggleModal}
          // handleItemToedit
          applyEdit={this.applyEdit}
          instructorIdx={this.state.itemToEdit}
          instructor={this.state.instructors[this.state.itemToEdit]}
        /> : <></>}



      </div>

    );
  }
}
export default App
