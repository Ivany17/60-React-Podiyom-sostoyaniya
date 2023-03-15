import React from "react";
import Ciao from "../Ciao";

const CiaoList = (props) => {
    const {users} = props;
    const mapUsersCiao = ({id, firstName}) =><Ciao key={id} id={id} name={firstName} />;
    return <div>
        {users.map(mapUsersCiao)}
    </div>;
}

export default CiaoList;