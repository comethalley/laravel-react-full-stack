import React from "react";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <h1>Default Layout</h1>
            <Outlet />
        </>
    );
}
