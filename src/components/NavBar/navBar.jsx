import style from "./navBar.module.css"
import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone, IdcardTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { Children, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>       
      </Menu.Item>
      
      <Menu.SubMenu key="s" title="Logins List" style={{ marginLeft: 'auto' }}>
        <Menu.Item key="1" icon= {<IdcardTwoTone />} >
        <Link to="/Login01">background Image</Link>
        </Menu.Item>
        <Menu.Item key="2" icon= {<IdcardTwoTone />} >
        <Link to="/Login02">Animated Logo</Link>
        </Menu.Item>
        <Menu.Item key="3" icon= {<IdcardTwoTone />} >
        <Link to="/Login03">Carousel</Link>
        </Menu.Item>
        <Menu.Item key="4" icon= {<IdcardTwoTone />} >
        <Link to="/Login04">Background video</Link>
        </Menu.Item>
        <Menu.Item key="5" icon= {<IdcardTwoTone />} >
        <Link to="/Login05">Matrix Style</Link>
        </Menu.Item>
        <Menu.Item key="6" icon= {<IdcardTwoTone />} >
        <Link to="/Login06">Future</Link>
        </Menu.Item>
        <Menu.Item key="7" icon= {<IdcardTwoTone />} >
        <Link to="/Login07">Neon Lights</Link>
        </Menu.Item>
        <Menu.Item key="8" icon= {<IdcardTwoTone />} >
        <Link to="/Login08">Multiple Logo Animations</Link>
        </Menu.Item>
        <Menu.Item key="9" icon= {<IdcardTwoTone />} >
        <Link to="/Login09">Dark and Blue</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="c" icon= {<EditTwoTone />} style={{ marginLeft: 'auto' }}>
        <Link to="/Contact">Contact</Link>
      </Menu.Item>
      
      <Menu.Item key="a" icon= {<CheckCircleTwoTone />} >
        <Link to="/About">About me</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;