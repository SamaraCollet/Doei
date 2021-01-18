import { Layout } from "antd";
import Header from "../../components/header";

import { ProfileTitle } from "./styles.js";

const { Header: AntHeader, Content } = Layout;

const VoluntaryProfile = () => {
  return (
    <>
      <Layout>
        <AntHeader>
          <Header />
        </AntHeader>
        <Content>
          <ProfileTitle>
            <h1>Profile</h1>
            <div className="bottom-line" />
          </ProfileTitle>
        </Content>
      </Layout>
    </>
  );
};

export default VoluntaryProfile;
