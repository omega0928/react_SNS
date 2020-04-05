import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);

    const onSearch = (value) => {
        Router.push({ pathname: '/hashtag', query: { tag: value }}, `/hashtag/${value}`); // 내부적주소, 눈으로 보이는주소
    };

    return (
    <div>
        <Menu mode="horizontal">
            <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
            <Menu.Item key="profile"><Link href="/profile" prefetch><a>프로필</a></Link></Menu.Item>
            <Menu.Item key="mail">
                <Input.Search 
                enterButton 
                style={{ verticalAlign: 'middle' }}
                onSearch={onSearch}
                />
            </Menu.Item>
        </Menu>
        <Row gutter={10}> 
            <Col xs={24} md={6}>
                {me
                    ? <UserProfile />
                    : <LoginForm />}
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                <Link href="https://www.zerocho.com" ><a target="_blank">Made by zerocho</a></Link>
            </Col>
        </Row>
    </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;