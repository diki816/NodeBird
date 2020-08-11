import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

const NordBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
}

NordBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NordBird;