import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  safeTopContainer: {
    flex: 0,
    backgroundColor: colors.darkBlue,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  safeTopContainerPreview: {
    flex: 0,
  },
  safeContainerPreview: {
    flex: 1,
  },
  pendingView: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barCodeLine: {
    width: 2,
    backgroundColor: colors.happyYolk,
    height: '95%',
  },
  headerTop: {
    flex: 1,
    height: '100%',
    maxWidth: 100,
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    paddingVertical: '30%',
  },
  headerBottom: {
    flex: 1,
    maxWidth: 140,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '30%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headerDescription: {
    flex: 1,
    maxWidth: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCode: {
    flex: 0.8,
    maxWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '30%',
    backgroundColor: '#00ACE6',

    borderRadius: 28,
  },
  buttonCodeTitle: {
    color: '#fff',
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '100%',
    fontSize: 20,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
});

export default styles;
