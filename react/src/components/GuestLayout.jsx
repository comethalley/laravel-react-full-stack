import React from "react";
import { Outlet } from "react-router-dom";

export default function GeustLayout() {
    return (
        <>
            <div>
                For Geust Only
                <Outlet />
            </div>
        </>
    );
}
