import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
function App() {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/CryptoTracker/" element={<Homepage />} />
              <Route
                path="/CryptoTracker/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                path="/CryptoTracker/crypto/:coinId"
                element={<CryptoDetails />}
              />
              <Route path="/CryptoTracker/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        {/* <footer>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoTracker <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </footer> */}
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "large" }}>
              CryptoTracker
            </span>{" "}
            Copyright © 2024{" "}
            <span
              style={{
                color: "#039BE5",
                fontSize: "larger",
                fontStyle: "italic",
                textTransform: "uppercase",
              }}
            >
              Alsharif
            </span>{" "}
            - All rights reserved
          </Typography.Title>
          <div className="row">
            <Space>
              <Link to="/">Home</Link>
              <Link to="/news">News</Link>
              <Link to="#">Contact us</Link>
            </Space>
          </div>

          <div className="row">
            <a href="https://github.com/el-Sharif-suhiam">
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:zero_robot77@protonmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
