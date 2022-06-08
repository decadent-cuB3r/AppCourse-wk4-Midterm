import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";

import MapView from "react-native-maps";

const Images = [
  { uri: "https://lh3.googleusercontent.com/p/AF1QipPpzKNpMJFVpxUr_6o-g-KxyDQzKj9JcD9VIfed=w1080-h608-p-k-no-v0" },
  { uri: "https://pic.pimg.tw/ocgo10/1592351321-480745791.jpg" },
  { uri: "https://cdn2.ettoday.net/images/2028/d2028321.jpg" },
  { uri: "https://webike-tw.azureedge.net/shopping/image/dealer-page/dealer/2015/03/%E5%B7%B4%E6%B4%9B%E5%85%8B%E9%87%8D%E8%BB%8A-1.jpg" },
  { uri: "https://img.ruten.com.tw/s1/9/d7/b3/21834544124851_278.jpg" },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width-120;

export default class screens extends Component {
    state = {
        markers: [
          {
            coordinate: {
              latitude:  25.025597,
              longitude: 121.536455
            },
            title: "台北大安分店",
            description: "地址；台北市大安區和平東路二段34號",
            description2: "電話：02-22456982",
            image: Images[0],
          },
          {
            coordinate: {
              latitude:  25.058046,
              longitude: 121.488620
            },
            title: "新北三重分店",
            description: "地址；新北市三重區重新路四段268號",
            description2: "電話：02-22456982",
            image: Images[1],
          },
          {
            coordinate: {
              latitude: 24.159835,
              longitude: 120.636641
            },
            title: "台中西屯分店",
            description: "地址；台中市西屯區市政路539號",
            description2: "電話：02-22456982",
            image: Images[2],
          },
          {
            coordinate: {
              latitude: 24.961723,
              longitude: 121.226936
            },
            title: "桃園中壢分店",
            description: "地址；桃園市中壢區延平路20號",
            description2: "電話：02-22456982",
            image: Images[3],
          }, 
          {
            coordinate: {
              latitude: 22.584217,
              longitude: 120.320516
            },
            title: "高雄前鎮分店",
            description: "地址；高雄市前鎮區康定路20巷12號",
            description2: "電話：02-22456982",
            image: Images[4],
          },
        ],
        region: {
          latitude: 25.025597,
          longitude: 121.536455,
          latitudeDelta: 0.02864195044303443,
          longitudeDelta: 0.020142817690068,
        },
      };
      componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
      }
      componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({ value }) => {
          let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
          if (index >= this.state.markers.length) {
            index = this.state.markers.length - 1;
          }
          if (index <= 0) {
            index = 0;
          }
    
          clearTimeout(this.regionTimeout);
          this.regionTimeout = setTimeout(() => {
            if (this.index !== index) {
              this.index = index;
              const { coordinate } = this.state.markers[index];
              this.map.animateToRegion(
                {
                  ...coordinate,
                  latitudeDelta: this.state.region.latitudeDelta,
                  longitudeDelta: this.state.region.longitudeDelta,
                },
                350
              );
            }
          }, 10);
        });
      }
  render() {
    const interpolations = this.state.markers.map((marker, index) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          (index + 1) * CARD_WIDTH,
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 2.5, 1],
          extrapolate: "clamp",
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: "clamp",
        });
        return { scale, opacity };
      });
    return (<View style={styles.container}>
        <MapView
            ref={(map) => (this.map = map)}
            initialRegion={this.state.region}
            style={styles.container}
            >
                {
                this.state.markers.map((marker, index) => {

                    const scaleStyle = {
                        transform: [
                          {
                            scale: interpolations[index].scale,
                          },
                        ],
                      };
                      const opacityStyle = {
                        opacity: interpolations[index].opacity,
                      };


                    return (
                    <MapView.Marker key={index} coordinate={marker.coordinate}>
                        <Animated.View style={[styles.markerWrap, opacityStyle]}>
                        <Animated.View style={[styles.ring, scaleStyle]} />
                        <View style={styles.marker} />
                        </Animated.View>
                    </MapView.Marker>
                    )
                })
                }
            </MapView>
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                style={styles.scrollView}
                contentContainerStyle={styles.endPadding}
                onScroll={Animated.event(
                    [
                    {
                        nativeEvent: {
                        contentOffset: {
                            x: this.animation,
                        },
                        },
                    },
                    ],
                    { useNativeDriver: true }
                )}
                >
                {this.state.markers.map((marker, index) => (
                    <View style={styles.card} key={index}>
                    <Image
                        source={marker.image}
                        style={styles.cardImage}
                        resizeMode="cover"
                    />
                    <View style={styles.textContent}>
                        <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                        <Text numberOfLines={1} style={styles.cardDescription}>
                        {marker.description}
                        </Text>
                        <Text numberOfLines={1} style={styles.cardDescription}>
                        {marker.description2}
                        </Text>
                    </View>
                    </View>
                ))}
                </Animated.ScrollView>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: 10,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 1.5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 5,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0373D",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(249,89,95, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(299,29,36, 0.5)",
  },
});