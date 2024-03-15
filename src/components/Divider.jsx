import React from "react";
import "./Divider.css";

function Divider () {
    return (
        <hr style={{ backgroundColor: '#1B1914', color: '#FFB53A' }}
        class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400" />
    );
}

export default Divider;


