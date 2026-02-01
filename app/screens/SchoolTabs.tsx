import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";
import ContactSchool from "../components/ContactSchool";
import ImagesCarousel from "../components/ImagesCarousel";

function PricingCard({ title, price, lessons, duration }: { title: string; price: string; lessons: number; duration: string }) {
  return (
    <View style={{ backgroundColor: '#f0f0f0', padding: 12, borderRadius: 4, elevation: 2, marginBottom: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.detail}>{lessons} leçons - 30 minutes chacune </Text>
    </View>
  );
}

function AdvantageItem({ text }: { text: string }) {
  return (
    <View style={styles.itemRow}>
      <Text style={styles.check}>✅</Text>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

function MonitorCard({ photo, name, years }: { photo: any; name: string; years: number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
      <Image source={photo} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.experience}>Expérience: {years} ans</Text>
      </View>
    </View>
  );
}

// Dummy data for comments
const commentsData = [
    { id: "1", user: "Alice", comment: "Great product!" },
    { id: "2", user: "Bob", comment: "Could be better." },
    { id: "3", user: "Charlie", comment: "Excellent features and price." },
    { id: "4", user: "David", comment: "Very satisfied with the service." },
    { id: "5", user: "Eve", comment: "Great value for money." },
    { id: "6", user: "Frank", comment: "User-friendly and efficient." },
    { id: "7", user: "Grace", comment: "Highly recommend to others." },
    { id: "8", user: "Hannah", comment: "Support team was very helpful." },
    { id: "9", user: "Ian", comment: "Met all my expectations." },
    { id: "10", user: "Judy", comment: "Will definitely buy again." },
];

// Review subtabs content
const About = () => <View style={styles.tabContent}><Text>About the product...</Text></View>;
const Price = () => <View style={styles.tabContent}><Text>Price details...</Text></View>;
const Features = () => <View style={styles.tabContent}><Text>Feature list...</Text></View>;
const Monitor = () => <View style={styles.tabContent}><Text>Monitoring info...</Text></View>;

// Comments tab content
const Comments = () => (
    <>
        <FlatList
          data={commentsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <CommentCard name={item.user} timeAgo={"2 days ago"} rating={4} content={item.comment} />
          )}            
          scrollEnabled={false}
        />
        <AddComment />
    </>
);

export default function SchoolTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "review", title: "Aperçu" },
    { key: "comments", title: "Avis" },
  ]);

  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewRoutes] = useState([
    { key: "about", title: "About" },
    { key: "price", title: "Price" },
    { key: "features", title: "Features" },
    { key: "monitor", title: "Monitor" },
  ]);

  const renderReviewScene = SceneMap({
    about: About,
    price: Price,
    features: Features,
    monitor: Monitor,
  });

  const renderScene = SceneMap({
    review: () => (
      <View style={{ flex: 1 }}>
        <View style={styles.card}>
            <Text style={styles.title}>A propos</Text>
            <Text style={styles.content}>
                We are a passionate team dedicated to building great mobile experiences.
                Our goal is to create simple, fast, and beautiful applications that users love.
            </Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.title}>Forfaits</Text>
            <View style={styles.container}>
                <PricingCard
                    title="Basic"
                    price="25 000 fcfa"
                    lessons={10}
                    duration="1 Month"
                />
                <PricingCard
                    title="Silver"
                    price="45 000 fcfa"
                    lessons={25}
                    duration="3 Months"
                />
                <PricingCard
                    title="Gold"
                    price="75 000 fcfa"
                    lessons={50}
                    duration="6 Months"
                />
            </View>
        </View>
        
        <View style={styles.card}>
            <Text style={styles.title}>Avantages</Text>

            <AdvantageItem text="Cours intensifs disponibles" />
            <AdvantageItem text="Véhicule à double commande" />
            <AdvantageItem text="Cours de conduite adaptés à votre niveau" />
            <AdvantageItem text="Cours de conduite en Week-end disponibles" />
            <AdvantageItem text="Préparation au code de la route" />
        </View>

        <View style={styles.card}>
            <Text style={styles.title}>Moniteurs</Text>

            <MonitorCard
                photo={'#'}
                name="Jean Dupont"
                years={8}
            />
            <MonitorCard
                photo={'#'}
                name="Sophie Martin"
                years={5}
            />
            <MonitorCard
                photo={'#'}
                name="Karim Benali"
                years={10}
            />
        </View>
        
        <View style={styles.card}>
            <Text style={styles.title}>Photos Véhicules</Text>
            
            <ImagesCarousel />
        </View>

        <ContactSchool />
      </View>
    ),
    comments: Comments,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={(props) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#3B4BFF", height: 3 }} // blue underline
            style={{ backgroundColor: "#fff" }} // white header background
            activeColor="#3B4BFF"   // active tab text = blue
            inactiveColor="#000"    // inactive tab text = black
            //labelStyle={{ fontWeight: "600" }} // optional: make text a bit bold
        />
      )}
      style={{ flex: 1 }} // important for outer TabView
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  tabContent: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  commentItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  commentUser: {
    fontWeight: "600",
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation for Android
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111',
  },
  content: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B4BFF',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#454444',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  check: {
    fontSize: 16,
    marginRight: 8,
  },
  itemText: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  experience: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});
