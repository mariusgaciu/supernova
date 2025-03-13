import React, { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CookieManager from '@react-native-cookies/cookies';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

import { useStyles, useSubmit } from '@hooks';
import { INPUT_PLACEHOLDERS, BUTTON_LABELS } from '@config';
import { Avatar, Icon } from '@libs';
import { Input, Button, Separator } from '@components';
import { schema } from '@utils';
import { postLogin } from '../services/api';

function LoginScreen() {
  const { defaultStyles } = useStyles();
  const [viewLogin, setViewLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema.login),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleError = async (error) => {
    console.log('ON ERROR', error.message);
    if (error.message === 'Validation required.') {
      setViewLogin((state) => !state);
    }
  };

  const { onSubmit, isError, error } = useSubmit({
    request: postLogin,
    onError: handleError,
  });

  const handleFormSubmit = (data) => {
    onSubmit({ username: data.username, password: data.password });
  };

  const handleLogout = () => {
    CookieManager.clearAll().then((success) => {
      console.log('CookieManager.clearAll =>', success);
    });
  };

  const handleAuth = () => {
    navigation.navigate('AUTH');
  };

  // This function will be called on navigation state changes
  const handleNavigationStateChange = async (navState) => {
    // For example, once the user logs in, Hacker News might redirect to the homepage.
    // You might need to adjust the condition based on what URL indicates a successful login.
    if (
      navState.url === 'https://news.ycombinator.com/news' &&
      !navState.loading
    ) {
      console.log('NAV STATE', navState);
      // Retrieve cookies for Hacker News
      const cookies = await CookieManager.get('https://news.ycombinator.com/');
      if (cookies) {
        console.log('Retrieved cookies:', cookies);
      }
      // Notify parent component that login succeeded, passing the cookies.
    }
  };

  return (
    <View style={styles.loginFormContainer}>
      {isError && <Text>{error}</Text>}
      {viewLogin && (
        <View style={{ flex: 1 }}>
          {loading && <ActivityIndicator size="large" />}
          <WebView
            source={{ uri: 'https://news.ycombinator.com/login?goto=news' }}
            onLoadEnd={() => setLoading(false)}
            onNavigationStateChange={handleNavigationStateChange}
            sharedCookiesEnabled={true}
          />
        </View>
      )}
      <Input
        autoCapitalize={false}
        autoComplete="username"
        control={control}
        errorMessage={errors.username?.message}
        icon={
          <Icon
            name="person-outline"
            color={defaultStyles.textPlaceholder.color}
          />
        }
        isError={errors.username}
        name="username"
        placeholder={INPUT_PLACEHOLDERS.USERNAME}
      />
      <Separator height={10} />
      <Input
        autoCapitalize={false}
        autoComplete="current-password"
        control={control}
        errorMessage={errors.password?.message}
        icon={
          <Icon
            name="lock-closed-outline"
            color={defaultStyles.textPlaceholder.color}
          />
        }
        isError={errors.password}
        name="password"
        placeholder={INPUT_PLACEHOLDERS.PASSWORD}
        secureTextEntry={true}
      />
      <Separator height={40} />
      <Button
        color={defaultStyles.primary.color}
        underlayColor={defaultStyles.secondary.color}
        labelColor={defaultStyles.textDefaultInverse.color}
        size="large"
        label={BUTTON_LABELS.LOGIN}
        onPress={handleSubmit(handleFormSubmit)}
      />
      <Button
        color={defaultStyles.primary.color}
        underlayColor={defaultStyles.secondary.color}
        labelColor={defaultStyles.textDefaultInverse.color}
        size="large"
        label="LOGOUT"
        onPress={handleLogout}
      />
      <Button
        color={defaultStyles.primary.color}
        underlayColor={defaultStyles.secondary.color}
        labelColor={defaultStyles.textDefaultInverse.color}
        size="large"
        label="AUTH"
        onPress={handleAuth}
      />
    </View>
  );
}

function Login(props) {
  const { defaultStyles } = useStyles();

  return (
    <View style={styles.mainContainer}>
      <Avatar name={'supernova'} size={75} />
      <Text style={[defaultStyles.brandTitleL, defaultStyles.textDefault]}>
        LOGIN
      </Text>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  loginFormContainer: {
    // backgroundColor: 'red',
  },
  mainContainer: {
    alignItems: 'center',
  },
});

export default LoginScreen;
