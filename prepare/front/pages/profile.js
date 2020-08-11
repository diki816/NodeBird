import AppLayout from "../components/AppLayout";
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>My Profile | NodeBird</title> //Customize title in '_app.js'
            </Head>
            <AppLayout>
            <div> Profile </div>
            </AppLayout>
        </>
    );

};

export default Profile;