# YTO Corporation Website - Next.js Version

A clean, modern Next.js conversion of the YTO Corporation website with the original design preserved.

## 🚀 What Was Done

### Removed:
- ❌ All external chat scripts (etwus5.com dependencies)
- ❌ External video player dependencies (etwvideous12.com)
- ❌ External tracking and analytics scripts
- ❌ Unnecessary third-party integrations
- ❌ Old jQuery dependencies
- ❌ Bootstrap (replaced with custom CSS)

### Added:
- ✅ Modern Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Swiper for image carousel (modern, performant slider)
- ✅ Next.js Image optimization
- ✅ Responsive design maintained
- ✅ Clean, maintainable code structure
- ✅ Fast loading times
- ✅ SEO optimized

## 📦 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Swiper** - Modern touch slider
- **Custom CSS** - Original design preserved
- **Next.js Image** - Optimized image loading

## 🎨 Design

The design has been kept **exactly the same** as the original website:
- Same colors (#0075c2 blue, #d21616 red)
- Same fonts (EncodeSans, Montserrat, Anton)
- Same layout and structure
- Same responsive breakpoints
- Same hover effects and animations

## 📁 Project Structure

\`\`\`
yto-nextjs/
├── app/
│   ├── globals.css      # Main styles (converted from original CSS)
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage component
├── public/
│   ├── images/          # All website images
│   ├── fonts/           # Custom fonts
│   └── flags/           # Country flag images
└── package.json
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
# Create optimized production build
npm run build

# Start production server
npm start
\`\`\`

## 🔧 Key Features

1. **Performance Optimized**
   - Next.js automatic code splitting
   - Image optimization with next/image
   - Fast page loads

2. **Clean Codebase**
   - No external dependencies for chat/tracking
   - Modern React components
   - TypeScript for type safety

3. **Responsive Design**
   - Mobile-first approach
   - Tablet and desktop optimized
   - Same breakpoints as original

4. **SEO Ready**
   - Proper meta tags
   - Semantic HTML
   - Fast loading times

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 991px
- Desktop: > 991px

## 🎯 Main Sections

- **Hero Slider** - Swiper-powered image carousel
- **Products** - Tractors, Harvesting Equipment, Agricultural Implements, Diesel Engine
- **Services** - Capabilities and Support sections
- **About** - Company information and manufacturing details
- **Footer** - Quick links and contact information

## 🔄 What Changed from Original

### Structure
- Converted from static HTML to React components
- Single-page application (can be extended to multi-page)
- Modern JavaScript (ES6+) with TypeScript

### Dependencies
- Removed jQuery → Native React
- Removed old Swiper → Modern Swiper React
- Removed Bootstrap → Custom CSS
- Removed external chat → Can add new solution if needed

### Performance
- Image optimization with Next.js
- Automatic code splitting
- Server-side rendering ready
- Better caching strategies

## 🛠️ Customization

### Colors
Edit `app/globals.css` to change theme colors:
- Primary Blue: `#0075c2`
- Primary Red: `#d21616`

### Content
Edit `app/page.tsx` to modify page content and structure.

### Images
Place new images in `public/images/` directory.

## 📝 Notes

- All external scripts removed for clean, fast loading
- Original design and aesthetics preserved
- Modern, maintainable codebase
- Easy to extend with new features
- Production-ready

## 🆘 Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Swiper Documentation](https://swiperjs.com/react)

## 📄 License

This is a converted version of the YTO Corporation website for demonstration purposes.
