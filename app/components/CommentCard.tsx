import { MaterialIcons } from '@expo/vector-icons'; // For star icon
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CommentCard = ({ name, timeAgo, rating, content }: { name: string; timeAgo: string; rating: number; content: string }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{timeAgo}</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <MaterialIcons name="star" size={16} color="#FFD700" />
        </View>
      </View>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  userInfo: {
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontWeight: 'bold',
    marginRight: 4,
    color: '#333',
  },
  content: {
    fontSize: 14,
    color: '#444',
  },
});

export default CommentCard;
