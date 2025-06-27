import React from 'react';

class ClassPerson extends React.Component {
 render() {
   return (
    <div>
        <span>Nombre: {this.props.name}</span><br />
        <span>Apellido: {this.props.surname}</span><br />
        <span>Edad: {this.props.age}</span>
    </div>
   )
 }
}

function FunctionalPerson({ name, surname, age }) {
  return (
    <div>
      <span>Nombre: {name}</span><br />
      <span>Apellido: {surname}</span><br />
      <span>Edad: {age}</span>
    </div>
  );
}

export default ClassPerson;
export { FunctionalPerson };