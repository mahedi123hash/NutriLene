export type ToolCategory =
  | 'calculator'
  | 'text'
  | 'qr'
  | 'image'
  | 'pdf'
  | 'seo'
  | 'developer'
  | 'utility'

export interface Tool {
  id: string
  name: string
  slug: string
  category: ToolCategory
  icon: string
  color: string
  description: string
  longDescription: string
  badge?: 'popular' | 'new' | 'hot'
  keywords: string[]
}

export const TOOLS: Tool[] = [
  // CALCULATORS
  { id: '1', name: 'Age Calculator', slug: 'age-calculator', category: 'calculator', icon: '🎂', color: '#6366F1', description: 'Calculate exact age in years, months and days', longDescription: 'Find out your exact age in years, months, days, hours and minutes. Perfect for birthday planning, legal documents, and more.', badge: 'popular', keywords: ['age', 'birthday', 'born', 'years old'] },
  { id: '2', name: 'BMI Calculator', slug: 'bmi-calculator', category: 'calculator', icon: '⚖️', color: '#8B5CF6', description: 'Check your Body Mass Index instantly', longDescription: 'Calculate your Body Mass Index (BMI) and find out if you are underweight, normal weight, overweight or obese.', badge: 'popular', keywords: ['bmi', 'body mass index', 'weight', 'health'] },
  { id: '3', name: 'Percentage Calculator', slug: 'percentage-calculator', category: 'calculator', icon: '📊', color: '#06B6D4', description: 'Calculate percentages, increases and decreases', longDescription: 'Easily calculate what percent one number is of another, find percentage increases or decreases, and more.', keywords: ['percentage', 'percent', '%', 'ratio'] },
  { id: '4', name: 'EMI Calculator', slug: 'emi-calculator', category: 'calculator', icon: '💳', color: '#10B981', description: 'Calculate loan EMI with amortization schedule', longDescription: 'Calculate Equated Monthly Installment (EMI) for home loans, personal loans, car loans with a full amortization breakdown.', badge: 'popular', keywords: ['emi', 'loan', 'monthly payment', 'installment'] },
  { id: '5', name: 'Loan Calculator', slug: 'loan-calculator', category: 'calculator', icon: '🏦', color: '#F59E0B', description: 'Calculate total loan cost and repayment details', longDescription: 'Find out the total cost of any loan including principal, interest, and total repayment amount over time.', keywords: ['loan', 'borrow', 'interest', 'repayment'] },
  { id: '6', name: 'GST Calculator', slug: 'gst-calculator', category: 'calculator', icon: '🧾', color: '#EF4444', description: 'Calculate GST amount and inclusive/exclusive price', longDescription: 'Quickly calculate GST (Goods and Services Tax) for any amount. Supports both GST-inclusive and GST-exclusive calculations.', keywords: ['gst', 'tax', 'goods services tax', 'vat'] },
  { id: '7', name: 'Profit Calculator', slug: 'profit-calculator', category: 'calculator', icon: '📈', color: '#10B981', description: 'Calculate profit, loss, and margin percentage', longDescription: 'Calculate your profit or loss amount, profit margin percentage, and markup from cost and selling price.', keywords: ['profit', 'loss', 'margin', 'markup', 'revenue'] },
  { id: '8', name: 'Discount Calculator', slug: 'discount-calculator', category: 'calculator', icon: '🏷️', color: '#F59E0B', description: 'Find final price after discount', longDescription: 'Calculate the final price of any item after applying a discount percentage. Also works backwards to find the discount percentage.', keywords: ['discount', 'sale', 'price', 'coupon', 'off'] },
  { id: '9', name: 'Interest Calculator', slug: 'interest-calculator', category: 'calculator', icon: '💰', color: '#6366F1', description: 'Simple and compound interest calculator', longDescription: 'Calculate simple interest or compound interest for any principal amount, rate, and time period.', keywords: ['interest', 'compound', 'simple', 'savings', 'investment'] },
  { id: '10', name: 'Salary Calculator', slug: 'salary-calculator', category: 'calculator', icon: '💼', color: '#8B5CF6', description: 'Calculate net salary after deductions', longDescription: 'Calculate your take-home salary after tax deductions, PF contributions, and other deductions. Supports hourly, daily, monthly rates.', keywords: ['salary', 'wage', 'paycheck', 'income', 'tax'] },
  // TEXT TOOLS
  { id: '11', name: 'Word Counter', slug: 'word-counter', category: 'text', icon: '📝', color: '#06B6D4', description: 'Count words, characters, sentences and paragraphs', longDescription: 'Count words, characters (with and without spaces), sentences, paragraphs, and estimate reading time instantly.', badge: 'popular', keywords: ['word count', 'character count', 'text', 'writing'] },
  { id: '12', name: 'Character Counter', slug: 'character-counter', category: 'text', icon: '🔢', color: '#8B5CF6', description: 'Count characters with and without spaces', longDescription: 'Count exact characters in your text. Useful for Twitter limits, SMS messages, meta descriptions, and more.', keywords: ['character count', 'letter count', 'text length', 'twitter'] },
  { id: '13', name: 'Text Case Converter', slug: 'text-case', category: 'text', icon: '🔤', color: '#10B981', description: 'Convert text to UPPER, lower, Title or camelCase', longDescription: 'Convert your text between uppercase, lowercase, title case, sentence case, camelCase, snake_case and more.', keywords: ['uppercase', 'lowercase', 'title case', 'camelcase', 'text convert'] },
  { id: '14', name: 'Remove Duplicate Lines', slug: 'remove-duplicates', category: 'text', icon: '🧹', color: '#F59E0B', description: 'Remove duplicate lines from any text', longDescription: 'Paste any list or text block and instantly remove all duplicate lines, keeping only unique entries.', keywords: ['duplicate', 'unique', 'lines', 'list', 'remove'] },
  { id: '15', name: 'Text Compare', slug: 'text-compare', category: 'text', icon: '↔️', color: '#EF4444', description: 'Compare two texts and highlight differences', longDescription: 'Side-by-side text comparison tool that highlights additions, deletions, and changes between two versions of text.', keywords: ['compare', 'diff', 'difference', 'text', 'version'] },
  // QR TOOLS
  { id: '16', name: 'QR Generator', slug: 'qr-generator', category: 'qr', icon: '📷', color: '#6366F1', description: 'Generate QR codes for any URL or text', longDescription: 'Create QR codes for URLs, text, email, phone numbers, WiFi credentials, and more. Download in PNG or SVG.', badge: 'hot', keywords: ['qr code', 'qr generator', 'barcode', 'scan'] },
  { id: '17', name: 'QR Scanner', slug: 'qr-scanner', category: 'qr', icon: '🔍', color: '#8B5CF6', description: 'Scan QR codes using your camera or image upload', longDescription: 'Scan QR codes directly from your camera or by uploading an image. Works entirely in your browser — no app needed.', keywords: ['qr scanner', 'scan qr', 'read qr', 'decode qr'] },
  { id: '18', name: 'Barcode Generator', slug: 'barcode-generator', category: 'qr', icon: '▌▌▌', color: '#06B6D4', description: 'Generate barcodes in multiple formats', longDescription: 'Generate Code 128, Code 39, EAN-13, EAN-8, UPC-A and other barcode formats for any text or number.', keywords: ['barcode', 'ean', 'upc', 'code128'] },
  // IMAGE TOOLS
  { id: '19', name: 'Image Compressor', slug: 'image-compressor', category: 'image', icon: '🗜️', color: '#10B981', description: 'Compress images without losing quality', longDescription: 'Compress JPEG, PNG, WebP images to reduce file size significantly while maintaining visual quality. 100% client-side.', badge: 'popular', keywords: ['compress image', 'reduce image size', 'optimize image', 'jpg png'] },
  { id: '20', name: 'Image Resizer', slug: 'image-resizer', category: 'image', icon: '↕️', color: '#F59E0B', description: 'Resize images to any dimension', longDescription: 'Resize images to exact dimensions or by percentage. Maintain aspect ratio or set custom width and height.', keywords: ['resize image', 'image size', 'crop', 'dimension'] },
  { id: '21', name: 'PNG to JPG', slug: 'png-to-jpg', category: 'image', icon: '🖼️', color: '#EF4444', description: 'Convert PNG images to JPG format', longDescription: 'Convert PNG images to JPG/JPEG format instantly in your browser. Adjust quality settings for the perfect balance.', keywords: ['png to jpg', 'convert png', 'jpeg', 'image format'] },
  { id: '22', name: 'JPG to PNG', slug: 'jpg-to-png', category: 'image', icon: '🖼️', color: '#6366F1', description: 'Convert JPG images to PNG format', longDescription: 'Convert JPG/JPEG images to PNG format. PNG supports transparency which makes it ideal for logos and graphics.', keywords: ['jpg to png', 'convert jpg', 'png transparent', 'image format'] },
  { id: '23', name: 'WebP Converter', slug: 'webp-converter', category: 'image', icon: '🔄', color: '#8B5CF6', description: 'Convert images to/from WebP format', longDescription: 'Convert JPG, PNG to WebP for faster web performance. WebP images are 25-35% smaller than comparable JPEG or PNG files.', badge: 'new', keywords: ['webp', 'convert webp', 'web performance', 'image format'] },
  // PDF TOOLS
  { id: '24', name: 'Merge PDF', slug: 'merge-pdf', category: 'pdf', icon: '📎', color: '#06B6D4', description: 'Combine multiple PDF files into one', longDescription: 'Merge multiple PDF files into a single document. Drag and drop to reorder pages before merging.', badge: 'popular', keywords: ['merge pdf', 'combine pdf', 'join pdf', 'pdf merge'] },
  { id: '25', name: 'Split PDF', slug: 'split-pdf', category: 'pdf', icon: '✂️', color: '#10B981', description: 'Split a PDF into separate pages or ranges', longDescription: 'Split a PDF file into individual pages or custom page ranges. Extract only the pages you need.', keywords: ['split pdf', 'extract pages', 'pdf split', 'separate pages'] },
  { id: '26', name: 'Compress PDF', slug: 'compress-pdf', category: 'pdf', icon: '🗜️', color: '#F59E0B', description: 'Reduce PDF file size significantly', longDescription: 'Compress PDF files to reduce their size for email attachments, uploads, and storage while maintaining readability.', keywords: ['compress pdf', 'reduce pdf size', 'pdf compressor', 'optimize pdf'] },
  { id: '27', name: 'PDF to Image', slug: 'pdf-to-image', category: 'pdf', icon: '🖼️', color: '#EF4444', description: 'Convert PDF pages to JPG or PNG images', longDescription: 'Convert each page of a PDF document into a high-quality JPG or PNG image file. Choose resolution and format.', keywords: ['pdf to image', 'pdf to jpg', 'pdf to png', 'convert pdf'] },
  { id: '28', name: 'Image to PDF', slug: 'image-to-pdf', category: 'pdf', icon: '📄', color: '#6366F1', description: 'Convert images to a PDF document', longDescription: 'Convert one or multiple images (JPG, PNG, WebP) into a PDF document. Set page size and orientation.', keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'create pdf'] },
  // SEO TOOLS
  { id: '29', name: 'Meta Tag Generator', slug: 'meta-tag-generator', category: 'seo', icon: '🏷️', color: '#8B5CF6', description: 'Generate SEO meta tags for your website', longDescription: 'Generate complete HTML meta tags including title, description, keywords, Open Graph and Twitter Card tags.', badge: 'popular', keywords: ['meta tags', 'seo', 'open graph', 'twitter card', 'html'] },
  { id: '30', name: 'Sitemap Generator', slug: 'sitemap-generator', category: 'seo', icon: '🗺️', color: '#06B6D4', description: 'Generate XML sitemaps for any website', longDescription: 'Create XML sitemaps for search engines. Enter your URLs manually or crawl a website to auto-generate the sitemap.', keywords: ['sitemap', 'xml sitemap', 'seo', 'google sitemap'] },
  { id: '31', name: 'Robots.txt Generator', slug: 'robots-txt', category: 'seo', icon: '🤖', color: '#10B981', description: 'Create robots.txt file for your site', longDescription: 'Generate a proper robots.txt file to control how search engine bots crawl and index your website.', keywords: ['robots.txt', 'robots', 'crawl', 'seo', 'googlebot'] },
  { id: '32', name: 'Keyword Density Checker', slug: 'keyword-density', category: 'seo', icon: '🔑', color: '#F59E0B', description: 'Analyze keyword density in your content', longDescription: 'Analyze the keyword density of any text. Find the most used words and phrases to optimize your content for SEO.', keywords: ['keyword density', 'seo analysis', 'keyword', 'content optimization'] },
  { id: '33', name: 'URL Encoder / Decoder', slug: 'url-encoder', category: 'seo', icon: '🔗', color: '#EF4444', description: 'Encode or decode URLs and URI components', longDescription: 'Encode special characters in URLs for safe transmission, or decode encoded URLs back to human-readable format.', keywords: ['url encode', 'url decode', 'uri', 'percent encode'] },
  // DEVELOPER TOOLS
  { id: '34', name: 'JSON Formatter', slug: 'json-formatter', category: 'developer', icon: '{ }', color: '#6366F1', description: 'Format, validate and beautify JSON data', longDescription: 'Paste messy JSON and instantly format it with proper indentation. Also validates syntax and highlights errors.', badge: 'hot', keywords: ['json', 'format json', 'beautify json', 'json validator'] },
  { id: '35', name: 'JSON Validator', slug: 'json-validator', category: 'developer', icon: '✅', color: '#8B5CF6', description: 'Validate JSON syntax instantly', longDescription: 'Quickly check if your JSON is valid. Get detailed error messages with line numbers when the JSON is invalid.', keywords: ['json valid', 'validate json', 'json check', 'json lint'] },
  { id: '36', name: 'Base64 Encoder', slug: 'base64-encoder', category: 'developer', icon: '🔐', color: '#06B6D4', description: 'Encode text or files to Base64 format', longDescription: 'Encode any text string or file to Base64 format. Useful for embedding images in CSS/HTML or encoding API credentials.', badge: 'popular', keywords: ['base64 encode', 'base64', 'encode', 'binary'] },
  { id: '37', name: 'Base64 Decoder', slug: 'base64-decoder', category: 'developer', icon: '🔓', color: '#10B981', description: 'Decode Base64 encoded text or files', longDescription: 'Decode Base64 encoded strings back to plain text or binary data. Supports standard and URL-safe Base64.', keywords: ['base64 decode', 'decode base64', 'base64'] },
  { id: '38', name: 'HTML Minifier', slug: 'html-minifier', category: 'developer', icon: '🗜️', color: '#F59E0B', description: 'Minify HTML to reduce file size', longDescription: 'Remove unnecessary whitespace, comments, and redundant attributes from HTML to reduce file size and improve page load speed.', keywords: ['html minify', 'minify html', 'compress html', 'html optimizer'] },
  { id: '39', name: 'CSS Minifier', slug: 'css-minifier', category: 'developer', icon: '🎨', color: '#EF4444', description: 'Minify CSS stylesheets for production', longDescription: 'Remove whitespace, comments, and unnecessary characters from CSS to reduce file size and improve website performance.', keywords: ['css minify', 'minify css', 'compress css', 'css optimizer'] },
  { id: '40', name: 'JavaScript Minifier', slug: 'js-minifier', category: 'developer', icon: '⚡', color: '#6366F1', description: 'Minify JavaScript for faster page loads', longDescription: 'Compress JavaScript code by removing whitespace, comments, and shortening variable names to reduce bundle size.', keywords: ['js minify', 'minify javascript', 'compress js', 'javascript optimizer'] },
  // UTILITY TOOLS
  { id: '41', name: 'Password Generator', slug: 'password-generator', category: 'utility', icon: '🔑', color: '#8B5CF6', description: 'Generate strong random passwords', longDescription: 'Generate cryptographically strong passwords with custom length, uppercase, lowercase, numbers and symbols.', badge: 'popular', keywords: ['password', 'random password', 'strong password', 'security'] },
  { id: '42', name: 'UUID Generator', slug: 'uuid-generator', category: 'utility', icon: '🆔', color: '#06B6D4', description: 'Generate random UUID/GUID values', longDescription: 'Generate RFC-compliant UUID v4 (random) or v1 (timestamp-based) unique identifiers for use in databases and APIs.', badge: 'new', keywords: ['uuid', 'guid', 'unique id', 'random id'] },
  { id: '43', name: 'Random Number Generator', slug: 'random-number', category: 'utility', icon: '🎲', color: '#10B981', description: 'Generate random numbers in any range', longDescription: 'Generate one or multiple random numbers between any min and max value. Also supports unique random number sets.', keywords: ['random number', 'random', 'dice', 'lottery', 'number generator'] },
  { id: '44', name: 'Unit Converter', slug: 'unit-converter', category: 'utility', icon: '📐', color: '#F59E0B', description: 'Convert between length, weight, temperature units', longDescription: 'Convert between metric and imperial units for length, weight, area, volume, temperature, speed and more.', keywords: ['unit convert', 'length', 'weight', 'temperature', 'metric imperial'] },
  { id: '45', name: 'Currency Converter', slug: 'currency-converter', category: 'utility', icon: '💱', color: '#EF4444', description: 'Convert between world currencies', longDescription: 'Convert between 150+ world currencies using live exchange rates. Supports USD, EUR, GBP, BDT, INR and more.', keywords: ['currency', 'exchange rate', 'forex', 'money convert', 'usd bdt'] },
  { id: '46', name: 'Time Zone Converter', slug: 'time-converter', category: 'utility', icon: '⏰', color: '#6366F1', description: 'Convert between time zones worldwide', longDescription: 'Convert times between any two time zones around the world. View current times in multiple cities simultaneously.', keywords: ['time zone', 'timezone', 'utc', 'time convert', 'world clock'] },
  { id: '47', name: 'Binary Converter', slug: 'binary-converter', category: 'utility', icon: '01', color: '#8B5CF6', description: 'Convert between binary, decimal, hex, octal', longDescription: 'Convert numbers between binary (base-2), decimal (base-10), hexadecimal (base-16) and octal (base-8) instantly.', keywords: ['binary', 'hex', 'decimal', 'octal', 'number base', 'convert binary'] },
  { id: '48', name: 'Color Picker', slug: 'color-picker', category: 'utility', icon: '🎨', color: '#06B6D4', description: 'Pick colors and get HEX, RGB, HSL values', longDescription: 'Visual color picker that gives you the HEX, RGB, HSL and CMYK values of any color. Includes a color palette generator.', badge: 'popular', keywords: ['color picker', 'hex color', 'rgb', 'hsl', 'color code'] },
  { id: '49', name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum', category: 'utility', icon: '📋', color: '#10B981', description: 'Generate placeholder Lorem Ipsum text', longDescription: 'Generate Lorem Ipsum placeholder text by paragraphs, sentences or words. Used by designers and developers worldwide.', keywords: ['lorem ipsum', 'placeholder text', 'dummy text', 'filler text'] },
  { id: '50', name: 'IP Lookup', slug: 'ip-lookup', category: 'utility', icon: '🌐', color: '#F59E0B', description: 'Find location and info for any IP address', longDescription: 'Look up geolocation, ISP, country, city, timezone and other information for any IPv4 or IPv6 address.', badge: 'new', keywords: ['ip lookup', 'ip address', 'geolocation', 'my ip', 'find ip'] },
]

export const CATEGORIES = [
  { slug: 'calculator', name: 'Calculators', icon: '🧮', color: '#6366F1' },
  { slug: 'text', name: 'Text Tools', icon: '📝', color: '#8B5CF6' },
  { slug: 'qr', name: 'QR Tools', icon: '📷', color: '#06B6D4' },
  { slug: 'image', name: 'Image Tools', icon: '🖼️', color: '#10B981' },
  { slug: 'pdf', name: 'PDF Tools', icon: '📄', color: '#F59E0B' },
  { slug: 'seo', name: 'SEO Tools', icon: '🔍', color: '#EF4444' },
  { slug: 'developer', name: 'Developer Tools', icon: '💻', color: '#6366F1' },
  { slug: 'utility', name: 'Utility Tools', icon: '⚙️', color: '#8B5CF6' },
]

export const BLOG_POSTS = [
  { slug: 'how-to-calculate-age', title: 'How to Calculate Age Accurately', category: 'Calculator', emoji: '🎂', date: 'December 10, 2024', readTime: '5 min', excerpt: 'Learn how to accurately calculate age in years, months, and days using simple math formulas.' },
  { slug: 'bmi-formula-guide', title: 'Complete BMI Formula Guide', category: 'Health', emoji: '⚖️', date: 'December 8, 2024', readTime: '6 min', excerpt: 'Everything you need to know about Body Mass Index, how to calculate it, and what the numbers mean.' },
  { slug: 'qr-code-explained', title: 'What Is a QR Code and How Does It Work', category: 'Technology', emoji: '📷', date: 'December 5, 2024', readTime: '4 min', excerpt: 'A complete guide to QR codes — their history, how they store data, and how to create and scan them.' },
  { slug: 'best-pdf-compression', title: 'Best PDF Compression Methods in 2025', category: 'PDF Tools', emoji: '📄', date: 'December 3, 2024', readTime: '7 min', excerpt: 'Compare different PDF compression techniques and tools to reduce file size without losing quality.' },
  { slug: 'compound-interest-guide', title: 'Understanding Compound Interest', category: 'Finance', emoji: '💰', date: 'November 30, 2024', readTime: '5 min', excerpt: 'Discover how compound interest works and why it\'s called the eighth wonder of the world.' },
  { slug: 'seo-meta-tags-guide', title: 'SEO Meta Tags: Complete Guide for 2025', category: 'SEO', emoji: '🔍', date: 'November 28, 2024', readTime: '8 min', excerpt: 'Learn which meta tags actually matter for SEO in 2025 and how to write them for maximum impact.' },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find(t => t.slug === slug)
}

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter(t => t.category === category)
}

export function getRelatedTools(tool: Tool, limit = 5): Tool[] {
  return TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, limit)
}
