import React, { useState } from "react";
import { StyleSheet, Button, ScrollView, View, Text } from "react-native";
import TextField from "../../components/TextField";
import ContactFormFields from "./ContactFormFields";

interface Prop {
  fieldName: string;
}

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  homePhone: string;
  city: string;
}

const styles = StyleSheet.create({
  form: { paddingHorizontal: 20, paddingVertical: 20 },
  buttom: { marginVertical: 20, width: 100, alignSelf: "center" },
});

const ContactNew = () => {
  const fields = ContactFormFields.fields;
  const [formState, setFormState] = useState<Form>();

  const handleForm = (field: string, value: string) => {
    let passFieldToForm: any;
    passFieldToForm = { [field]: value };
    setFormState({ ...formState, ...passFieldToForm });
  };

  const handleValidationForm = () => {
    if (
      formState &&
      formState.firstName &&
      formState.lastName &&
      formState.mobilePhone &&
      formState.homePhone &&
      formState.email &&
      formState.city
    )
      return true;
    return false;
  };

  const handleSubmit = (index: number, override: boolean = false) => {
    if (index === fields.length - 1 || (handleValidationForm() && override)) {
      alert(
        `${formState?.firstName}, 
        \n${formState?.lastName}, 
        \n${formState?.mobilePhone}, 
        \n${formState?.homePhone}, 
        \n${formState?.email}, 
        \n${formState?.city}`
      );
    } else {
      override
        ? alert(`All field are required`)
        : alert(`Field ${fields[index].placeholder} is required`);
    }
  };

  return (
    <ScrollView style={styles.form}>
      {fields.map((field, index) => {
        return (
          <TextField
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            returnKeyType={index === fields.length - 1 ? "done" : "next"}
            onSubmitEditing={() => handleSubmit(index)}
            onChangeText={(value: string) => handleForm(field.name, value)}
          />
        );
      })}
      <View style={styles.buttom}>
        <Button title="Save" onPress={() => handleSubmit(0, true)} />
      </View>
    </ScrollView>
  );
};

export default ContactNew;
