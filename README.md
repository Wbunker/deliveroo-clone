
# Install tailwindcss-react-native
https://tailwindcss-react-native.vercel.app/installation

1. npm install tailwindcss-react-native
2. npm install --save-dev tailwindcss
3. create a tailwind.config.js file
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};

4. add this to your babel.config.js file
plugins: ["tailwindcss-react-native/babel"],

# install react-native-navigation
expo install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

# install react-native-heroicons
expo install react-native-heroicons react-native-svg

