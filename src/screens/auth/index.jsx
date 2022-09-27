/* eslint-disable no-case-declarations */
import React, { useState, useReducer } from "react";
import { View, Text, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Input } from "../../components";
import { colors } from "../../constants/colors";
import { signup, signin } from "../../store/actions/auth.actions";
import { onInputChange, onFocusOut, UPDATED_FORM } from "../../utils/forms";
import { isIOS } from "../../utils/functions";
import { styles } from "./styles";

const initialState = {
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
    default:
      return state;
  }
};

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Registro";
  const message = isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?";
  const messageAction = isLogin ? "Ingresar" : "Registrate";
  const messageTarget = isLogin ? "Ingresar" : "Registrate";
  const onHandleAuth = () => {
    const { email, password } = formState;
    dispatch(isLogin ? signin(email.value, password.value) : signup(email.value, password.value));
  };

  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onHandleBlur = (text, type) => {
    onFocusOut(type, text, dispatchFormState, formState);
  };
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior={isIOS ? "padding" : "height"}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          style={styles.input}
          placeholder="Ingrese su email"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          onBlur={(e) => onHandleBlur(e.nativeEvent.text, "email")}
          value={formState.email.value}
          hasError={formState.email.hasError}
          error={formState.email.error}
          touched={formState.email.touched}
          label="Correo electronico"
        />
        <Input
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => onHandleChange(text, "password")}
          onBlur={(e) => onHandleBlur(e.nativeEvent.text, "password")}
          value={formState.password.value}
          hasError={formState.password.hasError}
          error={formState.password.error}
          touched={formState.password.touched}
          label="Contraseña"
        />
        <Button
          disabled={!formState.isFormValid}
          title={messageTarget}
          color={colors.primary}
          onPress={onHandleAuth}
        />

        <View style={styles.prompt}>
          <TouchableOpacity onPress={onHandleChangeAuth}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
