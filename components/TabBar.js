import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import Svg, { Defs, Path, G, Use } from "react-native-svg";

export default function TabBar(props) {
  return (
    <View className="absolute bottom-0 flex flex-row justify-center items-center mt-20 h-16 w-full rounded-t-3xl">
      <Svg
        className=""
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height}
        viewBox="0 0 375 115"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <Defs>
          <Path
            d="M20,18.1764706 L131.083209,18.1764706 C139.951977,18.1752118 147.762375,24.0147202 150.27048,32.5214507 C154.690163,47.520135 161.015232,57.4200864 169.245688,62.2213049 C175.148057,65.6644393 194.005132,72.3348313 210.276561,59.6112492 C215.957982,55.1686137 221.2427,45.853325 226.130714,31.6653832 C228.907706,23.5952784 236.50089,18.1781092 245.035424,18.1764706 L355,18.1764706 C366.045695,18.1764706 375,27.1307756 375,38.1764706 L375,98.9607843 L375,98.9607843 L0,98.9607843 L0,38.1764706 C-1.3527075e-15,27.1307756 8.954305,18.1764706 20,18.1764706 Z"
            id="path-1"
          />
        </Defs>
        <G
          id="Page-1"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <G id="Nutricion" transform="translate(0.000000, -1079.000000)">
            <G id="Rectangle" transform="translate(0.000000, 1095.039216)">
              <Use
                fill="black"
                fillOpacity={1}
                filter="url(#filter-2)"
                xlinkHref="#path-1"
              />
              <Use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1" />
            </G>
          </G>
        </G>
      </Svg>

      <View className="absolute bottom-0 flex flex-row justify-between items-center mb-3 px-7 w-full">
        {/* LEFT BUTTONS */}
        <View className="flex flex-row items-center">
          {/* CHECK */}
          <TouchableOpacity>
            <Image
              className="h-[25px] w-[25px]"
              source={require("../assets/images/footer_icons/check.png")}
            />
          </TouchableOpacity>

          {/* SEARCH */}
          <TouchableOpacity className="ml-9 mr-5">
            <Image
              className="h-[25px] w-[25px]"
              source={require("../assets/images/footer_icons/search.png")}
            />
          </TouchableOpacity>
        </View>
        {/* END LEFT BUTTTONS */}

        {/* RIGHT BUTTONS */}
        <View className="flex flex-row items-center ">
          {/* STAR */}
          <TouchableOpacity className="ml-5 mr-9">
            <Image
              className="h-[25px] w-[25px]"
              source={require("../assets/images/footer_icons/star.png")}
            />
          </TouchableOpacity>

          {/* USER */}
          <TouchableOpacity className="">
            <Image
              className="h-[25px] w-[25px]"
              source={require("../assets/images/footer_icons/user.png")}
            />
          </TouchableOpacity>
          {/* END RIGHT BUTTTONS */}
        </View>
      </View>

      {/* HOME */}
      <TouchableOpacity
        onPress={() => props.action.navigate("Menu")}
        className="p-5 absolute bottom-4 rounded-full bg-background-dark shadow-lg shadow-background-dark"
      >
        <Image
          className="h-[20px] w-[20px]"
          source={require("../assets/images/footer_icons/home.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
