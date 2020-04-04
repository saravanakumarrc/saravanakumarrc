import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Saravanakumar";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Profile"
          keywords={[`saravanakumarrc`, `full-stack`, `javascript`, `react`, `c#`]}
        />
        
        <Link to="/blog/">
          <Button marginTop="35px">Blog ></Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
