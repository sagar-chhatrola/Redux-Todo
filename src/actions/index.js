import {ADD_REMINDER,DELETE_REMINDER} from '../constant';

export const addReminder=(text,dueDate)=>{
	var action={
		type:ADD_REMINDER,
		text,
		dueDate
	}
	console.log('action in ADD_REMINDER',action);
	return action;
}

export const deleteReminder=(id)=>{
	var action={
		type:DELETE_REMINDER,
		id
	}
	console.log('action in DELETE_REMINDER',action);
	return action;
}