import { isIOS } from "../../utility";

const ContactFormFields = {
  fields: [
    { placeholder: "First Name", name: "firstName" },
    { placeholder: "Last Name", name: "lastName" },
    {
      placeholder: "Email",
      name: "email",
      keyboardType: "email-address",
    },
    {
      placeholder: "Mobile Phone",
      name: "mobilePhone",
      //On iOS onSubmitEditing method isn't called when using keyboardType="phone-pad"
      keyboardType: !isIOS() ? "phone-pad" : "default",
    },
    {
      placeholder: "Home Phone",
      name: "homePhone",
      keyboardType: !isIOS() ? "phone-pad" : "default",
    },
    { placeholder: "City", name: "city" },
  ],
};

export default ContactFormFields;
