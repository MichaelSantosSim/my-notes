var PropertiesReader = require('properties-reader');

let homProps 	= 	PropertiesReader('/home/michaeldossantossim/personal_workspace/properties-comparer/application-dev.properties');
let devProps 	= 	PropertiesReader('/home/michaeldossantossim/personal_workspace/properties-comparer/application-hom.properties');
let localProps 	= 	PropertiesReader('/home/michaeldossantossim/personal_workspace/properties-comparer/application-local.properties');
let prodProps 	= 	PropertiesReader('/home/michaeldossantossim/personal_workspace/properties-comparer/application-prod.properties');

console.log(homProps.path().spring.data.rest);