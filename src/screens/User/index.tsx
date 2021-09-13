import React from "react";
import ContactDetail from "../Contacts/ContactDetail";
import { me } from "../../config/data";
import { capitalize } from "../../utility";

const User = () => {
  return (
    <ContactDetail
      route={{
        params: {
          contact: me,
        },
      }}
      profile={true}
    />
  );
};

export default User;
