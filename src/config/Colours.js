import { StyleSheet } from 'react-native';

const light = StyleSheet.create({
  bgPrimary: {
    backgroundColor: '#F8FAFC',
  },
  bgSecondary: {
    backgroundColor: '#DFE1E3',
  },
  bgTertiary: {
    backgroundColor: '#C6C8CA',
  },
  bgSuccess: {
    backgroundColor: '#D2F9D8',
  },
  bgWarning: {
    backgroundColor: '#FFF5CC',
  },
  bgDanger: {
    backgroundColor: '#F5D6D6',
  },
  bgInfo: {
    backgroundColor: '#DAE7F1',
  },
  textDefault: {
    color: '#0F172A',
    textDecorationColor: '#0F172A',
  },
  textSubdued: {
    color: '#334155',
    textDecorationColor: '#334155',
  },
  textPlaceholder: {
    color: '#64748B',
    textDecorationColor: '#64748B',
  },
  textDisabled: {
    color: '#CBD5E1',
    textDecorationColor: '#CBD5E1',
  },
  textDefaultInverse: {
    color: '#F8FAFC',
    textDecorationColor: '#F8FAFC',
  },
  textSubduedInverse: {
    color: '#C6C8CA',
    textDecorationColor: '#C6C8CA',
  },
  textPlaceholderInverse: {
    color: '#959697',
    textDecorationColor: '#959697',
  },
  textDisabledInverse: {
    color: '#636465',
    textDecorationColor: '#636465',
  },
  textSuccess: {
    color: '#34C759',
    textDecorationColor: '#34C759',
  },
  textWarning: {
    color: '#FF9500',
    textDecorationColor: '#FF9500',
  },
  textError: {
    color: '#FF3B30',
    textDecorationColor: '#FF3B30',
  },
  textInfo: {
    color: '#007AFF',
    textDecorationColor: '#007AFF',
  },
  opaque: {
    color: 'rgba(198, 198, 200, 1)',
  },
  nonOpaque: {
    color: 'rgba(60, 60, 67, 0.36)',
  },
  transparent: {
    color: 'rgba(0,0,0,0.0)',
  },
  border: {
    borderColor: '#E4E4E7',
  },
  borderFocus: {
    borderColor: '#A1A1A9',
  },
  borderSuccess: {
    borderColor: '#16B62F',
  },
  borderWarning: {
    borderColor: '#E5B700',
  },
  borderDanger: {
    borderColor: '#DE7D7D',
  },
  borderInfo: {
    borderColor: '#5794C1',
  },
  primary: {
    color: '#FC9303',
  },
  secondary: {
    color: '#044389',
  },
  tertiary: {
    color: '#56B045',
  },
  avatar: ['#118AB2', '#E9C46A', '#E76F51'],
  navigation: {
    dark: false,
    colors: {
      primary: '#FC9303',
      background: '#F8FAFC',
      card: '#F1F5F9',
      text: '#0F172A',
      border: '#DCDADE',
      notification: '#FF3B30',
    },
  },
});

const dark = StyleSheet.create({
  bgPrimary: {
    backgroundColor: '#000000',
  },
  bgSecondary: {
    backgroundColor: '#1A1A1A',
  },
  bgTertiary: {
    backgroundColor: '#333333',
  },
  bgSuccess: {
    backgroundColor: '#30D158',
  },
  bgWarning: {
    backgroundColor: '#FF9F0A',
  },
  bgDanger: {
    backgroundColor: '#FF453A',
  },
  bgInfo: {
    backgroundColor: '#0A84FF',
  },
  textDefault: {
    color: '#F8FAFC',
    textDecorationColor: '#F8FAFC',
  },
  textSubdued: {
    color: '#C6C8CA',
    textDecorationColor: '#C6C8CA',
  },
  textPlaceholder: {
    color: '#959697',
    textDecorationColor: '#959697',
  },
  textDisabled: {
    color: '#636465',
    textDecorationColor: '#636465',
  },
  textDefaultInverse: {
    color: '#0F172A',
    textDecorationColor: '#0F172A',
  },
  textSubduedInverse: {
    color: '#334155',
    textDecorationColor: '#334155',
  },
  textPlaceholderInverse: {
    color: '#64748B',
    textDecorationColor: '#64748B',
  },
  textDisabledInverse: {
    color: '#CBD5E1',
    textDecorationColor: '#CBD5E1',
  },
  textSuccess: {
    color: '#D2F9D8',
    textDecorationColor: '#D2F9D8',
  },
  textWarning: {
    color: '#FFF5CC',
    textDecorationColor: '#FFF5CC',
  },
  textError: {
    color: '#F5D6D6',
    textDecorationColor: '#F5D6D6',
  },
  textInfo: {
    color: '#DAE7F1',
    textDecorationColor: '#DAE7F1',
  },
  opaque: {
    color: 'rgba(56, 56, 58, 1)',
  },
  nonOpaque: {
    color: 'rgba(84, 84, 88, 0.65)',
  },
  transparent: {
    color: 'rgba(0,0,0,0.0',
  },
  border: {
    borderColor: '#27272A',
  },
  borderFocus: {
    borderColor: '#D4D4D8',
  },
  borderSuccess: {
    borderColor: '#16B62F',
  },
  borderWarning: {
    borderColor: '#E5B700',
  },
  borderDanger: {
    borderColor: '#DE7D7D',
  },
  borderInfo: {
    borderColor: '#5794C1',
  },
  primary: {
    color: '#74C365',
  },
  secondary: {
    color: '#60A9FA',
  },
  tertiary: {
    color: '#FC9303',
  },
  avatar: ['#118AB2', '#E9C46A', '#E76F51'],
  navigation: {
    dark: true,
    colors: {
      primary: '#74C365',
      background: '#000000',
      card: '#1A1A1A',
      text: '#F8FAFC',
      border: '#1E1C1C',
      notification: '#FF453A',
    },
  },
});

export { light, dark };
