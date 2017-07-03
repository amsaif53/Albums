import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <View>
      <Text>{props.headerText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

Header.propTypes = {
  headerText: PropTypes.string
};

export default Header;
