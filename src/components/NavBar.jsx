import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav className='bg-slate-800'>
        <ul className='flex justify-center items-center gap-20 py-3 text-white text-lg 2xl'>
          <li><Link to='/'><img className='w-[40px] rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADp6en8/Pz4+Phvb2+wsLDw8PD19fXc3NzY2Njk5OQ/Pz/t7e02NjYmJibMzMzS0tK6urpHR0cZGRmBgYFQUFCTk5NnZ2d6enpbW1thYWETExOpqamdnZ1WVlaLi4vCwsJCQkIYGBgxMTGGhoYnJyd0dHQLCwu9vb0nT6z3AAAGKklEQVR4nO2d6XLiOhBGEQazGLBZHdZAZnIT3v8FbxwyBLBYSv215Kb6VE3NnxTSKYEldUvtWlJ/bpJavfbc1NVQPGooHzWUjxrKRw3lo4byUUP5qKF81FA+aigfNZSPGspHDeWjhvJRQ/mooXzUUD5qKB81lI8ayqcyhslo/mbmDB9cDcNOPjAFTYbProJhtjA/LBk+PbzhsGeOLBg+P7Rhv2lOmDK0ENhwZM7YMjQR1DB6ORc0a4ZGQhr2BxeCpsPQSkDDZHIpaDj6Es6wXvIzA5Z2Qhm2PsuGHI/SYIbRuCxohhwthTCMvv59WATTiKO1QGM4sgianKWpMIaRTfDrScoxiGEMmzZBjo1FLZBhYh3ChKexIIZLj0MYxLBjHcIWU2shDOc2wZirtQCGDZvgmK25AIa2uXDVZmsugOHlprCAZb12wL9h2yI4YmzPv+HQ41OmwL/h2usIhjAszRVd3vb8G14saBZcM/0//Bueb305omvn+Dc8DbB99GsRy7b3BP+Gb0e/ad9He/4NZ992k+au4ac9/4ajzXqdJZ70asHzFic02u1fbeCPk8cw6mTxZpPn61Hnkb524u2iN5ms0nS8nMYZdhXOYDjMX1e/j8t0ubmZjYh205ME4oHZFrgKQBt2bNvbz/yaZGaLmxas8qSGmUmwhvu3Kx02b3F57ZLk6bU//54sE4gi0jArZcvOe5yd/XX8evOvC5qICCrOsH6/x3823UOP2ztrrKbMhv5VhRnGj3U5bebxZmnJO11h1qcOI8iwlK/GQQ1wYAz7q/s9dYYYAYAYdh//1vlXRBh2Wf2+2Ac2tOdZoGSElSrdsF8+UoGHsFSlG5ZWlRwQgv5kw2sLSyyEBDjVcOfDL83ud4TL0Baih9MjbRiJhg8uL0kQk8M0Q/aZ8IsPmiDR0JqQx0JO75MM7Ql5KC9UQZoh34biH72wO2APyzXAtoBiuGUXRGQWCYbRzTgSghdEZJhgaElXg0kCG7LP9pjTmARDbkHTgmQv3A3Zn6Q5Jj/jbvhg+NAdUJjT3ZB7Y/gKSrG5G/5lNoxDG7aYBWGnvp0NuVfdA1Qi2Nlwz2w4R51DcTbcMBvGwQ2nzIZZcEPrlQkg9eCGi/udJAE7D+ZseDujTaf9/IbR0xs+/Ri2nn4MMYdpqmwIu7heWUNSZhtieP98EA3YldnKrmlgZU4quy6FXeyu7N4C9qhxNmQPRG1CG2bchr3QhpbCHWBAJ6GdDRu8Z9mMQZU2c48mXj3wDANzpcbdkHtCRA2iuyH7dFH8EgGrb3dD/vRhcZotpKGP41DrsGf12ZPcBvI9dTaM2FemBRN6MINgaK0ThKZH/ikSvqV9H4ZmTL2pSDlP4+V0sJk1aKNIMXz3Ymj+0jKJFEMfZy+/ySi3nyiGEXei+8icMIiks4k+5osD6S6MoYeF25HXruOvkXZGmPNCVwnH49A0Q09P0wPbEIYejkH/4hjVIN5GmPkTdI1MEQ3ZY4q/uO6kiIb88agjrSCGUS33Jfjiuqyh3uzys8EwxYXnMIaRh5DbN+77RLKhpwlj77y/oBpGHi7OGFKlb/otWQ83Z0g5b8Bdbg+/xJTQPbJh5GMQKbeD6GMY8d9/IpVvpY9hZC2RD4VU/ANSF4N5dUp7vw6mtgnvFoNWOxJjyJryJqZnIIasC/DZ1w6G4oiqomR7XQWGwyVEd0WUIdukSE4hwiphlcsDQ1hUp9YXT/WBCb2GIs6w8R+DIaWoyQ/AmnsMiZp3QLeQVQXhP0XI/TVoZUjwtdLP0LfVy1hf4uROBrmBiK3u2UKeQAFV28eOIXKBGvwErRVg6G2L6hO8jnByM6c4+FiPdsNhNoq3t3dcuPd34Sslt689blYXRcobnferi4Q9ruA1R7Vra0mQcXzQ++n44b8os17UnCDfZclSz3tX+qbOr/Y52ZbqLm6hnWGqWL4+nTbG8c31c2N/GjZP8yJoUfma7EUh8m1xKCx9ne6KBu70uNVdN5uzway5OaSyka+EqE5dfS7UUD5qKB81lI8aykcN5aOG8lFD+aihfNRQPmooHzWUjxrKRw3lo4byUUP5qKF81FA+aigfNZSPGsqnXkvqz03yP286UIiFRhgzAAAAAElFTkSuQmCC" alt="logo" /></Link></li>
          <li><Link to='/'>Mac</Link></li>
          <li><Link to='ipad'>iPad</Link></li>
          <li><Link to='iphone'>iPhone</Link></li>
          <li><Link to='watch'>Watch</Link></li>
          <li><Link to='tv'>TV</Link></li>
          <li><Link to='music'>Music</Link></li>
          <li><Link to='support'>Support</Link></li>
         <Link><li><IoSearch /></li></Link>
          <Link><li><IoCopy /></li></Link>
        </ul>
    </nav>

  )
}

export default NavBar