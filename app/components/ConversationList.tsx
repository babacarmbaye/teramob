import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Define types
type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  date: string;
  unread: boolean;
};

type RootStackParamList = {
  Conversations: undefined;
  ChatScreen: { conversation: Conversation };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Conversations'>;

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Alice',
    avatar: 'https://i.pravatar.cc/100?img=1',
    lastMessage: 'Hey! Are you coming tomorrow?',
    date: '10:30 AM',
    unread: true,
  },
  {
    id: '2',
    name: 'Bob',
    avatar: 'https://i.pravatar.cc/100?img=2',
    lastMessage: 'Sure, let’s meet at 6 PM.',
    date: 'Yesterday',
    unread: false,
  },
];

const ConversationList: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: { item: Conversation }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ChatScreen', { conversation: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.message} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unread && <View style={styles.unreadDot} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={conversations}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingVertical: 10 }}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  info: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontWeight: 'bold', fontSize: 16 },
  date: { fontSize: 12, color: '#888' },
  message: { color: '#555', flex: 1, marginRight: 8 },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default ConversationList;
