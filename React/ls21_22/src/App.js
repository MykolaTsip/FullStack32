import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, number, string } from 'yup';

import AllUsers from './components/Users';
 
const Enum = {
  NAME: 'name',
  AGE: 'age',
  PASS: 'password'
}

const initVal = {
  [Enum.NAME]: '',
  [Enum.AGE]: 0,
  [Enum.PASS]: ''
}


const validForm = object({
  name: string().required().min(3).max(10),
  age: number().required().moreThan(3).lessThan(100),
  password: string().required().min(8).max(12)
})

function App() {


  const subForm = (data) => {
      console.log(data);

      console.log(
        validForm
      );
  }


  return (
   <div>
      <Formik
        initialValues={initVal}
        onSubmit={subForm}
        validationSchema={validForm}
        // validate={(data) => {
        //   const err = {}
        //   console.log(data);

        //   if (!data.name) err.name = 'Name Req'
        //   if (!data.age) err.age = 'Age Req'
        //   if (!data[Enum.PASS]) err.password = 'Password Req'

        //   return err
        // }}
      >
        {/* <form>
          <input type='text' />
          <input type='number' />
          <input type='password' placeholder=''/>
        </form> */}

        { ({ isSubmitting, isValid, isValidating }) => (
          <Form>
          <label htmlFor={Enum.NAME}> { Enum.NAME } </label>
          <Field
            type="text"
            name={Enum.NAME}
            id={Enum.NAME}
            placeholder={Enum.NAME}
          />
          <ErrorMessage name={Enum.NAME}/>
          
          <hr/>
          <label htmlFor={Enum.AGE}> { Enum.AGE } </label>
          <Field
            type="number"
            name={Enum.AGE}
            id={Enum.AGE}
            placeholder={Enum.AGE}
          />
          <ErrorMessage name={Enum.AGE}/>


          <hr/>
          <label htmlFor={Enum.PASS}> { Enum.PASS } </label>
          <Field
            type="text"
            name={Enum.PASS}
            id={Enum.PASS}
            placeholder={Enum.PASS}
          />
          <ErrorMessage name={Enum.PASS}/>


          <hr/>

          {/* <Field type="submit" name="sub"/> */}
          <input type='submit' />
        </Form>

        )}
      </Formik>

      <hr/>
      <hr/>
      <hr/>


      <AllUsers/>
    </div>
  );
}

export default App;
