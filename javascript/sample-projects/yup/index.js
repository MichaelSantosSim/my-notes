//import * as yup from 'yup';
const yup = require('yup');


// Schema
let schema = yup.object().shape({

  // name :yup.string().test('test-name', 'Given value is smaller than 3chars', function(value) {
  //           const { createError } = this;
  //           return (value.length === 0 || value.length > 3) ? true : createError(this);
  //       }),

  name : yup.string().when('name', {
    is : (val) => val && val.length > 0,
    then : yup.string().trim().min(3)
  }),
  age: yup.number().required().positive().integer(),
  address : yup.string(),
}, [['name', 'name']]);



// Object
let objectTobeValidated = {
  name: 'aa',
  address : 'aa',
  age: -1,
}



// check validity
schema.validate(objectTobeValidated, {abortEarly: false})
  .then(function (valid) {
    console.log(`ok`); // => true  
  }).catch((err) => {
      if(err.inner){
        err.inner.forEach(i => {
          console.log(`Validation failed for field "${i.path}": ${i.message}`);
        });
      }else{
        console.log(err);
      }
  });;