import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addReminder,deleteReminder} from '../actions';
import moment from 'moment';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
		text:'',
		dueDate:''
		}
	}
	addReminder(){
		console.log('this.state.dueDate',this.state.dueDate);
		console.log('this.state.text',this.props.addReminder(this.state.text,this.state.dueDate));
	}
	deleteReminder(id){
		console.log('this.props.deleteReminder',this.props.deleteReminder(id));

		console.log('id',id);
		
	}
	renderReminders(){
	console.log(this.props);
	var remind=this.props.reminderss;
	return(
		<ul className="list-group col-sm-4">
			{
				remind.map(remider=>{
					return (
						<li key={remider.id} className="list-group-item">
							<div className='list-item'>
								<div>{remider.text}</div>
								<div><em>{moment(new Date(remider.dueDate)).fromNow()}</em></div>
							</div>
							
							
							<div className='list-item delete-button' onClick={()=>this.deleteReminder(remider.id)}>&#x2715;</div>
							
						</li>
					)
				})
			}

		</ul>
	)


	}

	render(){
	
			return(
			<div className="App">
				<div className="title">
				Reminder Pro
				</div>
				<div className="form-inline">
				  <div className="form-group">
					<input placeholder="I have to..." className="form-control" onChange={event=>this.setState({text:event.target.value})}/>
				  </div>
				  <input type="datetime-local" className="form-control" onChange={event=>this.setState({dueDate:event.target.value})}/>
				  
					<button type="button" className="btn btn-success" onClick={()=>this.addReminder()}>
					Add Reminder
					</button>
				
				</div>
				{this.renderReminders()}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {reminderss:state};
	
};
export default connect(mapStateToProps,{addReminder,deleteReminder})(App);