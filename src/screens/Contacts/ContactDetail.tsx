import React from "react";
import { Button, View, Text, ScrollView } from "react-native";
import Header from "../../components/Layout/ContactDetailHeader";
import Actions from "../../components/Layout/ContactDetailActions";
import DetailRow from "../../components/Layout/ContactDetailRow";
import { formatToPhoneNumber, formatToDate } from "../../utility/index";

interface Props {
  route: any;
}

const ContactDetail = (props: Props) => {
  return (
    <>
      <ScrollView>
        <Header
          image={props.route.params.contact.picture.large}
          name={props.route.params.name}
        />
        <Actions
          label="email"
          body={props.route.params.contact.email}
          actions={{ icon: "email", action: () => null }}
        />
        <Actions
          label="cell"
          body={formatToPhoneNumber(props.route.params.contact.cell)}
          actions={{ icon: "cell", action: () => null }}
        />
        <Actions
          label="home"
          body={formatToPhoneNumber(props.route.params.contact.phone)}
          actions={{ icon: "home", action: () => null }}
        />
        <DetailRow
          label="city"
          body={props.route.params.contact.location.city}
        />
        <DetailRow
          label="birthday"
          body={formatToDate(props.route.params.contact.dob)}
        />
        <DetailRow
          label="registered"
          body={formatToDate(props.route.params.contact.registered)}
        />
        <DetailRow
          label="username"
          body={props.route.params.contact.login.username}
        />
      </ScrollView>
    </>
  );
};

export default ContactDetail;
