import React, { useState } from 'react';
import Burger from './Burger';
import Menu from './Menu';

export default () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <Burger />
            <Menu /> */}
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
    )
}