import { useState } from "react";
import User from "./User";

const Lab1 = () => {

    const [users, setUsers] = useState([
        { name: "mahmoud", age: 23 },
        { name: "Alaa", age: 15 },
      ]);
    
    const userDisp = users.map((el) => <User name={el.name} age={el.age} />);

    return (
        <>
    <User
      name={"Ahmed"}
      age={21}
      />
    
     {userDisp} 
      </>

    )
}

export default Lab1;