const IS_DEV = process.env.APP_VARIANT === "development";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.fedeel.expoplaygroundapp.dev";
  } else {
    return "com.fedeel.expoplaygroundapp";
  }
};

const getAppName = () => {
  if (IS_DEV) {
    return "dev playground";
  } else {
    return "playground";
  }
};

export default {
  expo: {
    name: getAppName(),
    slug: "expo-playground-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
  },
};
