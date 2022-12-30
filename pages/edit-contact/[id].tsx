import React from "react";
import Contact from "../../components/addContact";
import Layout from "../../components/common/layout";
import { useRouter } from "next/router";
const EditContact = () => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <Layout name="Edit Contact">
      <div className="py-6 px-6">
        <Contact id={id} />
      </div>
    </Layout>
  );
};

export default EditContact;
