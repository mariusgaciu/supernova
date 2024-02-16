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
  lbPrimary: {
    color: '#0F172A',
  },
  lbSecondary: {
    color: '#334155',
  },
  lbTertiary: {
    color: '#64748B',
  },
  lbQuaternary: {
    color: '#CBD5E1',
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
  success: {
    color: 'rgba(52, 199, 89, 1)',
  },
  warning: {
    color: 'rgba(255, 149, 0, 1)',
  },
  error: {
    color: 'rgba(255, 59, 48, 1)',
  },
  info: {
    color: 'rgba(0, 122, 255, 1)',
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
      background: 'rgba(255, 255, 255, 1)',
      card: 'rgba(242, 242, 247, 1)',
      text: 'rgba(0, 0, 0, 1)',
      border: 'rgba(198, 198, 200, 1)',
      notification: 'rgba(255, 59, 48, 1)',
    },
  },
});

const dark = StyleSheet.create({
  bgPrimary: {
    backgroundColor: '#0F172A',
  },
  bgSecondary: {
    backgroundColor: '#1E293B',
  },
  bgTertiary: {
    backgroundColor: '#334155',
  },
  lbPrimary: {
    color: '#F8FAFC',
  },
  lbSecondary: {
    color: '#E2E8F0',
  },
  lbTertiary: {
    color: '#94A3B8',
  },
  lbQuaternary: {
    color: '#475569',
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
  success: {
    color: 'rgba(48, 209, 88, 1)',
  },
  warning: {
    color: 'rgba(255, 159, 10, 1)',
  },
  error: {
    color: 'rgba(255, 69, 58, 1)',
  },
  info: {
    color: 'rgba(10, 132, 255, 1)',
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
      background: 'rgba(0, 0, 0, 1)',
      card: 'rgba(28, 28, 30, 1)',
      text: 'rgba(255, 255, 255, 1)',
      border: 'rgba(56, 56, 58, 1)',
      notification: 'rgba(255, 69, 58, 1)',
    },
  },
});

export { light, dark };
