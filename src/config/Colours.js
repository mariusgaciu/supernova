import { StyleSheet } from 'react-native';

const light = StyleSheet.create({
  bgPrimary: {
    backgroundColor: '#F8FAFC',
  },
  bgSecondary: {
    backgroundColor: '#F1F5F9',
  },
  bgTertiary: {
    backgroundColor: '#F8FAFC',
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
  lbPrimary: {
    color: '#0F172A',
    textDecorationColor: '#0F172A',
  },
  lbSecondary: {
    color: '#334155',
    textDecorationColor: '#334155',
  },
  lbTertiary: {
    color: '#64748B',
    textDecorationColor: '#64748B',
  },
  lbQuaternary: {
    color: '#CBD5E1',
    textDecorationColor: '#CBD5E1',
  },
  lbSuccess: {
    color: '#34C759',
    textDecorationColor: '#34C759',
  },
  lbWarning: {
    color: '#FF9500',
    textDecorationColor: '#FF9500',
  },
  lbError: {
    color: '#FF3B30',
    textDecorationColor: '#FF3B30',
  },
  lbInfo: {
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
    color: 'rgba(0,0,0,0.0',
  },
  border: {
    borderColor: '#DCDADE',
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
    backgroundColor: '#1E1C1C',
  },
  bgTertiary: {
    backgroundColor: '#2E2C2C',
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
  lbPrimary: {
    color: '#F8FAFC',
    textDecorationColor: '#F8FAFC',
  },
  lbSecondary: {
    color: '#E2E8F0',
    textDecorationColor: '#E2E8F0',
  },
  lbTertiary: {
    color: '#94A3B8',
    textDecorationColor: '#94A3B8',
  },
  lbQuaternary: {
    color: '#475569',
    textDecorationColor: '#475569',
  },
  lbSuccess: {
    color: '#D2F9D8',
    textDecorationColor: '#D2F9D8',
  },
  lbWarning: {
    color: '#FFF5CC',
    textDecorationColor: '#FFF5CC',
  },
  lbError: {
    color: '#F5D6D6',
    textDecorationColor: '#F5D6D6',
  },
  lbInfo: {
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
    borderColor: '#DCDADE',
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
  navigation: {
    dark: true,
    colors: {
      primary: '#74C365',
      background: '#000000',
      card: '#1E1C1C',
      text: '#F8FAFC',
      border: '#DCDADE',
      notification: '#FF453A',
    },
  },
});

export { light, dark };
