import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getReadableDate, getDomain } from '@utils';
import { useStyles } from '@hooks';
import { Icon } from '@libs';

function Story({ index, url, title, user, noOfComments, timestamp, score }) {
  const { defaultStyles } = useStyles();

  const domain = getDomain(url);
  const time = getReadableDate(timestamp);

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.subheader]}>
        <View style={[styles.positionContainer, defaultStyles.borderInfo]}>
          <Text style={[defaultStyles.lbPrimary, defaultStyles.brandCaption2]}>
            {index + 1}
          </Text>
        </View>
        <Text
          style={[
            styles.domainText,
            defaultStyles.lbSecondary,
            defaultStyles.caption2,
          ]}
        >
          {domain}
        </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={[defaultStyles.lbPrimary, defaultStyles.header]}>
          {title}
        </Text>
      </View>
      <View style={styles.detailsWrapper}>
        <View style={styles.detailsSectionLeft}>
          <View style={[styles.detailsContainer]}>
            <Icon
              name="person-circle-outline"
              color={defaultStyles.lbPrimary.color}
              size={14}
            />
            <Text
              style={[
                styles.detailsText,
                defaultStyles.lbPrimary,
                defaultStyles.caption2,
              ]}
            >
              {user}
            </Text>
          </View>
          <View style={[styles.detailsContainer]}>
            <Icon
              name="chat-bubble-outline"
              color={defaultStyles.lbPrimary.color}
              size={14}
            />
            <Text
              style={[
                styles.detailsText,
                defaultStyles.lbPrimary,
                defaultStyles.caption2,
              ]}
            >
              {noOfComments}
            </Text>
          </View>
          <View style={[styles.detailsContainer]}>
            <Icon
              name="time-outline"
              color={defaultStyles.lbPrimary.color}
              size={14}
            />
            <Text
              style={[
                styles.detailsText,
                defaultStyles.lbPrimary,
                defaultStyles.caption2,
              ]}
            >
              {time}
            </Text>
          </View>
        </View>
        <View style={styles.detailsSectionRight}>
          <View style={[styles.detailsContainer]}>
            <Icon
              name="fitness-outline"
              color={defaultStyles.lbPrimary.color}
              size={14}
            />
            <Text
              style={[
                styles.detailsText,
                defaultStyles.lbPrimary,
                defaultStyles.caption2,
              ]}
            >
              {score}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: '4%',
  },
  subheader: {
    flexDirection: 'row',
  },
  positionContainer: {
    marginRight: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 4,
    borderWidth: 1,
  },
  domainText: {
    textDecorationLine: 'underline',
  },
  titleContainer: {
    paddingVertical: 6,
  },
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsSectionLeft: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  detailsText: {
    paddingLeft: 4,
  },
});

export default Story;
