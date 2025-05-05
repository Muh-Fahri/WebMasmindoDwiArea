import React from "react";
import NavSide from "./navSide";

function Dashboard() {
    return (
        <div>
            <NavSide />
            <div className="content" style={{ marginLeft: '260px', padding: '20px' }}>
                <h1>Selamat datang di Dashboard!</h1>
                <p>Ini adalah halaman utama setelah login.</p>
            </div>
        </div>
    );
};

export default Dashboard;
