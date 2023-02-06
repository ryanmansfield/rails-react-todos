import React from 'react';
import { useFormik } from 'formik';
import { createTodo } from "../apiActions"
import DatePickerField from "../components/DatePickerField";

function TodoForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      completed: false,
      due_date: new Date,
    },
    onSubmit: values => {
      createTodo(values)
    },
    
  });
  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <label htmlFor="completed">Completed</label>
        <input
          id="completed"
          name="completed"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.completed}
        />
  
        <label htmlFor="due_date">Due Date</label>
        <DatePickerField 
          name="due_date" 
          value={formik.values.due_date}
          onChange={formik.setFieldValue}
        
        />    
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default TodoForm;