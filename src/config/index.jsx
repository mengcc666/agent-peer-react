import { Link } from 'react-router-dom'
import { HomeOutlined,DiffOutlined,EditOutlined,ApiOutlined } from '@ant-design/icons';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to='/layout/control'>网络控制</Link>,'layout/control',<ApiOutlined/>),
  getItem(<Link to='/layout/home'>基本功能</Link>, '/layout/home', <HomeOutlined />),
  getItem(<Link to='/layout/article'>网络状态</Link>, '/layout/article', <DiffOutlined />),
  getItem(<Link to='/layout/publish'>数据上链</Link>, '/layout/publish', <EditOutlined />),

];

export default items