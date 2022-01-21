import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignupForm = () => {
  let SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is a required"),
    password: Yup.string()
      .required()
      .min(6, "Yor password has to have at least 6 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Phone number, email or username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="username"
                autoCorrect={false}
                secureTextEntry
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <TouchableOpacity
              style={styles.btn(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.account}>
              <Text style={styles.account1}>Already have an account? </Text>
              <Text style={styles.account2}>Log In</Text>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

let styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    backgroundColor: "#fafafa",
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
  },
  wrapper: {
    paddingTop: 80,
  },
  btn: (isValid) => ({
    width: "100%",
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
    padding: 15,
    alignItems: "center",
    borderRadius: 4,
    marginTop: 50,
  }),
  btnText: {
    color: "white",
    fontWeight: "600",
  },
  forgot: {
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#5BB0F5",
  },
  account: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  account1: {
    color: "#444",
  },
  account2: {
    color: "#5bb0f5",
  },
});

export default SignupForm;
