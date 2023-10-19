import "./user.css";

const User = (props) => {
    return (
      <div className="danger">
        <ul>
          <li>name: {props.name}</li>
          <li>age: {props.age}</li>
        </ul>
      </div>
    );
  };
  
  export default User;