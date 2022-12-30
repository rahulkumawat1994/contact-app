import React from "react";
import Contact from "../components/addContact";
import Layout from "../components/common/layout";

const AddContact = () => {
  return (
    <Layout name="Add New Contact">
      <div className="py-6 px-6">
        <Contact />
      </div>
    </Layout>
  );
};

export default AddContact;
