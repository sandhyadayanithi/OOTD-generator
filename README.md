# OOTD Generator - To All The Girlies In Doubt <3

A fun, interactive outfit generator that helps you pick your perfect Outfit Of The Day! Mix and match accessories, tops, and bottoms with a magical randomize button.

## ✨ Features

- **Randomize Button**: Click to instantly generate a random outfit combination with sparkly star animations
- **Manual Navigation**: Use arrow buttons to browse through each category (accessories, tops, bottoms) individually
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Cute Pink Aesthetic**: Pink gradient background with purple accents for that perfect girly vibe

## 🎀 How It Works

1. **Randomize**: Hit the "Randomize" button to get a completely random outfit suggestion
2. **Browse**: Use the ⬅️ and ➡️ buttons under each item to manually cycle through options
3. **Mix & Match**: Create your perfect combination by trying different accessories, tops, and bottoms

## 📁 Project Structure

```
├── index.html          # Main HTML structure
├── style.css           # Styling with pink gradient background
├── script.js           # Interactive functionality
├── background.png      # Pink gradient background image
└── images/
    ├── ac1-7.png       # Accessory images (7 options)
    ├── top1-10.png     # Top images (10 options)
    └── btm1-8.png      # Bottom images (8 options)
```

## 🎨 Customization

### Adding More Clothing Items

To add more items to any category, simply:

1. Add your image to the `images/` folder
2. Update the corresponding array in `script.js`:

```javascript
accessories: {
  images: [
    "images/ac1.png",
    "images/ac2.png",
    // Add your new image here
    "images/ac8.png"
  ],
  // ...
}
```

### Changing Colors

The main colors are defined in `style.css`:
- Primary purple: `#48002d` (headings, buttons)
- Accent pink: `#ffa6d7` (button hover, text)
- Dark purple: `#5e003a` (randomize button)

## 🚀 Getting Started

1. Clone or download this project
2. Make sure you have all image files in the `images/` folder
3. Open `index.html` in your browser
4. Start creating outfits!

## 💕 Perfect For

- Daily outfit inspiration
- Fashion indecision moments
- Fun styling experiments
- Sharing outfit ideas with friends

---

Made with 💖 for all the girlies who need a little help choosing their OOTD!
