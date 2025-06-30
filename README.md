# 🍔 Food Delivery Website

A modern, responsive food delivery website built with React.js, Vite, and Tailwind CSS. Browse through various food categories, filter by dietary preferences, and enjoy a seamless food ordering experience.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Category Filtering**: Filter food items by categories (All, Coffee, Burger, Pizza, Noodles, Main Course)
- **Dietary Filters**: Filter by vegetarian and non-vegetarian options
- **Interactive UI**: Smooth animations and hover effects
- **Search Functionality**: Search for your favorite food items
- **Shopping Cart**: Add items to cart with dynamic counter
- **Modern Styling**: Beautiful UI with Tailwind CSS
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19.0.0
- **Build Tool**: Vite 6.3.1
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons 5.5.0
- **Language**: JavaScript (ES6+)

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Food-Delivery-Website.git
   cd Food-Delivery-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add food images**
   - Place your food images (image1.jpg to image24.jpg) in the `src/assets/` directory
   - Images should be in JPG format and optimized for web

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Visit `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
Food-Delivery-Website/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── assets/                 # Food images and static assets
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ...
│   ├── components/             # Reusable React components
│   │   ├── Card.jsx           # Food item card component
│   │   └── Navbar.jsx         # Navigation bar component
│   ├── data/                  # Data files and configurations
│   │   ├── Category.jsx       # Food categories data
│   │   └── food.js           # Food items data
│   ├── pages/                 # Page components
│   │   └── Home.jsx          # Main home page
│   ├── App.css               # Global styles
│   ├── App.jsx              # Main App component
│   ├── index.css            # Tailwind CSS imports
│   └── main.jsx             # Application entry point
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Component Documentation

### Card Component
Displays individual food items with image, name, price, and type indicators.

**Props:**
- `name` (string): Food item name
- `image` (string): Image URL
- `id` (number): Unique identifier
- `price` (number): Price in rupees
- `type` (string): 'veg' or 'non-veg'
- `quantity` (number): Default quantity
- `category` (string): Food category

### Navbar Component
Navigation bar with brand logo, search functionality, and shopping cart.

**Features:**
- Interactive search bar
- Shopping cart with item counter
- Responsive design
- Accessibility support

### Home Component
Main page displaying food categories and items with filtering functionality.

**Features:**
- Category-based filtering
- Responsive grid layout
- Dynamic food item rendering
- No results state handling

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Usage

### Adding New Food Items

1. Add the food image to `src/assets/`
2. Import the image in `src/data/food.js`
3. Add the food item object to the `food_items` array:

```javascript
{
    id: 25,
    food_name: "Your Food Name",
    "food-category": "breakfast|lunch|dinner|snack|beverage",
    food_type: "veg|non-veg",
    food_quantity: 1,
    food_image: yourImage,
    price: 199,
    description: "Your food description"
}
```

### Adding New Categories

1. Import the required icon from react-icons
2. Add the category to `src/data/Category.jsx`:

```javascript
{
    id: 7,
    name: "Category Name",
    Image: <YourIcon className="w-[60px] h-[60px] text-green-400" />,
    description: "Category description"
}
```

## 🔧 Customization

### Colors
The project uses a green color scheme. To change colors, modify the Tailwind classes:
- Primary: `text-green-400`, `bg-green-400`
- Hover states: `hover:bg-green-500`
- Background: `bg-slate-200`

### Layout
Responsive breakpoints are handled by Tailwind CSS:
- Mobile: Default styles
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

## 🌟 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real shopping cart functionality
- [ ] Payment integration
- [ ] Order tracking
- [ ] Restaurant management system
- [ ] Real-time order updates
- [ ] User reviews and ratings
- [ ] Delivery tracking
- [ ] Multi-language support
- [ ] Dark mode theme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 Code Style Guidelines

- Use functional components with hooks
- Follow ES6+ syntax
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Use Tailwind CSS for styling
- Ensure accessibility with proper ARIA labels
- Keep components small and focused

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure all food images are placed in `src/assets/` directory
2. **Build errors**: Run `npm install` to ensure all dependencies are installed
3. **Styles not applying**: Check if Tailwind CSS is properly configured
4. **Development server not starting**: Ensure port 5173 is available

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Antima Bhardawaj** - Initial work and development

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the beautiful icon library
- Vite for the fast build tool

---

Made with ❤️ by the Antima Bhardawaj