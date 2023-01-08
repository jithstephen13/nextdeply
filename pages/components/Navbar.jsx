import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div style={{display:"flex", gap:"20px",padding:"20px", backgroundColor:"black",color:"white"}}>
           <header><Link href={"/"}>HOME</Link></header>   
        </div>
    );
};

export default Navbar