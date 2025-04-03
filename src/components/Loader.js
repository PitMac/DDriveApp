import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';
import {useTheme} from 'react-native-paper';

const Loader = props => {
  const {loading, modalStyle, indicatorStyle} = props;
  const theme = useTheme();
  return (
    <Modal
      transparent={true}
      animationType={'fade'}
      visible={loading}
      onRequestClose={() => {}}>
      <View style={[styles.modalBackground, modalStyle]}>
        <View
          style={[
            styles.activityIndicatorWrapper,
            indicatorStyle,
            {backgroundColor: theme.colors.background},
          ]}>
          <PacmanIndicator color={theme.colors.primary} size={60} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
